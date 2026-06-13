"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { 
  CloudRain, 
  ThermometerSun, 
  Mountain, 
  Globe, 
  Navigation, 
  CalendarDays,
  History,
  ArrowRight
} from "lucide-react";
import { galleryImage } from "@/data/data";

export default function AboutValparai() {
  const stats = [
    { icon: <Mountain />, label: "altitude", value: "1080 msl", desc: "anaimalai hills range" },
    { icon: <Navigation />, label: "location", value: "coimbatore, tn", desc: "via pollachi / chalakudi" },
    { icon: <CalendarDays />, label: "best season", value: "sep to may", desc: "perfect misty weather" },
    { icon: <CloudRain />, label: "rainfall", value: "500-5000 mm", desc: "cherrapunji of the south" },
  ];

  return (
    <main className="bg-white selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-emerald-950">
              <div className="absolute inset-0 opacity-40 ">
                 <img src="/HeroImages/valparai-tour-package.png" className="object-cover w-full h-full" alt="Attractions" />
              </div>
              <div className="container relative z-10 px-6 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
                      Explore the Anamalais
                  </span>
                  <h1 className="mb-6 text-5xl font-black tracking-tighter text-white uppercase md:text-7xl">
                      About <span className="text-emerald-500">Valparai</span>
                  </h1>
                  <p className="max-w-2xl mx-auto font-medium text-emerald-100/60">
                      From 40 hairpin bends to Asia's deepest reservoirs, witness the architectural and natural marvels of Valparai and Topslip.
                  </p>
                </motion.div>
              </div>
            </section>

      {/* 2. RESPONSIVE STATS SLIDER (Visible on Mobile, Grid on Desktop) */}
      <section className="py-10 overflow-hidden ">
        <div className="container px-6 mx-auto">
          <div className="mb-12">
             <h2 className="mb-2 text-xs font-black tracking-widest uppercase text-emerald-600">general information</h2>
             <p className="text-2xl font-black capitalize text-emerald-950">the geographical essence.</p>
          </div>

          <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 4, spaceBetween: 30, freeMode: false }
            }}
            className="stats-swiper !overflow-visible"
          >
            {stats.map((stat, i) => (
              <SwiperSlide key={i}>
                <div className="p-5 bg-white border border-slate-100 rounded-[2rem] h-full   hover:shadow-emerald-900/5 transition-all">
                  <div className="flex items-center justify-center w-5 h-5 mb-6 text-emerald-500 bg-emerald-50 rounded-xl">
                    {React.cloneElement(stat.icon, { size: 24 })}
                  </div>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="mb-2 font-black capitalize text-emerald-950">{stat.value}</p>
                  <p className="text-sm font-medium tracking-wider capitalize text-slate-400">{stat.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 3. HISTORY SECTION */}
      <section className="py-5">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div className="relative group">
              <div className="overflow-hidden aspect-[4/5]">
                <img src="/galleryImages/gvh.jpg" className="object-contain w-full h-full transition-all duration-700 rounded-xl " alt="valparai history" />
              </div>
            </div>

            <div>
              <h2 className="text-emerald-900 text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                the <span className=" text-emerald-500">heritage.</span>
              </h2>
              <p className="mb-8 font-medium leading-relaxed tracking-wider capitalize text-slate-500">
                valparai was originally known as <span className="font-bold text-emerald-900">naduvar</span>. the transformation into a planter's paradise began in 1848 with ramaswamy mudaliar, followed by the british pioneers w. wintil and carwer marsh.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start p-6 bg-slate-50 rounded-[2rem]">
                  <div className="p-3 font-bold bg-white shadow-sm rounded-xl text-emerald-500">01</div>
                  <p className="text-sm font-medium tracking-wider capitalize text-slate-600">carwer marsh, the 'father of anaimalais', established the first systematic tea and coffee plantations.</p>
                </div>
                <div className="flex gap-6 items-start p-6 bg-slate-50 rounded-[2rem]">
                  <div className="p-3 font-bold bg-white shadow-sm rounded-xl text-emerald-500">02</div>
                  <p className="text-sm font-medium tracking-wider capitalize text-slate-600">the iconic 40 hairpin bends from pollachi were constructed during the scheduled visit of the prince of wales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESPONSIVE GALLERY SLIDER */}
      <section className="pt-14 bg-emerald-950 rounded-t-[4rem] md:rounded-t-[6rem]">
        <div className="container px-6 mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-black tracking-tighter text-white capitalize md:text-7xl">
              visual <span className="text-emerald-500">gallery.</span>
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 }
            }}
            className="gallery-swiper "
          >
            {galleryImage.map((i) => (
              <SwiperSlide key={i}>
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 relative group">
                   <img src={i} className="object-cover w-full h-full transition-all duration-500 " />
                   <div className="absolute inset-0 flex items-end p-8 transition-opacity opacity-0 bg-gradient-to-t from-emerald-950/80 to-transparent group-hover:opacity-100">
                      <p className="text-lg font-black text-white capitalize">valparai captures.</p>
                   </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </main>
  );
}