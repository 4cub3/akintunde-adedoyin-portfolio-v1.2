"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "section";
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  as = "div",
}: FadeInProps) {
  const reduced = useReducedMotion();
  const motionProps = {
    className,
    initial: reduced ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" as const },
    transition: { duration: 0.35, ease: "easeOut" as const, delay },
  };

  if (as === "li") {
    return <motion.li {...motionProps}>{children}</motion.li>;
  }
  if (as === "article") {
    return <motion.article {...motionProps}>{children}</motion.article>;
  }
  if (as === "section") {
    return <motion.section {...motionProps}>{children}</motion.section>;
  }

  return <motion.div {...motionProps}>{children}</motion.div>;
}
