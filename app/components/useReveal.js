"use client";
import { useEffect, useRef, useState } from "react";

export default function useReveal(trigger) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

useEffect(() => {
  if (!trigger) return;

  const timer = setTimeout(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
  }, 100); // small delay ensures DOM is ready

  return () => clearTimeout(timer);
}, [trigger]);

  return [ref, visible];
}
