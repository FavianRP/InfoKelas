"use client";
import { useState, useEffect } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const day = now.toLocaleDateString("id-ID", { weekday: "long" });
  const date = now.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
  const time = now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <div className="p-4 border-b border-gray-300 text-center text-white-700">
      <div className="font-semibold">{day}</div>
      <div>{date}</div>
      <div className="mt-1 font-mono text-sm">{time} WIB</div>
    </div>
  );
}
