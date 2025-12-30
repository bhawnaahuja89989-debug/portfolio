"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Zap, Code, Users } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Personal Portfolio",
      subtitle: "Interactive Developer Portfolio",
      description: "A modern, responsive portfolio website showcasing my skills and professional journey with smooth animations.",
      period: "December 2024",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/portfolio.png",
      link: "#",
      hasSource: true,
      gradient: "from-blue-500 to-cyan-500",
      icon: <Code className="w-4 h-4" />,
      type: "Personal"
    },
    {
      title: "BotPenguin",
      subtitle: "Chatbot Builder Platform",
      description: "Multi-channel chatbot automation platform for enterprise clients.",
      period: "Jan 2024 - Jul 2025",
      technologies: ["Angular", "Node.js", "MongoDB", "REST APIs"],
      image: "/botpenguin.png",
      link: "https://app.botpenguin.com",
      hasSource: false,
      gradient: "from-purple-500 to-pink-500",
      icon: <Zap className="w-4 h-4" />,
      type: "Team Project",
      role: "Full Stack Developer"
    },
    {
      title: "Medoplus",
      subtitle: "Healthcare Services Platform",
      description: "Healthcare platform enabling appointment booking and health record management for 100K+ users across India.",
      period: "May 2023 - Oct 2023",
      technologies: ["Angular", "Express.js", "MongoDB", "APIs"],
      image: "/medoplus.png",
      link: "https://medoplus.in",
      hasSource: false,
      gradient: "from-green-500 to-emerald-500",
      icon: <Users className="w-4 h-4" />,
      type: "Team Project",
      role: "Frontend Developer"
    }
  ];

  return (
    <section className="min-h-screen text-[hsl(var(--text-primary))] flex flex-col justify-center py-20">
      <div className="container mx-auto px-6 md:px-10 w-full space-y-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-[hsl(var(--text-secondary))] max-w-2xl mx-auto">
            Real-world applications I've built and contributed to
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y:0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 3 }}
              className="group relative h-full"
            >
              {/* Gradient glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />

              {/* Project Card */}
              <div className="relative h-full bg-[hsl(var(--bg))]/60 backdrop-blur-xl border border-[hsl(var(--text-muted))] rounded-xl group-hover:border-transparent transition-all flex flex-col">

                {/* Project Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-900 rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Type Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-[hsl(var(--bg))]/80 backdrop-blur-sm border ${project.type === "Personal" ? "border-blue-500 text-blue-400" : "border-primary text-primary"}`}>
                    {project.type}
                  </div>
                  {/* Icon Badge */}
                  <div className={`absolute top-3 text-white left-3 p-2 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-90`}>
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold">
                      {project.subtitle}
                    </p>
                    {project.role && (
                      <p className="text-xs text-[hsl(var(--text-muted))] mt-1">
                        Role: {project.role}
                      </p>
                    )}
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-xs text-[hsl(var(--text-muted))] mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{project.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs bg-primary/10 border border-primary/30 rounded-full text-[hsl(var(--text-secondary))]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Proprietary Note */}
                  {project.type === "Team Project" && (
                    <p className="text-xs text-[hsl(var(--text-muted))] italic mb-3 text-center">
                      * Proprietary project at Relinns Technologies
                    </p>
                  )}

                  {/* Links */}
                  <div className="flex gap-3 pt-3 border-t border-gray-800">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/80 rounded-lg transition-all font-medium text-sm text-gray-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </motion.a>
                    {project.hasSource && (
                      <motion.a
                        href="https://github.com/yourusername/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[hsl(var(--btn-bg))] text-[hsl(var(--btn-text))] transition-all font-medium text-sm"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>

                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}