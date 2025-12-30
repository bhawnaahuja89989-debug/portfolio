"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles, User } from "lucide-react";
import { useRef } from "react";

export default function JourneySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const journeySteps = [
    {
      icon: <User className="w-6 h-6" />,
      title: "The Beginning",
      subtitle: "Bhawna Ahuja",
      description: "Started my journey in tech with a passion for building meaningful digital experiences.",
      year: "2019",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Bachelor's Degree",
      subtitle: "Computer Science",
      description: "Punjabi University • Laid the foundation in software development, algorithms, and data structures.",
      year: "2019-2023",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Full Stack Developer",
      subtitle: "Relinns Technologies",
      description: "Built scalable web applications serving 5,000+ users. Specialized in Angular, Node.js, and MongoDB.",
      year: "2023-2025",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Master's Degree",
      subtitle: "Computer Science",
      description: "Pace University • Deepening knowledge in distributed systems, algorithms, and software engineering.",
      year: "2025-2027",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="text-[hsl(var(--text-primary))] py-20">
      <div className="container mx-auto px-6 md:px-10 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Journey <span className="text-primary">So Far</span>
          </h2>
          <p className="text-lg text-[hsl(var(--text-secondary))] max-w-2xl mx-auto">
            From student to developer, here's how I've grown and evolved in the tech world
          </p>
        </motion.div>

        {/* Timeline - Desktop: Vertical with alternating cards */}
        <div className="max-w-4xl mx-auto">

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Background Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 transform -translate-x-1/2" />

            {/* Animated Progress Line */}
            <motion.div
              className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 via-green-500 to-orange-500 transform -translate-x-1/2 origin-top"
              style={{ height: lineHeight }}
            />

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                >
                  {/* Card */}
                  <div className="w-[calc(50%-2rem)]">
                    <motion.div
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 3 }}
                      className="group relative"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />

                      <div className="relative p-6 bg-[hsl(var(--bg))]/60 backdrop-blur-xl border border-[hsl(var(--text-muted))] rounded-xl group-hover:border-transparent transition-all">
                        {/* Icon and Year */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 text-white`}>
                            <div>{step.icon}</div>
                          </div>
                          <span className="text-sm font-bold text-primary">{step.year}</span>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-sm font-semibold text-[hsl(var(--text-secondary))] mb-3">{step.subtitle}</p>
                        <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} border-4 border-[hsl(var(--bg))] shadow-sm`} />
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-sm opacity-50`}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>

                  {/* Spacer for other side */}
                  <div className="w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Vertical line */}
                {index !== journeySteps.length && (
                  <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gray-800" />
                )}

                {/* Animated line segment */}
                {index !== journeySteps.length && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`absolute left-[11px] top-0 w-0.5 bg-gradient-to-b ${step.color} origin-top`}
                  />
                )}

                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-0 top-0"
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} border-4 border-[hsl(var(--bg))] shadow-sm`} />
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-sm opacity-50`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 3 }}
                  className="group relative">

                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />

                  <div className="relative h-full bg-[hsl(var(--bg))]/60 backdrop-blur-xl border border-[hsl(var(--text-muted))] rounded-xl group-hover:border-transparent transition-all p-5">
                    {/* Icon and Year */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-10`}>
                        <div>{step.icon}</div>
                      </div>
                      <span className="text-xs font-bold text-primary">{step.year}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-sm font-semibold text-[hsl(var(--text-secondary))] mb-2">{step.subtitle}</p>
                    <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/40 rounded-2xl">
            <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))]">What's Next?</p>
              <p className="text-base sm:text-lg font-bold">Future chapters await... 🚀</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}