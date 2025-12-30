"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Briefcase,
  Award,
} from "lucide-react";

export default function AboutSection() {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Internship",
      description:
        "Recognized for outstanding contributions at Relinns Technologies",
      highlight: "Relinns Technologies",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance Boost",
      description:
        "Reduced application load time by  through optimization",
      highlight: "BotPenguin",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "100K+ Users Served",
      description:
        "Healthcare platform enabling appointment booking",
      highlight: "Medoplus",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code Advocate",
      description:
        "Focus on maintainability and scalability",
      highlight: "Emphasis on best practices",
      color: "from-orange-500 to-red-500",
    },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    const target = document.querySelector(targetId);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const techStack = [
    "Angular",
    "React",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Express",
    "Docker",
    "AWS",
    "CI/CD",
  ];

  return (
    <section className="min-h-screen text-[hsl(var(--text-primary))] flex flex-col justify-center py-20">
      <div className="container mx-auto px-6 md:px-10 w-full space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-[hsl(var(--text-secondary))] leading-relaxed"
        >
          <p>
            I'm a <span className="font-semibold text-primary">Full Stack Developer</span> with
            a passion for building web applications that are both powerful and user-friendly.
            With 2 years of hands-on experience, I’ve worked on everything from frontend interfaces
            to backend APIs and database optimization.
          </p>

          <p>
            At{" "}
            <span className="text-primary font-semibold">
              Relinns Technologies
            </span>
            , I developed and maintained applications using{" "}
            <span>Angular, Node.js, and MongoDB</span>,
            serving 5,000+ active users. I focused on performance optimization
            and automating deployments for faster release cycles.
          </p>

          <p>
            Currently pursuing my{" "}
            <span className="text-primary font-semibold">
              Master’s in Computer Science at Pace University
            </span>
            , I’m deepening my knowledge in algorithms, distributed systems,
            and software engineering.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <div className="pt-6 border-t border-gray-700/50">
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Tech Stack</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/30 rounded-full text-sm font-medium text-[hsl(var(--text-primary))] hover:border-primary transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Achievements Grid (Equal Height Boxes) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {achievements.map((card, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 3 }}
              className="relative group h-full"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />

              <div className="relative p-6 text-center flex flex-col h-full bg-[hsl(var(--bg))]/60 backdrop-blur-xl border border-[hsl(var(--text-muted))] rounded-xl group-hover:border-transparent transition-all">
                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} bg-opacity-10 text-white`}>
                    <div>{card.icon}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-1">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[hsl(var(--text-secondary))] flex-grow">
                  {card.description}
                </p>

                {/* Highlight */}
                <span className="text-xs text-primary font-semibold mt-3">
                  {card.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/40 rounded-2xl">
            <p className="text-sm text-[hsl(var(--text-secondary))]">
              Want to know more?{" "}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="text-primary font-semibold hover:underline transition-all"
              >
                Let’s connect
              </a>{" "}
              and build something amazing together 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
