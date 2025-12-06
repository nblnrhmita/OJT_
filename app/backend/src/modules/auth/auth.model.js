import bcrypt from 'bcrypt';
import { db } from '../../lib/db';

// Cari user berdasarkan email
export function findByEmail (email) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (err, results) => {
      if (err) reject(err);
      else resolve(results[0] || null);
    });
  });
};

// Cek apakah email sudah terdaftar
export function checkEmailExists (email) {
  return new Promise((resolve, reject) => {
    const query = "SELECT email FROM users WHERE email = ?";
    db.query(query, [email], (err, results) => {
      if (err) reject(err);
      else resolve(results.length > 0);
    });
  });
};

// Buat user baru
export function create(userData){
  return new Promise((resolve, reject) => {
    const { username, email, password } = userData;
    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [username, email, password], (err, results) => {
      if (err) reject(err);
      else resolve({ id: results.insertId, username, email });
    });
  });
};

// Verifikasi password
export async function verifyPassword (plainPassword, hashedPassword)  {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// Hash password
export async function hashPassword (password){
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};