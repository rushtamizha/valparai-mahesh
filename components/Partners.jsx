"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

const partners = [
  "/partners/partners-1.jpg",
  "/partners/partners-2.jpg",
  "/partners/partners-3.jpg",
  "/partners/partners-4.jpg",
  "/partners/partners-5.jpeg",
];

export default function TravelPartners() {
  return (
    <section className="pb-10 bg-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mb-10">
          <span className="block mb-2 text-xs font-semibold tracking-wider uppercase text-emerald-500">
            Trusted By
          </span>
         <h2 className="text-slate-900 text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9]">
            Our Travel <span className="text-emerald-500">Partners</span>
          </h2>
          <p className="font-medium leading-relaxed tracking-wider text-slate-500 text">
            We collaborate with leading travel brands and hospitality
            partners to provide memorable travel experiences.
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 10,
                spaceBetween: 50,
              },
            }}
          >
            {partners.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center m-3 transition-all duration-300 bg-white rounded-3xl border-slate-100 ">
                  <Image width={100}  height={100}
                    src={logo}
                    alt="Travel Partner"
                    className="object-contain w-full h-full transition-all duration-300 rounded-full "/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}