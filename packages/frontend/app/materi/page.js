import { fetchMateri } from "@/lib/data";
import MateriList from "@/app/components/MateriList";

export default async function MateriPage() {
  let semuaMateri = [];

  try {
    semuaMateri = await fetchMateri();
  } catch (error) {
    console.error("Error fetch materi:", error);
  }

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl text-gray-900 font-bold mb-4">Daftar Materi</h1>
        <MateriList initialMateri={semuaMateri} />
      </div>
    </main>
  );
}
