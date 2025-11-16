const express = require("express");
const cors = require("cors");
const db = require("./db"); // pastikan ini sudah konek ke SQLite

const app = express();
app.use(cors());
app.use(express.json());

// ------------------- TUGAS ------------------- //
app.get("/tugas", (req, res) => {
  db.all("SELECT * FROM tugas", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/tugas", (req, res) => {
  const { judul, deskripsi, deadline, status } = req.body;

  db.run(
    `INSERT INTO tugas (judul, deskripsi, deadline, status)
     VALUES (?, ?, ?, ?)`,
    [judul, deskripsi, deadline, status || "Belum Selesai"],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

app.delete("/tugas/:id", (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM tugas WHERE id = ?`, id, function (err) {
    if (err) return res.status(500).json({ error: err.message });

    if (this.changes === 0) {
      return res.status(404).json({ error: "Tugas tidak ditemukan" });
    }

    res.json({ success: true, deleted: this.changes });
  });
});

// ------------------- JADWAL ------------------- //
app.get("/jadwal", (req, res) => {
  db.all("SELECT * FROM jadwal", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/jadwal", (req, res) => {
  console.log("Request body:", req.body);
  const { mata_kuliah, hari, waktu_mulai, waktu_selesai, ruangan, dosen } = req.body;

  db.run(
    `INSERT INTO jadwal (mata_kuliah, hari, waktu_mulai, waktu_selesai, ruangan, dosen)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [mata_kuliah, hari, waktu_mulai, waktu_selesai, ruangan, dosen],
    function (err) {
      if (err) {
        console.error("DB Error:", err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID });
    }
  );
});


app.put("/jadwal/:id", (req, res) => {
  const { id } = req.params;
  const { mata_kuliah, hari, waktu_mulai, waktu_selesai, ruangan, dosen } = req.body;

  db.run(
    `UPDATE jadwal 
     SET mata_kuliah = ?, hari = ?, waktu_mulai = ?, waktu_selesai = ?, ruangan = ?, dosen = ?
     WHERE id = ?`,
    [mata_kuliah, hari, waktu_mulai, waktu_selesai, ruangan, dosen, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

app.delete("/jadwal/:id", (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM jadwal WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: "Jadwal tidak ditemukan" });
    res.json({ success: true, deleted: this.changes });
  });
});

// ------------------- MATERI ------------------- //
app.get("/materi", (req, res) => {
  db.all("SELECT * FROM materi", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/materi", (req, res) => {
  const { judul, isi, tanggal } = req.body;
  db.run(
    `INSERT INTO materi (judul, isi, tanggal) VALUES (?, ?, ?)`,
    [judul, isi, tanggal],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// ------------------- START SERVER ------------------- //
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
