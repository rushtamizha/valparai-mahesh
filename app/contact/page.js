"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  Users,
  Calendar,
  Fullscreen,
} from "lucide-react";

const ContactInfoCard = ({ icon: Icon, title, detail, subDetail, link }) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 group">
    <div className="flex items-center justify-center w-10 h-10 mb-6 transition-all duration-500 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:scale-110 group-hover:bg-emerald-900 group-hover:text-white">
      <Icon size={14} />
    </div>
    <h3 className="mb-2 text-[9px] font-black tracking-[0.2em] uppercase text-slate-400 group-hover:text-emerald-500 transition-colors">
      {title}
    </h3>
    <a
      href={link}
      className="block text-sm font-black tracking-tight transition-colors text-slate-800 hover:text-emerald-600"
    >
      {detail}
    </a>
    <p className="mt-1 text-xs font-medium text-slate-400">{subDetail}</p>
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    adults: "1",
    children: "0",
    date: "",
    package: "2 Days 1 Night Pollachi Valparai Tour Package",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct the WhatsApp Message
    const message =
      `*New Booking Request*%0A` +
      `--------------------------%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Adults:* ${formData.adults}%0A` +
      `*Children:* ${formData.children}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Package:* ${formData.package}`;

    const whatsappNumber = "919487424257"; // Replace with your actual number

    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <main className="min-h-screen py-24 font-sans bg-white">
      <div className="container px-6 mx-auto">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">
              Contact Mahesh Tours
            </span>
            <h1 className="mb-8 text-3xl font-black leading-none tracking-tighter text-slate-900">
              Let’s Plan Your <br />{" "}
              <span className="text-emerald-500">Next Escape.</span>
            </h1>
          </motion.div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 gap-4 mb-24 md:grid-cols-3">
          <ContactInfoCard
            icon={Phone}
            title="Call Us Directly"
            detail="+91 98765 43210"
            subDetail="Available 9:00 AM - 9:00 PM"
            link="tel:+919487424257"
          />
          <ContactInfoCard
            icon={MessageSquare}
            title="WhatsApp Chat"
            detail="Chat with Expert"
            subDetail="Instant response for bookings"
            link="https://wa.me/919487424257"
          />
          <ContactInfoCard
            icon={Mail}
            title="Email Address"
            detail="maheshtravels2005@gmail.com"
            subDetail="We reply within 24 hours"
            link="mailto:maheshtravels2005@gmail.com"
          />
        </div>

        <div className="grid items-start grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className=" rounded-[4rem] p-10 md:p-16 border border-slate-100 "
          >
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Name of Booking
                  </label>
                  <input
                    required
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 font-bold bg-white border-none shadow-sm outline-none text-slate-900 rounded-2xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Phone Number
                  </label>
                  <input
                    required
                    name="phone"
                    onChange={handleInputChange}
                    type="tel"
                    placeholder="+91"
                    className="w-full px-6 py-4 font-bold bg-white border-none shadow-sm outline-none text-slate-900 rounded-2xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Adults
                  </label>
                  <input
                    name="adults"
                    onChange={handleInputChange}
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-full px-6 py-4 font-bold bg-white border-none shadow-sm outline-none text-slate-900 rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Children
                  </label>
                  <input
                    name="children"
                    onChange={handleInputChange}
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="w-full px-6 py-4 font-bold bg-white border-none shadow-sm outline-none text-slate-900 rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Date
                  </label>
                  <input
                    required
                    name="date"
                    onChange={handleInputChange}
                    type="date"
                    className="w-full px-6 py-4 font-bold bg-white border-none shadow-sm outline-none text-slate-900 rounded-2xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                  Select Package
                </label>
                <div className="relative">
                  <select
                    name="package"
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 font-bold bg-white border-none shadow-sm outline-none appearance-none text-slate-900 rounded-2xl"
                  >
                    <optgroup label="Valparai Packages">
                      <option>
                        2 Days 1 Night Pollachi Valparai Tour Package
                      </option>
                      <option>
                        3 Days 2 Night Pollachi Topslip Parambikulam Valparai
                        Tour Package
                      </option>
                      <option>
                        3 Days 2 Night Pollachi Valparai Athirapally Waterfalls
                        Tour Package
                      </option>
                      <option>
                        4 Days 3 Night Pollachi Topslip Parambikulam Valparai
                        Athirapally Waterfalls Tour Package
                      </option>
                      <option>
                        5 Days 4 Night Coimbatore Isha Marudamalai Pollachi
                        Topslip Parambikulam Valparai Athirapally Waterfalls
                        Tour Package
                      </option>
                    </optgroup>
                    <optgroup label="Ooty Packages">
                      <option>
                        3 Days 2 Night Coimbatore (Ex) Coonoor Ooty Pykara
                        Mudumalai Tour Package
                      </option>
                      <option>
                        4 Days 3 Night Coimbatore (Ex) Coonoor Ooty Pykara
                        Masinagudi Tour Package
                      </option>
                      <option>
                        6 Days 5 Night Coimbatore (Ex) Kodaikanal Ooty Coonoor
                        Mudumalai Tour Package
                      </option>
                    </optgroup>
                    <optgroup label="Kodaikanal Packages">
                      <option>
                        3 Days 2 Night Kodai Road(Ex) Kodaikanal Tour Package
                      </option>
                      <option>
                        6 Days 5 Night Coimbatore (Ex) Kodaikanal Ooty Coonoor
                        Mudumalai Tour Package
                      </option>
                    </optgroup>
                    <optgroup label="Kerala Packages">
                      <option>
                        3 Days 2 Night Udumalpet (Ex)/Coimbatore Kanthaloor
                        Marayoor Munnar Tour Package
                      </option>
                      <option>
                        4 Days 3 Night Cochin(Ex) Munnar Kanthaloor Marayoor
                        Tour Package
                      </option>
                      <option>
                        5 Days 4 Nights Cochin(Ex) Alleppey Houseboat Munnar
                        Tour Package
                      </option>
                      <option>
                        6 Days 5 Nights Cochin(Ex) Alleppey Houseboat Munnar
                        Thekkady Tour Package
                      </option>
                      <option>
                        10 Days 9 Night Cochin(Ex) Alleppey Houseboat Munnar
                        Thekkady Vagamon Wayanad Kovalam Trivandrum Tour Package
                      </option>
                    </optgroup>
                  </select>
                  <ChevronDown
                    className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2 text-slate-400"
                    size={18}
                  />
                </div>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-emerald-950 font-black uppercase text-[10px] tracking-[0.3em] py-6 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? "Opening WhatsApp..." : "Book Now"}
                <Send size={16} />
              </button>
            </form>
          </motion.div>

          {/* Office Details */}
          <div className="space-y-12 lg:pt-10">
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="flex items-center justify-center w-12 h-12 transition-all rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-widest uppercase text-slate-400">
                    Main Office
                  </h4>
                  <p className="font-medium text-slate-800">
                    9/848, near Hotel Holiday Break, <br />
                    Karunanithi Nagar, Valparai <br />
                    Tamil Nadu 642127
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex items-center justify-center w-12 h-12 transition-all rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-widest uppercase text-slate-400">
                    Working Hours
                  </h4>
                  <p className="font-medium text-slate-800">
                    Mon - Sat: 09:00 AM - 09:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-[350px] bg-slate-100 rounded-[3rem] overflow-hidden border-4 border-slate-50 shadow-sm">
               <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.192140051311!2d76.9551283!3d10.326503099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0789b6e4d9b33f%3A0xe684916813be906c!2sVALPARAI%20MAHESH%20TRAVELS!5e0!3m2!1sen!2sin!4v1781620910522!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
