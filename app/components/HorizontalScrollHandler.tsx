"use client";

import { useEffect, useRef } from "react";

export default function HorizontalScrollHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const velocity = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.innerWidth < 1024) return;

    const track = container.querySelector(".h-track") as HTMLElement;
    if (!track) return;

    const animate = () => {
      if (Math.abs(velocity.current) < 0.1) {
        velocity.current = 0;
        raf.current = null;
        return;
      }

      track.scrollLeft += velocity.current;
      velocity.current *= 0.92; // 🔥 smooth damping
      raf.current = requestAnimationFrame(animate);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      velocity.current += e.deltaY * 0.10; // sensitivity
      if (!raf.current) raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
