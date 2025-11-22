"use client";
import { useState, useEffect } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format hari dan tanggal (Indonesia)
  const day = now.toLocaleDateString("id-ID", { weekday: "long" });
  const date = now.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });

  // Format waktu HH:MM:SS
  const pad = (n) => n.toString().padStart(2, "0");
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());
  const time = `${hours}:${minutes}:${seconds} WIB`;

  return (
    <div className="p-4 border-b border-gray-300 text-center text-white-700">
      <div className="font-semibold">{day}</div>
      <div>{date}</div>
      <div className="mt-1 font-mono text-sm">{time}</div>
    </div>
  );
}
