"use client";

import { motion } from "framer-motion";
import { profile, positioning, regulatory } from "@/lib/content";

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-6"
      id="about"
    >
      <h2 className="text-monad-purple text-lg mb-4 text-glow-subtle">
        $ cat about.md
      </h2>

      <div className="space-y-4 text-terminal-text">
        <div>
          <span className="text-monad-purple-light"># </span>
          <span className="text-xl font-medium">{profile.name}</span>
        </div>

        <p className="text-terminal-text-dim">
          {profile.location} | {profile.education}
        </p>

        <div className="border-l-2 border-monad-purple pl-4 my-6">
          {positioning.uniqueValue.map((point, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="py-1"
            >
              <span className="text-monad-purple">→</span> {point}
            </motion.p>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-monad-purple-light text-sm mb-2">
            ## Regulatory & Policy Work
          </h3>
          <ul className="space-y-1 text-sm text-terminal-text-dim">
            <li>• {regulatory.daoLaw}</li>
            <li>• {regulatory.stablecoin}</li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 p-4 bg-terminal-bg-light rounded border border-terminal-border"
        >
          <p className="text-sm">
            <span className="text-monad-purple font-medium">Availability:</span> Seoul-based, 
            immediately available for remote work with flexible timezone overlap.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
