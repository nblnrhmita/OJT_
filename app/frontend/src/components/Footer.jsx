import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary/10 to-secondary/20 text-black pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* ===== LOGO & DESKRIPSI ===== */}
        <div>
          <img src="/logo.png" alt="Logo" className="w-24 mb-4" />

          <p className="text-sm text-gray-700 leading-6 max-w-xs">
            Self-Development & Mental Health Community yang berfokus pada
            edukasi, ruang aman, dan pengembangan diri untuk generasi muda.
          </p>
        </div>

        {/* ===== MENU ===== */}
        <div>
          <h3 className="text-primary font-bold text-lg mb-4">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-primary2 transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary2 transition">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary2 transition">
                Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary2 transition">
                Artikel
              </a>
            </li>
          </ul>
        </div>

        {/* ===== PROGRAM ===== */}
        <div>
          <h3 className="text-primary font-bold text-lg mb-4">Program</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-primary2 transition">
                Sosial
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary2 transition">
                Pendidikan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary2 transition">
                Ekonomi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary2 transition">
                Kesehatan
              </a>
            </li>
          </ul>
        </div>

        {/* ===== KONTAK ===== */}
        <div>
          <h3 className="text-primary font-bold text-lg mb-4">Kontak</h3>

          <p className="text-sm text-gray-700 leading-6">
            Jl. Contoh Alamat No. 123 Bandung, Jawa Barat
          </p>

          <p className="mt-3 text-sm">
            <span className="text-primary font-medium">Email:</span>{" "}
            MindsUnited@gmail.com
          </p>

          <p className="text-sm">
            <span className="text-primary font-medium">Telp:</span>{" "}
            0821-5678-1234
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-white transition text-primary"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-white transition text-primary"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-white transition text-primary"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-gray-300 pt-5 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} PESERTA PBL TAHAP 4 — All Rights Reserved.
      </div>
    </footer>
  );
}
