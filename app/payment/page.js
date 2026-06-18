"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Copy, 
  CheckCircle2, 
  Building2, 
  User, 
  Hash, 
  MapPin, 
  ShieldCheck, 
  Smartphone,
  Download
} from "lucide-react";
import Image from "next/image";

export default function PaymentPage() {
  const accountDetails = [
    { label: "Beneficiary Name", value: "MAHESH TOURS AND TRAVELS", icon: <User size={18} /> },
    { label: "Bank Name", value: "STATE BANK OF INDIA", icon: <Building2 size={18} /> },
    { label: "Account Number", value: "42515483106", icon: <Hash size={18} /> },
    { label: "IFSC Code", value: "SBIN0003062", icon: <ShieldCheck size={18} /> },
    { label: "Branch", value: "VALPARAI, COIMBATORE (DT)", icon: <MapPin size={18} /> },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <section className="min-h-screen font-sans py-28 bg-slate-50">
      <div className="container max-w-5xl px-6 mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 block">Secure Payment</span>
          <h1 className="mb-4 text-3xl font-black tracking-tighter text-slate-900">
            Complete Your <span className="text-emerald-500">Booking.</span>
          </h1>
          <p className="max-w-xl mx-auto font-medium text-slate-500">
            Secure your tour by transferring the advance amount via UPI or Bank Transfer.
          </p>
        </div>

        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Left: QR Code Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-emerald-900/5 text-center"
          >
            <div className="mb-8">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-emerald-50 rounded-2xl text-emerald-500">
                <Smartphone size={32} />
              </div>
              <h2 className="mb-2 text-2xl font-black text-slate-900">Scan & Pay</h2>
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Supports all UPI Apps</p>
            </div>

            {/* QR Image Placeholder */}
            <div className="relative group mx-auto w-64 h-64 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
              <Image width={100}  height={100} 
                src="/payment.png" 
                alt="Payment QR Code" 
                className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-colors pointer-events-none bg-emerald-500/0 group-hover:bg-emerald-500/5" />
            </div>

            <p className="mt-8 text-sm font-medium leading-relaxed text-slate-500">
              Scan the QR code using Google Pay, PhonePe, or Paytm to pay instantly.
            </p>
            
            <a href="/payment.png" download="Mahesh-Tours-QR.jpg" className="mt-6 w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-500 transition-colors">
              <Download size={16} /> Download QR Code
            </a>
          </motion.div>

          {/* Right: Bank Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-emerald-900 p-8 md:p-12 rounded-[3rem] text-white shadow-xl shadow-emerald-900/20"
          >
            <div className="mb-10">
              <h2 className="mb-2 text-2xl font-black">Bank Transfer</h2>
              <p className="text-xs font-bold tracking-widest uppercase text-emerald-400">Current Account Details</p>
            </div>

            <div className="space-y-6">
              {accountDetails.map((item, index) => (
                <div key={index} className="relative p-5 transition-all border group bg-white/5 rounded-2xl border-white/10 hover:border-emerald-400/50">
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                    {item.icon} {item.label}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-lg font-bold tracking-tight truncate">{item.value}</p>
                    <button 
                      onClick={() => copyToClipboard(item.value)}
                      className="p-2 transition-colors rounded-lg hover:bg-emerald-400/20 text-emerald-400"
                      title="Copy"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 mt-10 border border-dashed bg-white/5 rounded-3xl border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-emerald-400/20 text-emerald-400">
                  <CheckCircle2 size={18} />
                </div>
                <p className="text-xs font-medium leading-relaxed opacity-80">
                  Once the payment is successful, please share the <span className="font-black text-emerald-400">Transaction Screenshot</span> with us via WhatsApp for confirmation.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}