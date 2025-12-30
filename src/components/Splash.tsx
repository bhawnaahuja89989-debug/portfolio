"use client";

import { motion } from "framer-motion";

const words = ["BHAWNA", " ", "AHUJA"];

export default function Splash({ onFinish }: { onFinish: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[hsl(var(--bg))] z-50 px-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4.5, duration: 1.8 }}
      onAnimationComplete={onFinish}
    >
      <div className="relative">
        {/* TEXT */}
        <motion.h1
          className="
            relative z-10
            flex flex-wrap lg:flex-nowrap
            justify-center items-center gap-x-4
            text-center
            font-extrabold tracking-tight
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
          "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="flex whitespace-nowrap text-primary">
              {word.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block drop-shadow-[0_0_12px_hsl(var(--primary)/0.35)]"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
      </div>
    </motion.div>
  );
}
