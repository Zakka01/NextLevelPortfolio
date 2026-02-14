"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroLoader({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);
    const [textRevealed, setTextRevealed] = useState(false);

    useEffect(() => {
        // Start reveal animation immediately - no waiting
        const revealTimer = setTimeout(() => {
            setTextRevealed(true);
        }, 50);

        // Complete loading and hide loader - optimized timing
        // Text animation: ~30 chars * 0.015s stagger + 0.1s delay + 0.35s duration = ~1.1s
        const completeTimer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                if (onComplete) onComplete();
            }, 800); // Faster fade out
        }, 2000); // Total duration: 2 seconds (much faster)

        return () => {
            clearTimeout(revealTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    // ReactBits-style split text reveal - character by character
    const text = "ready for the experience ?";
    const characters = text.split('');

    // Container variants for stagger - optimized for speed
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.015, // Tighter stagger for faster reveal
                delayChildren: 0.1, // Minimal initial delay
            },
        },
    };

    // Character variants - slide up and fade in - optimized timing
    const characterVariants = {
        hidden: {
            opacity: 0,
            y: 15, // Reduced movement for snappier feel
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.35, // Faster duration
                ease: [0.25, 0.1, 0.25, 1], // Snappier, more professional easing
            },
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-black z-9999 flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div className="relative w-full flex items-center justify-center px-4">
                        <motion.h1 
                            className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[2.5rem] font-mono tracking-tighter text-white select-none text-center"
                            variants={containerVariants}
                            initial="hidden"
                            animate={textRevealed ? "visible" : "hidden"}
                        >
                            {characters.map((char, index) => (
                                <motion.span
                                    key={index}
                                    className="inline-block"
                                    variants={characterVariants}
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
