import React from "react";

const programDonasi = [
  {
    title: "Mabit Inspiratif 2025",
    desc: "Sungguh beruntung orang yang menyucikan jiwa, dan sungguh rugi orang yang mengotorinya..",
    terkumpul: "Rp 42.251",
    waktu: "39 Hari",
    gambar: "/img/donasi1.jpg",
    badge: "2025",
  },
  {
    title: "Mabit Inspiratif 2025",
    desc: "Sungguh beruntung orang yang menyucikan jiwa, dan sungguh rugi orang yang mengotorinya..",
    terkumpul: "Rp 42.251",
    waktu: "39 Hari",
    gambar: "/img/donasi1.jpg",
    badge: "2025",
  },
  {
    title: "Mabit Inspiratif 2025",
    desc: "Sungguh beruntung orang yang menyucikan jiwa, dan sungguh rugi orang yang mengotorinya..",
    terkumpul: "Rp 42.251",
    waktu: "39 Hari",
    gambar: "/img/donasi1.jpg",
    badge: "2025",
  },
];

export default function Program() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <h2 className="text-center text-2xl font-bold text-green-600">
          Lorem, ipsum dolor.
        </h2>
        <p className="text-center text-green-600 mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {programDonasi.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              {/* Gambar */}
              <div className="relative">
                <img
                  src={item.gambar}
                  alt={item.title}
                  className="rounded-t-2xl w-full h-44 object-cover"
                />
                {item.badge && (
                  <span className="absolute top-2 right-2 bg-white text-green-600 px-3 py-1 rounded-full text-sm font-bold shadow">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Konten */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                <div className="mt-4 border-t pt-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Donasi Terkumpul</span>
                    <span className="font-semibold">{item.terkumpul}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-500">Sisa Waktu</span>
                    <span className="font-semibold">{item.waktu}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol */}
        <div className="flex justify-center mt-10">
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded-full font-medium hover:bg-green-600 hover:text-white transition">
            Lihat Lainnya
          </button>
        </div>
      </div>
    </section>
  );
}
