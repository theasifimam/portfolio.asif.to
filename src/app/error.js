"use client";
import React, { useEffect } from "react";
import { RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 text-center font-sans">
      <div className="max-w-md w-full rounded-[2.5rem] bg-card border border-border p-8 sm:p-12 space-y-6 shadow-xs">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary border border-border text-xs font-mono font-bold uppercase tracking-widest">
          <AlertTriangle size={14} /> Something went wrong
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
          Application Error
        </h1>
        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
          An unexpected error occurred while rendering this page.
        </p>
        <div className="pt-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-extrabold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-xs cursor-pointer"
          >
            <RefreshCw size={15} />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    </div>
  );
}

