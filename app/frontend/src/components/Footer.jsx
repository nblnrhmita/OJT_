import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-14 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* ===== LOGO & DESKRIPSI ===== */}
        <div>
          <img src="/logo.png" alt="Logo" className="w-24 mb-4" />
          <p className="text-sm leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            quaerat voluptatem fugiat cupiditate ratione modi sint itaque!
          </p>
        </div>

        {/* ===== MENU ===== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Berita
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* ===== PROGRAM ===== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Program</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Sosial
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pendidikan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Ekonomi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kesehatan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Qurban
              </a>
            </li>
          </ul>
        </div>

        {/* ===== KONTAK ===== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Kontak</h3>

          <p className="text-sm leading-6">
            Jl. Contoh Alamat No. 123 Bandung, Jawa Barat
          </p>

          <p className="mt-3 text-sm">
            <span className="text-green-600">Email: </span> info@yauma.org
          </p>
          <p className="text-sm">
            <span className="text-green-600">Telp: </span> 0821-5678-1234
          </p>

          <div className="flex gap-4 mt-4">
            <a href="#">
              <i className="fa-brands fa-facebook text-xl hover:text-white"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram text-xl hover:text-white"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube text-xl hover:text-white"></i>
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kami Minds United — All Rights Reserved.
      </div>
    </footer>
  );
}
