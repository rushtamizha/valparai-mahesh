"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  Flame,
  Car,
  Utensils,
  Baby,
  Clock,
  ShieldCheck,
  BedDouble,
  MessageCircle,
  ChevronRight,
  X,
  User,
  Phone,
  Calendar,
  Users,
  Send,
  Hotel
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { roomsData } from "@/data/data";

// --- MODAL COMPONENT ---
const BookingModal = ({ isOpen, onClose, roomName, whatsappNumber }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    adults: "2",
    children: "0",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*HOTEL BOOKING ENQUIRY*%0A` +
      `--------------------------%0A` +
      `*Room Type:* ${roomName}%0A` +
      `*Guest Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Check-in Date:* ${formData.date}%0A` +
      `*Adults:* ${formData.adults}%0A` +
      `*Children:* ${formData.children}%0A` +
      `--------------------------`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl relative"
      >
        <button onClick={onClose} className="absolute p-2 transition-colors rounded-full right-6 top-6 bg-slate-100 hover:bg-slate-200 text-slate-500">
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-600">
              <Hotel size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black leading-none tracking-tighter uppercase text-slate-900">Book Your Stay</h3>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">{roomName}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-4 text-emerald-500" size={18} />
              <input required type="text" placeholder="Name of Booking" className="w-full py-4 pl-12 pr-4 text-sm font-bold outline-none text-emerald-700 bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500" 
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-4 text-emerald-500" size={18} />
              <input required type="tel" placeholder="Phone Number" className="w-full py-4 pl-12 pr-4 text-sm font-bold outline-none bg-slate-50 text-emerald-700 rounded-2xl focus:ring-2 focus:ring-emerald-500"
                onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>

            <div className="relative">
              <Calendar className="absolute left-4 top-4 text-emerald-500" size={18} />
              <input required type="date" className="w-full py-4 pl-12 pr-4 text-sm font-bold outline-none bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500 text-emerald-700"
                onChange={(e) => setFormData({...formData, date: e.target.value})} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Users className="absolute left-4 top-4 text-emerald-500" size={18} />
                <select className="w-full py-4 pl-12 pr-4 text-sm font-bold outline-none appearance-none text-emerald-700 bg-slate-50 rounded-2xl"
                  onChange={(e) => setFormData({...formData, adults: e.target.value})}>
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Adults</option>)}
                </select>
              </div>
              <div className="relative">
                <Baby className="absolute left-4 top-4 text-emerald-500" size={18} />
                <select className="w-full py-4 pl-12 pr-4 text-sm font-bold outline-none appearance-none text-emerald-700 bg-slate-50 rounded-2xl"
                  onChange={(e) => setFormData({...formData, children: e.target.value})}>
                  {[0,1,2,3,4].map(n => <option key={n} value={n}>{n} Child's</option>)}
                </select>
              </div>
            </div>

            <button type="submit" className="w-full py-5 bg-emerald-600 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center justify-center gap-3">
              Confirm & Book Now <Send size={16} />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};


export default function AccommodationPage() {
  const whatsappNumber = "919876543210";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");

  const openBooking = (roomName) => {
    setSelectedRoom(roomName);
    setIsModalOpen(true);
  };

  const heroData = {
    tag: "Premium Accommodation",
    title: "Luxury Hotel Stays & Resorts",
    images: roomsData[0]?.images || [],
  };

  return (
    <main className="min-h-screen bg-white" id="hotels">
   {/* Description Section */}
      <section className="py-12 bg-white">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-end justify-between gap-6 mb-5 md:flex-row">
            <div className="max-w-2xl">
              <span className="block mb-2 text-xs font-semibold tracking-wider uppercase text-emerald-500">Premium Accommodation</span>
              <h2 className="text-emerald-900 text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] mb-4">Luxury Hotel <span className="text-emerald-500">Stays & Resorts</span></h2>
              <p className="font-medium leading-relaxed tracking-wide text-slate-600">Comfortable stays with premium amenities, beautiful interiors, and peaceful surroundings.</p>
            </div>
            <button onClick={() => openBooking("General Enquiry")} className="flex items-center gap-3 px-6 py-4 text-sm font-bold text-white transition-all rounded-full shadow-lg bg-emerald-500 hover:scale-105">
              <MessageCircle size={18} /> WhatsApp Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* Rooms Swiper */}
      <section className="overflow-hidden bg-white pb-14">
        <div className="container px-5 mx-auto">
          <Swiper modules={[Autoplay]} spaceBetween={24} loop={true} breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }} className="!overflow-visible">
            {roomsData.map((room) => (
              <SwiperSlide key={room.id}>
                <div className="overflow-hidden bg-white border border-slate-100 rounded-[2.5rem] group">
                  <div className="relative overflow-hidden h-72">
                    <img src={room.images[0]} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" alt={room.name} />
                  </div>
                  <div className="p-7">
                    <h2 className="mb-4 text-lg font-black text-slate-800">{room.name}</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.features.slice(0, 3).map((f, i) => (
                        <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase rounded-full bg-slate-100 text-slate-600">{f}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                      <div>
                        <p className="text-xs uppercase text-slate-400">Starting From</p>
                        <h3 className="text-lg font-black text-emerald-600">{room.price}</h3>
                      </div>
                      <button 
                        onClick={() => openBooking(room.name)}
                        className="flex items-center gap-2 px-5 py-3 text-xs font-black text-white uppercase transition-all rounded-full bg-emerald-500 hover:bg-emerald-600"
                      >
                        Book Now <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal Integration */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        roomName={selectedRoom} 
        whatsappNumber={whatsappNumber} 
      />

      <style jsx global>{`
        @keyframes subtle-zoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        .animate-subtle-zoom { animation: subtle-zoom 12s infinite alternate linear; }
      `}</style>
    </main>
  );
}