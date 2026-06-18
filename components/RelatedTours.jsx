"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function RelatedTours({ tours }) {
  return (
    <div className="w-full capitalize">
      <h3 className="text-xs font-black text-emerald-900 uppercase tracking-[0.4em] mb-8 lg:mb-10 flex items-center gap-4">
        Other Experiences <div className="h-[1px] flex-1 bg-emerald-100" />
      </h3>

      {/* MOBILE: SWIPEABLE SLIDER */}
      <div className="lg:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2} // Show a bit of the next card
          centeredSlides={false}
          loop={false}
          className="pb-12"
        >
          {tours.map((item) => (
            <SwiperSlide key={item.slug}>
              <TourSidebarCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* DESKTOP: VERTICAL LIST */}
      <div className="flex-col hidden gap-6 lg:flex">
        {tours.map((item) => (
          <TourSidebarCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

function TourSidebarCard({ item }) {
  return (
    <Link href={`/tour-packages/${item.slug}`} className="block group">
      <div className="relative h-64 lg:h-48 rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
        <Image width={100}  height={100} 
          src={item.image} 
          alt={item.title} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent opacity-80" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">{item.duration}</span>
          <h4 className="mt-1 text-lg font-black leading-tight tracking-tighter text-white uppercase transition-colors group-hover:text-emerald-400">
            {item.title}
          </h4>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-black text-white">₹{item.basePrice}</span>
            <div className="flex items-center justify-center w-8 h-8 text-white transition-all rounded-full bg-white/10 backdrop-blur-md group-hover:bg-emerald-500">
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}