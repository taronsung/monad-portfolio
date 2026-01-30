"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS = ["help", "about", "work", "skills", "standards", "contact", "clear"];

interface CommandInputProps {
  onSubmit: (command: string) => void;
  disabled?: boolean;
}

export function CommandInput({ onSubmit, disabled = false }: CommandInputProps) {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  useEffect(() => {
    if (input.trim()) {
      const matches = COMMANDS.filter(cmd => 
        cmd.toLowerCase().startsWith(input.toLowerCase()) && cmd !== input.toLowerCase()
      );
      setSuggestions(matches);
      setShowSuggestions(matches.length > 0);
      setSelectedSuggestion(0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [input]);

  const handleSubmit = (cmd: string) => {
    if (cmd.trim()) {
      onSubmit(cmd);
      setCommandHistory((prev) => [...prev.slice(-9), cmd]);
      setInput("");
      setHistoryIndex(-1);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[selectedSuggestion]);
        setShowSuggestions(false);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        handleSubmit(suggestions[selectedSuggestion]);
      } else if (input.trim()) {
        handleSubmit(input);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setSelectedSuggestion(prev => Math.max(0, prev - 1));
      } else if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setSelectedSuggestion(prev => Math.min(suggestions.length - 1, prev + 1));
      } else if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      onSubmit("clear");
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 mb-3">
        {COMMANDS.filter(cmd => cmd !== "clear").map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleSubmit(cmd)}
            disabled={disabled}
            className="px-3 py-1.5 text-xs bg-terminal-bg-light border border-terminal-border rounded hover:border-monad-purple hover:text-monad-purple transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cmd}
          </button>
        ))}
      </div>

      <div className="relative">
        <div 
          className="flex items-center gap-2 cursor-text"
          onClick={handleContainerClick}
        >
          <span className="prompt shrink-0">visitor@monad</span>
          <span className="prompt-symbol shrink-0">:~$</span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => input && setSuggestions(COMMANDS.filter(cmd => cmd.startsWith(input.toLowerCase())))}
              disabled={disabled}
              className="w-full bg-transparent outline-none text-terminal-text caret-monad-purple"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              placeholder="Type a command or click above..."
            />
          </div>
          <span className="cursor-blink text-monad-purple">_</span>
        </div>

        <AnimatePresence>
          {showSuggestions && suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute bottom-full left-0 mb-2 w-full max-w-xs bg-terminal-bg-light border border-terminal-border rounded-lg overflow-hidden shadow-lg z-50"
            >
              <div className="p-2 text-xs text-terminal-text-dim border-b border-terminal-border">
                Tab to complete · Enter to run
              </div>
              {suggestions.map((cmd, index) => (
                <button
                  key={cmd}
                  onClick={() => handleSubmit(cmd)}
                  className={`w-full px-3 py-2 text-left text-sm transition-colors ${
                    index === selectedSuggestion
                      ? "bg-monad-purple text-white"
                      : "hover:bg-terminal-bg text-terminal-text"
                  }`}
                >
                  <span className="text-monad-purple-light">{input}</span>
                  <span>{cmd.slice(input.length)}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-xs text-terminal-text-dim">
        Tip: Use <span className="text-monad-purple">Tab</span> to autocomplete · <span className="text-monad-purple">↑/↓</span> for history
      </div>
    </div>
  );
}
