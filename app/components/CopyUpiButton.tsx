"use client";

import { useState } from "react";

type Props = {
  upiId: string;
  className?: string;
};

/** Mobile Safari / in-app browsers often block Clipboard API; textarea + execCommand is a reliable fallback. */
function copyViaHiddenTextarea(text: string): boolean {
  if (typeof document === "undefined") return false;
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.setAttribute("aria-hidden", "true");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  ta.style.top = "0";
  ta.style.width = "1px";
  ta.style.height = "1px";
  ta.style.padding = "0";
  ta.style.border = "none";
  ta.style.outline = "none";
  ta.style.fontSize = "16px";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  ta.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

async function copyToClipboard(text: string): Promise<boolean> {
  /** Sync path keeps the browser "user gesture" on many mobile WebViews. */
  if (copyViaHiddenTextarea(text)) return true;
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }
  return false;
}

export function CopyUpiButton({ upiId, className }: Props) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");

  async function copy() {
    const ok = await copyToClipboard(upiId);
    if (ok) {
      setState("done");
      setTimeout(() => setState("idle"), 2000);
      return;
    }
    setState("fail");
    setTimeout(() => setState("idle"), 5000);
  }

  const label =
    state === "done" ? "કૉપી થયું!" : state === "fail" ? "ફરી પ્રયાસ કરો" : "UPI ID કૉપી કરો";

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={copy}
        className={
          className ??
          "rounded-full bg-[var(--pn-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--pn-purple-deep)] shadow-md transition hover:brightness-110"
        }
      >
        {label}
      </button>
      {state === "fail" ? (
        <p className="text-xs leading-relaxed text-white/75">
          કૉપી ન થયું તો UPI ID ઉપર લાંબો દબાવી &quot;કૉપી&quot; પસંદ કરો.
        </p>
      ) : null}
    </div>
  );
}
