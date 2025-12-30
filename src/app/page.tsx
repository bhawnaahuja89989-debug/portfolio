"use client";

import { useState, useEffect } from "react";
import Splash from "@/components/Splash";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollReveal from "@/components/ScrollReveal";
import ParticlesBackground from "@/components/ParticlesBackground";
import FooterSection from "@/components/FooterSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import Navbar from "@/components/NavbarSection";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey(Date.now());
  }, []);

  return (
    <main className="relative min-h-screen">
      <ScrollProgressBar />

      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          {/* Navbar - appears after splash */}
          <Navbar />

          {/* Page Content */}
          <div className="bg-[hsl(var(--bg))]">
            {/* Animated background particles */}
            <ParticlesBackground />

            {/* Hero Section - No ScrollReveal needed, it's the first thing visible */}
            <div id="home">
              <Hero />
            </div>

            {/* About Section */}
            <div id="about">
              <ScrollReveal trigger={animateKey}>
                <AboutSection />
              </ScrollReveal>
            </div>

            {/* Education/Journey Section */}
            <div id="journey">
              <ScrollReveal trigger={animateKey}>
                <EducationSection />
              </ScrollReveal>
            </div>

            {/* Projects Section */}
            <div id="projects">
              <ScrollReveal trigger={animateKey}>
                <ProjectsSection />
              </ScrollReveal>
            </div>

            {/* Contact Section */}
            <div id="contact">
              <ScrollReveal trigger={animateKey}>
                <ContactSection />
              </ScrollReveal>
            </div>

            <FooterSection />
          </div>
        </>
      )}
    </main>
  );
}