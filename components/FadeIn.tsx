"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const FadeIn = ({
  children,
  delay = 0.2,
  direction = "up",
  className,
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getDirection = (dir: string) => {
    switch (dir) {
      case "up":
        return { y: 50 };
      case "down":
        return { y: -50 };
      case "left":
        return { x: -50 };
      case "right":
        return { x: 50 };
      default:
        return { y: 50 };
    }
  };

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, ...getDirection(direction) },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay: delay, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
