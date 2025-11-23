"use client";
import Link from "next/link";
import { LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // <--- baru
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    setIsMounted(true); // render tombol setelah mount
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    router.push('/login');
  };

  if (!isMounted) return null; // jangan render dulu sebelum mount

  return isLoggedIn ? (
    <button
      onClick={handleLogout}
      className="ml-auto px-4 py-2 border border-red-500 bg-red-500 text-gray-700 rounded-full hover:bg-gray-200 hover:border-gray-400 transition flex items-center gap-2 cursor-pointer"
    >
      <LogOut size={16} /> Logout
    </button>
  ) : (
    <Link
      href="/login"
      className="ml-auto px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-200 hover:border-gray-400 transition flex items-center gap-2 cursor-pointer"
    >
      <LogIn size={16} /> Login
    </Link>
  );
}
