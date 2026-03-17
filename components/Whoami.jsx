"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticImageLayers from "@/components/Magnet_image"
import LineReveal from "@/components/RevealLine"

export default function Section2() {
    return (
        <section>
            <section className="w-screen bg-black min-h-screen z-1999 py-10 pt-60 px-3">
                <div className="grid grid-cols-2 w-full pl-30">
                    {/* text */}
                    <div className="text-white flex flex-col gap-5">
                        <div className="flex flex-col gap-10 text-lg text-neutral-400">
                            <div className="max-w-xs text-justify font-poly-neutral flex flex-col gap-3">
                                <p className="text-[0.67rem] text-neutral-100 uppercase"> Ad Creative designer</p>
                                <p className="leading-6">Design, to me, is not decoration. It is communication. Every brand carries a story, a vision, and a purpose. My work is about translating that identity into visual language, shapes, colors, and compositions that speak before a single word is read.</p>
                            </div>
                            <p className="max-w-xs text-justify font-poly-neutral leading-6">
                                I approach design with a balance between aesthetics and intention. A visual should not only look good; it should guide attention, create emotion, and leave a lasting impression.
                            </p>
                            <p className="max-w-xs text-justify font-poly-neutral leading-6">
                                Through social media design and digital campaigns, I help brands present themselves with clarity and character in a fast-moving digital world.

                                Because in the end, great design is not about adding more — it is about revealing what truly matters.
                            </p>
                        </div>
                    </div>
                    {/* pic */}
                    <div className="sticky top-30 bottom-0 ml-19 h-[70vh] w-[53%] overflow-visible">
                        <MagneticImageLayers src="/assets/me.png" alt="me" className=""/>
                    </div>
                </div>
            </section>
        </section>
    );
}
