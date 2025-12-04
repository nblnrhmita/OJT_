import React from "react";

const berita = [
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "/img/berita1.jpg",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "/img/berita1.jpg",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "/img/berita1.jpg",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "/img/berita1.jpg",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "/img/berita1.jpg",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "/img/berita1.jpg",
  },
];

export default function Artikel() {
  return (
    <section className="py-12 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-primary">
          Artikel Terbaru
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          doloremque culpa itaque voluptatum eum repellat.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {berita.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-3"
            >
              <img
                src={item.gambar}
                className="w-full h-40 object-cover rounded-lg"
                alt={item.judul}
              />

              <p className="text-sm text-gray-400 mt-3">{item.tanggal}</p>
              <h3 className="font-semibold text-gray-900 mt-1">{item.judul}</h3>

              <p className="text-gray-600 text-sm mt-2">{item.deskripsi}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition flex items-center gap-2">
            Artikel Lainnya
            <span>➜</span>
          </button>
        </div>
      </div>
    </section>
  );
}
