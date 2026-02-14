"use client"

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import ScrollIndicator from "@/components/ScrollIndicator";
import HeroLoader from "@/components/HeroLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <HeroLoader onComplete={handleLoadingComplete} />
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <ScrollIndicator />
        </>
      )}
    </div>
  );
}
