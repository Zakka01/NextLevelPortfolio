"use client";

import { useEffect, useState } from "react";
import { useLenis } from "@/contexts/LenisContext";

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    let rafId = null;

    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Use Lenis's scroll property if available, otherwise fallback to window.scrollY
      let scrollTop;
      if (lenis && lenis.scroll !== undefined) {
        scrollTop = lenis.scroll;
      } else {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      }
      
      const totalScrollable = documentHeight - windowHeight;
      const progress = totalScrollable > 0 ? Math.min(100, Math.max(0, (scrollTop / totalScrollable) * 100)) : 0;
      
      setScrollProgress(progress);
      
      rafId = requestAnimationFrame(updateScrollProgress);
    };

    rafId = requestAnimationFrame(updateScrollProgress);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [lenis]);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none mix-blend-difference">
      <div className="flex flex-col items-center gap-2">
        {/* Scroll indicator line */}
        <div className="w-0.5 h-screen bg-neutral-800 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white"
            style={{ height: `${scrollProgress}%`, transition: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
