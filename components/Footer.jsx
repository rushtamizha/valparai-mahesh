"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { tourPackages } from "@/data/data";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 text-white capitalize bg-emerald-950 ">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h2 className="mb-6 text-2xl font-black tracking-tighter uppercase">
              mahesh <span className="uppercase text-emerald-400">travels.</span>
            </h2>
            <p className="max-w-sm mb-8 text-sm font-medium leading-relaxed tracking-wider capitalize text-emerald-100/60">
              your trusted naturalist-led travel partner in valparai. 
              exploring the western ghats with academic precision 
              and local heart.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<MapPin size={18} />} href="#" />
              <SocialIcon icon={<MapPin size={18} />} href="#" />
            </div>
          </div>

          {/* Packages Grid - Mapping Slugs */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500 mb-6">
              featured packages
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {tourPackages.map((pkg,i) => (
                <li key={i}>
                  <Link 
                    href={`/tours/${pkg.slug}`}
                    className="flex items-center justify-between text-sm font-semibold tracking-wider transition-colors group text-emerald-100/80 hover:text-white"
                  >
                    <span className="">{pkg.title}</span>
                    <ArrowUpRight size={14} className="transition-all -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500 mb-8">
              get in touch
            </h4>
            <div className="space-y-6">
              <ContactItem 
                icon={<Phone size={16} />} 
                title="call us" 
                value="+91 94423 60561" 
              />
              <ContactItem 
                icon={<Mail size={16} />} 
                title="email" 
                value="info@maheshtravels.com" 
              />
              <ContactItem 
                icon={<MapPin size={16} />} 
                title="location" 
                value="valparai, pollachi, coimbatore" 
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pt-10 border-t border-white/5 md:flex-row">
          <p className="text-[10px] font-bold text-emerald-100/30 uppercase tracking-[0.2em]">
            © 2024 mahesh travels valparai. all rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-emerald-100/30 uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-emerald-400">privacy</Link>
            <Link href="/terms" className="hover:text-emerald-400">terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper: Social Icons
const SocialIcon = ({ icon, href }) => (
  <Link 
    href={href} 
    className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-xl bg-white/5 text-emerald-400 hover:bg-emerald-500 hover:text-white"
  >
    {icon}
  </Link>
);

// Helper: Contact Items
const ContactItem = ({ icon, title, value }) => (
  <div className="flex gap-4">
    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-emerald-400">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">{title}</p>
      <p className="text-sm font-bold text-emerald-100">{value}</p>
    </div>
  </div>
);

export default Footer;