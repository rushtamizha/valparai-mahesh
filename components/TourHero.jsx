"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function TourHero({ tour }) {
  return (
    <section className="relative capitalize h-[75vh] w-full bg-emerald-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          speed={3000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {tour.places?.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <img
                src={imgSrc}
                alt={`${tour.title} Gallery ${index + 1}`}
                className="object-cover w-full h-full scale-105 animate-subtle-zoom"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-black/20 to-black/40" />

      <div className="absolute bottom-0 left-0 z-20 w-full px-6">
        <div className="container mx-auto">
          <span className="px-5 py-2 bg-emerald-500 text-white rounded-full text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl inline-block mb-6">
            {tour.tag}
          </span>
          <h1 className="text-emerald-900  text-4xl  font-black tracking-tighter uppercase leading-[0.9] ">
            {tour.title.split(" ")[0]} <br />
            <span className="text-emerald-400">
              {tour.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>
        </div>
      </div>

      <style jsx global>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 12s infinite alternate linear;
        }
      `}</style>
    </section>
  );
}