"use client";

import { motion } from "framer-motion";

export default function Hero() {

  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();

    const target = document.querySelector(targetId);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8 relative z-10 py-20 md:py-0">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-primary block">FULL STACK</span>
            <span className="text-[hsl(var(--text-primary))] block">DEVELOPER</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            Hi! I&apos;m{" "}
            <span className="font-bold text-[hsl(var(--text-primary))]">Bhawna Ahuja👋</span>.
            A product-focused Full Stack Developer specializing in building scalable
            web platforms, turning ideas into reliable, well-engineered user experiences.
          </p>

          <motion.button whileHover={{ scale: 1.02 }}
            className="cursor-pointer mx-auto md:mx-0 mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-xl flex items-center justify-center gap-2"
            onClick={(e) => handleSmoothScroll(e, "#contact")} >
            Say Hi!
          </motion.button>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-auto grid grid-cols-3 md:grid-cols-1 gap-8 text-center md:text-right"
        >
          <div>
            <span className="text-3xl sm:text-4xl font-bold text-primary">2+</span>
            <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))]">Years of Experience</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-bold text-primary">4+</span>
            <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))]">Completed Projects</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-bold text-primary">8K+</span>
            <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))]">Hours Worked</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
