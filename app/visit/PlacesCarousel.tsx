"use client";

import styles from "./PlacesCarousel.module.css";
import { useEffect, useRef, useState } from "react";

/* ================= HTML PARSER ================= */

function decodeHtmlEntities(str: string) {
  if (typeof window === "undefined") return str;
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

function renderHTML(html: string) {
  if (!html) return null;

  let clean = html.replace(/<\/?p>/g, "").trim();

  const txt = document.createElement("textarea");
  txt.innerHTML = clean;
  clean = txt.value;

  const lines = clean.split(/<br\s*\/?>/gi).filter(Boolean);

  return lines.map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
}

/* ================= COMPONENT ================= */

export default function PlacesCarousel() {
  const [places, setPlaces] = useState<any[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // ✅ FIX HERE
  const intervalRef = useRef<number | null>(null);

  /* ================= API ================= */

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/place-to-visit`)
      .then((res) => res.json())
      .then((res) => {
        const parsed = typeof res === "string" ? JSON.parse(res) : res;

        setPlaces(parsed);
      })
      .catch((err) => {
        console.error("Places API Error:", err);
      });
  }, []);

  /* ================= AUTO SCROLL ================= */

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const CARD_SCROLL = 360;

    const start = () => {
      if (intervalRef.current) return;

      // ✅ IMPORTANT: use window.setInterval
      intervalRef.current = window.setInterval(() => {
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth - 5
        ) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: CARD_SCROLL, behavior: "smooth" });
        }
      }, 3000);
    };

    const stop = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? start() : stop();
      },
      { threshold: 0.3 },
    );

    observer.observe(carousel);

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("touchstart", stop);
    carousel.addEventListener("touchend", start);

    return () => {
      stop();
      observer.disconnect();
      carousel.removeEventListener("mouseenter", stop);
      carousel.removeEventListener("mouseleave", start);
      carousel.removeEventListener("touchstart", stop);
      carousel.removeEventListener("touchend", start);
    };
  }, []);

  /* ================= JSX ================= */

  return (
    <section className={styles.section}>
      <span className={styles.label}>Galleries To Explore</span>

      <h2 className={styles.heading}>PLACES TO VISIT</h2>

      <div className={styles.carousel} ref={carouselRef}>
        {places.map((place, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.imageWrap}>
              <img
                src={place.gallery_image?.replace(/ /g, "%20")}
                alt={place.title}
              />
            </div>

            <div className={styles.cardContent}>
              <h3>{place.title}</h3>

              <div className={styles.meta}>
                <span className={styles.line} />

                <span className={styles.category}>
                  {renderHTML(place.description)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
