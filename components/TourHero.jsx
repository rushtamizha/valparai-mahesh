"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Maximize2, Play } from "lucide-react"; // Imported missing icons
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

export default function TourHero({ tour }) {
  // Safe extraction of values assuming tour is an object containing titles, tags, and media URLs
  const tourTitle = tour?.title || "Tour Destination";
  const tourTag = tour?.tag || "Featured Package";

  // Check if tour.images or tour.gallery exists, otherwise fallback
  const mediaArray = tour?.places  || [];
  const galleryMedia = mediaArray.length > 0 ? mediaArray : [
    "/HeroImages/valparai-tour-package.webp",
    "/HeroImages/athirapally.webp",
    "/HeroImages/munnar.webp"
  ];

  const isVideo = (url) => {
    if (typeof url !== 'string') return false;
    return /\.(mp4|webm|ogg|mov|m4v)$/i.test(url);
  };
  
  return (
    <section className="relative w-full overflow-hidden capitalize md:h-[75vh] h-[50vh] bg-emerald-950">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          speed={3000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {galleryMedia.map((item, index) => {
            const checkVideo = isVideo(item);
          
            return (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full overflow-hidden bg-black">
                  
                  {/* Conditional Rendering based on media type */}
                  {checkVideo ? (
                    <video
                      src={item}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full animate-subtle-zoom"
                    />
                  ) : (
                    <Image width={100}  height={100} 
                      src={item}
                      alt={`${tourTitle} view ${index + 1}`}
                      className="object-cover w-full h-full animate-subtle-zoom"
                    />
                  )}

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Dark tint overlay overlaying the slider backdrops for higher title contrast */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-emerald-950/90 via-black/20 to-black/40" />

      {/* Main Content Area */}
      <div className="absolute left-0 z-20 w-full px-6 bottom-12">
        <div className="container mx-auto">
          <span className="px-5 py-2 bg-emerald-500 text-white rounded-full text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl inline-block mb-6">
            {tourTag}
          </span>
          <h1 className="text-white text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9]">
            {tourTitle.split(" ")[0]} <br />
            <span className="text-emerald-400">
              {tourTitle.split(" ").slice(1).join(" ")}
            </span>
          </h1>
        </div>
      </div>

      {/* Embedded Global Styles */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 12s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
}