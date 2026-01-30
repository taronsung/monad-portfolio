"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/content";

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-6"
      id="work"
    >
      <h2 className="text-monad-purple text-lg mb-6 text-glow-subtle">
        $ cat experience.json
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="border-l-2 border-monad-purple-dark pl-4 py-2"
          >
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <h3 className="text-monad-purple-light font-medium">
                {exp.company}
              </h3>
              <span className="text-terminal-text-dim text-sm">
                | {exp.role}
              </span>
              <span className="text-terminal-text-dim text-xs">
                ({exp.period})
              </span>
            </div>

            <p className="text-terminal-text-dim text-sm mb-2">
              {exp.description}
            </p>

            <ul className="space-y-1">
              {exp.highlights.map((highlight, hIndex) => (
                <motion.li
                  key={hIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + hIndex * 0.05 }}
                  className="text-sm text-terminal-text flex gap-2"
                >
                  <span className="text-monad-purple shrink-0">•</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
