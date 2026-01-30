"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bootSequence } from "@/lib/content";

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const skip = useCallback(() => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasBooted", "true");
    }
    setTimeout(onComplete, 300);
  }, [onComplete]);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("hasBooted")) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const handleKeyPress = () => skip();
    const handleClick = () => skip();

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClick);
    };
  }, [skip, onComplete]);

  useEffect(() => {
    if (!isVisible) return;

    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= bootSequence.length - 1) {
          clearInterval(lineInterval);
          setTimeout(skip, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, [isVisible, skip]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-terminal-bg z-50 flex items-center justify-center p-4"
        >
          <div className="max-w-2xl w-full font-mono text-sm">
            <div className="space-y-1">
              {bootSequence.slice(0, currentLine + 1).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  className={
                    line.includes("MONAD") || line.includes("Welcome")
                      ? "text-monad-purple text-glow"
                      : line === ""
                      ? "h-4"
                      : "text-terminal-text"
                  }
                >
                  {line}
                </motion.div>
              ))}
            </div>

            {currentLine >= 4 && currentLine < 7 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-terminal-text-dim">[</span>
                  <div className="flex-1 h-2 bg-terminal-bg-light rounded overflow-hidden">
                    <motion.div
                      className="h-full bg-monad-purple"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <span className="text-terminal-text-dim">] {progress}%</span>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center text-terminal-text-dim text-xs"
            >
              Press any key or click to skip
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
