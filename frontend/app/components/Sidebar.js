'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, CheckSquare, LayoutDashboard, Menu, X } from 'lucide-react'; 
import Jam from './Jam';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Jadwal Kuliah', href: '/jadwal', icon: Calendar },
  { name: 'Daftar Tugas', href: '/tugas', icon: CheckSquare },
  { name: 'List Matkul', href: '/matkul', icon: CheckSquare },
  { name: 'List Materi', href: '/materi', icon: CheckSquare },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState('mahasiswa');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedRole = localStorage.getItem('role') || 'mahasiswa';
    setRole(storedRole);
  }, []);

  // Tutup sidebar saat navigasi (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll pada body saat sidebar mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-900 text-white rounded-lg shadow-lg hover:bg-indigo-800 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

           {/* Overlay - Mobile Only */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          flex flex-col w-64 bg-indigo-900 text-white p-6 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo/Nama Aplikasi */}
        <div className="text-2xl font-extrabold border-b border-indigo-700 pb-2 text-center mt-12 lg:mt-0">
          <Link href="/" className="hover:text-indigo-300 transition">
            INFO KELAS
          </Link>
        </div>

        {/* Jam dan Tanggal */}
        <Jam /> 

        {/* Navigasi Link */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.href === '/' 
                ? pathname === '/' 
                : pathname.startsWith(item.href);

              return (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className={`flex items-center p-3 rounded-lg transition-all duration-200 group mt-2 ${
                      isActive
                        ? 'bg-indigo-700 text-white font-bold shadow-md'
                        : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{item.name}</span>
                    {isActive && <span className="ml-auto w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Info Pengguna */}
        <div className="mt-8 pt-4 border-t border-indigo-700">
          <p className="text-xs text-indigo-300">
            Pengguna: {role === 'admin' ? 'Admin' : 'Mahasiswa'}
          </p>
          {role !== 'admin' && (
            <p className="text-xs text-indigo-300">Semester: 3</p>
          )}
        </div>
      </div>
    </>
  );
}