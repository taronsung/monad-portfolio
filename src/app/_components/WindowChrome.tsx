"use client";

interface WindowChromeProps {
  title?: string;
}

export function WindowChrome({ title = "taronsung@monad ~ %" }: WindowChromeProps) {
  return (
    <div className="window-chrome">
      <div className="flex gap-2">
        <div className="traffic-light traffic-light-red" />
        <div className="traffic-light traffic-light-yellow" />
        <div className="traffic-light traffic-light-green" />
      </div>
      <div className="window-title">{title}</div>
      <div className="w-[52px]" />
    </div>
  );
}
