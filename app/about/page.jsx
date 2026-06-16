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

const AboutPage = () => {
  return (
    <main className="bg-white overflow-hidden">
      {/* 1. MINIMALIST HERO */}
      <section className="relative pt-32 pb-20 bg-emerald-950 rounded-b-[4rem] md:rounded-b-[6rem]">
        <div className="container mx-auto px-6 text-center">
          <span className="px-5 py-2 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl inline-block mb-8 animate-fade-in">
            Since 2012
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            The Heart & Soul <br />
            <span className="text-emerald-400">of Valparai</span>
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto font-bold text-lg">
            Valparai Mahesh Travels isn't just a cab service; we are naturalists, 
            explorers, and your gateway to the hidden wild.
          </p>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="relative -mt-12 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard count="13+" label="Luxury Fleet" />
            <StatCard count="4" label="Regional Branches" />
            <StatCard count="10k+" label="Happy Travelers" />
            <StatCard count="100%" label="Local Expertise" />
          </div>
        </div>
      </section>

      {/* 3. FOUNDER/OWNER SECTION (Premium Profile) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden">
                <img 
                  src="/founder.jpg" // Add your image here
                  alt="Mahesh Kumar - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-10 bg-emerald-500 rounded-[3rem] text-white shadow-2xl hidden md:block">
                <Quote size={40} className="mb-4 opacity-50" />
                <p className="font-black  text-xl tracking-tight">"Nature is the best host."</p>
              </div>
            </div>
            
            <div>
              <span className="text-emerald-500 font-black uppercase tracking-widest text-xs">The Visionary</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mt-4 mb-6 leading-none">
                Mahesh Kumar R. <br />
                <span className="text-slate-400 text-2xl font-bold">M.Sc., MSW., M.Phil.</span>
              </h2>
              <p className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em] mb-8">Owner cum Naturalist</p>
              <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
              Our <span className="text-emerald-500">Curated</span> Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="container mx-auto px-6">
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
    <p className="text-4xl md:text-5xl font-black text-emerald-600 tracking-tighter mb-2">{count}</p>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <div className="group p-10 bg-white rounded-[3rem] border border-slate-100 hover:border-emerald-500 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/5">
    <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">{title}</h4>
    <p className="text-slate-500 font-bold leading-relaxed">{desc}</p>
  </div>
);

const LocationItem = ({ name }) => (
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
    <span className="text-xl font-black text-slate-800 uppercase tracking-tighter">{name}</span>
  </div>
);

export default AboutPage;