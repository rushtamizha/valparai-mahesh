"use client";
import React from "react";
import { 
  TreePine, 
  Map, 
  Hotel, 
  Car, 
  Compass, 
  ShieldCheck, 
  Award, 
  Users2,
  Quote
} from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* 1. MINIMALIST HERO */}
      <section className="relative pt-32 pb-20 bg-emerald-950 rounded-b-[4rem] md:rounded-b-[6rem]">
        <div className="container px-6 mx-auto text-center">
          <span className="px-5 py-2 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl inline-block mb-8 animate-fade-in">
            Since 2012
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            The Heart & Soul <br />
            <span className="text-emerald-400">of Valparai</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-bold text-emerald-100/60">
            Valparai Mahesh Travels isn't just a cab service; we are naturalists, 
            explorers, and your gateway to the hidden wild.
          </p>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="relative z-20 -mt-12">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard count="13+" label="Luxury Fleet" />
            <StatCard count="4" label="Regional Branches" />
            <StatCard count="10k+" label="Happy Travelers" />
            <StatCard count="100%" label="Local Expertise" />
          </div>
        </div>
      </section>

      {/* 3. FOUNDER/OWNER SECTION (Premium Profile) */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden">
                <Image quality={100} width={100}  height={100}
                  src="/founder.jpg" // Add your image here
                  alt="Mahesh Kumar - Founder"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-10 bg-emerald-500 rounded-[3rem] text-white shadow-2xl hidden md:block">
                <Quote size={40} className="mb-4 opacity-50" />
                <p className="text-xl font-black tracking-tight">"Nature is the best host."</p>
              </div>
            </div>
            
            <div>
              <span className="text-xs font-black tracking-widest uppercase text-emerald-500">The Visionary</span>
              <h2 className="mt-4 mb-6 text-4xl font-black leading-none tracking-tighter uppercase md:text-6xl text-slate-900">
                Mahesh Kumar R. <br />
                <span className="text-2xl font-bold text-slate-400">M.Sc., MSW., M.Phil.</span>
              </h2>
              <p className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em] mb-8">Owner cum Naturalist</p>
              <div className="space-y-6 text-lg font-medium leading-relaxed text-slate-600">
                <p>
                  With a deep academic background in **Environmental Science**, Mahesh Kumar brings a scientific precision to every expedition. 
                  Our fleet of 8 luxury commercial vehicles and 5 attachment vehicles ensures we are one of the most trusted partners in Valparai, Pollachi, Coimbatore, and Cochin.
                </p>
                <p>
                  We don't just drive; we guide you through tea estates, misty hill stations, and vibrant cultural heritages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID (Refreshed Style) */}
      <section className="py-24 bg-slate-50 rounded-[4rem] md:rounded-[6rem]">
        <div className="container px-6 mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black tracking-tighter uppercase md:text-6xl text-slate-900">
              Our <span className="text-emerald-500">Curated</span> Services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard 
              icon={<Map />} 
              title="Tour Packages" 
              desc="Exclusive Tamilnadu & Kerala circuits tailored for families and couples."
            />
            <ServiceCard 
              icon={<Hotel />} 
              title="Premium Stays" 
              desc="Handpicked Resorts & Hotel bookings for a seamless luxury experience."
            />
            <ServiceCard 
              icon={<Car />} 
              title="Taxi & Rentals" 
              desc="Luxury commercial fleet with professional drivers for safe transit."
            />
            <ServiceCard 
              icon={<TreePine />} 
              title="Wildlife Safari" 
              desc="Explore the deep woods with expert Naturalists & Jeep Safaris."
            />
            <ServiceCard 
              icon={<Compass />} 
              title="Adventure" 
              desc="Bamboo Rafting, Tent Stays, and authentic Tribal Dance experiences."
            />
            <ServiceCard 
              icon={<ShieldCheck />} 
              title="Local Expertise" 
              desc="Transparent pricing and 24/7 personalized support for every traveler."
            />
          </div>
        </div>
      </section>

      {/* 5. LOCATIONS STRIP */}
      <section className="py-20 border-b border-slate-100">
        <div className="container px-6 mx-auto">
          <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-10">Our Operational Network</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
            <LocationItem name="Valparai" />
            <LocationItem name="Pollachi" />
            <LocationItem name="Coimbatore" />
            <LocationItem name="Cochin" />
          </div>
        </div>
      </section>
    </main>
  );
};

// HELPER COMPONENTS
const StatCard = ({ count, label }) => (
  <div className="p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 text-center hover:scale-105 transition-transform duration-500">
    <p className="mb-2 text-4xl font-black tracking-tighter md:text-5xl text-emerald-600">{count}</p>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <div className="group p-10 bg-white rounded-[3rem] border border-slate-100 hover:border-emerald-500 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/5">
    <div className="flex items-center justify-center w-16 h-16 mb-8 transition-colors duration-500 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h4 className="mb-4 text-2xl font-black tracking-tight uppercase text-slate-900">{title}</h4>
    <p className="font-bold leading-relaxed text-slate-500">{desc}</p>
  </div>
);

const LocationItem = ({ name }) => (
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 rounded-full bg-emerald-500" />
    <span className="text-xl font-black tracking-tighter uppercase text-slate-800">{name}</span>
  </div>
);

export default AboutPage;