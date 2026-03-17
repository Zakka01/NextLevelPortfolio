"use client"
import Image from "next/image";


export default function Section2() {
    return (
        <section>
            <section className="w-screen bg-black min-h-screen z-1999 py-10 pt-60">
                <h1 className="text-6xl text-neutral-200 px-20 font-poly-neutral">Featured works</h1>
                <div className="w-screen flex flex-col mt-20 gap-30">

                    <div className="flex flex-row justify-between items-center px-30 gap-80">
                        <div className="group w-[22vw] h-[65vh] bg-neutral-400 cursor-pointer relative overflow-hidden">
                            <Image src="/assets/ParfPoster2.png" fill className="object-cover grayscale brightness-75 group-hover:scale-102 group-hover:grayscale-0 group-hover:brightness-85 duration-700"/>
                        </div>
                        <div className="group w-[30vw] h-[43vh] bg-neutral-400 cursor-pointer relative overflow-hidden">
                            <Image src="/assets/juice.png" fill className="object-cover grayscale brightness-75 group-hover:scale-102 group-hover:grayscale-0 group-hover:brightness-85 duration-700"/>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-end px-30 gap-80">
                        <div className="group w-[30vw] h-[43vh] bg-neutral-400 cursor-pointer relative overflow-hidden">
                            <Image src="/assets/5.png" fill className="object-cover grayscale brightness-75 group-hover:scale-102 group-hover:grayscale-0 group-hover:brightness-85 duration-700"/>
                        </div>
                        <div className="group w-[22vw] h-[65vh] bg-neutral-400 cursor-pointer relative overflow-hidden">
                            <Image src="/assets/4.png" fill className="object-cover pr-5 scale-125 grayscale brightness-75 group-hover:scale-128 group-hover:grayscale-0 group-hover:brightness-85 duration-700"/>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}