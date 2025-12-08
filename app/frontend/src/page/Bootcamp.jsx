import React from 'react'
import { Link } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Bootcamp() {
const navigate = useNavigate();

  const programs = [
    "Emotional Healing",
    "Burnout Recovery",
    "Anxiety Detox",
    "Self-Love Mastery"
  ];
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="px-10 pt-20 pb-32 text-center">
        <div className="inline-block bg-white shadow px-5 py-2 rounded-full mb-6 text-sm font-medium text-primary border">
          🌿 Bootcamp Kesehatan Mental
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Temukan Ketenangan,
          <br /> <span className="text-primary">Pulihkan Jiwamu</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Perjalanan menuju kesehatan mental dimulai dari sini. Pelajari cara mengelola emosi,
          mengurangi stres, dan mencintai diri sendiri.
        </p>
        <div className="flex justify-center gap-4 mt-10">
          <Link
           to="/"
           className="bg-primary text-white px-8 py-3 rounded-lg shadow hover:bg-green-800 transition">
            Daftar Sekarang →
          </Link>
          <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-green-50 transition">
            Pelajari Program
          </button>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section id="program" className="px-10 py-10 bg-white text-center">
        <div className="inline-block bg-green-50 text-primary px-6 py-2 rounded-full text-sm font-medium mb-6">
          Tentang Program
        </div>
        <h2 className="text-3xl font-bold">Hal-Hal Baik yang Akan Kamu Temui di Sini</h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          Program intensif berbasis bukti ilmiah untuk membantu mengelola emosi,
          stres, dan meningkatkan well-being.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto">
          <div className="bg-[#F8FBF7] p-10 rounded-2xl shadow-sm border text-center">
            <div className="text-primary text-4xl mb-4 ">
                <i class="ri-hearts-line"></i>
            </div>
            <h3 className="font-semibold text-lg mb-2">Kesadaran Emosional</h3>
            <p className="text-gray-600 text-sm">Memahami emosi untuk hidup seimbang</p>
          </div>
          <div className="bg-[#F8FBF7] p-10 rounded-2xl shadow-sm border text-center">
            <div className="text-primary text-4xl mb-4">
                <i class="ri-team-line"></i>
            </div>
            <h3 className="font-semibold text-lg mb-2">Komunitas Supportive</h3>
            <p className="text-gray-600 text-sm">Lingkungan aman dan saling mendukung</p>
          </div>
          <div className="bg-[#F8FBF7] p-10 rounded-2xl shadow-sm border text-center">
            <div className="text-primary text-4xl mb-4">
                <i class="ri-calendar-event-line"></i>
            </div>
            <h3 className="font-semibold text-lg mb-2">Format Fleksibel</h3>
            <p className="text-gray-600 text-sm">Live session & materi bisa diakses ulang</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-2xl mx-auto">
          <div className="bg-[#F8FBF7] p-10 rounded-2xl shadow-sm border text-center">
            <div className="text-primary text-4xl mb-4">
                <i class="ri-award-line"></i>
            </div>
            <h3 className="font-semibold text-lg mb-2">Sertifikat Penyelesaian</h3>
            <p className="text-gray-600 text-sm">Dapatkan sertifikat resmi sebagai bukti komitmen pada kesehatan mental</p>
          </div>
          <div className="bg-[#F8FBF7] p-10 rounded-2xl shadow-sm border text-center">
            <div className="text-primary text-4xl mb-4">
                <i class="ri-booklet-line"></i>
            </div>
            <h3 className="font-semibold text-lg mb-2">Materi Berbasis Psikologi</h3>
            <p className="text-gray-600 text-sm">Pendekatan ilmiah dari psikologi modern dan praktik-praktik mindfulness</p>
          </div>
        </div>

      </section>

      {/* BOOTCAMP CARDS */}
      <section id="bootcamp" className="px-10 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Pilihan Bootcamp</h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {programs.map((title, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border flex flex-col">
            <img src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?q=80&w=2070" className='rounded-t-2xl' />

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-3">{title} Bootcamp</h3>
              <div className="text-sm textprimary mb-3">
                <i class="ri-calendar-event-line"></i> {i + 12} Februari 2026
              </div>
              <div className="text-primary font-semibold text-lg mb-3">
                GRATIS <span className="line-through text-gray-400 text-sm">Rp 1.200.000</span>
              </div>
            </div>

            {/* Button kirim program */}
            <button
              onClick={() => navigate(`/ ?program=${encodeURIComponent(title)}`)}
              className="bg-primary text-white py-3 hover:bg-teal-600 rounded-b-2xl"
            >
              Daftar Sekarang
            </button>
          </div>
        ))}
      </div>
    </section>
      {/* FAQ SECTION */}
      <section id="faq" className="px-10 py-10 bg-white max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-5">FAQ</h2>
        <p className="text-center text-gray-600 mb-10">
          Sebelum kamu mulai, berikut beberapa hal yang sering ditanyakan peserta.
        </p>
        <div className="space-y-5">
          {[{
            q: "Apakah bootcamp ini cocok untuk pemula?",
            a: "Ya, seluruh materi dirancang agar aman dan mudah diikuti oleh pemula."
          }, {
            q: "Apakah ada sertifikat?",
            a: "Ya, peserta akan mendapatkan e-certificate setelah menyelesaikan bootcamp."
          }, {
            q: "Apakah bisa ikut sambil bekerja?",
            a: "Bisa, karena sesi fleksibel dan rekaman materi tersedia."
          }].map((item, i) => (
            <div key={i} className="border p-5 rounded-xl bg-[#F8FBF7]">
              <p className="font-semibold text-lg">{item.q}</p>
              <p className="text-gray-600 mt-2 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="daftar" className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        
            <div className="w-20 h-20 bg-primary rounded-full mb-5 flex items-center justify-center">
                <span className="text-white text-3xl">
                    <i class="ri-user-heart-line"></i>
                </span>
            </div>

                <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#1f2f28] mb-4">
                Mulai Perjalanan Healing Anda Hari Ini
                </h1>

                <p className="text-[#445e55] max-w-xl mb-6">
                Kesehatan mental adalah investasi terbaik untuk diri Anda. Bergabunglah bersama ratusan orang lain yang telah memulai perjalanan transformasi mereka.
                </p>

            <div className="flex gap-4 flex-col md:flex-row mb-4">
                <Link 
                to="/"
                className="bg-primary hover:bg-teal-600 transition text-white px-8 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg">
                Daftar Sekarang <span>→</span>
                </Link>

                <button className="border border-primary hover:bg-white/60 transition text-[#4f9876] px-8 py-3 rounded-xl">
                Konsultasi Gratis
                </button>
            </div>
            <p className="text-sm text-[#6b7d75]">
                Masih ragu? Hubungi kami untuk konsultasi gratis sebelum mendaftar.
            </p>
    </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
