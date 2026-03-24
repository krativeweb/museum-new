"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollVideo.module.css";

export default function ScrollVideo({ videoUrl }) {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        }
      },
      {
        threshold: 0.4,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.show : ""}`}
    >
      <video
        ref={videoRef}
        className={styles.video}
        muted
        playsInline
        preload="metadata"
      >
        {/* ✅ dynamic video from API */}
        <source src={videoUrl} type="video/mp4" />
      </video>
    </section>
  );
}
