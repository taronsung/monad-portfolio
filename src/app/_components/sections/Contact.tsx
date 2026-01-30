"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";

const contactLinks = [
  {
    label: "GitHub",
    value: profile.github,
    url: `https://github.com/${profile.github}`,
    icon: "gh",
  },
  {
    label: "Medium",
    value: profile.medium,
    url: `https://medium.com/${profile.medium}`,
    icon: "md",
  },
  {
    label: "Email",
    value: profile.email,
    url: `mailto:${profile.email}`,
    icon: "em",
  },
];

export function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-6"
      id="contact"
    >
      <h2 className="text-monad-purple text-lg mb-2 text-glow-subtle">
        $ cat contact.txt
      </h2>
      <p className="text-terminal-text-dim text-sm mb-6">
        Let&apos;s build something together
      </p>

      <div className="space-y-3">
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.url}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-3 hover:bg-terminal-bg-light rounded transition-colors group"
          >
            <span className="w-8 h-8 flex items-center justify-center bg-terminal-bg-light rounded text-monad-purple text-xs font-bold group-hover:bg-monad-purple group-hover:text-terminal-bg transition-colors">
              {link.icon}
            </span>
            <div>
              <div className="text-terminal-text-dim text-xs">{link.label}</div>
              <div className="text-terminal-text group-hover:text-monad-purple-light transition-colors">
                {link.value}
              </div>
            </div>
            <span className="ml-auto text-terminal-text-dim group-hover:text-monad-purple transition-colors">
              →
            </span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 p-4 bg-terminal-bg-light rounded border border-terminal-border text-center"
      >
        <p className="text-terminal-text-dim text-sm">
          📍 Based in <span className="text-terminal-text">{profile.location}</span>
        </p>
      </motion.div>
    </motion.section>
  );
}
