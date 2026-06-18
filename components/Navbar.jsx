"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";
// Ensure these paths match your folder structure
import { navData, companyConfig } from "@/data/data";
import { div } from "framer-motion/client";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
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
          scrolled
            ? "bg-white backdrop-blur-md border-white/40 shadow-lg"
            : "bg-white border-slate-200"
        }`}
      >
        {/* LOGO SECTION */}
        <Link
          href="/"
          className="flex items-center gap-3 px-4 cursor-pointer group"
        >
          <div className="relative flex-shrink-0 transition-transform duration-300 h-11 w-11 group-hover:scale-110">
            <Image width={100}  height={100} 
              src={companyConfig.logo}
              alt={companyConfig.name}
              className="object-cover w-full h-full border-2 rounded-full border-emerald-50"
            />
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <p
              className={`text-sm sm:text-lg font-black tracking-tighter uppercase transition-colors ${
                scrolled ? "text-emerald-900" : "text-emerald-800"
              }`}
            >
              {companyConfig.name.split(" ").slice(0, 2).join(" ")}
              <span className="ml-1 text-emerald-500">
                {companyConfig.name.split(" ").slice(2).join(" ")}
              </span>
            </p>
            <p className="text-[8px] font-bold tracking-[0.3em] text-gray-500 uppercase">
              Explore with happiness
            </p>
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
                  <span className="hidden transition-colors opacity-70 group-hover:text-emerald-500">
                    {menu.icon}
                  </span>
                  {menu.name}
                  {menu.items && (
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 opacity-40 group-hover:rotate-180"
                    />
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
                    className={`absolute left-1/2 mt-3 -translate-x-1/2 top-12  ${!menu.hider ? "w-[900px] p-6 " : "w-80 p-3"} bg-white border border-slate-100 rounded-3xl shadow-2xl  z-[1000]`}
                  >
                    <div
                      className={`grid ${
                        !menu.hider ? "grid-cols-2 gap-6" : "grid-cols-1"
                      }`}
                    >
                      {menu.hider
                        ? menu.items.map((item, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                router.push(`/${menu.slug}/${item.slug}`);
                                setActiveMenu(null);
                              }}
                              className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-left rounded-xl hover:bg-emerald-50 text-slate-700"
                            >
                              {item.icon}
                              {item.name}
                            </button>
                          ))
                        : menu.items.map((category, index) => (
                            <div key={index}>
                              <h3 className="mb-3 text-sm font-black text-emerald-700">
                                {category.name}
                              </h3>

                              <div className="flex flex-col gap-2">
                                {category.items?.map((tour, i) => (
                                  <button
                                    key={i}
                                    onClick={() => {
                                      router.push(
                                        `/tour-packages/${tour.slug}`,
                                      );
                                      setActiveMenu(null);
                                    }}
                                    className="flex items-start gap-2 text-left text-[13px] font-medium tracking-wider text-black hover:text-emerald-600"
                                  >
                                    <MapPin
                                      size={14}
                                      className="mt-0.5 text-emerald-600 shrink-0"
                                    />
                                    <span>{tour.name}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT CTA */}
        <div className="items-center hidden gap-3 rounded-full xl:flex">
          <button
            onClick={() => router.push("/contact")}
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
                      menu.name === "Tour Packages" ? (
                        menu.items.map((category, index) => (
                          <div key={index} className="mb-3 ">
                            <button
                              onClick={() =>
                                setOpenCategory(
                                  openCategory === category.slug
                                    ? null
                                    : category.slug,
                                )
                              }
                              className="flex items-center justify-between w-full p-3 bg-slate-50 rounded-xl"
                            >
                              <span className="text-sm font-bold tracking-wider text-black">
                                {category.name}
                              </span>

                              <ChevronDown
                                size={16}
                                className={`transition-transform text-emerald-800  ${
                                  openCategory === category.slug
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {openCategory === category.slug && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="flex flex-col gap-2 mt-2 ml-3">
                                    {category.items?.map((tour, i) => (
                                      <button
                                        key={i}
                                        onClick={() => {
                                          router.push(
                                            `/tour-packages/${tour.slug}`,
                                          );
                                          setIsMobileOpen(false);
                                        }}
                                        className="p-3 text-sm font-semibold tracking-wider text-left bg-slate-50 rounded-xl text-emerald-700 hover:bg-emerald-100 hover:text-emerald-900"
                                      >
                                        {tour.name}
                                      </button>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))
                      ) : (
                        menu.items.map((subItem, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              if (menu.slug === "valparai") {
                                router.push(`/valparai/${subItem.slug}`);
                              } else {
                                router.push(`/${menu.slug}/${subItem.slug}`);
                              }

                              setIsMobileOpen(false);
                            }}
                            className="flex items-center gap-3 p-3 text-sm font-bold text-left transition-all text-slate-800 bg-slate-50 rounded-2xl"
                          >
                            {subItem.icon}
                            {subItem.name}
                          </button>
                        ))
                      )
                    ) : (
                      <Link
                        href={menu.link}
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center gap-3 p-3 text-sm font-bold text-slate-800 bg-slate-50 rounded-2xl"
                      >
                        {menu.icon}
                        {menu.name}
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={() => {
                    router.push("/contact");
                    setIsMobileOpen(false);
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
