"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Banknote, Compass } from "lucide-react";

const features = [
  {
    icon: <Leaf size={20} />,
    title: "expert naturalist",
    desc: "led by mahesh kumar (m.phil), providing scientific depth to your safari."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "owned luxury fleet",
    desc: "13+ private vehicles ensuring zero middleman and total safety."
  },
  {
    icon: <Banknote size={20} />,
    title: "transparent ethics",
    desc: "direct pricing for resorts and cabs with no hidden markups."
  },
  {
    icon: <Compass size={20} />,
    title: "tailored routes",
    desc: "custom circuits for families, couples, and photographers."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 capitalize bg-white border-y border-slate-50">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-3">
          
          {/* brand anchor */}
          <div className="lg:col-span-1">
            <span className="block mb-2 text-xs font-semibold tracking-wider uppercase text-emerald-500">
              the advantage
            </span>
            <h2 className="text-black text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              why travel <br /> 
              <span className="text-emerald-500">with mahesh?</span>
            </h2>
            <div className="w-12 h-1 rounded-full bg-emerald-500" />
          </div>

          {/* tight feature list */}
          <div className="grid lg:col-span-2 sm:grid-cols-2 gap-x-8 gap-y-6">
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 group"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-300 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-black tracking-wider uppercase text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium leading-relaxed tracking-wider text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;