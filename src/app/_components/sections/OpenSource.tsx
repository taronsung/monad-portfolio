"use client";

import { motion } from "framer-motion";
import { opensource } from "@/lib/content";

export function OpenSource() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-6"
      id="oss"
    >
      <h2 className="text-monad-purple text-lg mb-2 text-glow-subtle">
        $ git log --author=taronsung --oneline
      </h2>
      <p className="text-terminal-text-dim text-sm mb-6">
        Merged pull requests to major open source projects
      </p>

      <div className="space-y-4">
        {opensource.map((pr, index) => (
          <motion.a
            key={pr.url}
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="block p-4 border-l-2 border-monad-purple-dark hover:border-monad-purple hover:bg-terminal-bg-light transition-colors"
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-monad-purple-light font-medium text-sm">
                {pr.repo}
              </span>
              <span className="text-xs text-terminal-text-dim">
                ★ {pr.stars}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  pr.type === "docs"
                    ? "bg-blue-900/50 text-blue-300"
                    : "bg-green-900/50 text-green-300"
                }`}
              >
                {pr.type}
              </span>
            </div>
            <h3 className="text-terminal-text font-medium mb-1">{pr.title}</h3>
            <p className="text-terminal-text-dim text-sm">{pr.description}</p>
            <div className="mt-2 text-xs text-monad-purple">
              View PR →
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
