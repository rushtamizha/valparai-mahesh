"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Instagram, Camera } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { galleryImages } from "@/data/data";
import Image from "next/image";


const GallerySection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="capitalize bg-white pb-15 ">
      <div className="container px-4 mx-auto">
        {/* Header - Matching previous sections 100% */}
        <div className="flex flex-col justify-between gap-8 mb-16 md:flex-row">
          <div className="max-w-2xl">
            <span className="block mb-2 text-xs font-semibold tracking-wider uppercase text-emerald-500">
              Visual Journals
            </span>
            <h2 className="text-black text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              Capture The <span className="text-emerald-500">MOMENTS</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 pb-2">
             <div className="flex items-center justify-center w-12 h-12 bg-white shadow-sm rounded-2xl text-emerald-600">
                <Camera size={20} />
             </div>
             <p className="text-xs font-black tracking-widest uppercase text-slate-400">
                Follow us <br/> <span className="text-emerald-900">@maheshtravels</span>
             </p>
          </div>
        </div>

        {/* MOBILE: SWIPER SLIDER */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="gallery-swiper !pb-12"
          >
            {galleryImages.map((img) => (
              <SwiperSlide key={img.id}>
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl">
                  <Image width={100}  height={100} src={img.src} alt={img.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 flex items-end hidden p-8 bg-gradient-to-t from-emerald-950/80 to-transparent">
                    <p className="text-sm font-black tracking-widest text-white uppercase">{img.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP: BENTO MASONRY GRID */}
        <div className="hidden md:grid grid-cols-12 gap-6 h-[800px]">
          {/* Main Large Image */}
          <GalleryItem 
            img={galleryImages[0]} 
            className="col-span-7 row-span-2" 
            onClick={() => setSelectedImg(galleryImages[0])} 
          />
          <GalleryItem 
            img={galleryImages[1]} 
            className="col-span-5 row-span-1" 
            onClick={() => setSelectedImg(galleryImages[1])} 
          />
          <GalleryItem 
            img={galleryImages[2]} 
            className="col-span-5 row-span-1" 
            onClick={() => setSelectedImg(galleryImages[2])} 
          />
          <GalleryItem 
            img={galleryImages[3]} 
            className="col-span-4 row-span-1" 
            onClick={() => setSelectedImg(galleryImages[3])} 
          />
        </div>
      </div>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-emerald-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute text-white transition-transform top-10 right-10 hover:rotate-90">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              src={selectedImg.src} 
              className="max-w-full max-h-full rounded-[2rem] shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .gallery-swiper .swiper-pagination-bullet-active {
            background: #10b981 !important;
            width: 30px !important;
            border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

// Helper Component for Desktop Grid Items
const GalleryItem = ({ img, className, onClick }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`relative rounded-[3rem] overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500 ${className}`}
    onClick={onClick}
  >
    <Image width={100}  height={100} 
      src={img.src} 
      alt={img.title} 
      className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110" 
    />
    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-emerald-950/40 group-hover:opacity-100">
      <div className="flex items-center justify-center w-16 h-16 text-white rounded-full bg-white/20 backdrop-blur-md">
        <Maximize2 size={24} />
      </div>
    </div>
    <div className="absolute transition-all duration-500 transform translate-y-4 opacity-0 bottom-8 left-8 group-hover:translate-y-0 group-hover:opacity-100">
      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] block mb-1">{img.category}</span>
      <h4 className="text-xl font-black tracking-tighter text-white uppercase">{img.title}</h4>
    </div>
  </motion.div>
);

export default GallerySection;