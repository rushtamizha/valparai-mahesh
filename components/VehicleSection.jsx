"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Users, Briefcase, Snowflake, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { fleet } from "@/data/data";

const VehicleSection = () => {
  return (
    <section className="capitalize bg-white" id="car-rentals">
      <div className="container px-4 mx-auto">
        {/* Header - Matching TourCarousel Style */}
        <div className="max-w-3xl mb-10">
          <span className="block mb-2 text-xs font-semibold tracking-wider uppercase text-emerald-500">
            Our Private Fleet
          </span>
          <h2 className="text-emerald-900 text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
            Luxury <span className="text-emerald-500">FleetS</span> 
          </h2>
          <p className="font-medium leading-relaxed tracking-wider text-slate-500 text">
            Owned and operated by Mahesh Travels, our 13+ vehicles are maintained to 
            enterprise standards for your safety and comfort.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="vehicle-swiper !pb-20"
        >
          {fleet.map((vehicle) => (
            <SwiperSlide key={vehicle.id}>
              <motion.div 
                className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 group h-full flex flex-col"
              >
                {/* Image Container with Peak Effect */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full transition-transform duration-1000 object-fit group-hover:scale-110"
                  />
                  <div className="absolute top-5 left-5 bg-emerald-950/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-xl">
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">
                      {vehicle.type}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow p-4">
                  <h3 className="mb-4 text-lg font-black tracking-wide transition-colors text-slate-800 group-hover:text-emerald-600">
                    {vehicle.name}
                  </h3>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-white shadow-sm rounded-xl text-emerald-600">
                        <Users size={18} />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-white shadow-sm rounded-xl text-emerald-600">
                        <Briefcase size={18} />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{vehicle.bags}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 pt-6 mt-auto border-t border-slate-200">
                    {vehicle.features.map((feat, i) => (
                      <span 
                        key={i} 
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100/50 rounded-lg text-[10px] font-black text-emerald-800 uppercase tracking-widest"
                      >
                        <ShieldCheck size={12} /> {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .vehicle-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #cbd5e1;
            opacity: 1;
            transition: all 0.3s ease;
        }
        .vehicle-swiper .swiper-pagination-bullet-active {
            background: #10b981 !important;
            width: 35px !important;
            border-radius: 20px !important;
        }
      `}</style>
    </section>
  );
};

export default VehicleSection;