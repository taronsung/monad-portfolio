"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal } from "./_components/Terminal";
import { BootSequence } from "./_components/BootSequence";
import { CommandInput } from "./_components/CommandInput";
import { CommandOutput } from "./_components/CommandOutput";
import { useTerminal } from "@/lib/hooks/useTerminal";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { history, executeCommand } = useTerminal();
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && sessionStorage.getItem("hasBooted")) {
      setBooted(true);
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
      <main className="min-h-screen flex items-center justify-center p-4">
        <div className="text-monad-purple">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      <Terminal>
        <div
          ref={terminalRef}
          className="max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin"
        >
          <CommandOutput history={history} showHero={history.length === 0} />
        </div>

        <div className="border-t border-terminal-border mt-4 pt-4">
          <CommandInput onSubmit={executeCommand} disabled={!booted} />
        </div>
      </Terminal>
    </main>
  );
}
