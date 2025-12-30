"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram, Coffee } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/bhawnaahuja89989-debug", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/bhawna-ahujaa/", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "http://instagram.com/bhawnaa15", label: "Instagram" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:bhawnaahuja89989@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Journey So Far", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Get In Touch", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    const target = document.querySelector(targetId);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <section className="mt-20">
      <footer className="relative backdrop-blur-[3px] border-t border-[hsl(var(--text-muted))] text-[hsl(var(--text-secondary))] overflow-hidden">

        <div className="relative container mx-auto px-6 md:px-10 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            {/* Brand Section - Takes more space */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-gray-200">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--text-primary))]">
                  Fueled by <span className="text-primary">Coffee</span> & <span className="text-primary">Code</span>
                </h3>
              </div>
              <p className="text-[hsl(var(--text-secondary))] leading-relaxed">
                Full Stack Developer bringing ideas to life, one commit at a time.
                Let's build something amazing together! 🚀
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-[hsl(var(--text-primary))]"> Navigation</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-primary transition-all duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  key='resume'
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="/resume/Bhawna-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-primary transition-all duration-300" />
                    View Resume
                  </a>
                </motion.li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-4"
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-[hsl(var(--text-primary))]"> Connect</span> 
              </h4>
              <p className="text-[hsl(var(--text-secondary))] text-sm mb-6 leading-relaxed">
                Let's collaborate on exciting projects! Feel free to reach out through any platform.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/20 flex items-center justify-center hover:from-primary hover:to-purple-600 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 text-[hsl(var(--text-secondary))] group-hover:text-white transition-colors">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider with gradient */}
          <div className="relative h-[1px] mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--text-muted))] to-transparent" />
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-[hsl(var(--text-muted))]">
              <p className="flex items-center gap-2">
                © {currentYear} Bhawna Ahuja. Made with
                <Heart className="w-4 h-4 text-red-500 fill-red-500 inline-block animate-pulse" />
                and lots of coffee
              </p>
              <span className="hidden sm:block">•</span>
              <p>All rights reserved</p>
            </div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary hover:border-primary transition-all duration-300 text-sm font-medium cursor-pointer"
            >
              <span className="text-[hsl(var(--text-secondary))] group-hover:text-white transition-colors">
                Back to top
              </span>
              <ArrowUp className="w-4 h-4 text-[hsl(var(--text-secondary))] group-hover:text-white transition-colors" />
            </motion.button>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-8 border-t border-[hsl(var(--text-muted))]"
          >
            <p className="text-xs text-[hsl(var(--text-muted))]">
              Crafted with precision • Designed for impact • Built with passion
            </p>
          </motion.div>
        </div>
      </footer>
    </section>
  );
}