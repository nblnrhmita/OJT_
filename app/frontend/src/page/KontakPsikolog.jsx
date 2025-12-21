import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const psychologists = [
  {
    name: "Anna Deasyana, M.Psi.",
    role: "Psikolog klinis",
    status: "online",
    img: "https://personale.id/wp-content/uploads/2024/07/2.-Raissa.webp",
    link: "https://wa.me/081912850846"
  },
  {
    name: "Ida Bagus Jendra, M.Psi.",
    role: "Psikolog Klinis",
    status: "online",
    img: "https://psychology.binus.ac.id/files/2023/10/IMG_2803-480x480.jpeg",
    link: "https://wa.me/081912850846"
  },
  {
    name: "Alfreda Fathya, S.Psi.",
    role: "Psikolog Umum",
    status: "online",
    img: "https://personale.id/wp-content/uploads/2024/07/2.-Raissa.webp",
    link: "https://wa.me/081912850846"
  },
  {
    name: "Dian Junita, M.Psi.",
    role: "Psikolog klinis",
    status: "both",
    img: "https://personale.id/wp-content/uploads/2024/07/2.-Raissa.webp",
    link: "https://wa.me/081912850846"
  },
  {
    name: "Zulfan Reza, M.Psi.",
    role: "Psikolog klinis",
    status: "online",
    img: "https://psychology.binus.ac.id/files/2023/10/IMG_2803-480x480.jpeg",
    link: "https://wa.me/081912850846"
  },
  {
    name: "Lydia Augustina, M.Psi.",
    role: "Psikolog klinis",
    status: "both",
    img: "https://personale.id/wp-content/uploads/2024/07/2.-Raissa.webp",
    link: "https://wa.me/081912850846"
  }
];

export default function PsychologistGrid() {
  return (
    <div className="min-h-screen bg-white">
      {/* ======================= NAVBAR ======================= */}
      <Navbar />

      <div className="min-h-screen bg-white py-20 px-6 flex flex-col items-center">
        <span className="backdrop-blur-md bg-white/20 text-sm px-4 py-1 rounded-full border border-white/30 mb-5 text-primary shadow-lg">
          Psikolog Tersedia
        </span>

        <h1 className="text-primary font-extrabold text-4xl text-center leading-snug">
          Mau Mulai Konsultasi?
          <br />
          Kenali Psikolog Terbaik Kami!
        </h1>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-25 w-full max-w-6xl relative z-10 ">
          {psychologists.map((p, i) => (
            <div
              key={i}
              className="
                relative p-8 pt-16 rounded-3xl text-center shadow-xl
                bg-white/10 border border-white/20
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-3 hover:text-teal-500
              "
            >
              {/* Profile Picture */}
              <img
                src={p.img}
                alt={p.name}
                className="
                  w-24 h-24 rounded-full object-cover border-4 border-white/40 shadow-xl
                  absolute left-1/2 -translate-x-1/2 -top-10
                "
              />

              {/* Name + Role */}
              <h3 className="font-bold text-primary text-lg mt-6 tracking-wide">
                {p.name}
              </h3>
              <p className="text-primary text-sm mb-5">{p.role}</p>

              {/* Buttons */}
              {p.status === "online" && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    bg-primary hover:bg-teal-500 text-white text-sm
                    px-5 py-2 rounded-full
                    transition shadow-md backdrop-blur-md
                  "
                >
                  Konsultasi Online
                </a>
              )}


              {p.status === "both" && (
                <div className="flex gap-3 justify-center">
                  <button
                    className="
                      bg-primary hover:bg-teal-500 text-white text-sm px-5 py-2 rounded-full
                      transition shadow-md backdrop-blur-md
                    "
                  >
                    Konsultasi Online
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ======================= FOOTER ======================= */}
      <Footer />
    </div>
  );
}
