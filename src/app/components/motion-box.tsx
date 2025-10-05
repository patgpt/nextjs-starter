"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface MotionBoxProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionBox({ children, className, delay = 0 }: MotionBoxProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
