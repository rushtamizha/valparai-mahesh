"use client";

import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Clock, 
  Instagram, 
  Facebook 
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const companyConfig = {
    phone: "+91 98765 43210",
    email: "info@yourtravelagency.com",
    address: "123, Tea Garden Road, Valparai, Pollachi - 642127",
    workingHours: "9:00 AM - 8:00 PM (Daily)",
    whatsapp: "919876543210"
  };

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${companyConfig.whatsapp}?text=Hi, I have a query regarding a tour.`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[50vh] overflow-hidden bg-emerald-950 flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=2000" 
            className="object-cover w-full h-full scale-105 opacity-40 animate-subtle-zoom"
            alt="Contact Background"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent" />
        
        <div className="container relative z-20 px-6 mx-auto">
          <span className="px-5 py-2 bg-emerald-500 text-white rounded-full text-[11px] font-black uppercase tracking-[0.3em] inline-block mb-6 shadow-2xl">
            Get In Touch
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            Contact <br />
            <span className="font-black text-emerald-400">Our Team</span>
          </h1>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="pb-24 -mt-20">
        <div className="container px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            
            {/* 1. Contact Info Cards */}
            <div className="space-y-6 lg:col-span-1">
              <div className="p-8 bg-emerald-900 rounded-[2.5rem] text-white shadow-2xl">
                <h3 className="mb-6 text-xl font-black tracking-tight uppercase">Reach Us Directly</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl text-emerald-400"><Phone size={24}/></div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-emerald-500">Call/WhatsApp</p>
                      <p className="text-lg font-bold">{companyConfig.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl text-emerald-400"><Mail size={24}/></div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-emerald-500">Email Address</p>
                      <p className="font-bold break-all">{companyConfig.email}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl text-emerald-400"><MapPin size={24}/></div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-emerald-500">Office Location</p>
                      <p className="text-sm font-bold leading-relaxed">{companyConfig.address}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleWhatsAppChat}
                  className="flex items-center justify-center w-full gap-3 py-4 mt-10 text-xs font-black tracking-widest text-white uppercase transition-all bg-emerald-500 hover:bg-white hover:text-emerald-900 rounded-2xl"
                >
                  <MessageCircle size={18}/> Chat on WhatsApp
                </button>
              </div>

              {/* Social Links Card */}
              <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-slate-50 flex justify-around">
                <a href="#" className="p-4 transition-transform bg-white rounded-full shadow-sm text-emerald-600 hover:scale-110"><Instagram size={24}/></a>
                <a href="#" className="p-4 transition-transform bg-white rounded-full shadow-sm text-emerald-600 hover:scale-110"><Facebook size={24}/></a>
                <div className="flex flex-col justify-center">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-tighter">Follow Our</p>
                    <p className="font-black leading-none uppercase text-emerald-900">Journeys</p>
                </div>
              </div>
            </div>

            {/* 2. Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 md:p-12 bg-white border border-slate-100 shadow-2xl rounded-[3.5rem]">
                <div className="mb-10">
                  <h2 className="text-3xl font-black tracking-tighter uppercase text-slate-900">Send us a <span className="text-emerald-500">Message</span></h2>
                  <p className="mt-2 text-sm font-medium text-slate-500">Fill the form below and we'll get back to you within 2 hours.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full py-5 px-8 text-sm font-bold bg-slate-50 border-none rounded-[2rem] focus:ring-2 focus:ring-emerald-500 outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                      <input type="tel" placeholder="+91 00000 00000" className="w-full py-5 px-8 text-sm font-bold bg-slate-50 border-none rounded-[2rem] focus:ring-2 focus:ring-emerald-500 outline-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Service Required</label>
                    <select className="w-full py-5 px-8 text-sm font-bold bg-slate-50 border-none rounded-[2rem] focus:ring-2 focus:ring-emerald-500 outline-none appearance-none">
                      <option>General Tour Inquiry</option>
                      <option>Hotel Booking</option>
                      <option>Custom Package Request</option>
                      <option>Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Your Message</label>
                    <textarea rows="4" placeholder="Tell us about your dream trip..." className="w-full py-5 px-8 text-sm font-bold bg-slate-50 border-none rounded-[2rem] focus:ring-2 focus:ring-emerald-500 outline-none resize-none"></textarea>
                  </div>

                  <button className="px-12 py-5 bg-emerald-900 text-white rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl">
                    Send Message <Send size={16}/>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MAP / FOOTER CTA --- */}
      <section className="py-20 bg-slate-50 rounded-t-[4rem] md:rounded-t-[6rem]">
        <div className="container px-6 mx-auto text-center">
            <div className="max-w-2xl mx-auto">
                <Clock className="mx-auto mb-4 text-emerald-500" size={40}/>
                <h3 className="text-2xl font-black tracking-tighter uppercase text-emerald-900">Working Hours</h3>
                <p className="mt-2 font-bold text-slate-500">{companyConfig.workingHours}</p>
                <div className="mt-10 h-[300px] w-full bg-slate-200 rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white">
                    {/* Replace this iframe with your actual Google Maps embed link */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44153130119!2d76.88338308434856!3d10.66258074369064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84e62232a514d%3A0x7c735d48149f1367!2sPollachi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714890000000!5m2!1sen!2sin" 
                        width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 12s infinite alternate linear;
        }
      `}</style>
    </main>
  );
}