export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center p-6">
      
      {/* Judul dengan emoji dan glitch */}
      <h1 className="text-7xl font-extrabold text-indigo-600 relative inline-block">
        404 N0T F0UND 😢
        {/* Efek glitch */}
        <span className="absolute top-0 left-0 w-full h-full text-indigo-500 opacity-50 animate-glitch">
          404 N0T F0UND 😢
        </span>
        <span className="absolute top-0 left-0 w-full h-full text-pink-500 opacity-50 animate-glitch2">
          404 N0T F0UND 😢
        </span>
      </h1>

      <p className="mt-4 text-xl text-gray-700">Halaman tidak ditemukan</p>
      <p className="text-gray-500 mt-2">
        Oops! Kami tidak bisa menemukan apa yang kamu cari disini.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full 
                   hover:bg-indigo-700 transition shadow"
      >
        Kembali ke Dashboard
      </a>
    </div>
  );
}
