import Footer from "@/components/Footer";
import { GlobeDemo } from "@/components/GlobeDemo";
import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import { WobbleCards } from "@/components/WobbleCard";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems}/> */}
        <Hero />
        {/* <Grid/> */}
        <GlobeDemo/>
        <WobbleCards/>
        <HeroScrollDemo/>
        <InfiniteMovingCardsDemo/>
        <Footer/>
        
      </div>
    </main>
  );
}
