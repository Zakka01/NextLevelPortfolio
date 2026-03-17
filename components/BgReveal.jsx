"use client";

import { motion } from "framer-motion";

export default function BgRevealSection({ children }) {
  return (
    <section className="relative w-screen min-h-screen bg-black overflow-hidden">
      {/* solid white reveal */}
      {/* <motion.div
        className="absolute inset-0 bg-white origin-bottom"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.86, 0.0, 0.07, 1.0] }}
      /> */}

      {/* blurred edge */}
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-40 bg-white blur-2xl opacity-80"
        initial={{ y: 80, scaleY: 0.2 }}
        whileInView={{ y: -0, scaleY: 4.5 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 1.2, ease: [0.86, 0.0, 0.07, 1.0] }}
      />

      <div className="relative z-10">{children}</div>
    </section>
  );
}