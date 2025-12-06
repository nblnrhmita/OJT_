import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  const slides = [
    {
      title: "Minds Check",
      desc: "Kenali Kondisi kesehatan mental anda lakukan analisis mandiri melalu asesmen komprehensif yang dirancang untuk membantu anda memahami berbagai aspek kesejahtreaan mental.",
    },
    {
      title: "Bersama Membangun Kesehatan Mental",
      desc: "Kami hadir sebagai ruang aman untuk berbagi, belajar, dan bertumbuh bersama menuju kehidupan yang lebih sehat.",
    },
    {
      title: "Tempatmu Bertumbuh",
      desc: "Kami menyediakan komunitas yang suportif, edukasi, dan berbagai kegiatan untuk meningkatkan kesejahteraan mental.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <div className="relative isolate items-center px-4 sm:px-6 pt-28 lg:px-30">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto max-w-2xl text-center pb-14">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                  {slide.title}
                </h1>

                <p className="mt-6 text-base sm:text-lg md:text-xl leading-8 text-gray-600">
                  {slide.desc}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row  gap-4">
                  <a className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary2">
                    Lorem, ipsum.
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
