"use client";

import { motion } from "framer-motion";
import { standards } from "@/lib/content";

export function Standards() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-6"
      id="standards"
    >
      <h2 className="text-monad-purple text-lg mb-2 text-glow-subtle">
        $ ls standards/
      </h2>
      <p className="text-terminal-text-dim text-sm mb-6">
        Blockchain standards I&apos;ve authored (not just written about — actually authored)
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {standards.map((standard, index) => (
          <motion.a
            key={standard.id}
            href={standard.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="block p-4 bg-terminal-bg-light rounded border border-terminal-border hover:border-monad-purple transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-monad-purple-light font-medium">
                {standard.id}
              </span>
              <span
                className={`badge ${
                  standard.status === "Final" ? "badge-final" : "badge-draft"
                }`}
              >
                {standard.status}
              </span>
            </div>
            <h3 className="text-terminal-text font-medium mb-1">
              {standard.title}
            </h3>
            <p className="text-terminal-text-dim text-sm">
              {standard.description}
            </p>
            <div className="mt-2 text-xs text-monad-purple">
              View on {standard.id.startsWith("KIP") ? "Kaia" : "GitHub"} →
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
