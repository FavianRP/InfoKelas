const API_URL = "http://localhost:5000"; // backend SQLite

// Ambil Semua Tugas
export async function getAllTugas() {
  const res = await fetch(`${API_URL}/tugas`, { cache: "no-store" });
  return res.json();
}

export async function addTugas(tugas) {
  const res = await fetch("http://localhost:5000/tugas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tugas),
  });

  return res.json();
}

export async function deleteTugas(id) {
  const res = await fetch(`http://localhost:5000/tugas/${id}`, {
    method: "DELETE"
  });

  return res.json();
}


// ---------------------------------------------
//                   JADWAL
// ---------------------------------------------

// Ambil Semua Jadwal
export async function getAllJadwal() {
  const res = await fetch(`${API_URL}/jadwal`, { cache: "no-store" });
  return res.json();
}

// Tambah Jadwal
export async function addJadwal(jadwal) {
  const res = await fetch(`${API_URL}/jadwal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jadwal),
  });
  return res.json();
}

// Update Jadwal
export async function updateJadwal(id, jadwal) {
  const res = await fetch(`${API_URL}/jadwal/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jadwal),
  });
  return res.json();
}

// Hapus Jadwal
export async function deleteJadwal(id) {
  const res = await fetch(`${API_URL}/jadwal/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

// ------------------- MATERI -------------------
export async function fetchMateri() {
  try {
    const res = await fetch(`${API_URL}/materi`);
    if (!res.ok) throw new Error("Gagal fetch materi");
    return res.json();
  } catch (error) {
    console.error("Error fetchMateri:", error);
    return [];
  }
}

export async function fetchMateriById(id) {
  const res = await fetch(`${API_URL}/materi/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function addMateri(data) {
  const res = await fetch(`${API_URL}/materi`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateMateri(id, data) {
  const res = await fetch(`${API_URL}/materi/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteMateri(id) {
  const res = await fetch(`${API_URL}/materi/${id}`, { method: "DELETE" });
  return res.json();
}
