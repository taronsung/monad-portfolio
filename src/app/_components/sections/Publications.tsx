"use client";

import { motion } from "framer-motion";
import { publications } from "@/lib/content";

export function Publications() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-6"
      id="publications"
    >
      <h2 className="text-monad-purple text-lg mb-2 text-glow-subtle">
        $ cat publications.md
      </h2>
      <p className="text-terminal-text-dim text-sm mb-6">
        Technical writing published at leading blockchain research organizations
      </p>

      <div className="space-y-4">
        {publications.map((pub, index) => (
          <motion.a
            key={pub.publisher}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="block p-4 border-l-2 border-monad-purple-dark hover:border-monad-purple hover:bg-terminal-bg-light transition-colors"
          >
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-monad-purple-light font-medium">
                {pub.publisher}
              </span>
              <span className="skill-pill text-xs">{pub.language}</span>
            </div>
            <p className="text-terminal-text">{pub.title}</p>
            <div className="mt-2 text-xs text-monad-purple">Read on Medium →</div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
