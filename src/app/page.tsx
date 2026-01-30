"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal } from "./_components/Terminal";
import { BootSequence } from "./_components/BootSequence";
import { CommandInput } from "./_components/CommandInput";
import { CommandOutput } from "./_components/CommandOutput";
import { MobileScrollView } from "./_components/MobileScrollView";
import { useTerminal } from "@/lib/hooks/useTerminal";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [useScrollMode, setUseScrollMode] = useState(false);
  const { history, executeCommand } = useTerminal();
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("hasBooted")) {
        setBooted(true);
      }
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (!booted || typeof window === "undefined") return;
    const hash = window.location.hash.slice(1);
    if (hash && ["about", "work", "skills", "standards", "contact"].includes(hash)) {
      executeCommand(hash);
    }
  }, [booted, executeCommand]);

  if (!mounted) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-monad-purple">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      <Terminal fullScreen>
        <div className="flex flex-col h-[calc(100vh-80px)]">
          {isMobile && !useScrollMode && history.length === 0 && (
            <div className="mb-4 p-3 bg-terminal-bg-light rounded border border-terminal-border text-center">
              <p className="text-sm text-terminal-text-dim mb-2">
                Prefer scrolling? 
              </p>
              <button
                onClick={() => setUseScrollMode(true)}
                className="text-monad-purple hover:text-monad-purple-light text-sm underline"
              >
                Switch to scroll mode
              </button>
            </div>
          )}

          {useScrollMode ? (
            <div className="flex-1 overflow-y-auto pr-2">
              <MobileScrollView />
            </div>
          ) : (
            <>
              <div
                ref={terminalRef}
                className="flex-1 overflow-y-auto pr-2 scrollbar-thin"
              >
                <CommandOutput history={history} showHero={history.length === 0} />
              </div>

              <div className="border-t border-terminal-border mt-4 pt-4 shrink-0">
                <CommandInput onSubmit={executeCommand} disabled={!booted} />
              </div>
            </>
          )}

          {useScrollMode && (
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
              <button
                onClick={() => setUseScrollMode(false)}
                className="px-4 py-2 bg-monad-purple text-white text-sm rounded-full shadow-lg hover:bg-monad-purple-dark transition-colors"
              >
                Switch to command mode
              </button>
            </div>
          )}
        </div>
      </Terminal>
    </main>
  );
}
