// create-user.js
// Jalankan dengan: node create-user.js

const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");

const db = new sqlite3.Database("./database.sqlite");

async function createUser() {
  const username = "admin";
  const password = "2ia15pastibisa"; // ganti dengan password yang Anda inginkan
  const role = "admin";

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    `INSERT INTO users (username, password, role) VALUES (?, ?, ?)`,
    [username, hashedPassword, role],
    function (err) {
      if (err) {
        console.error("Error creating user:", err);
        return;
      }
      console.log("✅ User berhasil dibuat!");
      console.log("Username:", username);
      console.log("Password:", password);
      console.log("ID:", this.lastID);
      
      db.close();
    }
  );
}

createUser();