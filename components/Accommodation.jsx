"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { 
  Wifi, Flame, Car, Utensils, Camera ,Baby, Clock, 
  ShieldCheck, BedDouble, ChevronRight, ChevronLeft 
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const roomData = [
  {
    title: "Standard Rooms",
    category: "Economic Stay",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
    desc: "Cozy and budget-friendly rooms perfect for solo travelers and quick stays.",
    price: "Starts from ₹1,500"
  },
  {
    title: "Deluxe Rooms",
    category: "Premium Comfort",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
    desc: "Spacious interiors with elegant decor and beautiful views of the tea gardens.",
    price: "Starts from ₹2,500"
  },
  {
    title: "Luxury Rooms",
    category: "Elite Experience",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    desc: "Experience high-end hospitality with modern amenities and a private sit-out area.",
    price: "Starts from ₹4,500"
  },
  {
    title: "Cottages & Resorts",
    category: "Independent Living",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=800",
    desc: "Private heritage bungalows and wooden chalets nestled deep within plantations.",
    price: "Starts from ₹8,000"
  }
];

const facilities = [
  { icon: <Clock size={20} />, label: "24h Power" },
  { icon: <Utensils size={20} />, label: "Multi-Cuisine" },
  { icon: <Flame size={20} />, label: "Bonfire & BBQ" },
  { icon: <Wifi size={20} />, label: "Free WiFi" },
  { icon: <Car size={20} />, label: "Car Parking" },
  { icon: <Baby size={20} />, label: "Play Area" },
  { icon: <ShieldCheck size={20} />, label: "Doctor On Call" },
  { icon: <BedDouble size={20} />, label: "King Beds" },
];

export default function AccommodationSwiper() {
  return (
    <section id="hotels" className="py-10 overflow-hidden font-sans bg-white ">
      <div className="container px-6 mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-8 mb-10 md:flex-row">
          <div className="max-w-2xl">
            <span className="block mb-2 text-xs font-semibold tracking-wider uppercase text-emerald-500">
              Accommodation
            </span>
            <h2 className="text-emerald-900 text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] ">
              Premium <span className="text-emerald-500">Hotel stays</span>
            </h2>
          </div>
          
          </div>
        {/* Swiper Carousel */}
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="accommodation-swiper !pb-12"
          >
            {roomData.map((room, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm  transition-all duration-500 border border-slate-100">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={room.image} 
                      alt={room.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute px-4 py-1 rounded-full top-4 left-4 bg-white/90 backdrop-blur-md">
                      <span className="text-[10px] font-black uppercase text-emerald-600">{room.category}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="mb-2 text-xl font-black text-slate-900">{room.title}</h3>
                    <p className="h-12 mb-6 overflow-hidden font-medium leading-relaxed tracking-wider text-slate-500">
                      {room.desc}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-sm font-bold text-slate-900">{room.price}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bento Grid Facilities */}
        <div className="grid grid-cols-4 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {facilities.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center gap-3 text-center bg-white border-slate-100"
            >
              <div className="text-emerald-500">{f.icon}</div>
              <span className="text-[9px] font-black uppercase text-slate-600">{f.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}