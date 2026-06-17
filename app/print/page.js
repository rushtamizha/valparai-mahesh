"use client";

import { useState, useRef ,useEffect} from "react";
import {
  User,
  Phone,
  Calendar,
  Car,
  Hotel,
  Printer,
  MessageCircle,
} from "lucide-react";
import { useReactToPrint } from "react-to-print";

export default function QuotationPage() {
  const componentRef = useRef(null);
const [currentDate, setCurrentDate] = useState("");
  const [form, setForm] = useState({
    customerName: "",
    mobile: "",
    packageName: "",
    travelDate: "",
    adults: 2,
    children: 0,
    hotel: "",
    vehicle: "",
    amount: "",
    discount: "",
    inclusions: "",
    exclusions: "",
  });

  const total = Number(form.amount || 0) - Number(form.discount || 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Setup Print/PDF handler
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `Quotation-${form.customerName || "Customer"}`,
  });

  const handleWhatsapp = () => {
    const text = `*VALPARAI MAHESH TRAVELS*\n\nCustomer: ${form.customerName}\nPackage: ${form.packageName}\nTotal: ₹${total}`;
    window.open(
      `https://wa.me/919626850192?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  useEffect(() => {
    // This runs only on the client
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="min-h-screen py-32 bg-slate-50">
      <div className="grid gap-8 mx-auto max-w-7xl lg:grid-cols-2">
        {/* FORM */}
        <div className="p-8 m-5 bg-white rounded-3xl">
          <h1 className="mb-6 text-3xl font-black text-emerald-800">
            Create Travel Quotation
          </h1>
          <div className="space-y-4">
            <input
              name="customerName"
              placeholder="Customer Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />
            <input
              name="mobile"
              placeholder="Mobile"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />
            <input
              name="packageName"
              placeholder="Package Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />
            <input
              type="date"
              name="travelDate"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="adults"
                placeholder="Adults"
                onChange={handleChange}
                className="p-3 border rounded-xl"
              />
              <input
                type="number"
                name="children"
                placeholder="Children"
                onChange={handleChange}
                className="p-3 border rounded-xl"
              />
            </div>

            <input
              name="hotel"
              placeholder="Hotel Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />
            <input
              name="vehicle"
              placeholder="Vehicle Type"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                onChange={handleChange}
                className="p-3 border rounded-xl"
              />
              <input
                type="number"
                name="discount"
                placeholder="Discount"
                onChange={handleChange}
                className="p-3 border rounded-xl"
              />
            </div>

            <textarea
              name="inclusions"
              placeholder="Inclusions"
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border rounded-xl"
            />
            <textarea
              name="exclusions"
              placeholder="Exclusions"
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border rounded-xl"
            />

            <div className="grid grid-cols-2 gap-3 pt-4">
              <button
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 p-3 text-white bg-emerald-700 rounded-xl"
              >
                <Printer size={18} /> Print / Save PDF
              </button>
              <button
                onClick={handleWhatsapp}
                className="flex items-center justify-center gap-2 p-3 text-white bg-green-600 rounded-xl"
              >
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* PREVIEW CONTAINER */}
        <div
          ref={componentRef}
          className="p-10 m-5 bg-white border border-slate-100 rounded-3xl"
        >
          {/* Header Section */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-100">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-emerald-900">
                VALPARAI MAHESH TRAVELS
              </h2>
              <p className="text-sm font-medium tracking-wide uppercase text-emerald-700">
                Official Travel Quotation
              </p>
            </div>
            <div className="text-right">
              <div className="px-4 py-2 rounded-lg bg-emerald-50">
                <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">
                  Quote Date
                </p>
                <p className="text-sm font-semibold text-emerald-900">
                  {currentDate || "Loading..."}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400">
                <User size={14} /> Client Details
              </h3>
              <div className="p-4 border bg-slate-50 rounded-2xl border-slate-100">
                <p className="font-bold text-slate-900">
                  {form.customerName || "Valued Guest"}
                </p>
                <p className="flex items-center gap-2 mt-1 text-sm text-slate-600">
                  <Phone size={12} /> {form.mobile || "N/A"}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400">
                <Calendar size={14} /> Trip Schedule
              </h3>
              <div className="p-4 border bg-slate-50 rounded-2xl border-slate-100">
                <p className="font-bold text-slate-900">
                  {form.packageName || "Custom Tour"}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Travel Date: {form.travelDate || "TBD"}
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <Hotel size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">
                  Stay
                </p>
                <p className="text-sm font-semibold">
                  {form.hotel || "Standard Stay"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <Car size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">
                  Transport
                </p>
                <p className="text-sm font-semibold">
                  {form.vehicle || "Private Cab"}
                </p>
              </div>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-2 gap-8 mb-8 text-sm">
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 font-bold text-emerald-900">
                ✅ Inclusions
              </h3>
              <p className="text-xs leading-relaxed whitespace-pre-wrap text-slate-600">
                {form.inclusions || "As per itinerary"}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 font-bold text-red-700">
                ❌ Exclusions
              </h3>
              <p className="text-xs leading-relaxed whitespace-pre-wrap text-slate-600">
                {form.exclusions || "Personal expenses"}
              </p>
            </div>
          </div>

          {/* Total Footer */}
          <div className="flex items-center justify-between p-6 text-white bg-emerald-900 rounded-2xl">
            <p className="text-sm font-medium text-emerald-200">
              Grand Total Amount
            </p>
            <p className="text-3xl font-black">₹{total.toLocaleString()}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8 mt-10 border-t border-slate-200">
    {/* Bank Details */}
    <div className="space-y-2">
      <h3 className="text-xs font-bold tracking-widest uppercase text-emerald-900">Bank Details</h3>
      <div className="space-y-1 text-xs text-slate-600">
        <p><span className="font-semibold">Account Name:</span> MAHESH TOURS AND TRAVELS</p>
        <p><span className="font-semibold">Bank:</span> MAHESH TOURS AND TRAVELS</p>
        <p><span className="font-semibold">Account No:</span> 42515483106</p>
        <p><span className="font-semibold">IFSC:</span> 42515483106</p>
      </div>
    </div>

    {/* Policies */}
    <div className="space-y-2">
      <h3 className="text-xs font-bold tracking-widest uppercase text-emerald-900">Terms & Refund</h3>
      <div className="text-[10px] text-slate-500 space-y-1">
        <p>• 50% advance required for booking confirmation.</p>
        <p>• Refunds: 15+ days (75%), 8-14 days (50%), 7 days (No refund).</p>
        <p>• Prices include taxes; entry tickets & lunch are excluded.</p>
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className="mt-8 pt-4 border-t text-center text-[10px] text-slate-400">
    <p>This is a computer-generated quotation. Validity: 7 days from issue date.</p>
  </div>
  
        </div>
      </div>
    </div>
  );
}
