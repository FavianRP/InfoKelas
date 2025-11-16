import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from '@/app/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Info Kelas - 2IA15',
  description: 'Aplikasi manajemen kelas kuliah pribadi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-gray-100">
          {/* 1. Sidebar untuk Navigasi */}
          <Sidebar /> 
          
          {/* 2. Konten Utama (Dashboard, Jadwal, Tugas) */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="w-full bg-white shadow p-4 sticky top-0 z-10">
              <h1 className="text-xl font-bold text-gray-800">Info Kelas - 2IA15</h1>
            </header>
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 md:p-8">
              {children} 
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}