import bcrypt from 'bcrypt';
import { db } from '../../lib/db';

// Cari user berdasarkan email
export async function findByEmail(email) {
  const query = "SELECT * FROM users WHERE email = ?";
  const [rows] = await db.query(query, [email]);
  return rows[0] || null;
};

// Cek apakah email sudah terdaftar
export async function checkEmailExists(email) {
  const query = "SELECT email FROM users WHERE email = ?";
  const [rows] = await db.query(query, [email]);
  return rows.length > 0;
};

// Buat user baru
export async function create(userData) {
  const { username, email, password, role } = userData;
  const query = "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)";
  const [result] = await db.query(query, [username, email, password, role]);
  return { id: result.insertId, username, email, role };
};

// Verifikasi password
export async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// Hash password
export async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};