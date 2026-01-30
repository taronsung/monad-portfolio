"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/content";

interface EasterEggProps {
  onClose?: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export function EasterEgg({ onClose }: EasterEggProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 2 + 1,
    }));
    setParticles(newParticles);

    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 2500),
      setTimeout(() => setStep(4), 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-monad-purple"
            style={{
              left: `${particle.x}%`,
              width: particle.size,
              height: particle.size,
            }}
            initial={{ y: -20, opacity: 1 }}
            animate={{
              y: typeof window !== "undefined" ? window.innerHeight + 20 : 1000,
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: particle.duration * 2,
              ease: "linear",
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-6 space-y-4"
      >
        <AnimatePresence mode="wait">
          {step >= 0 && (
            <motion.div
              key="password"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-terminal-text-dim"
            >
              [sudo] password for visitor: <span className="text-monad-purple">********</span>
            </motion.div>
          )}

          {step >= 1 && (
            <motion.div
              key="verifying"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-terminal-text-dim"
            >
              Verifying credentials...
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              key="granted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl font-bold text-monad-purple text-glow"
            >
              ACCESS GRANTED
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <p className="text-terminal-text">
                Excellent choice! Initiating recruitment protocol...
              </p>

              <div className="p-4 bg-terminal-bg-light rounded border border-monad-purple">
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-terminal-text-dim">Email: </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-monad-purple-light hover:text-monad-purple"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-terminal-text-dim">GitHub: </span>
                    <a
                      href={`https://github.com/${profile.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-monad-purple-light hover:text-monad-purple"
                    >
                      github.com/{profile.github}
                    </a>
                  </div>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-monad-purple-light italic"
              >
                &quot;Let&apos;s build the future of decentralized computing together.&quot;
              </motion.p>

              {onClose && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={onClose}
                  className="text-xs text-terminal-text-dim hover:text-monad-purple transition-colors"
                >
                  [Press any key or click to continue]
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
