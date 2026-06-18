"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  TreePine, 
  Map, 
  Car, 
  ShieldCheck, 
  Award, 
  ArrowUpRight,
  GraduationCap
} from "lucide-react";
import Link from "next/link";
import { companyConfig } from "@/data/data";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="overflow-hidden bg-white pt-15">
      <div className="container px-4 mx-auto">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block mb-2 text-xs font-semibold tracking-wider uppercase text-emerald-500">
                The Heritage of Valparai
              </span>
              <h2 className="text-black text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                Crafting <span className="text-emerald-500">Memories</span>
              </h2>
              
              <div className="mb-5 space-y-6 font-medium leading-relaxed tracking-wide text-slate-600">
                <p>
                  Valparai Mahesh Travels is a trusted travel partner based in the heart of Valparai, 
                  with branches extending to Pollachi, Coimbatore, and Cochin. We own a premium fleet 
                  of 13 luxury commercial and attachment vehicles.
                  <br/>
                  Dedicated to crafting unforgettable experiences across Valparai, Topslip, Parambikulam, 
                  and Athirapally Falls, we bridge the gap between travelers and the raw beauty of 
                  Tamil Nadu and Kerala.
                </p>
              </div>

              {/* Service Grid - Matching Icon Style from your Carousel */}
              <div className="grid gap-6 mb-10 md:grid-cols-2">
                <AboutFeature icon={<TreePine />} title="Jeep Safari" desc="Wildlife & Bamboo Rafting" />
                <AboutFeature icon={<Car />} title="Cab Rental" desc="8 Luxury Fleet Vehicles" />
                <AboutFeature icon={<Map />} title="Tour Design" desc="TN & Kerala Specialists" />
                <AboutFeature icon={<ShieldCheck />} title="Expertise" desc="Local Naturalist Guides" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Founder Profile Card (Matching Tour Card Style) */}
          <div className="relative lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-slate-50 rounded-[3rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              {/* Profile Image Wrapper */}
              <div className="relative w-24 h-24 mb-6">
                <div className="w-full h-full overflow-hidden border-4 border-white shadow-md rounded-2xl">
                   <Image quality={100}  width={100}  height={100} src={companyConfig.founderImg} alt="Mahesh Kumar" className="object-cover w-full h-full" />
                </div>
                <div className="absolute p-2 text-white rounded-lg shadow-lg -bottom-2 -right-2 bg-emerald-500">
                  <Award size={16} />
                </div>
              </div>

              <h3 className="mb-2 text-2xl font-black leading-tight md:text-3xl text-emerald-900">
                Mahesh Kumar R.
              </h3>
              <p className="mb-4 text-xs font-black tracking-widest uppercase text-emerald-500">
                Owner cum Naturalist
              </p>

              {/* Credentials Grid */}
              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm text-emerald-600">
                    <GraduationCap size={18} />
                  </div>
                  <span className="text-sm font-bold">M.Sc., MSW., M.Phil. (Env Science)</span>
                </div>
                <div className="flex items-start gap-4 text-slate-500">
                  <p className="text-sm font-medium tracking-wider">
                    "From serene tea estates to misty hill stations, we specialize in customized 
                    expeditions for families and adventure seekers."
                  </p>
                </div>
              </div>

              {/* Action Button - Matching Carousel Action Style */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Connect Directly</p>
                  <p className="text-lg font-black text-emerald-900">{companyConfig.phone}</p>
                </div>
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center gap-3 px-6 text-white transition-all rounded-full shadow-lg h-14 bg-emerald-900 hover:bg-emerald-500 shadow-emerald-900/20"
                >
                  <span className="text-xs font-black tracking-widest uppercase">Contact</span>
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute w-32 h-32 rounded-full -z-10 -top-6 -right-6 bg-emerald-50 blur-3xl opacity-60" />
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-component for features
const AboutFeature = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 capitalize group">
    <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <h4 className="text-sm font-black tracking-wider uppercase text-slate-800">{title}</h4>
      <p className="text-sm font-medium leading-relaxed tracking-wider text-slate-500">{desc}</p>
    </div>
  </div>
);

export default AboutSection;