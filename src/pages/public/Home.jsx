// Components
import HeroSection from "@/components/sections/public/home/HeroSection"
import BeritaSection from "@/components/sections/public/home/BeritaSection"

// Hooks
import { useEffect } from "react";


const Home = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <>
      <HeroSection />
      <BeritaSection />
    </>
  )
}

export default Home