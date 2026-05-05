"use client";
import React from "react";
import { motion } from "framer-motion";
import { tourPackages } from "@/data/data";
import { Clock, ArrowUpRight, MapPin, Search } from "lucide-react";
import Link from "next/link";

const TourCard = ({ tour }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 flex flex-col h-full group transition-all duration-500"
  >
    {/* Image Container */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={tour.image} 
        alt={tour.title}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
        <span className="text-[10px] font-black uppercase leading-relaxed tracking-wide text-emerald-800">
          {tour.tag || "Special Tour"}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-grow p-6">
      <h3 className="mb-4 text-xl font-black leading-tight tracking-tight transition-colors text-slate-800 group-hover:text-emerald-600">
        {tour.title}
      </h3>

      <div className="mb-6 space-y-3">
        {/* Duration */}
        <div className="flex items-center gap-3 text-slate-600">
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600">
            <Clock size={16} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Duration</span>
            <span className="text-sm font-bold tracking-wide">{tour.duration}</span>
          </div>
        </div>
        
        {/* Starting Point (Optional - extracted from your data) */}
        <div className="flex items-center gap-3 text-slate-600">
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-50 text-slate-400">
            <MapPin size={16} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Starts From</span>
            <span className="text-sm font-bold tracking-wide">{tour.tourFrom || "Tamil Nadu"}</span>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="flex items-center justify-between pt-5 mt-auto border-t border-slate-50">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Best Price</p>
          <p className="text-xl font-black tracking-tight text-emerald-900">
            {tour.basePrice === "On Request" ? "On Request" : `₹${tour.basePrice}`}
          </p>
        </div>
        <Link 
          href={`/tours/${tour.slug}`}
          className="flex items-center justify-center text-white transition-all rounded-full shadow-lg w-14 h-14 bg-emerald-900 hover:bg-emerald-500 hover:-rotate-12 shadow-emerald-900/20"
        >
          <ArrowUpRight size={24} />
        </Link>
      </div>
    </div>
  </motion.div>
);

export default function PackagesPage() {
  return (
    <main className="min-h-screen capitalize bg-white py-30">
      <div className="container px-4 mx-auto">
        
        {/* Page Title Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
            Exclusive Itineraries
          </span>
          <h1 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.8] mb-8">
            All <span className="text-emerald-500 text-outline">Tour</span> <br /> Packages.
          </h1>
          <p className="max-w-xl text-lg font-medium text-slate-500">
            From the misty peaks of Valparai to the backwaters of Alleppey—explore our complete range of South Indian holiday experiences.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tourPackages.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Need Help Section */}
        <div className="mt-24 bg-emerald-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="mb-6 text-3xl font-black tracking-tighter md:text-5xl">Can't find what you're <br/> looking for?</h2>
                <p className="max-w-lg mx-auto mb-8 font-medium text-emerald-200">We specialize in customized itineraries tailored to your specific needs and budget.</p>
                <Link href="/contact" className="inline-block px-10 py-5 text-xs font-black tracking-widest uppercase transition-colors bg-white rounded-full text-emerald-900 hover:bg-emerald-50">
                    Plan My Custom Trip
                </Link>
            </div>
            {/* Decoration */}
            <div className="absolute w-64 h-64 rounded-full opacity-50 -top-10 -right-10 bg-emerald-800 blur-3xl"></div>
            <div className="absolute w-64 h-64 rounded-full opacity-50 -bottom-10 -left-10 bg-emerald-800 blur-3xl"></div>
        </div>

      </div>
    </main>
  );
}