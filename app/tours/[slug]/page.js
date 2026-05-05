"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import {
  CheckCircle2,
  XCircle,
  MapPin,
  Clock,
  Car,
  ChevronRight,
  Calendar,
  Phone,
  User,
  Send,
  IndianRupee,
  Info,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import { tourPackages, companyConfig } from "@/data/data";
import TourHero from "@/components/TourHero";
import RelatedTours from "@/components/RelatedTours";
import TourImageGallery from "@/components/TourImageGallery";

const TourDetails = ({ params }) => {
  const { slug } = React.use(params);
  const tour = tourPackages.find((p) => p.slug === slug);

  // State to track which day is open
  const [openDay, setOpenDay] = useState(0);

  if (!tour)
    return (
      <div className="py-40 font-black text-center uppercase">
        package not found
      </div>
    );

  const otherTours = tourPackages.filter((p) => p.slug !== slug);

  return (
    <main className="bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <TourHero tour={tour} />

      {/* 1. CORE INFO STRIP */}
      <section className="py-12 border-b border-slate-100">
        <div className="container px-6 mx-auto">
          <div className="flex flex-wrap gap-8 md:gap-16">
            <InfoBox
              icon={<IndianRupee size={20} />}
              label="per person"
              value={`₹${tour.basePrice}`}
            />

            <InfoBox
              icon={<Clock size={20} />}
              label="duration"
              value={tour.duration}
            />

            <InfoBox
              icon={<MapPin size={20} />}
              label="from"
              value={tour.tourFrom}
            />

            <InfoBox
              icon={<Car size={20} />}
              label="transport"
              value="private cab"
            />
          </div>
        </div>
      </section>

      <TourImageGallery  images={tour.places} 
      title={tour.title} />

      {/* 2. MAIN CONTENT GRID */}
      <section className="py-10">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {/* Overview */}
              <div className="mb-10">
                <h2 className="text-emerald-900 text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                  experience <span className="text-emerald-500">overview.</span>
                </h2>

                <p className="font-medium leading-relaxed tracking-wider capitalize text-slate-600">
                  {tour.description}
                </p>
              </div>

              {/* ACCORDION ITINERARY */}
              <div className="mb-10 space-y-6">
                <h3 className="mb-8 text-sm font-black tracking-wider uppercase text-emerald-500">
                  detailed itinerary
                </h3>

                {tour.itinerary?.map((day, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden bg-white rounded-3xl "
                  >
                    {/* Toggle Header */}
                    <button
                      onClick={() => setOpenDay(openDay === idx ? -1 : idx)}
                      className="flex items-center justify-between w-full p-4 text-left transition-colors "
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-2xl font-black text-emerald-500">
                          0{idx + 1}
                        </span>
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            day {day.day}
                          </p>
                          <h4 className="font-black capitalize text-slate-800">
                            {day.title}
                          </h4>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: openDay === idx ? 180 : 0 }}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </button>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {openDay === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                        >
                          <div className="pb-8 space-y-8 ">
                            {/* IMAGES UNDER TITLE FOR THE SPECIFIC DAY */}
                            {day.activities &&
                              day.activities[0]?.placeImage && (
                                <div className="rounded-[2rem] overflow-hidden shadow-lg">
                                  <Swiper
                                    modules={[Autoplay, EffectFade, Pagination]}
                                    effect="fade"
                                    autoplay={{ delay: 2000 }}
                                    className="h-[250px] md:h-[400px]"
                                  >
                                    {day.activities.map(
                                      (act, i) =>
                                        act.placeImage && (
                                          <SwiperSlide key={i}>
                                            <img
                                              src={act.placeImage}
                                              className="object-cover w-full h-full"
                                              alt={act.place}
                                            />
                                            <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                                              <p className="text-lg font-black text-white capitalize">
                                                {act.place}
                                              </p>
                                            </div>
                                          </SwiperSlide>
                                        ),
                                    )}
                                  </Swiper>
                                </div>
                              )}

                            {/* Activities List */}
                            <div className="grid gap-4">
                              {day.activities.map((act, i) => (
                                <div
                                  key={i}
                                  className="p-6 border bg-slate-50 rounded-3xl border-slate-100"
                                >
                                  <h5 className="mb-1 font-black capitalize text-emerald-800 -tracking-wider">
                                    {act.place || act}
                                  </h5>
                                  <p className="text-sm font-medium leading-relaxed tracking-wider capitalize text-slate-500">
                                    {act.description ||
                                      "explore the scenic beauty and local landmarks of this destination."}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Includes/Excludes */}
              <div className="grid gap-8 mb-10 md:grid-cols-2">
                <InclusionCard
                  title="Includes"
                  data={tour.includes}
                  icon={<CheckCircle2 />}
                  isEmerald
                />
                <InclusionCard
                  title="Excludes"
                  data={tour.excludes}
                  icon={<XCircle />}
                />
              </div>

              {/* TERMS & CONDITIONS */}
              <div className="relative p-4 overflow-hidden text-white">
                <div className="relative z-10">
                  <h4 className="flex items-center gap-3 mb-8 text-xl font-black capitalize text-emerald-800">
                    <AlertCircle size={20} /> terms & conditions
                  </h4>
                  <ul className="grid gap-4 md:grid-cols-2">
                    {tour.termsConditions.map((term, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm font-medium leading-relaxed capitalize text-slate-600"
                      >
                        <span className="text-emerald-500">•</span> {term}
                      </li>
                    ))}
                  </ul>
                </div>
                <Info
                  size={150}
                  className="absolute -right-10 -bottom-10 text-white/5"
                />
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <RelatedTours tours={otherTours} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. PREMIUM BOOKING FORM (Same as before) */}
      <section
        id="book"
        className="bg-emerald-950 py-14 rounded-t-[4rem] md:rounded-t-[6rem]"
      >
        <div className="container px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 text-3xl font-black leading-none tracking-tighter text-white capitalize ">
                  ready to 
                  <span className="text-emerald-400"> book?</span>
                </h2>

                <div className="grid hidden grid-cols-2 gap-4 mb-10">
                  {tour.priceTiers.map((tier, i) => (
                    <div
                      key={i}
                      className="p-6 border rounded-3xl bg-white/5 border-white/10 backdrop-blur-sm"
                    >
                      <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                        {tier.members}
                      </p>

                      <p className="text-2xl font-black text-white">
                        ₹{tier.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      icon={<User />}
                      type="text"
                      placeholder="full name"
                    />

                    <Input
                      icon={<Phone />}
                      type="tel"
                      placeholder="phone number"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Input icon={<Calendar />} type="date" />

                    <div className="relative">
                      <User
                        className="absolute left-4 top-4 text-emerald-500"
                        size={18}
                      />

                      <select className="w-full py-4 pl-12 pr-4 text-sm font-bold capitalize border-none outline-none appearance-none text-emerald-700 bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500">
                        {tour.priceTiers.map((t, idx) => (
                          <option key={idx} value={t.members}>
                            {t.members}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button className="w-full py-5 bg-emerald-900 text-white rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-emerald-700 transition-all flex items-center justify-center gap-3">
                    submit enquiry <Send size={16} />
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    direct contact
                  </p>

                  <p className="mt-1 text-lg font-black text-emerald-900">
                    {companyConfig.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Internal Sub-components

const InfoBox = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600">
      {icon}
    </div>

    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">
        {label}
      </p>

      <p className="text-sm font-black tracking-tight capitalize text-slate-800">
        {value}
      </p>
    </div>
  </div>
);

const Input = ({ icon, ...props }) => (
  <div className="relative">
    <div className="absolute left-4 top-4 text-emerald-500">
      {React.cloneElement(icon, { size: 18 })}
    </div>

    <input
      {...props}
      className="w-full py-4 pl-12 pr-4 text-sm font-bold capitalize border-none outline-none text- bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500 text-emerald-700"
    />
  </div>
);

const InclusionCard = ({ title, data, icon, isEmerald }) => (
  <div
    className={`p-4 rounded-[2rem] `}
  >
    <h4
      className={`font-black uppercase mb-6 flex items-center gap-2 ${isEmerald ? "text-emerald-900" : "text-red-800"}`}
    >
      {icon} {title}
    </h4>

    <ul className="space-y-3">
      {data.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-2 text-sm font-bold capitalize text-slate-700"
        >
          <ChevronRight
            size={14}
            className={isEmerald ? "text-emerald-400" : "text-red-300"}
          />{" "}
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default TourDetails;
