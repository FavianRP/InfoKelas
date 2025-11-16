'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, CheckSquare, LayoutDashboard } from 'lucide-react'; 

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Jadwal Kuliah', href: '/jadwal', icon: Calendar },
  { name: 'Daftar Tugas', href: '/tugas', icon: CheckSquare },
  // Tambahkan link lain di sini (misalnya: /upload, /kalender)
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-indigo-900 text-white p-6 shadow-2xl">
      {/* Logo/Nama Aplikasi */}
      <div className="text-2xl font-extrabold mb-8 border-b border-indigo-700 pb-4">
        INFO KELAS
      </div>

      {/* Navigasi Link */}
      <nav className="flex-1">
        <ul className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === '/' 
              ? pathname === '/' // Khusus untuk Dashboard
              : pathname.startsWith(item.href); // Untuk semua path lainnya

            return (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-indigo-700 text-white font-bold shadow-md'
                      : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="text-sm">{item.name}</span>
                  {/* Indikator aktif */}
                  {isActive && <span className="ml-auto w-2 h-2 bg-green-400 rounded-full"></span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Info Pengguna */}
      <div className="mt-8 pt-4 border-t border-indigo-700">
        <p className="text-xs text-indigo-300">Pengguna: Mahasiswa</p>
      </div>
    </div>
  );
}