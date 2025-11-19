"use client";

import { useState, useEffect } from "react";
import { addMateri, deleteMateri, updateMateri } from "@/lib/data";
import { useRouter } from "next/navigation";

export default function MateriList({ initialMateri }) {
  const router = useRouter();
  const [materi, setMateri] = useState(initialMateri || []);
  const [form, setForm] = useState({
    judul: "",
    deskripsi: "",
    link: "",
    tanggal: "",
  });

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

const handleAdd = async (e) => {
  e.preventDefault();
  if (!isAdmin) return;

  const payload = {
    judul: form.judul,
    isi: form.deskripsi,
    file: form.link,
    tanggal: form.tanggal,
  };

  const newMateri = await addMateri(payload);
  
  // ✅ Gunakan struktur yang sama dengan database
  setMateri([...materi, { 
    id: newMateri.id, 
    judul: payload.judul,
    isi: payload.isi,      // ← gunakan "isi" bukan "deskripsi"
    file: payload.file,
    tanggal: payload.tanggal
  }]);

  setForm({ judul: "", deskripsi: "", link: "", tanggal: "" });
};

  const handleDelete = async (id) => {
    if (!isAdmin) return;
    await deleteMateri(id);
    setMateri(materi.filter((m) => m.id !== id));
  };

  const handleClickCard = (id) => {
    router.push(`/materi/${id}`);
  };

  return (
    <div className="space-y-6 ">

      {/* === FORM TAMBAH MATERI === */}
      {isAdmin && (
        <form
          onSubmit={handleAdd}
          className="p-4 text-gray-900 bg-gray-100 rounded-lg shadow space-y-3"
        >
          <h2 className="font-bold text-lg">Tambah Materi</h2>

          {/* JUDUL */}
          <input
            type="text"
            placeholder="Judul"
            value={form.judul}
            onChange={(e) => setForm({ ...form, judul: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          {/* DESKRIPSI */}
          <textarea
            placeholder="Deskripsi materi"
            value={form.deskripsi}
            onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          {/* LINK FILE */}
          <input
            type="text"
            placeholder="Link file (Google Drive, PDF, dll)"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          {/* PREVIEW FILE */}
          {form.link && (
            <div className="mt-2 p-3 border rounded bg-white">
              <p className="font-semibold text-gray-700 mb-1">Preview File:</p>

              {/* If PDF */}
              {form.link.endsWith(".pdf") ? (
                <iframe
                  src={form.link}
                  className="w-full h-72 border"
                ></iframe>
              ) : (
                <a
                  href={form.link}
                  target="_blank"
                  className="text-blue-600 underline"
                  rel="noopener noreferrer"
                >
                  Buka File
                </a>
              )}
            </div>
          )}

          {/* TANGGAL */}
          <input
            type="date"
            value={form.tanggal}
            onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
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

      {/* === LIST MATERI === */}
      <ul className="space-y-3">
        {materi.length === 0 ? (
          <p className="text-gray-500">Belum ada materi.</p>
        ) : (
          materi.map((m) => (
            <li
              key={m.id}
              className="p-4 text-gray-900 bg-gray-100 rounded-lg shadow cursor-pointer hover:bg-gray-200"
              onClick={() => handleClickCard(m.id)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{m.judul}</p>
                {isAdmin && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(m.id);
                    }}
                    className="text-red-600 hover:underline cursor-pointer"
                  >
                    Hapus
                  </button>
                )}
              </div>

              {/* Deskripsi kecil */}
              <p className="text-sm text-gray-600">{m.isi}</p>

              <p className="text-sm text-gray-500 mt-1">Tanggal: {m.tanggal}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
