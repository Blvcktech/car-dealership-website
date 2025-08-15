import Hero from "@/components/sections/Hero";
import FeaturedCars from "@/components/sections/FeaturedCars";
import Benefits from "@/components/sections/Benefits";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <Features />
      <Benefits />
      <Testimonials />
    </>
  );
}
