import React from 'react';
import { mataKuliahList } from '@/lib/mataKuliahData';

export default function MataKuliahList() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl text-gray-900 font-bold mb-6">Mata Kuliah Semester Ini</h1>

      {/* Desktop View - Table */}
      <div className="hidden md:block bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-3 border text-gray-900">No.</th>
              <th className="p-3 border text-gray-900">Kode MK</th>
              <th className="p-3 border text-gray-900">Nama MK</th>
              <th className="p-3 border text-gray-900">Kelas</th>
              <th className="p-3 border text-gray-900">Jenis</th>
              <th className="p-3 border text-gray-900">SKS</th>
            </tr>
          </thead>
          <tbody>
            {mataKuliahList.map((m, index) => (
              <tr key={m.id} className="even:bg-gray-50">
                <td className="p-3 border text-gray-900">{index + 1}</td>
                <td className="p-3 border text-gray-900">{m.kode}</td>
                <td className="p-3 border text-gray-900">{m.nama}</td>
                <td className="p-3 border text-gray-900">{m.kelas}</td>
                <td className="p-3 border text-gray-900">{m.jenis}</td>
                <td className="p-3 border text-gray-900">{m.sks}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-200 font-semibold">
              <td className="p-3 border text-right text-gray-900" colSpan={5}>TOTAL SKS</td>
              <td className="p-3 border text-gray-900">
                {mataKuliahList.reduce((sum, m) => sum + m.sks, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Mobile View - Cards */}
      <div className="md:hidden space-y-4">
        {mataKuliahList.map((m, index) => (
          <div key={m.id} className="bg-white shadow rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">#{index + 1}</div>
                <h3 className="font-semibold text-gray-900 text-lg">{m.nama}</h3>
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                {m.sks} SKS
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-500">Kode:</span>
                <span className="ml-2 text-gray-900 font-medium">{m.kode}</span>
              </div>
              <div>
                <span className="text-gray-500">Kelas:</span>
                <span className="ml-2 text-gray-900 font-medium">{m.kelas}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-500">Jenis:</span>
                <span className="ml-2 text-gray-900 font-medium">{m.jenis}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* Total SKS - Mobile */}
        <div className="bg-gray-200 rounded-lg p-4 font-semibold">
          <div className="flex justify-between items-center">
            <span className="text-gray-900">TOTAL SKS</span>
            <span className="text-gray-900 text-xl">
              {mataKuliahList.reduce((sum, m) => sum + m.sks, 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}