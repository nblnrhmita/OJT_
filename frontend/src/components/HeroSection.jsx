import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Tentang Kami", href: "#" },
  { name: "Program", href: "#" },
  { name: "Artikel", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      {/* NAVBAR */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <img
              src="/logo.png"
              alt=""
              className="ml-3 w-12 h-12 sm:w-14 sm:h-14"
            />
          </div>

          {/* Mobile button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-900 hover:text-green-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Login button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold text-green-300 hover:text-green-700"
            ></a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6">
            <div className="flex items-center justify-between">
              <img src="/logo.png" alt="" className="w-10" />
              <button
                type="button"
                className="p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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
