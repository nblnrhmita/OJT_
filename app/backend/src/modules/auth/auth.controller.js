import {
  checkEmailExists,
  create,
  findByEmail,
  verifyPassword,
  hashPassword,
} from "./auth.model";

// Registrasi user baru
export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    // Validasi input
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Semua field harus diisi",
      });
    }

    // Cek apakah email sudah terdaftar
    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      return res.status(400).json({
        success: false,
        message: "Email sudah terdaftar",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Simpan user ke database
    const userData = {
      username,
      email,
      password: hashedPassword,
    };

    const newUser = await create(userData);

    // Hapus password dari response
    delete newUser.password;

    res.status(201).json({
      success: true,
      message: "User berhasil didaftarkan",
      data: newUser,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

import jwt from "jsonwebtoken";

// Login user
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Validasi input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email dan password harus diisi",
      });
    }

    // Cari user berdasarkan email
    const user = await findByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email atau password salah",
      });
    }

    // Verifikasi password
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Email atau password salah",
      });
    }

    // Hapus password dari response
    const { password: _, ...userWithoutPassword } = user;

    const generateJWT = (user) => {
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
      };
      return jwt.sign(payload, "secret", { expiresIn: "1h" });
    };

    res.status(200).json({
      success: true,
      message: "Login berhasil",
      data: {
        user: userWithoutPassword,
        token: generateJWT(userWithoutPassword),
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
