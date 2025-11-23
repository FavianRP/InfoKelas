import { getAllTugas } from '@/lib/data';
import TugasList from '@/app/components/TugasList';

// Halaman ini adalah Server Component
export default async function TugasPage() {

  // Ambil data dari backend (async)
  const semuaTugas = await getAllTugas();

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">

        {/* Data dikirim ke Client Component */}
        <TugasList initialTugas={semuaTugas} />

      </div>
    </main>
  );
}
