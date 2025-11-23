'use client';

export default function Marquee({ text }) {
  return (
    <div className="w-screen overflow-hidden relative h-6 mb-6">
      <p className="absolute whitespace-nowrap text-sm text-gray-500 italic animate-marquee">
        {text}
      </p>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100vw); }  /* Mulai dari ujung kanan viewport */
          100% { transform: translateX(-100%); } /* Bergerak hingga ujung kiri teks hilang */
        }
        .animate-marquee {
          animation: marquee 15s linear infinite; /* bisa disesuaikan durasinya */
        }
      `}</style>
    </div>
  );
}
