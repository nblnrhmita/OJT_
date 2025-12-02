import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeroSection = () => {
  // State untuk menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Hook untuk mendapatkan lokasi URL saat ini
  const location = useLocation();

  // Daftar link navigasi
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/tentang-kami', label: 'Tentang Kami' },
    { path: '/program', label: 'Program' },
    { path: '/artikel', label: 'Artikel' },
    { path: '/layanan', label: 'Layanan' },
  ];

  return (
    // Section utama: full height, background abu-abu muda
    <section className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Header / Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-green-600">
                Yauma
              </Link>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  // Kelas dinamis untuk menandai link aktif
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-green-600 border-b-2 border-green-600 pb-1'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Tombol Hamburger untuk Mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === link.path
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Konten Utama Hero */}
      <main className="flex-grow flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900">
            Renovasi Asrama
          </h1>
          {/* Anda bisa menambahkan subheading atau tombol di sini jika diperlukan */}
        </div>
      </main>

    </section>
  );
};

export default HeroSection;