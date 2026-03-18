"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const layers = [
    { strength: 8, opacity: 0.12, scale: 1.02, depth: 20, border: "1px solid rgba(255,255,255,0.18)" },
    { strength: 14, opacity: 0.08, scale: 1.04, depth: 12, border: "1px solid rgba(255,255,255,0.12)" },
    { strength: 20, opacity: 0.04, scale: 1.06, depth: 6, border: "1px solid rgba(255,255,255,0.08)" },
];

export default function MagneticImageLayers({ src, alt }) {
    const wrapRef = useRef(null);
    const layerRefs = useRef([]);
    const mainRef = useRef(null);
    const target = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const onMove = (e) => {
            const wrap = wrapRef.current;
            if (!wrap) return;

            const rect = wrap.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            target.current = { x, y };
        };

        const tick = () => {
            current.current.x += (target.current.x - current.current.x) * 0.08;
            current.current.y += (target.current.y - current.current.y) * 0.08;

            const wrap = wrapRef.current;
            if (wrap) {
                const rect = wrap.getBoundingClientRect();
                const x = current.current.x;
                const y = current.current.y;

                const rotateX = (y / rect.height) * -3;
                const rotateY = (x / rect.width) * 3;

                layerRefs.current.forEach((el, i) => {
                    if (!el) return;
                    const { strength, scale, depth } = layers[i];
                    const tx = (x / rect.width) * strength;
                    const ty = (y / rect.height) * strength;

                    el.style.transform = `
            translate(${tx}px, ${ty}px)
            translateZ(${depth}px)
            scale(${scale})
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
          `;
                });

                if (mainRef.current) {
                    mainRef.current.style.transform = `
            translateZ(30px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
          `;
                }
            }

            requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", onMove);
        requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    return (
        <div
            ref={wrapRef}
            className="relative w-full h-full overflow-visible"
            style={{ perspective: "1000px" }}
        >
            {/* main image */}
            <div
                ref={mainRef}
                className="absolute inset-0 pointer-events-none"
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
            >
                <Image src={src} alt={alt} fill className="object-cover grayscale" />
            </div>
            {layers.map((layer, i) => (
                <div
                    key={i}
                    ref={(el) => (layerRefs.current[i] = el)}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        opacity: layer.opacity,
                        border: layer.border,
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                    }}
                >
                    <Image src={src} alt={alt} fill className="object-cover grayscale hover:grayscale-25 transition-all duration-300" />
                </div>
            ))}

        </div>
    );
}