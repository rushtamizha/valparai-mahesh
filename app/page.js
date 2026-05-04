import AboutSection from "@/components/AboutSection";
import Accommodation from "@/components/Accommodation";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TourCarousel from "@/components/TourCarousel";
import VehicleSection from "@/components/VehicleSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div >
        <Hero/>
        <TourCarousel/>
        <AboutSection/>
        <VehicleSection/>
        <Accommodation/>
        <GallerySection/>
        <WhyChooseUs/>
        <Testimonials/>
    </div>
  );
}
