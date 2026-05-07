"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
// Ensure these paths match your folder structure
import { navData, companyConfig } from "@/data/data"; 

const Navbar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-5 capitalize w-full flex justify-center px-4 z-[999]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-8xl rounded-full p-3 flex items-center justify-between shadow-sm transition-all duration-500 ${
          scrolled ? "bg-white backdrop-blur-md border-white/40 shadow-lg" : "bg-white border-slate-200"
        }`}
      >
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 px-4 cursor-pointer group">
          <div className="relative flex-shrink-0 transition-transform duration-300 h-11 w-11 group-hover:scale-110">
            <img 
              src={companyConfig.logo} 
              alt={companyConfig.name} 
              className="object-cover w-full h-full border-2 rounded-full border-emerald-50" 
            />
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <h1 className={`text-sm sm:text-lg font-black tracking-tighter uppercase transition-colors ${
              scrolled ? "text-emerald-900" : "text-emerald-800"
            }`}>
              {companyConfig.name.split(' ').slice(0, 2).join(' ')} 
              <span className="ml-1 text-emerald-500">{companyConfig.name.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-[8px] font-bold tracking-[0.3em] text-gray-500 uppercase">Explore with happiness</p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="items-center hidden px-4 space-x-1 xl:flex">
          {navData.map((menu, idx) => (
            <div
              key={idx}
              className="relative px-3 py-2 transition-all rounded-full cursor-pointer hover:bg-emerald-50 group"
              onMouseEnter={() => setActiveMenu(menu.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link href={menu.link || "#"}>
                <span className="text-[13px] font-bold text-slate-700 hover:text-emerald-600 flex items-center gap-2">
                  <span className="hidden transition-colors opacity-70 group-hover:text-emerald-500">{menu.icon}</span>
                  {menu.name}
                  {menu.items && (
                    <ChevronDown size={14} className="transition-transform duration-300 opacity-40 group-hover:rotate-180" />
                  )}
                </span>
              </Link>

              {/* DROPDOWN */}
              <AnimatePresence>
                {activeMenu === menu.name && menu.items && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4 w-64 bg-white border border-emerald-50 shadow-2xl rounded-[1.5rem] p-3 flex flex-col gap-1 z-[1000]"
                  >
                    {menu.items.map((subItem, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          router.push(`/${menu.slug}/${subItem.slug}`);
                          setActiveMenu(null);
                        }}
                        className="flex items-center gap-3 text-left px-4 py-3 text-[12px] font-bold text-slate-700 hover:bg-emerald-600 hover:text-white rounded-xl transition-all group/item"
                      >
                        <span className="transition-colors text-emerald-500 group-hover/item:text-white">
                          {subItem.icon}
                        </span>
                        {subItem.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT CTA */}
        <div className="items-center hidden gap-3 px-2 xl:flex">
          <button
            onClick={() => router.push('/contact')}
            className="flex items-center gap-2 py-3 text-xs font-black tracking-wider text-white uppercase transition-all rounded-full shadow-md bg-emerald-900 px-7 hover:bg-emerald-700"
          >
            Book Now
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)} 
          className="flex items-center justify-center w-10 h-10 transition-colors rounded-full xl:hidden bg-slate-50 text-emerald-900 hover:bg-emerald-100"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden fixed inset-4 top-24 bg-white rounded-[2.5rem] shadow-2xl border p-6 overflow-y-auto z-50"
          >
            <div className="flex flex-col gap-6">
              {navData.map((menu, idx) => (
                <div key={idx} className="pb-4 border-b border-slate-50">
                  <div className="flex items-center gap-2 mb-3 text-emerald-800 opacity-60">
                    {menu.icon}
                    <h3 className="font-black text-[10px] uppercase tracking-widest">
                      {menu.name}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {menu.items ? (
                      menu.items.map((subItem, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            router.push(`/${menu.slug}/${subItem.slug}`);
                            setIsMobileOpen(false);
                          }}
                          className="flex items-center gap-3 p-3 text-sm font-bold text-left transition-all text-slate-800 bg-slate-50 rounded-2xl active:bg-emerald-100"
                        >
                          <span className="text-emerald-500">{subItem.icon}</span>
                          {subItem.name}
                        </button>
                      ))
                    ) : (
                      <Link 
                        href={menu.link} 
                        onClick={() => setIsMobileOpen(false)} 
                        className="flex items-center gap-3 p-3 text-sm font-bold text-slate-800 bg-slate-50 rounded-2xl"
                      >
                        <span className="text-emerald-500">{menu.icon}</span>
                        {menu.name}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="flex flex-col gap-3 pt-2">
                 <button
                  onClick={() => {
                    router.push('/contact')
                    setIsMobileOpen(false)
                  }}
                  className="w-full bg-emerald-900 text-white py-4 rounded-[1.5rem] text-sm font-black flex items-center justify-center gap-2 shadow-xl"
                >
                  <MessageCircle size={18} /> CONTACT US
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;