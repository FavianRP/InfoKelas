require('dotenv').config({ path: __dirname + '/.env' });

const express = require("express");
const cors = require("cors");
const db = require("./db");
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// ------------------- TUGAS ------------------- //
app.get("/tugas", (req, res) => {
  db.all("SELECT * FROM tugas", [], (err, rows) => {
    if (err) {
      console.error("Tugas GET Error:", err);
      return res.status(500).json({ error: err.message });
    }
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
      if (err) {
        console.error("Tugas INSERT Error:", err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID });
    }
  );
});

app.delete("/tugas/:id", (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM tugas WHERE id = ?`, id, function (err) {
    if (err) {
      console.error("Tugas DELETE Error:", err);
      return res.status(500).json({ error: err.message });
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: "Tugas tidak ditemukan" });
    }

    res.json({ success: true, deleted: this.changes });
  });
});

app.put("/tugas/:id", (req, res) => {
  const { id } = req.params;
  const { judul, deskripsi, deadline } = req.body;

  db.run(
    `UPDATE tugas SET judul = ?, deskripsi = ?, deadline = ? WHERE id = ?`,
    [judul, deskripsi, deadline, id],
    function (err) {
      if (err) {
        console.error("Tugas UPDATE Error:", err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ updated: this.changes });
    }
  );
});

// ------------------- JADWAL ------------------- //
app.get("/jadwal", (req, res) => {
  db.all("SELECT * FROM jadwal", [], (err, rows) => {
    if (err) {
      console.error("Jadwal GET Error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.post("/jadwal", (req, res) => {
  const { mata_kuliah, hari, waktu_mulai, waktu_selesai, ruangan, dosen } = req.body;

  db.run(
    `INSERT INTO jadwal (mata_kuliah, hari, waktu_mulai, waktu_selesai, ruangan, dosen)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [mata_kuliah, hari, waktu_mulai, waktu_selesai, ruangan, dosen],
    function (err) {
      if (err) {
        console.error("Jadwal INSERT Error:", err);
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
      if (err) {
        console.error("Jadwal UPDATE Error:", err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ updated: this.changes });
    }
  );
});

app.delete("/jadwal/:id", (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM jadwal WHERE id = ?`, [id], function (err) {
    if (err) {
      console.error("Jadwal DELETE Error:", err);
      return res.status(500).json({ error: err.message });
    }

    if (this.changes === 0)
      return res.status(404).json({ error: "Jadwal tidak ditemukan" });

    res.json({ success: true, deleted: this.changes });
  });
});

// ------------------- MATERI ------------------- //

// GET semua materi
app.get("/materi", (req, res) => {
  db.all("SELECT * FROM materi", [], (err, rows) => {
    if (err) {
      console.error("Materi GET Error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// GET by ID
app.get("/materi/:id", (req, res) => {
  const { id } = req.params;

  db.get("SELECT * FROM materi WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error("Materi GET BY ID Error:", err);
      return res.status(500).json({ error: err.message });
    }
    if (!row) return res.status(404).json({ error: "Materi tidak ditemukan" });

    res.json(row);
  });
});

// POST
app.post("/materi", (req, res) => {
  const { judul, isi, file, tanggal } = req.body;

  db.run(
    `INSERT INTO materi (judul, isi, file, tanggal) VALUES (?, ?, ?, ?)`,
    [judul, isi, file, tanggal],
    function (err) {
      if (err) {
        console.error("Materi INSERT Error:", err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID });
    }
  );
});

// PUT
app.put("/materi/:id", (req, res) => {
  const { id } = req.params;
  const { judul, isi, file, tanggal } = req.body;

  db.run(
    `UPDATE materi SET judul = ?, isi = ?, file = ?, tanggal = ? WHERE id = ?`,
    [judul, isi, file, tanggal, id],
    function (err) {
      if (err) {
        console.error("Materi UPDATE Error:", err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ updated: this.changes });
    }
  );
});

// DELETE
app.delete("/materi/:id", (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM materi WHERE id = ?`, [id], function (err) {
    if (err) {
      console.error("Materi DELETE Error:", err);
      return res.status(500).json({ error: err.message });
    }

    if (this.changes === 0)
      return res.status(404).json({ error: "Materi tidak ditemukan" });

    res.json({ deleted: this.changes });
  });
});

// ------------------- START SERVER ------------------- //
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
