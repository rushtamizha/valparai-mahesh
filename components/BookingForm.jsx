"use client";
import React, { useState } from "react";
import { Send, User, Users, Calendar, Phone } from "lucide-react";

const BookingForm = ({ packageName, priceTiers }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "2",
  });

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-2xl capitalize border border-emerald-50 sticky top-32">
      <div className="mb-6">
        <h3 className="text-2xl font-black tracking-tighter uppercase text-emerald-900">Book This Trip</h3>
        <p className="mt-1 text-sm font-bold tracking-widest uppercase text-slate-500">{packageName}</p>
      </div>

      <form className="space-y-4">
        <div className="relative">
          <User className="absolute left-4 top-4 text-emerald-500" size={18} />
          <input 
            type="text" placeholder="Your Name" 
            className="w-full py-4 pl-12 pr-4 text-sm font-bold border-none outline-none bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-4 top-4 text-emerald-500" size={18} />
          <input 
            type="tel" placeholder="Phone Number" 
            className="w-full py-4 pl-12 pr-4 text-sm font-bold border-none outline-none bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Calendar className="absolute left-4 top-4 text-emerald-500" size={18} />
            <input 
              type="date" 
              className="w-full py-4 pl-12 pr-4 text-sm font-bold border-none outline-none bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="relative">
            <Users className="absolute left-4 top-4 text-emerald-500" size={18} />
            <select className="w-full py-4 pl-12 pr-4 text-sm font-bold border-none outline-none appearance-none bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500">
              {priceTiers.map((tier, idx) => (
                <option key={idx} value={tier.members}>{tier.members}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="w-full py-5 bg-emerald-900 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3">
          Confirm Booking <Send size={16} />
        </button>
      </form>

      <div className="pt-8 mt-8 border-t border-slate-100">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center">Pricing Policy</p>
        <div className="grid grid-cols-2 gap-2">
          {priceTiers.map((tier, idx) => (
            <div key={idx} className="p-3 text-center bg-emerald-50 rounded-xl">
              <p className="text-[9px] font-bold text-emerald-800 uppercase">{tier.members}</p>
              <p className="text-sm font-black text-emerald-600">₹{tier.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;