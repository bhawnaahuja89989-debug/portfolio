"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // load slim version
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  // Change particle color based on theme
  const particleColor = theme === "dark" ? "#ffffff" : "#000000";
  const particleSahpe = theme === "dark" ? "star" : "circle";

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
        fpsLimit: 40,
        particles: {
          color: { value: particleColor },
          move: {
            enable: true,
            speed: 0.4,
            direction: "bottom-right",
            outModes: { default: "out" },
          },
          number: {
            value: 80,
            density: {
              enable: true,
              width: 600,
              height: 600,
            },
          },
          opacity: { value: 0.2 },
          shape: { type: particleSahpe },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
