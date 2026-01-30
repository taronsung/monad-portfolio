"use client";

import { motion } from "framer-motion";
import { asciiArt, positioning } from "@/lib/content";
import { useTypingEffect } from "@/lib/hooks/useTypingEffect";

export function Hero() {
  const { displayedText, isComplete } = useTypingEffect(positioning.tagline, {
    speed: 40,
    startDelay: 500,
  });

  return (
    <section className="py-8">
      <motion.pre
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-monad-purple text-glow text-[0.5rem] sm:text-xs leading-tight mb-6 overflow-x-auto"
      >
        {asciiArt}
      </motion.pre>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <span className="text-monad-purple-light text-lg sm:text-xl">
          {displayedText}
        </span>
        {!isComplete && <span className="cursor-blink text-monad-purple">_</span>}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-terminal-text-dim text-sm"
      >
        Type <span className="text-monad-purple">&apos;help&apos;</span> for available commands
      </motion.p>
    </section>
  );
}
