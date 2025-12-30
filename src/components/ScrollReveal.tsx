"use client";

import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Variants } from "framer-motion";

function useReanimate(trigger: any) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("hidden").then(() => {
      controls.start("visible");
    });
  }, [trigger, controls]);

  return controls;
}

export default function ScrollReveal({
  children,
  trigger,
  delay = 0,
}: {
  children: React.ReactNode;
  trigger: any;
  delay?: number;
}) {
  const controls = useReanimate(trigger);

  const boldVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 120,
      scale: 0.85,
      rotateX: 15,
      filter: "blur(16px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={boldVariants}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
      className="w-full transform-gpu perspective-[1200px]"
    >
      {children}
    </motion.div>
  );
}
