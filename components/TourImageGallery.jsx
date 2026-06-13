"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { Image as ImageIcon, Maximize2, Play } from "lucide-react"; // Added Play icon for video fallback/badge

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const TourMediaGallery = ({ images, title }) => {
  // Fallback media if the array is empty or undefined
  const galleryMedia = images?.length > 0 ? images : [
    "/HeroImages/valparai-tour-package.webp",
    "/HeroImages/athirapally.webp",
    "/HeroImages/munnar.webp"
  ];

  // Helper function to check if a file path is a video
  const isVideo = (url) => {
    if (typeof url !== 'string') return false;
    // Standard video extensions
    return /\.(mp4|webm|ogg|mov|m4v)$/i.test(url);
  };

  return (
    <section className="w-full py-12 font-sans">
      <div className="container px-4 mx-auto md:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600">
            <ImageIcon size={20} />
          </div>
          <div>
            <h3 className="text-xl font-black tracking-tight uppercase text-slate-900">
              Tour <span className="text-emerald-500">Gallery</span>
            </h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Visual snapshots of {title}
            </p>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative group rounded-[2.5rem] overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            effect="fade"
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000, // Slightly increased delay to give videos a chance to play a bit
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="w-full h-[350px] md:h-[550px]"
          >
            {galleryMedia.map((item, index) => {
              const checkVideo = isVideo(item);

              return (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full bg-black">
                    
                    {/* Conditional Rendering based on media type */}
                    {checkVideo ? (
                      <video
                        src={item}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <img
                        src={item}
                        alt={`${title} view ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    )}

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Floating Badge */}
                    <div className="absolute items-center hidden gap-3 p-4 text-white border pointer-events-none bottom-10 left-10 md:flex bg-white/10 backdrop-blur-md border-white/20 rounded-2xl">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500">
                        {checkVideo ? <Play size={14} fill="currentColor" /> : <Maximize2 size={14} />}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest leading-none">
                          {checkVideo ? "Video Clip" : `Perspective ${index + 1}`}
                        </p>
                        <p className="text-sm font-medium">
                          {checkVideo ? "Immersive Experience" : "Exclusive Viewpoint"}
                        </p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Inline styles for custom swiper pagination color */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #10b981 !important; /* emerald-500 */
          width: 24px !important;
          border-radius: 5px !important;
        }
        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
};

export default TourMediaGallery;