"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import { MapPin, Camera, ArrowUpRight, Compass, Trees } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { attractions } from "@/data/data";
import Image from "next/image";


export default function AttractionsPage() {
  return (
    <main className="bg-white">
      {/* 1. DYNAMIC HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 opacity-40">
           <Image width={100}  height={100} src="/HeroImages/valparai-tour-package.png" className="object-cover w-full h-full" alt="Attractions" />
        </div>
        <div className="container relative z-10 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
                Explore the Anamalais
            </span>
            <h1 className="mb-4 text-4xl font-black tracking-tighter text-white uppercase md:text-7xl">
                Top <span className="text-emerald-500">Attractions</span>
            </h1>
            <p className="max-w-2xl mx-auto font-medium text-emerald-100">
                From 40 hairpin bends to Asia's deepest reservoirs, witness the architectural and natural marvels of Valparai and Topslip.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED SWIPER (Mobile Friendly) */}
      <section className="py-10 overflow-hidden ">
        <div className="container px-6 mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="mb-2 text-xs font-black tracking-widest uppercase text-emerald-600">Editor's Pick</h2>
              <p className="text-3xl font-black text-slate-900">Must-Visit Spots</p>
            </div>
            <div className="hidden gap-2 md:flex">
               <Compass className="text-emerald-200" size={40} />
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, FreeMode]}
            spaceBetween={20}
            slidesPerView={1.2}
            freeMode={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 }
            }}
            className="pb-12"
          >
            {attractions.slice(0, 5).map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden group">
                  <Image width={100}  height={100} src={item.image} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2 block">{item.tag}</span>
                    <h3 className="text-2xl font-black leading-tight text-white">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 3. MAIN GALLERY GRID */}
      <section className="py-14">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="aspect-square rounded-[3.5rem] overflow-hidden bg-slate-100 border border-slate-100">
                   <Image width={100}  height={100} 
                    src={item.image} 
                    className="object-cover w-full h-full transition-all duration-500 " 
                    alt={item.title} 
                   />
                </div>
                
                <div className="flex items-start justify-between px-4 mt-6">
                  <div>
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{item.category}</span>
                    <h4 className="mt-1 text-xl font-black text-slate-800">{item.title}</h4>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="hidden px-6 py-14">
        <div className="container mx-auto">
          <div className="bg-emerald-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center">
            <Trees className="absolute w-64 h-64 -left-10 -bottom-10 text-white/5" />
            <div className="relative z-10">
              <h2 className="mb-8 text-4xl font-black leading-none tracking-tighter text-white md:text-6xl">
                Ready to Experience <br/> These <span className="text-emerald-400">Wonders?</span>
              </h2>
              <p className="max-w-xl mx-auto mb-12 font-medium text-emerald-100/60">
                Our guided tours ensure you don't just see these places, but experience the stories and wildlife behind them.
              </p>
              <div className="flex flex-col justify-center gap-4 md:flex-row">
                <button className="px-10 py-5 text-xs font-black tracking-widest uppercase transition-all rounded-full bg-emerald-500 text-emerald-950 hover:bg-white">
                    Book a Package
                </button>
                <button className="px-10 py-5 text-xs font-black tracking-widest text-white uppercase transition-all border rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                    Contact Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}