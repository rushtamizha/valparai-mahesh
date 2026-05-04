"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "arjun raghav",
    role: "family traveler",
    text: "the best travel partner in valparai. mahesh's knowledge of the wildlife made our trip educational and exciting. the innova was spotless.",
    stars: 5
  },
  {
    name: "priya dharshini",
    role: "nature enthusiast",
    text: "exceptional service. we covered athirapally and topslip comfortably. the naturalist insights provided by mahesh are truly unique.",
    stars: 5
  },
  {
    name: "robert wilson",
    role: "wildlife photographer",
    text: "highly recommend the jeep safari. we spotted lion-tailed macaques thanks to their expert tracking. very professional logistics.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="capitalize bg-white py-15">
      <div className="container px-6 mx-auto">
        {/* Header - Tight & Centered */}
       <div className="max-w-3xl mb-10">
          <span className="block mb-2 text-xs font-semibold tracking-wider uppercase text-emerald-500">
            Testimonials
          </span>
          <h2 className="text-emerald-900 text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
            Customers <span className="text-emerald-500">Feedbacks</span> 
          </h2>
        </div>

        {/* Card Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-card-swiper !pb-14"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100  h-full flex flex-col group hover:border-emerald-200 transition-all duration-500">
                
                {/* Quote Icon & Stars */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center justify-center w-10 h-10 transition-colors rounded-xl bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white">
                    <Quote size={18} fill="currentColor" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={12} className="fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                </div>

                {/* Review */}
                <p className="flex-grow mb-8 font-medium leading-relaxed text-slate-600 ">
                  "{review.text}"
                </p>

                {/* Profile info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div className="flex items-center justify-center w-10 h-10 text-xs font-black uppercase rounded-full bg-emerald-100 text-emerald-700">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-black tracking-tight tracking-wider uppercase text-emerald-900 ">
                      {review.name}
                    </h4>
                    <p className="flex-grow font-medium leading-relaxed text-slate-600">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-card-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
        }
        .testimonial-card-swiper .swiper-pagination-bullet-active {
          background: #10b981 !important;
          width: 28px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;