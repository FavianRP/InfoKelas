import { getAllJadwal, getAllTugas } from '@/lib/data';
import { mataKuliahList } from '@/lib/mataKuliahData';
import { Calendar, CheckSquare, BookOpen, Clock, LucideIcon  } from 'lucide-react';
import Marquee from '@/app/components/Marquee';

// ===============================
// Format tanggal
// ===============================
const formatTanggalCantik = (tanggal: string | number | Date) => {
  const date = new Date(tanggal);

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric', 
    month: 'short',   
    year: 'numeric'   
  };

  return date.toLocaleDateString('id-ID', options).replace('.', '');
};


// ===============================
// Cari Deadline Terdekat
// ===============================
type Tugas = {
  judul: string;
  deadline: string;
  status: string;
};

const getDeadlineTerdekat = (tugas: Tugas[]) => {
  const belumSelesai = tugas.filter((t) => t.status !== 'Selesai');
  if (!belumSelesai.length) return null;

  belumSelesai.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
  return belumSelesai[0];
};

// ===============================
// Countdown
// ===============================
const getCountdownText = (deadline: string | Date | undefined): string => {
  if (!deadline) return "";

  const now = new Date();
  const end = new Date(deadline);
  const diffDays = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "(Lewat deadline!)";
  if (diffDays === 0) return "(Hari ini!)";
  if (diffDays === 1) return "(1 hari lagi)";
  return `(${diffDays} hari lagi)`;
};

// ===============================
// Warna Card Deadline
// ===============================
const getDeadlineColor = (deadline: string | Date | undefined): string => {
  if (!deadline) return "bg-gray-500";

  const now = new Date();
  const diffDays = Math.ceil((new Date(deadline).getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays <= 3) return "bg-red-600";
  if (diffDays <= 7) return "bg-yellow-500";
  return "bg-green-600";
};

// ===============================
// Hitung Statistik
// ===============================
type Jadwal = {
  mataKuliah: string;
  hari: string;
  jam: string;
};

type MataKuliah = {
  nama: string;
};

type Stats = {
  totalTugas: number;
  totalMataKuliah: number;
  kelasHariIni: number;
  deadlineTerdekat: Tugas | null;
};

const calculateStats = (
  semuaTugas: Tugas[],
  semuaJadwal: Jadwal[],
  semuaMataKuliah: MataKuliah[]
): Stats => {
  const totalTugas = semuaTugas.length;
  const totalMataKuliah = semuaMataKuliah.length;

  const hariIni = new Date().toLocaleDateString('id-ID', { weekday: 'long' }).split(',')[0];
  const kelasHariIni = semuaJadwal.filter((item) => item.hari === hariIni).length;

  const deadlineTerdekat = getDeadlineTerdekat(semuaTugas);

  return { totalTugas, totalMataKuliah, kelasHariIni, deadlineTerdekat };
};


// ===============================
// Komponen Card (versi rapi)
// ===============================
type StatCardValue = 
  | string
  | number
  | { judul: string; tanggal: string; countdown: string };

type StatCardProps = {
  title: string;
  value: StatCardValue;
  link: string;
  colorClass: string;
  icon: LucideIcon;
};

const StatCard = ({ title, value, link, colorClass, icon: Icon }: StatCardProps) => {
  const isObject = typeof value === "object" && value !== null;

  return (
    <div
      className={`flex flex-col rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition duration-300 ${colorClass}`}
    >
      <div className="flex-1 p-6 text-white">
        <div className="flex justify-between items-start mb-4">

          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold">
              {isObject ? value.judul : value}
            </span>

            {isObject && (
              <span className="text-sm text-gray-200 mt-1">
                {value.tanggal}{" "}
                <span className="opacity-80">{value.countdown}</span>
              </span>
            )}
          </div>

          <Icon className="w-7 h-7 opacity-70" />
        </div>

        <p className="text-md font-semibold opacity-90">{title}</p>
      </div>

      <div className="bg-black bg-opacity-10 p-2 text-center text-white text-xs font-medium hover:bg-opacity-20 transition duration-150">
        <a href={link} className="flex items-center justify-center">
          More info <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
};

// ===============================
// HALAMAN DASHBOARD UTAMA
// ===============================
export default async function DashboardPage() {
  const semuaJadwal = await getAllJadwal();
  const semuaTugas = await getAllTugas();

  const stats = calculateStats(semuaTugas, semuaJadwal, mataKuliahList);

  const deadline = stats.deadlineTerdekat;
  const countdown = deadline ? getCountdownText(deadline.deadline) : "";
  const deadlineCardColor = getDeadlineColor(deadline?.deadline);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-2 mb-6">Dashboard</h1>

      <Marquee text="⚠️ Website ini masih dalam pengembangan ⚠️" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Deadline Terdekat */}
        <StatCard
          title="Deadline Terdekat"
          value={
            stats.deadlineTerdekat
              ? {
                  judul: stats.deadlineTerdekat.judul,
                  tanggal: formatTanggalCantik(stats.deadlineTerdekat.deadline),
                  countdown: getCountdownText(stats.deadlineTerdekat.deadline)
                }
              : "Tidak ada"
          }
          link="/tugas"
          colorClass={deadlineCardColor}
          icon={CheckSquare}
        />


        {/* Total Tugas */}
        <StatCard
          title="Total Tugas"
          value={stats.totalTugas}
          link="/tugas"
          colorClass="bg-yellow-500"
          icon={CheckSquare}
        />

        {/* Kelas Hari Ini */}
        <StatCard
          title="Kelas Hari Ini"
          value={stats.kelasHariIni}
          link="/jadwal"
          colorClass="bg-green-500"
          icon={Clock}
        />

        {/* Total Mata Kuliah */}
        <StatCard
          title="Total Mata Kuliah"
          value={stats.totalMataKuliah}
          link="/matkul"
          colorClass="bg-blue-500"
          icon={BookOpen}
        />

      </div>

      {/* Konten lainnya TETAP sama */}
      {/* ================================
          Tidak diubah — langsung dari kode lama
      ================================= */}

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700">Detail Cepat</h2>
        <p className="text-gray-500 pb-2 border-b">Gunakan sidebar untuk navigasi lengkap.</p>

        {/* Announcement Cards */}
        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md shadow-sm">
          <div className="flex items-start">
            <svg className="h-6 w-6 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
            </svg>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-yellow-700">Pengumuman</h3>
              <p className="text-yellow-800 text-sm mt-1">Website akan melakukan maintenance setiap hari Minggu jam 00:00 - 06.00 WIB. beberapa fitur mungkin tidak tersedia. 
                Jangan khawatir, website akan kembali normal secepatnya! Terima kasih atas pengertiannya.</p>
            </div>
          </div>
        </div>
        
        {/* Kalender Akademik */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3 flex items-center gap-2 text-center justify-center">
            <Calendar className="w-6 h-6" />
            Kalender Akademik Ganjil (PTA) 2025/2026
          </h2>

          <div className="bg-white shadow-md rounded-lg overflow-hidden border">
            <table className="min-w-full border-collapse">

              <thead className="bg-red-800 text-white ">
                <tr>
                  <th className="py-3 px-4 text-center">Kegiatan</th>
                  <th className="py-3 px-4 text-center">Tanggal</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">

                {/* TABEL SAMA SEPERTI SEBELUMNYA */}
                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB)</td>
                  <td className="py-3 px-4">22 September – 26 September 2025</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Kursus/Pelatihan Berbasis Kompetensi</td>
                  <td className="py-3 px-4">22 September – 27 September 2025</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Perkuliahan Sebelum UTS</td>
                  <td className="py-3 px-4">29 September – 6 Desember 2025</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Pendistribusian FRS</td>
                  <td className="py-3 px-4">25 September – 25 Oktober 2025</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Pengisian KRS Online</td>
                  <td className="py-3 px-4">29 September – 25 Oktober 2025</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Batas Akhir Cetak KRS</td>
                  <td className="py-3 px-4">22 November 2025</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">UTS</td>
                  <td className="py-3 px-4">8 Desember – 24 Desember 2025</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Cuti Akademik</td>
                  <td className="py-3 px-4">15 Desember 2025</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Libur Natal & Tahun Baru</td>
                  <td className="py-3 px-4">25 Desember 2025 – 1 Januari 2026</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Perkuliahan Setelah UTS</td>
                  <td className="py-3 px-4">2 Januari – 29 Januari 2026</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Ujian Utama</td>
                  <td className="py-3 px-4">2 Februari – 7 Februari 2026</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">UAS</td>
                  <td className="py-3 px-4">9 Februari – 21 Februari 2026</td>
                </tr>

                <tr className="border-t text-center">
                  <td className="py-3 px-4 border-r border-gray-500">Pelatihan Kompetensi</td>
                  <td className="py-3 px-4">23 Februari – 28 Februari 2026</td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>
      </section>

      <footer className="mt-10 py-4 text-center text-gray-500 text-sm">
        Created with <span className="text-red-500">❤️</span> by{" "}
        <span className="font-semibold text-gray-700">
          <a 
            href="https://github.com/Smeyintsu" 
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition-colors"
          >
            Yintsu
          </a>
          <span className="mx-2">|</span>
          <a 
            href="https://github.com/FavianRP" 
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition-colors"
          >
            dre4mer
          </a>
          <span className="mx-2">|</span>
          <a 
            href="https://github.com/helscape" 
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition-colors"
          >
            helscape
          </a>
        </span>
        <div className="mt-2 text-gray-400 text-xs">
          Kritik & Saran untuk website? Hubungi developer di atas.
        </div>
      </footer>
    </div>
  );
}
