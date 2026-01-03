"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronRight, Download } from "lucide-react";
import { useTheme } from "next-themes";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const menuWrapperRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Journey So Far", href: "#journey" },
    { name: "Featured Projects", href: "#projects" },
    { name: "Get In Touch", href: "#contact" },
  ];

  // Handle scroll effect - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY < 50) {
        // Always show at top of page
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);

    // Small delay to let menu close animation start
    setTimeout(() => {
      const sectionId = href.replace('#', '');
      const element = document.getElementById(sectionId);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <>
      {/* Navbar */}
      <motion.nav
        ref={menuWrapperRef}
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[hsl(var(--bg))]/80 backdrop-blur-xl border-none shadow-lg"
          : "bg-transparent border-none"
          }`}
      >
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-center justify-end h-16 sm:h-20 gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer w-10 h-10 rounded-lg bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/30 text-[hsl(var(--text-primary))] hover:border-primary flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400" />
              )}
            </motion.button>

            {/* Download Button */}
            <motion.a
              href="/resume/Bhawna-Resume.pdf"
              download
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer w-10 h-10 rounded-lg bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/30 text-[hsl(var(--text-primary))] hover:border-primary flex items-center justify-center"
              aria-label="Download Resume"
            >
              <Download className="w-5 h-5" />
            </motion.a>

            {/* Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer w-10 h-10 rounded-lg bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/30 text-[hsl(var(--text-primary))] hover:border-primary flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[hsl(var(--bg))] shadow-lg backdrop-blur-xl border-t border-[hsl(var(--text-muted))]"
            >
              <div className="px-4 py-6 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    whileTap={{ scale: 0.95 }}
                    className="group cursor-pointer block w-full text-left px-4 py-3 rounded-lg text-[hsl(var(--text-secondary))] hover:text-primary hover:bg-primary/10 transition-all relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-between">
                      <span className="font-medium">{link.name}</span>
                      <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
