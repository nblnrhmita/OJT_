import React from "react";

const berita = [
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "https://i.pinimg.com/1200x/b8/d3/20/b8d320b824bae05298e03e66e7f1e41a.jpg",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "https://i.pinimg.com/736x/27/9e/ee/279eeeb94a52e9146a06e7cb32c06fc3.jpg",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "https://i.pinimg.com/736x/a1/a3/b0/a1a3b09863e8ad92aa6aab6643d667a0.jpg",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "https://i.pinimg.com/736x/8e/31/20/8e31206604cc29706c580022890d09b3.jpg",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "https://i.pinimg.com/736x/b9/77/04/b977045032820f7d5ab7e204db0b39aa.jpg",
  },
  {
    tanggal: "Agustus 25, 2025",
    judul: "Pena Guru, Cahaya Bangsa",
    deskripsi:
      "Goresan yang Mengubah Arah Hidup Di balik setiap keberhasilan anak bangsa, ada peran guru yang [...]",
    gambar: "https://i.pinimg.com/736x/37/69/71/3769719a5cb3bb49d41a6225d15b4084.jpg",
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
