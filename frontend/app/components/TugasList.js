"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addTugas, deleteTugas } from "@/lib/data";

export default function TugasList({ initialTugas }) {
  const router = useRouter();
  const [tugas, setTugas] = useState(initialTugas);
  const [form, setForm] = useState({
    judul: "",
    deskripsi: "",
    deadline: ""
  });
  const [isAdmin, setIsAdmin] = useState(false);

  // Cek role saat mount
  useEffect(() => {
    const role = localStorage.getItem('role');
    setIsAdmin(role === 'admin'); // true jika admin, false jika bukan
  }, []);

  // Tambah Tugas
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!isAdmin) return; // non-admin tidak bisa menambah

    const newTugas = await addTugas({
      judul: form.judul,
      deskripsi: form.deskripsi,
      deadline: form.deadline,
      status: "Belum Selesai"
    });

    setTugas([...tugas, { id: newTugas.id, ...form, status: "Belum Selesai" }]);
    setForm({ judul: "", deskripsi: "", deadline: "" });
  };

  // Hapus Tugas
  const handleDelete = async (id) => {
    if (!isAdmin) return; // non-admin tidak bisa hapus

    await deleteTugas(id);
    setTugas(tugas.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* FORM TAMBAH TUGAS (hanya admin) */}
      {isAdmin && (
        <form
          onSubmit={handleAdd}
          className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow space-y-3"
        >
          <h2 className="font-bold text-lg">Tambah Tugas</h2>

          <input
            type="text"
            placeholder="Judul"
            value={form.judul}
            onChange={(e) => setForm({ ...form, judul: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            placeholder="Deskripsi"
            value={form.deskripsi}
            onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="date"
            value={form.deadline}
            onChange={(e) => setForm({ ...form, deadline: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer"
          >
            Tambah
          </button>
        </form>
      )}

      {/* DAFTAR TUGAS */}
      <ul className="space-y-3">
        {tugas.map((t) => (
          <li
            key={t.id}
            className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{t.judul}</p>
              <p className="text-sm text-gray-600">{t.deskripsi}</p>
              <p className="text-sm text-gray-500">Deadline: {t.deadline}</p>
            </div>

            {/* Tombol hapus hanya untuk admin */}
            {isAdmin && (
              <button
                onClick={() => handleDelete(t.id)}
                className="text-red-600 hover:underline cursor-pointer"
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
