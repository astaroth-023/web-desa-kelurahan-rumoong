// Components
import HeroSection from "@/components/sections/public/home/HeroSection"
import BeritaSection from "@/components/sections/public/home/BeritaSection"
import PotensiSection from "@/components/sections/public/home/PotensiSection";
import GaleriKelurahanSection from "@/components/sections/public/home/GaleriKelurahanSection";

// Hooks
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [])

  return (
    <>
      <HeroSection />
      <BeritaSection />
      <PotensiSection/>
      <GaleriKelurahanSection/>
     
    </>
  )
}

export default Home