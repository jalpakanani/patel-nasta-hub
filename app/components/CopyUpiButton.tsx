"use client";

import { useState } from "react";

type Props = {
  upiId: string;
  className?: string;
};

function execCopyFromElement(el: HTMLInputElement | HTMLTextAreaElement): boolean {
  try {
    el.focus();
    el.select();
    el.setSelectionRange(0, el.value.length);
    return document.execCommand("copy");
  } catch {
    return false;
  }
}

/** iOS Safari often rejects readonly / off-screen textarea; try input + minimal visible box first. */
function copyViaHiddenInput(text: string): boolean {
  if (typeof document === "undefined") return false;
  const el = document.createElement("input");
  el.setAttribute("type", "text");
  el.setAttribute("autocomplete", "off");
  el.setAttribute("autocorrect", "off");
  el.setAttribute("autocapitalize", "off");
  el.value = text;
  el.style.cssText =
    "position:fixed;top:0;left:0;width:1px;height:1px;padding:0;border:0;outline:0;opacity:0;font-size:16px;pointer-events:none;";
  document.body.appendChild(el);
  const ok = execCopyFromElement(el);
  document.body.removeChild(el);
  return ok;
}

function copyViaHiddenTextarea(text: string): boolean {
  if (typeof document === "undefined") return false;
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("autocomplete", "off");
  ta.setAttribute("autocorrect", "off");
  ta.setAttribute("autocapitalize", "off");
  // Avoid readonly — iOS WebKit often blocks programmatic copy on readonly fields.
  ta.style.cssText =
    "position:fixed;top:0;left:0;width:1px;height:1px;padding:0;border:0;outline:0;opacity:0;font-size:16px;resize:none;pointer-events:none;";
  document.body.appendChild(ta);
  const ok = execCopyFromElement(ta);
  document.body.removeChild(ta);
  return ok;
}

function copyViaSelectionSpan(text: string): boolean {
  if (typeof document === "undefined" || !window.getSelection) return false;
  const span = document.createElement("span");
  span.textContent = text;
  span.style.cssText =
    "position:fixed;top:0;left:0;white-space:pre;font-size:16px;opacity:0;pointer-events:none;";
  document.body.appendChild(span);
  const range = document.createRange();
  range.selectNodeContents(span);
  const sel = window.getSelection();
  if (!sel) {
    document.body.removeChild(span);
    return false;
  }
  sel.removeAllRanges();
  sel.addRange(range);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  sel.removeAllRanges();
  document.body.removeChild(span);
  return ok;
}

/** All sync strategies in one user-gesture stack (important for mobile WebViews). */
function copySyncFallbacks(text: string): boolean {
  return copyViaHiddenInput(text) || copyViaHiddenTextarea(text) || copyViaSelectionSpan(text);
}

export function CopyUpiButton({ upiId, className }: Props) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");

  function copy() {
    if (copySyncFallbacks(upiId)) {
      setState("done");
      setTimeout(() => setState("idle"), 2000);
      return;
    }

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText && window.isSecureContext) {
      void navigator.clipboard.writeText(upiId).then(
        () => {
          setState("done");
          setTimeout(() => setState("idle"), 2000);
        },
        () => {
          setState("fail");
          setTimeout(() => setState("idle"), 5000);
        },
      );
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
          કૉપી ન થયું તો UPI ID ઉપર ટૅપ કરી લાંબો દબાવી &quot;કૉપી&quot; પસંદ કરો. Instagram / WhatsApp બ્રાઉઝરમાં ક્યારેક
          કૉપી બંધ હોય છે — Chrome / Safari માં ખોલો.
        </p>
      ) : null}
    </div>
  );
}
