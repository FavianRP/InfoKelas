"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addTugas, deleteTugas } from "@/lib/data";

export default function TugasList({ initialTugas }) {
  const router = useRouter();
  const [tugas, setTugas] = useState(initialTugas || []);
  const [form, setForm] = useState({ judul: "", deskripsi: "", deadline: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!isAdmin) return;

    setLoading(true);
    try {
      const newTugas = await addTugas({ ...form, status: "Belum Selesai" });
      setTugas([...tugas, newTugas]);
      setForm({ judul: "", deskripsi: "", deadline: "" });
    } catch (err) {
      console.error(err);
      alert("Gagal menambahkan tugas");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!isAdmin) return;
    if (!confirm("Apakah yakin ingin menghapus tugas ini?")) return;

    setLoading(true);
    try {
      await deleteTugas(id);
      setTugas(tugas.filter((t) => t.id !== id));
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus tugas");
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {isAdmin && (
        <form onSubmit={handleAdd} className="p-4 bg-gray-100 rounded-lg shadow space-y-3">
          <h2 className="font-bold text-lg text-gray-800">Tambah Tugas</h2>
          <input
            type="text"
            placeholder="Judul"
            value={form.judul}
            onChange={(e) => setForm({ ...form, judul: e.target.value })}
            className="w-full border p-2 rounded text-gray-800"
            required
          />
          <textarea
            placeholder="Deskripsi"
            value={form.deskripsi}
            onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
            className="w-full border p-2 rounded text-gray-800"
            required
          />
          <input
            type="date"
            value={form.deadline}
            onChange={(e) => setForm({ ...form, deadline: e.target.value })}
            className="w-full border p-2 rounded text-gray-800"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            {loading ? "Menyimpan..." : "Tambah"}
          </button>
        </form>
      )}

      <ul className="space-y-3">
        {tugas.map((t) => (
          <li key={t.id} className="p-4 bg-gray-100 rounded-lg shadow flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{t.judul}</p>
              <p className="text-sm text-gray-600">{t.deskripsi}</p>
              <p className="text-sm text-gray-500">Deadline: {t.deadline}</p>
            </div>
            {isAdmin && (
              <button
                onClick={() => handleDelete(t.id)}
                className="text-red-500 hover:text-red-700 font-bold cursor-pointer"
              >
                Hapus
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
