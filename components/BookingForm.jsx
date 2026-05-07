"use client";
import React, { useState } from "react";
import { Send, User, Users, Calendar, Phone, Baby } from "lucide-react";

const BookingForm = ({ packageName, priceTiers }) => {
  const whatsappNumber = "919876543210"; // Replace with your actual number

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    adults: "2",
    children: "0",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    // Construct the WhatsApp Message
    const message = `*NEW BOOKING ENQUIRY*%0A
--------------------------%0A
*Package:* ${packageName}%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Date:* ${formData.date}%0A
*Adults:* ${formData.adults}%0A
*Children:* ${formData.children}%0A
--------------------------%0A
Please confirm availability for these details.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-2xl capitalize border border-emerald-50 sticky top-32">
      <div className="mb-6">
        <h3 className="text-2xl font-black tracking-tighter uppercase text-emerald-900">
          Book This Trip
        </h3>
        <p className="mt-1 text-sm font-bold tracking-widest uppercase text-slate-500">
          {packageName}
        </p>
      </div>

      <form onSubmit={handleBooking} className="space-y-4">
        {/* Name Field */}
        <div className="relative">
          <User className="absolute left-4 top-4 text-emerald-500" size={18} />
          <input
            required
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-4 pl-12 pr-4 text-sm font-bold border-none outline-none bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <Phone className="absolute left-4 top-4 text-emerald-500" size={18} />
          <input
            required
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full py-4 pl-12 pr-4 text-sm font-bold border-none outline-none bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Date Field */}
        <div className="relative">
          <Calendar className="absolute left-4 top-4 text-emerald-500" size={18} />
          <input
            required
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full py-4 pl-12 pr-4 text-sm font-bold border-none outline-none bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Adults & Children Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Users className="absolute left-4 top-4 text-emerald-500" size={18} />
            <select
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="w-full py-4 pl-12 pr-4 text-sm font-bold border-none outline-none appearance-none bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500"
            >
              <option disabled>Adults</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>{num} Adults</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Baby className="absolute left-4 top-4 text-emerald-500" size={18} />
            <select
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="w-full py-4 pl-12 pr-4 text-sm font-bold border-none outline-none appearance-none bg-slate-50 rounded-2xl focus:ring-2 focus:ring-emerald-500"
            >
              <option disabled>Children</option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num} Child's</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-5 bg-emerald-900 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3"
        >
          Confirm Booking <Send size={16} />
        </button>
      </form>

      {/* Pricing Policy Section */}
      {priceTiers && (
        <div className="pt-8 mt-8 border-t border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center">
            Pricing Policy
          </p>
          <div className="grid grid-cols-2 gap-2">
            {priceTiers.map((tier, idx) => (
              <div key={idx} className="p-3 text-center bg-emerald-50 rounded-xl">
                <p className="text-[9px] font-bold text-emerald-800 uppercase">
                  {tier.members}
                </p>
                <p className="text-sm font-black text-emerald-600">₹{tier.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;