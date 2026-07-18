"use client";

import { useRef, useSyncExternalStore } from "react";

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ZERO_PARTS: CountdownParts = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function computeParts(target: Date): CountdownParts {
  const diff = Math.max(target.getTime() - Date.now(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
}

function getServerSnapshot() {
  return ZERO_PARTS;
}

/**
 * Live countdown to a target date, recomputed once per second on the client
 * via an external store subscription. Returns a stable zeroed value during
 * server render to avoid hydration mismatches.
 */
export function useCountdown(target: Date): CountdownParts {
  const cache = useRef<{ second: number; value: CountdownParts } | null>(null);

  const getSnapshot = () => {
    const second = Math.floor(Date.now() / 1000);
    if (!cache.current || cache.current.second !== second) {
      cache.current = { second, value: computeParts(target) };
    }
    return cache.current.value;
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
