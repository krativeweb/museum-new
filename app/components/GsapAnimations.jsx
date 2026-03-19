"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function GsapAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ⛔ Mobile = NO horizontal scroll
    if (window.innerWidth <= 767) return;

    const track = document.querySelector(".horizontal-track");
    if (!track) return;

    const scrollLength = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-section",
        start: "top top",
        end: `+=${scrollLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
}
