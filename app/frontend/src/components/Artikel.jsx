import React from "react";

const berita = [
  {
    tanggal: "Agustus 25, 2025",
    judul: "Memulai Kebiasaan Journaling",
    deskripsi:
      "Mau cara super gampang buat ngilangin stres? Jawabannya: JOURNALING!",
    gambar: "artikel/Capture.PNG",
    link: "https://www.instagram.com/p/DPsKHsaE_9h/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Isi piringmu dengan gizi seimbang.",
    deskripsi:
      "Ingat, hidup sehat itu enggak harus ribet, mulai dari hal kecil saja. Kuncinya ada pada konsistensi. Yuk, jaga diri dengan...",
    gambar: "artikel/Capture2.PNG",
    link: "https://www.instagram.com/p/DPuu_GIExOK/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Afirmasi Positif Harian",
    deskripsi:
      "Hari ini aku memilih tenang. percaya diri, mampu, dan pantas untuk setiap kesempatan yang datang kepadaku. ",
    gambar: "artikel/Capture3.PNG",
    link: "https://www.instagram.com/p/DQ4ArT3D1aW/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "7 Softskills",
    deskripsi:
      "Kamu gak butuh motivasi, kamu butuh SISTEM! Temukan cara bikin habit jadi mudah, mengatasi hari buruk. ",
    gambar: "artikel/Capture4.PNG",
    link: "https://www.instagram.com/p/DP-QpDWkzpb/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "5 Mitos Kesehatan",
    deskripsi:
      "Nggak semua yang sering kamu dengar soal kesehatan itu benar, loh! Yuk geser sampai akhir biar nggak salah kaprah soal tubuhmu sendiri.",
    gambar: "artikel/Capture5.PNG",
    link: "https://www.instagram.com/p/DPviyYlgM1z/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Tetap bersaing di 2025",
    deskripsi:
      "Sekarang bukan lagi soal siapa yang paling pintar, tapi siapa yang mau terus belajar dan beradaptasi. ",
    gambar: "artikel/Capture6.PNG",
    link: "https://www.instagram.com/p/DPqXCmyEVOj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

export default function Artikel() {
  return (
    <section className="py-20 px-6 from-white to-secondary/10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-2">
          Artikel Terbaru
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Insight baru seputar kesehatan mental untuk menemani perjalananmu.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {berita.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] 
                transition-all duration-300 p-4 border border-gray-100"
              >
                {/* Image */}
                <img
                  src={item.gambar}
                  className="w-full h-48 object-cover rounded-xl"
                  alt={item.judul}
                />

                {/* Date */}
                <p className="text-sm text-gray-400 mt-4">{item.tanggal}</p>

                {/* Title */}
                <h3 className="font-semibold text-primary mt-2 text-lg leading-snug">
                  {item.judul}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-4 line-clamp-3">
                  {item.deskripsi}
                </p>

                {/* Read more */}
                <p className="mt-4 text-primary font-medium text-sm">
                  Baca Selengkapnya →
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Button - All Articles */}
        <div className="flex justify-center mt-14">
          <a
            href="https://www.instagram.com/kami.mindsunited/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-7 py-3 rounded-full font-semibold 
            hover:bg-primary2 transition-all shadow-md flex items-center gap-2"
          >
            Artikel Lainnya
            <span>➜</span>
          </a>
        </div>
      </div>
    </section>
  );
}
