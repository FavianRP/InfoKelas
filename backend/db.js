// db.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.sqlite");

db.serialize(() => {
  // Table tugas
  db.run(`
CREATE TABLE IF NOT EXISTS tugas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  judul TEXT NOT NULL,
  deskripsi TEXT NOT NULL,
  deadline TEXT NOT NULL,
  status TEXT NOT NULL
)
  `);

  // Table jadwal
  db.run(`
    CREATE TABLE IF NOT EXISTS jadwal (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mata_kuliah TEXT NOT NULL,
        hari TEXT NOT NULL,
        waktu_mulai TEXT NOT NULL,
        waktu_selesai TEXT NOT NULL,
        ruangan TEXT NOT NULL,
        dosen TEXT NOT NULL
    )
  `);

  // Table materi
  db.run(`
    CREATE TABLE IF NOT EXISTS materi (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      judul TEXT,
      isi TEXT,
      tanggal TEXT
    )
  `);
});

module.exports = db;
