// app/materi/[id]/page.js
import { fetchMateriById } from "@/lib/data";

function formatTanggal(tanggal) {
  if (!tanggal) return "";
  const date = new Date(tanggal);
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("id-ID", options);
}

export default async function MateriDetailPage(props) {
  // unwrap params karena sekarang Promise
  const params = await props.params;
  const id = params.id;

  const materi = await fetchMateriById(id);

  if (!materi) {
    return (
      <main className="min-h-screen p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
          <p className="text-red-500 font-semibold">Materi tidak ditemukan</p>
        </div>
      </main>
    );
  }

  // Ambil file dari kolom 'file' di database
  const fileUrl = materi.file;
  const isPDF = fileUrl && fileUrl.toLowerCase().endsWith(".pdf");

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">
        <h1 className="text-2xl text-gray-900 font-bold">{materi.judul}</h1>

        <p className="text-gray-700">{materi.isi}</p>

        {materi.tanggal && (
          <p className="text-gray-500 text-sm">
            Tanggal: {formatTanggal(materi.tanggal)}
          </p>
        )}

        {/* Tampilkan file jika ada */}
        {fileUrl && (
          <div className="mt-4 border-t pt-4 space-y-3">
            <h2 className="font-semibold text-gray-800">File Materi:</h2>

            {isPDF ? (
              <div className="space-y-2">
                <iframe
                  src={fileUrl}
                  className="w-full h-96 border rounded"
                  title="Preview PDF"
                />
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:underline"
                >
                  📄 Buka PDF di tab baru
                </a>
              </div>
            ) : (
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                📎 Buka File Materi
              </a>
            )}
          </div>
        )}

        {/* Tombol kembali */}
        <div className="mt-6 pt-4 border-t">
          <a
            href="/materi"
            className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            ← Kembali ke Daftar Materi
          </a>
        </div>
      </div>
    </main>
  );
}