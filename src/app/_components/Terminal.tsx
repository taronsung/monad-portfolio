"use client";

import { ReactNode } from "react";
import { WindowChrome } from "./WindowChrome";

interface TerminalProps {
  children: ReactNode;
  showChrome?: boolean;
}

export function Terminal({ children, showChrome = true }: TerminalProps) {
  return (
    <div className="terminal-container relative max-w-4xl mx-auto">
      {showChrome && <WindowChrome />}
      <div className="relative">
        <div className="crt-lines" />
        <div className="p-6 min-h-[60vh] relative z-0">{children}</div>
      </div>
    </div>
  );
}
