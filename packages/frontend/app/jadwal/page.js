import { getAllJadwal } from '@/lib/data';
import JadwalFilter from '@/app/components/JadwalFilter';

// Halaman ini adalah Server Component
export default async function JadwalPage() {

  // Ambil data di sisi server (async)
  const semuaJadwal = await getAllJadwal();

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Kirim data ke Client Component */}
        <JadwalFilter jadwalData={semuaJadwal} />

      </div>
    </main>
  );
}
