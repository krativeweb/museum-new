"use client";
import { useEffect, useRef } from "react";

export default function useScrollMove({
  speed = 0.15,
  axis = "y", // "y" or "x"
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // progress from -1 → 1
      const progress =
        (rect.top - viewportHeight / 2) / viewportHeight;

      const move = progress * 100 * speed;

      if (axis === "y") {
        el.style.transform = `translateY(${move}px)`;
      } else {
        el.style.transform = `translateX(${move}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed, axis]);

  return ref;
}
