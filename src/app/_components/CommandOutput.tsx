"use client";

import { motion } from "framer-motion";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Standards } from "./sections/Standards";
import { Publications } from "./sections/Publications";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { Help } from "./sections/Help";
import { EasterEgg } from "./EasterEgg";
import type { CommandName } from "@/lib/hooks/useTerminal";

interface CommandEntry {
  input: string;
  output: CommandName | "unknown" | "easter-egg";
  timestamp: number;
}

interface CommandOutputProps {
  history: CommandEntry[];
  showHero?: boolean;
}

function renderOutput(output: CommandName | "unknown" | "easter-egg") {
  switch (output) {
    case "help":
      return <Help />;
    case "about":
      return (
        <>
          <About />
          <Publications />
        </>
      );
    case "work":
      return <Experience />;
    case "skills":
      return <Skills />;
    case "standards":
      return <Standards />;
    case "contact":
      return <Contact />;
    case "easter-egg":
      return <EasterEgg />;
    case "unknown":
      return (
        <div className="py-2 text-red-400">
          Command not found. Type &apos;help&apos; for available commands.
        </div>
      );
    default:
      return null;
  }
}

export function CommandOutput({ history, showHero = true }: CommandOutputProps) {
  return (
    <div className="space-y-4">
      {showHero && history.length === 0 && <Hero />}

      {history.map((entry, index) => (
        <motion.div
          key={entry.timestamp}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2 text-terminal-text-dim text-sm mb-2">
            <span className="text-monad-purple">visitor@monad</span>
            <span className="text-monad-purple-light">:~$</span>
            <span className="text-terminal-text">{entry.input}</span>
          </div>
          {renderOutput(entry.output)}
          {index < history.length - 1 && (
            <div className="border-t border-terminal-border my-4" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
