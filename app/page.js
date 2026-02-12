"use client"

import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ScrollIndicator />
    </div>
  );
}
