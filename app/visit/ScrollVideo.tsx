"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollVideo.module.css";

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          videoRef.current?.play();
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

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
        <source src="../video/museum.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
