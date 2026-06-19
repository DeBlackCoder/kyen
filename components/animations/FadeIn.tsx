"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
  once = true,
}: FadeInProps) {
  const directionMap = {
    up:    { y: 40, x: 0 },
    down:  { y: -40, x: 0 },
    left:  { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    none:  { x: 0, y: 0 },
  };

  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
