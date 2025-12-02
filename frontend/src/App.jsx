import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Hapus impor Navbar yang tidak lagi digunakan
// import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection';

// Buat komponen halaman lain
const AboutPage = () => <div className="p-8"><h1>Tentang Kami</h1><p>Ini adalah halaman about.</p></div>;

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route utama menggunakan HeroSection yang sudah ada navbar-nya */}
        <Route path="/" element={<HeroSection />} />
        
        {/* Route lainnya bisa menggunakan layout yang berbeda jika perlu */}
        <Route path="/tentang-kami" element={<AboutPage />} />
        <Route path="/program" element={<div className="p-8"><h1>Program</h1></div>} />
        <Route path="/artikel" element={<div className="p-8"><h1>Artikel</h1></div>} />
        <Route path="/layanan" element={<div className="p-8"><h1>Layanan</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;