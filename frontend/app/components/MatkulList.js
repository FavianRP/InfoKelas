import React from 'react';
import { mataKuliahList } from '@/lib/mataKuliahData';

export default function MataKuliahList() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl text-black font-bold mb-6">Mata Kuliah Semester Ini</h1>

      <table className="w-full border-collapse bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-3 border text-black">No.</th>
            <th className="p-3 border text-black">Kode MK</th>
            <th className="p-3 border text-black">Nama MK</th>
            <th className="p-3 border text-black">Kelas</th>
            <th className="p-3 border text-black">Jenis</th>
            <th className="p-3 border text-black">SKS</th>
          </tr>
        </thead>
        <tbody>
          {mataKuliahList.map((m, index) => (
            <tr key={m.id} className="even:bg-gray-50">
              <td className="p-3 border text-black">{index + 1}</td>
              <td className="p-3 border text-black">{m.kode}</td>
              <td className="p-3 border text-black">{m.nama}</td>
              <td className="p-3 border text-black">{m.kelas}</td>
              <td className="p-3 border text-black">{m.jenis}</td>
              <td className="p-3 border text-black">{m.sks}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-200 font-semibold">
            <td className="p-3 border text-right text-black" colSpan={5}>TOTAL SKS</td>
            <td className="p-3 border text-black">
              {mataKuliahList.reduce((sum, m) => sum + m.sks, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
