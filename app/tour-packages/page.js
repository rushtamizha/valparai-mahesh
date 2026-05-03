"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { tourPackages } from "@/data/data";

const PackagesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter logic for the search bar
  const filteredPackages = tourPackages.filter((pkg) =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.destination?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* HEADER SECTION */}
        <header className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <MapPin size={12} /> Explore the Western Ghats
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-emerald-900 uppercase tracking-tighter leading-none mb-6">
            Tour <span className="text-emerald-500">Packages</span>
          </h1>
          <p className="text-slate-600 text-lg font-medium max-w-2xl">
            From short weekend getaways to grand South Indian expeditions. 
            Choose your perfect itinerary crafted by local experts.
          </p>
        </header>

        {/* FILTER & SEARCH BAR */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search destinations (Valparai, Kerala, Temple Tours...)"
              className="w-full pl-16 pr-6 py-5 bg-white border border-slate-200 rounded-[2rem] text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center gap-3 px-8 py-5 bg-white border border-slate-200 rounded-[2rem] text-emerald-900 font-black text-xs uppercase tracking-widest hover:bg-emerald-50 transition-colors shadow-sm">
            <SlidersHorizontal size={18} /> Filters
          </button>
        </div>

        {/* RESULTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all flex flex-col h-full"
            >
              {/* Image Area */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-emerald-900 uppercase tracking-widest shadow-sm">
                  {pkg.duration}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-slate-800 leading-tight uppercase group-hover:text-emerald-600 transition-colors">
                    {pkg.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-sm font-medium line-clamp-2 mb-8">
                  {pkg.description}
                </p>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Clock size={14} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 uppercase">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <MapPin size={14} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 uppercase">{pkg.tourFrom}</span>
                  </div>
                </div>

                {/* Footer / CTA */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Starting From</span>
                    <span className="text-xl font-black text-emerald-900">₹{pkg.basePrice || "2,999"}</span>
                  </div>
                  <Link 
                    href={`/tours/${pkg.slug}`}
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all group/btn"
                  >
                    View Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-40">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full text-slate-400 mb-6">
              <Search size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">No Packages Found</h3>
            <p className="text-slate-500 font-medium mt-2">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default PackagesPage;