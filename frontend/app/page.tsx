import { getAllJadwal, getAllTugas } from '@/lib/data';
import { Calendar, CheckSquare, BookOpen, Clock } from 'lucide-react';
import Marquee from '@/app/components/Marquee';

// Halaman ini adalah Server Component

// Fungsi utilitas untuk menghitung statistik
const calculateStats = (semuaTugas, semuaJadwal) => {
  const totalTugas = semuaTugas.length;
  const tugasBelumSelesai = semuaTugas.filter(t => t.status !== 'Selesai').length;
  const totalMataKuliah = new Set(semuaJadwal.map(j => j.mata_kuliah)).size;
  
  // Hitung kelas hari ini
  const today = new Date();
  const hariIni = today.toLocaleDateString('id-ID', { weekday: 'long' }).split(',')[0];
  const kelasHariIni = semuaJadwal.filter(item => item.hari === hariIni).length;

  return {
    tugasBelumSelesai,
    totalTugas,
    totalMataKuliah,
    kelasHariIni
  };
};

// Komponen Card Ringkasan yang didasarkan pada tampilan gambar
const StatCard = ({ title, value, link, colorClass, icon: Icon }) => (
  <div className={`flex flex-col rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition duration-300 ${colorClass}`}>
    <div className="flex-1 p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <span className="text-5xl font-extrabold">{value}</span>
        <Icon className="w-10 h-10 opacity-70" />
      </div>
      <p className="text-lg font-semibold">{title}</p>
    </div>
    <div className="bg-black bg-opacity-10 p-2 text-center text-white text-sm font-medium hover:bg-opacity-20 transition duration-150">
      <a href={link} className="flex items-center justify-center">
        More info <span className="ml-1 text-xs">→</span>
      </a>
    </div>
  </div>
);


export default async function DashboardPage() {
  const semuaJadwal = await getAllJadwal();
  const semuaTugas = await getAllTugas();
  const stats = calculateStats(semuaTugas, semuaJadwal);
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-2 mb-6">Dashboard</h1>

      {/* Teks berjalan */}
      <Marquee text="⚠️ Website ini masih dalam pengembangan ⚠️" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <StatCard
          title="Tugas Belum Selesai"
          value={stats.tugasBelumSelesai}
          link="/tugas"
          colorClass="bg-red-500"
          icon={CheckSquare}
        />

        <StatCard
          title="Total Tugas"
          value={stats.totalTugas}
          link="/tugas"
          colorClass="bg-yellow-500"
          icon={CheckSquare}
        />

        <StatCard
          title="Kelas Hari Ini"
          value={stats.kelasHariIni}
          link="/jadwal"
          colorClass="bg-green-500"
          icon={Clock}
        />
        
        <StatCard
          title="Total Mata Kuliah"
          value={stats.totalMataKuliah}
          link="/jadwal"
          colorClass="bg-blue-500"
          icon={BookOpen}
        />

      </div>

      <section className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-700">Detail Cepat</h2>
  <p className="text-gray-500">Gunakan sidebar untuk navigasi lengkap.</p>

  {/* Announcement Card */}
  <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm">
  <div className="flex items-start">
    <svg
      className="h-6 w-6 text-red-500 mt-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z"
      />
    </svg>
    <div className="ml-3">
      <h3 className="text-lg font-semibold text-red-700">Peringatan Penting</h3>
      <p className="text-red-800 text-sm mt-1">
        Terdapat gangguan pada sistem website. Harap mengunjungi di lain waktu!
      </p>
    </div>
  </div>
</div>


  <div className="mt-4 bg-gray-100 border-l-4 border-gray-400 p-4 rounded-md shadow-sm">
  <div className="flex items-start">
    <svg
      className="h-6 w-6 text-gray-500 mt-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z"
      />
    </svg>
    <div className="ml-3">
      <h3 className="text-lg font-semibold text-gray-700">Pengumuman</h3>
      <p className="text-gray-600 text-sm mt-1">
        Halaman dashboard telah diperbarui untuk pengalaman lebih baik.
      </p>
    </div>
  </div>
</div>

  <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm">
    <div className="flex items-start">
      <svg
        className="h-6 w-6 text-yellow-500 mt-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z"
        />
      </svg>
      <div className="ml-3">
        <h3 className="text-lg font-semibold text-yellow-700">Pengumuman Penting</h3>
        <p className="text-yellow-800 text-sm mt-1">
          Website akan mengalami pemeliharaan pada setiap hari Minggu pukul 00.00 – 03.00 WIB.
          Pastikan untuk tidak mengunjungi website ini selama waktu tersebut.
        </p>
      </div>
    </div>
  </div>

  <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded-md shadow-sm">
  <div className="flex items-start">
    <svg
      className="h-6 w-6 text-green-500 mt-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z"
      />
    </svg>
    <div className="ml-3">
      <h3 className="text-lg font-semibold text-green-700">Informasi</h3>
      <p className="text-green-800 text-sm mt-1">
        Fitur baru telah tersedia! Silakan cek di menu utama.
      </p>
    </div>
  </div>
</div>

</section>
  <footer className="mt-10 py-4 text-center text-gray-500 text-sm">
  Created with <span className="text-red-500">❤️</span> by 
  <span className="font-semibold text-gray-700"> Yintsu & dre4mer</span>
</footer>

    </div>
  );
}
