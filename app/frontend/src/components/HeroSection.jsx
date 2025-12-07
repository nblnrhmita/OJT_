import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  const slides = [
    {
      title: "Minds Check",
      desc: "Kenali kondisi kesehatan mental Anda melalui asesmen komprehensif untuk memahami kesejahteraan emosional Anda.",
      bg: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?q=80&w=2070",
    },
    {
      title: "Bersama Membangun Kesehatan Mental",
      desc: "Kami hadir sebagai ruang aman untuk berbagi, belajar, dan bertumbuh bersama menuju kehidupan yang lebih sehat.",
      bg: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?q=80&w=2070",
    },
    {
      title: "Tempatmu Bertumbuh",
      desc: "Komunitas suportif, edukasi, dan berbagai kegiatan untuk meningkatkan kesejahteraan mental.",
      bg: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?q=80&w=2070",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[55vh] w-full flex items-center px-6 lg:px-20 
              bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Teks */}
              <div className="relative max-w-2xl text-white pb-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>

                <p className="mt-6 text-base sm:text-lg md:text-xl opacity-90">
                  {slide.desc}
                </p>

                {/* BUTTON */}
                <div className="absolute left-0 bottom-0 mt-10">
                  <a className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-primary2">
                    Cek Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
