"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/data/data";

const Testimonials = () => {
  return (
    <section className="bg-white py-15">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mb-10">
          <span className="block mb-2 text-xs font-semibold tracking-wider uppercase text-emerald-500">
            Trust & Safety
          </span>
          <h2 className="text-slate-900 text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9]">
            Google <span className="text-emerald-500">Reviews</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="testimonial-card-swiper "
        >
          {testimonials[0].reviews.slice(10)?.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full flex flex-col group hover:shadow-sm hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden">
                
                {/* Google Brand Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Google Review</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="flex-grow mb-8 text-sm  font-medium leading-relaxed text-slate-600">
                  "{review.description?.slice(0, 100) || "Great experience with Mahesh Tours!"}..."
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-4">
                  <div className="flex items-center justify-center w-10 h-10 text-sm font-bold rounded-full bg-slate-100 text-slate-500">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="flex items-center gap-1 text-xs font-black uppercase text-slate-900">
                      {review.name}
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-blue-500 fill-current">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Local Guide</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-card-swiper .swiper-pagination-bullet { width: 8px; height: 8px; background: #cbd5e1; opacity: 1; }
        .testimonial-card-swiper .swiper-pagination-bullet-active { background: #10b981 !important; width: 28px !important; border-radius: 10px !important; }
      `}</style>
    </section>
  );
};

export default Testimonials;