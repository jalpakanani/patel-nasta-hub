"use client";

import { useState } from "react";

type Props = {
  upiId: string;
  className?: string;
};

export function CopyUpiButton({ upiId, className }: Props) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(upiId);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      setDone(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={
        className ??
        "rounded-full bg-[var(--pn-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--pn-purple-deep)] shadow-md transition hover:brightness-110"
      }
    >
      {done ? "કૉપી થયું!" : "UPI ID કૉપી કરો"}
    </button>
  );
}
