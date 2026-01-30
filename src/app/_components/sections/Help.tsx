"use client";

import { motion } from "framer-motion";
import { commands } from "@/lib/content";

export function Help() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-6"
    >
      <h2 className="text-monad-purple text-lg mb-4 text-glow-subtle">
        Available Commands
      </h2>

      <div className="space-y-2">
        {Object.entries(commands).map(([cmd, desc], index) => (
          <motion.div
            key={cmd}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex gap-4 text-sm"
          >
            <span className="text-monad-purple-light font-medium w-20 shrink-0">
              {cmd}
            </span>
            <span className="text-terminal-text-dim">{desc}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-terminal-text-dim text-xs"
      >
        Tip: Use arrow keys (↑/↓) to navigate command history
      </motion.p>
    </motion.section>
  );
}
