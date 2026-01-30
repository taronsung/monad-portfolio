"use client";

import { useState, useCallback } from "react";

export type CommandName = "help" | "about" | "work" | "skills" | "standards" | "contact" | "clear";

interface CommandEntry {
  input: string;
  output: CommandName | "unknown" | "easter-egg";
  timestamp: number;
}

interface UseTerminalReturn {
  history: CommandEntry[];
  currentSection: CommandName | null;
  executeCommand: (input: string) => void;
  clearHistory: () => void;
}

const VALID_COMMANDS: CommandName[] = ["help", "about", "work", "skills", "standards", "contact", "clear"];

export function useTerminal(): UseTerminalReturn {
  const [history, setHistory] = useState<CommandEntry[]>([]);
  const [currentSection, setCurrentSection] = useState<CommandName | null>(null);

  const executeCommand = useCallback((input: string) => {
    const trimmed = input.trim().toLowerCase();
    
    if (trimmed === "sudo hire taronsung") {
      setHistory((prev) => [
        ...prev,
        { input, output: "easter-egg", timestamp: Date.now() },
      ]);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("easter-egg-found", "true");
      }
      return;
    }

    if (trimmed === "clear") {
      setHistory([]);
      setCurrentSection(null);
      return;
    }

    const command = VALID_COMMANDS.find((cmd) => cmd === trimmed);
    
    if (command) {
      setCurrentSection(command);
      setHistory((prev) => [
        ...prev,
        { input, output: command, timestamp: Date.now() },
      ]);
      
      if (typeof window !== "undefined" && command !== "help") {
        window.location.hash = command;
      }
    } else {
      setHistory((prev) => [
        ...prev,
        { input, output: "unknown", timestamp: Date.now() },
      ]);
    }
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setCurrentSection(null);
  }, []);

  return {
    history,
    currentSection,
    executeCommand,
    clearHistory,
  };
}
