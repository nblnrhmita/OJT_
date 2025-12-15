import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

export default function Beasiswa() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* ======================= HERO SECTION ======================= */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-10 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <div className="bg-blue-50 text-primary px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm font-semibold shadow">
            🔔 Pendaftaran Beasiswa 2025 Dibuka!
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Raih <span className="text-primary">Impiamu</span>  
            <br /> dengan <span className="text-secondary">Beasiswa</span>
          </h1>

          <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            Temukan berbagai program beasiswa terbaik untuk mendukung pendidikanmu.
            Mulai dari beasiswa penuh hingga bantuan biaya kuliah.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <Link
              to="/beasiswa"
              className="bg-primary text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-teal-600 transition-all flex items-center gap-2 justify-center"
            >
              Lihat Beasiswa ➜
            </Link>

            <Link
              to="/tentang"
              className="bg-white border px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>

          <div className="flex justify-center mt-10 gap-10 text-primary font-semibold">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">50+</h3>
              <p className="text-sm">Program Beasiswa</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-secondary">10K+</h3>
              <p className="text-sm">Penerima Beasiswa</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">100%</h3>
              <p className="text-sm">Gratis Pendaftaran</p>
            </div>
          </div>

        </div>
      </section>


      {/* ======================= BEASISWA TERSEDIA ======================= */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center">
          Beasiswa <span className="text-primary">Tersedia</span>
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
          Temukan berbagai program beasiswa dari dalam dan luar negeri
          yang sesuai dengan jenjang pendidikanmu.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-14">

          {/* Card 1 */}
          <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-secondary text-white text-xs px-4 py-1 rounded-full font-semibold">
                Unggulan
              </span>
              <span className="text-primary text-sm bg-gray-100 px-3 py-1 rounded-full">
                S2 & S3
              </span>
            </div>

            <h3 className="text-xl font-bold">Beasiswa LPDP</h3>
            <p className="text-gray-600">Kementerian Keuangan RI</p>

            <div className="mt-4 text-primary space-y-2 text-sm">
              <p><i class="ri-calendar-event-fill"></i> Deadline: 31 Maret 2025 </p>
              <p><i class="ri-map-pin-line"></i> Dalam & Luar Negeri</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl mt-5">
              <h4 className="font-semibold text-primary text-sm">Cakupan Beasiswa</h4>
              <p className="text-gray-600 text-sm">
                Biaya kuliah penuh + biaya hidup + tiket pesawat
              </p>
            </div>

            <Link
              to="/beasiswa/lpdp"
              className="mt-5 block text-center text-white bg-primary px-5 py-3 rounded-xl font-semibold hover:bg-teal-600"
            >
              Lihat Detail ➜
            </Link>
          </div>

          {/* Card 2 */}
          <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-4">
              <span></span>
              <span className="text-primary text-sm bg-gray-100 px-3 py-1 rounded-full">
                S1, S2, S3
              </span>
            </div>

            <h3 className="text-xl font-bold">Beasiswa Unggulan</h3>
            <p className="text-gray-600">Kemendikbudristek</p>

            <div className="mt-4 text-primary space-y-2 text-sm">
              <p><i class="ri-calendar-event-fill"></i> Deadline: 15 April 2025</p>
              <p><i class="ri-map-pin-line"></i> Indonesia</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl mt-5">
              <h4 className="font-semibold text-primary text-sm">Cakupan Beasiswa</h4>
              <p className="text-gray-600 text-sm">
                Biaya kuliah + tunjangan bulanan
              </p>
            </div>

            <Link
              to="/beasiswa/unggulan"
              className="mt-5 block text-center bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-teal-600"
            >
              Lihat Detail ➜
            </Link>
          </div>

        </div>
      </section>


      {/* ======================= MANFAAT BEASISWA ======================= */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center">
          Manfaat <span className="text-secondary">Beasiswa</span>
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
          Lebih dari sekadar bantuan biaya pendidikan, beasiswa membuka berbagai peluang untuk masa depanmu.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-14">

          {/* Benefit Card 1 */}
          <div className="bg-white border p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-primary text-4xl mb-4"><i class="ri-wallet-3-line"></i></div>
            <h3 className="text-xl font-bold">Biaya Pendidikan</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Bebas biaya kuliah penuh atau sebagian sesuai program beasiswa yang dipilih.
            </p>
          </div>

          {/* Benefit Card 2 */}
          <div className="bg-white border p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-primary text-4xl mb-4"><i class="ri-book-marked-line"></i></div>
            <h3 className="text-xl font-bold">Tunjangan Buku</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Mendapat tunjangan untuk membeli buku dan keperluan akademik lainnya.
            </p>
          </div>

          <div className="bg-white border p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-primary text-4xl mb-4"><i class="ri-global-line"></i></div>
            <h3 className="text-xl font-bold">Kesempatan Global</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Akses ke program pertukaran dan studi di universitas terbaik dunia.
            </p>
          </div>

          <div className="bg-white border p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-primary text-4xl mb-4">
              <i class="ri-p2p-line"></i>
              </div>
            <h3 className="text-xl font-bold">Networking</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Bergabung dengan komunitas alumni beasiswa dari berbagai latar belakang.
            </p>
          </div>
        </div>
      </section>


      {/* ======================= CARA MENDAFTAR ======================= */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center">
          Cara <span className="text-primary">Mendaftar</span>
        </h2>

        <p className="text-gray-600 text-center max-w-xl mx-auto mt-3">
          Ikuti langkah-langkah sederhana ini untuk memulai perjalananmu mendapatkan beasiswa impian.
        </p>

        <div className="relative max-w-3xl mx-auto mt-10">

        {/* GARIS TIMELINE */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2"></div>

        {/* STEP 1 */}
        <div className="flex items-start mb-16">
          <div className="w-1/2 pr-6 text-right">
            <h3 className="text-xl font-bold">Cari Beasiswa</h3>
            <p className="text-gray-600 text-sm mt-2">
              Jelajahi berbagai program beasiswa yang tersedia sesuai dengan kriteria dan minatmu.
            </p>
          </div>
          <div className="relative">
            <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow">
              01
            </div>
          </div>
          <div className="w-1/2 pl-6">
            <div className="text-4xl">
              <i class="ri-search-line"></i>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="flex items-start mb-16 flex-row-reverse">
          <div className="w-1/2 pl-6">
            <h3 className="text-xl font-bold">Siapkan Dokumen</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lengkapi semua dokumen yang diperlukan seperti transkrip, rekomendasi, dan essay.
            </p>
          </div>
          <div className="relative">
            <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow">
              02
            </div>
          </div>
          <div className="w-1/2 pr-6 text-right">
            <div className="text-4xl"><i class="ri-file-text-line"></i></div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="flex items-start mb-16">
          <div className="w-1/2 pr-6 text-right">
            <h3 className="text-xl font-bold">Daftar Beasiswa</h3>
            <p className="text-gray-600 text-sm mt-2">
              Isi formulir aplikasi secara lengkap dan pastikan semua data benar.
            </p>
          </div>

          <div className="relative">
            <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow">
              03
            </div>
          </div>

          <div className="w-1/2 pl-6">
            <div className="text-4xl"><i class="ri-file-edit-line"></i></div>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="flex items-start mb-16 flex-row-reverse">
          <div className="w-1/2 pl-6">
            <h3 className="text-xl font-bold">Tunggu Hasil</h3>
            <p className="text-gray-600 text-sm mt-2">
              Pantau email atau dashboard untuk mengetahui hasil seleksi beasiswa.
            </p>
          </div>

          <div className="relative">
            <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow">
              04
            </div>
          </div>

          <div className="w-1/2 pr-6 text-right">
            <div className="text-4xl"><i class="ri-hourglass-fill"></i></div>
          </div>
        </div>
      </div>
      </section>


      {/* ======================= CTA AKHIR ======================= */}
      <section className="bg-gradient-to-br bg-primary py-24 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Siap Meraih Beasiswamu?
          </h2>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
            Jangan lewatkan kesempatan emas ini. Daftar sekarang dan mulai perjalananmu menuju pendidikan yang lebih baik.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">

            <Link
              to="/daftar"
              className="bg-secondary text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-primary2 transition-all flex items-center gap-2"
            >
              Daftar Sekarang ➜
            </Link>

            <Link
              to="/kontak"
              className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Hubungi Kami
            </Link>
          </div>
          <div className="flex items-center justify-center gap-10 text-sm text-gray-200 mt-10">
            <div className="flex items-center gap-2"><span className="text-secondary text-xl">•</span> Terpercaya</div>
            <div className="flex items-center gap-2"><span className="text-secondary text-xl">•</span> Gratis Pendaftaran</div>
            <div className="flex items-center gap-2"><span className="text-secondary text-xl">•</span> Didukung 50+ Partner</div>
          </div>
        </div>
      </section>

      {/* ======================= TESTIMONI ======================= */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center">
          Apa Kata <span className="text-primary">Penerima Beasiswa</span>
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
          Pengalaman nyata dari mereka yang telah berhasil meraih beasiswa impian
          dan melanjutkan pendidikan ke jenjang yang lebih tinggi.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14">

          {/* Testimoni 1 */}
          <div className="bg-gray-50 border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <p className="text-gray-600 text-sm italic mb-6">
              “Beasiswa ini sangat membantu saya melanjutkan studi S2 ke luar negeri
              tanpa khawatir biaya. Proses pendaftarannya juga jelas dan mudah.”
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                AR
              </div>
              <div>
                <h4 className="font-semibold">Andi Rahman</h4>
                <p className="text-xs text-gray-500">Penerima Beasiswa LPDP</p>
              </div>
            </div>
          </div>

          {/* Testimoni 2 */}
          <div className="bg-gray-50 border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <p className="text-gray-600 text-sm italic mb-6">
              “Dengan adanya beasiswa unggulan, saya bisa fokus belajar tanpa harus
              memikirkan biaya kuliah dan kebutuhan akademik.”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                NA
              </div>
              <div>
                <h4 className="font-semibold">Nabila Nur Cahyo</h4>
                <p className="text-xs text-gray-500">Mahasiswa S1</p>
              </div>
            </div>
          </div>

          {/* Testimoni 3 */}
          <div className="bg-gray-50 border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <p className="text-gray-600 text-sm italic mb-6">
              “Platform ini membantu saya menemukan beasiswa yang sesuai dengan
              jurusan dan minat saya. Sangat direkomendasikan!”
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                DF
              </div>
              <div>
                <h4 className="font-semibold">Dwi Febrianti</h4>
                <p className="text-xs text-gray-500">Penerima Beasiswa Dalam Negeri</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    <Footer />
    </div>
  );
}
