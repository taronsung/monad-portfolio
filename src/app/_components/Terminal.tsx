"use client";

import { ReactNode } from "react";
import { WindowChrome } from "./WindowChrome";

interface TerminalProps {
  children: ReactNode;
  showChrome?: boolean;
  fullScreen?: boolean;
}

export function Terminal({ children, showChrome = true, fullScreen = false }: TerminalProps) {
  return (
    <div 
      className={`terminal-container relative ${
        fullScreen 
          ? "w-full h-full min-h-screen" 
          : "max-w-4xl mx-auto"
      }`}
    >
      {showChrome && <WindowChrome />}
      <div className="relative h-full">
        <div className="crt-lines" />
        <div className={`relative z-0 ${fullScreen ? "p-4 sm:p-8 h-full" : "p-6 min-h-[60vh]"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
