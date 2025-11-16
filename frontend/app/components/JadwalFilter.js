'use client';

import { useState, useEffect } from 'react';
import { getAllJadwal, deleteJadwal, addJadwal } from '@/lib/data';

const DAYS = ["Semua Hari", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

export default function JadwalFilter() {
  const [jadwalData, setJadwalData] = useState([]);
  const [selectedDay, setSelectedDay] = useState('Semua Hari');
  const [loading, setLoading] = useState(true);
  
  // Form input tambah jadwal
  const [newJadwal, setNewJadwal] = useState({
    mata_kuliah: '',
    hari: 'Senin',
    waktu_mulai: '',
    waktu_selesai: '',
    ruangan: '',
    dosen: ''
  });

  // Fetch data dari backend saat component mount
  const fetchJadwal = async () => {
    setLoading(true);
    const data = await getAllJadwal();
    setJadwalData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJadwal();
  }, []);

  // Filter berdasarkan hari
  const filteredJadwal = jadwalData.filter(item =>
    selectedDay === 'Semua Hari' ? true : item.hari === selectedDay
  );

  // Hapus jadwal
  const handleDelete = async (id) => {
    await deleteJadwal(id);
    fetchJadwal(); // refresh data
  };

  // Tambah jadwal
  const handleAdd = async (e) => {
    e.preventDefault();
    await addJadwal(newJadwal);
    setNewJadwal({
      mata_kuliah: '',
      hari: 'Senin',
      waktu_mulai: '',
      waktu_selesai: '',
      ruangan: '',
      dosen: ''
    });
    fetchJadwal(); // refresh data
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">📅 Jadwal Kuliah</h2>

      {/* Filter Hari */}
      <div className="flex flex-wrap gap-2 mb-6">
        {DAYS.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition duration-150 ease-in-out ${
              selectedDay === day
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Form Tambah Jadwal */}
      <form className="mb-6 space-y-2" onSubmit={handleAdd}>
        <div className="bg-gray-100 text-gray-900 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Mata Kuliah"
            value={newJadwal.mata_kuliah}
            onChange={e => setNewJadwal({ ...newJadwal, mata_kuliah: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <select
            value={newJadwal.hari}
            onChange={e => setNewJadwal({ ...newJadwal, hari: e.target.value })}
            className="border p-2 rounded"
          >
            {DAYS.slice(1).map(day => <option key={day} value={day}>{day}</option>)}
          </select>
          <input
            type="time"
            placeholder="Waktu Mulai"
            value={newJadwal.waktu_mulai}
            onChange={e => setNewJadwal({ ...newJadwal, waktu_mulai: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="time"
            placeholder="Waktu Selesai"
            value={newJadwal.waktu_selesai}
            onChange={e => setNewJadwal({ ...newJadwal, waktu_selesai: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Ruangan"
            value={newJadwal.ruangan}
            onChange={e => setNewJadwal({ ...newJadwal, ruangan: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Dosen"
            value={newJadwal.dosen}
            onChange={e => setNewJadwal({ ...newJadwal, dosen: e.target.value })}
            className="border p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer">
          Tambah Jadwal
        </button>
      </form>

      {/* Daftar Jadwal */}
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : filteredJadwal.length > 0 ? (
        <div className="space-y-4">
          {filteredJadwal.map(item => (
            <div key={item.id} className="border-l-4 border-indigo-400 p-4 bg-gray-50 hover:bg-gray-100 transition duration-150 rounded-md flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.mata_kuliah}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>{item.hari}</strong> | {item.waktu_mulai} - {item.waktu_selesai} WIB | Ruangan: {item.ruangan} | Dosen: {item.dosen}
                </p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-700 font-bold cursor-pointer"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-10 text-gray-500">
          Tidak ada jadwal pada hari <strong>{selectedDay}</strong>.
        </p>
      )}
    </div>
  );
}
