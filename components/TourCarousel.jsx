"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MapPin, Clock, Car, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { tourPackages } from "@/data/data";
import Image from "next/image";

const TourCarousel = () => {
  return (
    <section className="capitalize bg-white pt-15">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-end justify-between gap-6 mb-5 md:flex-row">
          <div className="max-w-2xl">
            <span className="block mb-2 text-xs font-semibold tracking-wider uppercase text-emerald-500">
                Our Packages
              </span>
            <h2 className="text-emerald-900 text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              Featured <span className="text-emerald-500">Packages</span>
            </h2>
            <p className="font-medium leading-relaxed tracking-wide text-slate-600">
              Carefully curated itineraries designed for the ultimate Western Ghats experience.
            </p>
          </div>
          <Link href="/packages" className="items-center hidden gap-2 text-sm font-bold tracking-widest uppercase transition-all md:flex text-emerald-600 hover:gap-4">
            View All Packages <ChevronRight size={18} />
          </Link>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          className="pb-16 tour-swiper"
        >
          {tourPackages.map((tour) => (
            <SwiperSlide key={tour.id}>
              <motion.div 
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100   shadow-slate-200/50 flex flex-col h-full group "
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-50">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm hidden">
                    <span className="text-[10px] font-black uppercase leading-relaxed tracking-wide text-emerald-800 ">{tour.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-4">
                  <h3 className="mb-4 text-lg font-black tracking-wide transition-colors text-slate-800 group-hover:text-emerald-600">
                    {tour.title}
                  </h3>

                  {/* Metadata Grid (Matching valparaiholidaytours info structure) */}
                  <div className="mb-3 space-y-3">
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600">
                        <Clock size={14} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-slate-400   tracking-wide ">Duration</span>
                        <span className="text-sm font-bold tracking-wide">{tour.duration}</span>
                      </div>
                    </div>          
                  </div>

                  {/* Footer Action */}
                  <div className="flex items-center justify-between pt-6 mt-auto border-t border-slate-50">
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase  tracking-wide">Price Starts</p>
                        <p className="text-lg font-black tracking-wide text-emerald-900">₹{tour.basePrice}</p>
                    </div>
                    <Link 
                        href={`/tour-packages/${tour.slug}`}
                        className="flex items-center justify-center w-12 h-12 text-white transition-colors rounded-full shadow-lg bg-emerald-900 hover:bg-emerald-500 shadow-emerald-900/20"
                    >
                        <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
            <Link href="/tour-packages" className="inline-block px-8 py-4 text-xs font-black tracking-widest uppercase bg-white border rounded-full border-slate-200 text-emerald-900">
                Explore All Packages
            </Link>
        </div>
      </div>

      <style jsx global>{`
        .tour-swiper .swiper-pagination-bullet-active {
            background: #10b981 !important;
            width: 24px !important;
            border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default TourCarousel;