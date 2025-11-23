import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  try {
    // KIRIM DATA KE BACKEND
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("Error connecting to backend:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
