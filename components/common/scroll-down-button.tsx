"use client";
import { Icons } from "@/components/common/icons";

export function ScrollDownButton() {
  return (
    <button
      aria-label="Scroll down to Career section"
      onClick={() => {
        const el = document.getElementById("Career");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="mt-10 transition-transform hover:scale-125 active:scale-95 rounded-full p-2 bg-background/80 shadow-lg cursor-pointer outline-none"
      style={{ border: 'none', background: 'none' }}
    >
      <Icons.chevronDown className="h-8 w-8 animate-bounce text-primary" />
    </button>
  );
}
