"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroText() {
  return (
    <div className="relative z-10 h-full flex flex-col justify-center px-5 sm:px-12 lg:px-20 max-w-2xl">
      {/* Tagline chip */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-block mb-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white/70 border border-white/30 px-3 py-1 rounded-full w-fit"
      >
        From Farm to Table
      </motion.span>

      {/* Headline */}
      <div className="overflow-hidden mb-3">
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight"
        >
          KYEN PRODUCTS &amp; SUPPLIES
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-gray-200 text-xs sm:text-sm lg:text-base mb-5 max-w-sm sm:max-w-md leading-relaxed"
      >
        We process fresh agricultural produce into high-quality, shelf-stable
        food products that meet modern standards.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Link
          href="/contact"
          className="inline-block border border-white text-white text-xs sm:text-sm font-semibold px-5 py-2 sm:px-6 sm:py-2.5 rounded hover:bg-white hover:text-black transition-colors duration-300"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
