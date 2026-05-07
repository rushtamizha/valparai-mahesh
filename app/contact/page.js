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
  CheckCircle2
} from "lucide-react";

const ContactInfoCard = ({ icon: Icon, title, detail, subDetail, link }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 group">
    <div className="flex items-center justify-center mb-6 transition-all duration-500 w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:scale-110 group-hover:bg-emerald-900 group-hover:text-white">
      <Icon size={24} />
    </div>
    <h3 className="mb-2 text-xs font-black tracking-widest uppercase text-slate-900">{title}</h3>
    <a href={link} className="block text-lg font-bold transition-colors text-slate-800 hover:text-emerald-600">
      {detail}
    </a>
    <p className="mt-1 text-sm text-slate-500">{subDetail}</p>
  </div>
);

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen capitalize bg-white py-30">
      <div className="container px-4 mx-auto">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.8] mb-8">
            Let’s Plan Your <br /> <span className="text-emerald-500">Next Escape.</span>
          </h1>
          <p className="max-w-xl text-lg font-medium text-slate-500">
            Have questions about our Valparai or Kerala packages? Our travel experts are ready to help you craft the perfect itinerary.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-3">
          <ContactInfoCard 
            icon={Phone}
            title="Call Us Directly"
            detail="+91 98765 43210"
            subDetail="Available 9:00 AM - 9:00 PM"
            link="tel:+919876543210"
          />
          <ContactInfoCard 
            icon={MessageSquare}
            title="WhatsApp Chat"
            detail="Chat with Expert"
            subDetail="Instant response for bookings"
            link="https://wa.me/919876543210"
          />
          <ContactInfoCard 
            icon={Mail}
            title="Email Address"
            detail="info@wepzite.in"
            subDetail="We reply within 24 hours"
            link="mailto:info@wepzite.in"
          />
        </div>

        <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Contact Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-8 md:p-12 text-white "
          >
            {submitted ? (
              <div className="py-20 text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="mb-4 text-3xl font-black">Message Sent!</h2>
                <p className="text-emerald-200">Our team will contact you shortly to plan your trip.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="pb-1 mt-8 text-xs font-black tracking-widest uppercase border-b-2 border-emerald-500"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-6 py-4 transition-all bg-white border text-emerald-700 border-emerald-700 rounded-2xl placeholder:text-emerald-600 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91"
                      className="w-full px-6 py-4 transition-all bg-white border text-emerald-700 border-emerald-700 rounded-2xl placeholder:text-emerald-600 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Preferred Destination</label>
                  <select className="w-full px-6 py-4 transition-all bg-white border appearance-none text-emerald-700 border-emerald-700 rounded-2xl focus:outline-none focus:border-emerald-400">
                    <option className="bg-emerald-900">Valparai</option>
                    <option className="bg-emerald-900">Ooty / Coonoor</option>
                    <option className="bg-emerald-900">Kodaikanal</option>
                    <option className="bg-emerald-900">Kerala Packages</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your travel dates and number of people..."
                    className="w-full px-6 py-4 transition-all bg-white border resize-none text-emerald-700 border-emerald-700 rounded-2xl placeholder:text-emerald-600 focus:outline-none focus:border-emerald-400"
                  ></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-white hover:text-emerald-900 text-emerald-900 font-black uppercase text-xs tracking-[0.2em] py-5 rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Request Call Back"}
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Location & Details */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 text-slate-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-black tracking-widest uppercase text-slate-900">Office Location</h4>
                  <p className="font-medium leading-relaxed text-slate-500">
                    123, Main Road, Near New Bus Stand, <br />
                    Pollachi, Tamil Nadu - 642001
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 text-slate-400">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-black tracking-widest uppercase text-slate-900">Working Hours</h4>
                  <p className="font-medium leading-relaxed text-slate-500">
                    Monday - Saturday: 09:00 AM - 08:00 PM <br />
                    Sunday: 10:00 AM - 02:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed (Placeholder for UI) */}
            <div className="w-full h-80 bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44154445852!2d76.92053746680785!3d10.66258265058778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8489c676d997d%3A0xe54699564177d61b!2sPollachi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714123456789!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}