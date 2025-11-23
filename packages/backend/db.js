const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Gunakan absolute path
const dbPath = path.join(__dirname, "database.sqlite");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Database connection error:", err);
  } else {
    console.log("✅ Connected to:", dbPath);
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS tugas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      judul TEXT NOT NULL,
      deskripsi TEXT NOT NULL,
      deadline TEXT NOT NULL,
      status TEXT NOT NULL
    )
  `);

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

  db.run(`
    CREATE TABLE IF NOT EXISTS materi (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      judul TEXT NOT NULL,
      isi TEXT,
      file TEXT,
      tanggal TEXT
    )
  `);
});

module.exports = db;