import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from '@/app/components/Sidebar';
import Link from "next/link";
import { LogIn } from "lucide-react";

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
            <header className="w-full bg-white shadow p-4 sticky top-0 z-10 flex items-center">
              <h1 className="text-xl font-bold text-gray-800">Info Kelas - 2IA15</h1>
               {/* Tombol Login */}
              <Link 
                href="/login"
                className="ml-auto px-4 py-2 border border-gray-300 text-gray-700 rounded-full 
                          hover:bg-gray-200 hover:border-gray-400 transition flex items-center gap-2"
              >
                <LogIn size={16} />
                Login
              </Link>
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