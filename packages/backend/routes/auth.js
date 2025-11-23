require('dotenv').config({ path: __dirname + '/../.env' });

const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  
  // cari user berdasarkan username saja
  db.get("SELECT * FROM users WHERE username = ?", [username], async (err, user) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "Server error" });
    }

    // username tidak ditemukan
    if (!user) {
      return res.status(401).json({ message: "Username atau password salah" });
    }

    // cek password
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(401).json({ message: "Username atau password salah" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token, role: user.role });
  });
});

module.exports = router;
