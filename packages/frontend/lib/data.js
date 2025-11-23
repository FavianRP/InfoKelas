const API_URL = "http://localhost:5000"; // backend SQLite

function getTokenHeader() {
  if (typeof window === 'undefined') return {}; // supaya SSR tidak error
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
}

// ------------------- TUGAS -------------------

// Ambil semua tugas
export async function getAllTugas() {
  const res = await fetch(`${API_URL}/tugas`, {
    headers: getTokenHeader(),
    cache: "no-store",
  });
  return res.json();
}

// Tambah tugas baru
export async function addTugas(tugas) {
  const res = await fetch(`${API_URL}/tugas`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getTokenHeader() },
    body: JSON.stringify(tugas),
  });
  return res.json();
}

// Hapus tugas
export async function deleteTugas(id) {
  const res = await fetch(`${API_URL}/tugas/${id}`, {
    method: "DELETE",
    headers: getTokenHeader(),
  });
  return res.json();
}

// Update tugas (opsional)
export async function updateTugas(id, tugas) {
  const res = await fetch(`${API_URL}/tugas/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...getTokenHeader() },
    body: JSON.stringify(tugas),
  });
  return res.json();
}

// ---------------------------------------------
//                   JADWAL
// ---------------------------------------------
export async function getAllJadwal() {
  const res = await fetch(`${API_URL}/jadwal`, {
    headers: getTokenHeader(),
    cache: 'no-store',
  });
  return res.json();
}

export async function addJadwal(data) {
  const res = await fetch(`${API_URL}/jadwal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getTokenHeader() },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteJadwal(id) {
  const res = await fetch(`${API_URL}/jadwal/${id}`, {
    method: 'DELETE',
    headers: getTokenHeader(),
  });
  return res.json();
}


// ------------------- MATERI -------------------
// Ambil semua materi
export async function fetchMateri() {
  try {
    const res = await fetch(`${API_URL}/materi`, {
      headers: getTokenHeader()
    });
    if (!res.ok) throw new Error("Gagal fetch materi");
    return res.json();
  } catch (error) {
    console.error("Error fetchMateri:", error);
    return [];
  }
}

// Ambil materi berdasarkan ID
export async function fetchMateriById(id) {
  try {
    const res = await fetch(`${API_URL}/materi/${id}`, {
      headers: getTokenHeader()
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetchMateriById:", error);
    return null;
  }
}

// Tambah materi baru
export async function addMateri(data) {
  const res = await fetch(`${API_URL}/materi`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getTokenHeader() },
    body: JSON.stringify(data)
  });
  return res.json();
}

// Update materi
export async function updateMateri(id, data) {
  const res = await fetch(`${API_URL}/materi/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...getTokenHeader() },
    body: JSON.stringify(data)
  });
  return res.json();
}

// Hapus materi
export async function deleteMateri(id) {
  const res = await fetch(`${API_URL}/materi/${id}`, {
    method: "DELETE",
    headers: getTokenHeader()
  });
  return res.json();
}
