import { NextResponse } from 'next/server';

// Dummy user database
const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' },
];

export async function POST(req) {
  const { username, password } = await req.json();

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return NextResponse.json({ message: 'Username atau password salah' }, { status: 401 });
  }

  // Buat dummy token (bisa diganti JWT)
  const token = btoa(`${username}:${password}`);

  return NextResponse.json({ token, role: user.role });
}
