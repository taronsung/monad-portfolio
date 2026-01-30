"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypingEffectOptions {
  speed?: number;
  startDelay?: number;
  instant?: boolean;
}

interface UseTypingEffectReturn {
  displayedText: string;
  isComplete: boolean;
  restart: () => void;
}

export function useTypingEffect(
  text: string,
  options: UseTypingEffectOptions = {}
): UseTypingEffectReturn {
  const { speed = 30, startDelay = 0, instant = false } = options;
  const [displayedText, setDisplayedText] = useState(instant ? text : "");
  const [isComplete, setIsComplete] = useState(instant);
  const [key, setKey] = useState(0);

  const restart = useCallback(() => {
    setDisplayedText("");
    setIsComplete(false);
    setKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (instant) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    setDisplayedText("");
    setIsComplete(false);

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const startTyping = () => {
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      typeNextChar();
    };

    if (startDelay > 0) {
      timeoutId = setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, startDelay, instant, key]);

  return { displayedText, isComplete, restart };
}
