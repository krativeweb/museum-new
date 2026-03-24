"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import styles from "./VisitHero.module.css";
import ScrollVideo from "./ScrollVideo";
import PlacesCarousel from "./PlacesCarousel";

/* ================= TYPES ================= */

interface DirectionModule {
  serial: string;
  title: string;
  description: string;
}

interface VisitContent {
  id: number;
  small_title: string;
  main_title: string;
  right_bg_image: string;
  historic_manuscript_left_image: string;
  direction_heading: string;
  direction_main_heading: string;
  direction_description: string;
  direction_btn_title: string;
  direction_modules: DirectionModule[];
  direction_end_title: string;
  direction_end_description: string;
  scroll_video: string;
}

/* ================= COMPONENT ================= */

export default function VisitPage() {
  const [data, setData] = useState<VisitContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /* ================= API CALL ================= */


function decodeHtmlEntities(str: string) {
  if (typeof window === "undefined") return str;

  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

function parseTitle(html: string) {
  if (!html) return null;

  // remove <p>
  let clean = html.replace(/<\/?p>/g, "").trim();

  // ✅ decode entities here
  clean = decodeHtmlEntities(clean);

  // split by <br>
  const parts = clean.split(/<br\s*\/?>/gi).filter(Boolean);

  return parts.map((part, index) => {
    const isLast = index === parts.length - 1;

    if (part.includes("<em>")) {
      const text = part.replace(/<\/?em>/g, "").trim();
      return (
        <React.Fragment key={index}>
          <em>{text}</em>
          {!isLast && <br />}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={index}>
        {part.trim()}
        {!isLast && <br />}
      </React.Fragment>
    );
  });
}
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/visit-content`)
      .then((res) => res.json())
      .then((res: VisitContent) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Visit API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ================= LOADER ================= */

  if (loading) {
    return (
      <main className="d-flex justify-content-center align-items-center py-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </main>
    );
  }

  if (!data) return null;

  /* ================= JSX ================= */

  return (
    <main>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.left}></div>

        <div className={styles.right}>
          <Image
            src={data.right_bg_image}
            alt="Museum"
            fill
            priority
            className={styles.image}
          />
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.subTitle}>{data.small_title}</span>

          <h1 className={styles.title}>{parseTitle(data.main_title)}</h1>
        </div>
      </section>

      {/* ================= DIRECTIONS ================= */}
      <section className={styles.section}>
        <div className={styles.manuscript}>
          <Image
            src={data.historic_manuscript_left_image}
            alt="Historic manuscript"
            fill
            className={styles.manuscriptImg}
            priority
          />
        </div>

        <div className={styles.content}>
          <span className={styles.label}>{data.direction_heading}</span>

          <h2 className={styles.titletwo}>
            {parseTitle(data.direction_main_heading)}
          </h2>

          <div
            className={styles.textone}
            dangerouslySetInnerHTML={{
              __html: data.direction_description,
            }}
          />

          <button className={styles.cta}>
            <span>{data.direction_btn_title}</span>
            <span className={styles.circle}>→</span>
          </button>
        </div>
      </section>

      {/* ================= MODULES ================= */}
      <section className={styles.section}>
        <div className="container">
          {data.direction_modules.map((item, index) => (
            <div key={index} className={styles.row}>
              <span className={styles.index}>{item.serial}</span>

              <h3 className={styles.heading}>{item.title}</h3>

              <div
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= END NOTE ================= */}
      {/* <section className={styles.section}>
        <div className="container">
          <h3 className={styles.heading}>{data.direction_end_title}</h3>

          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: data.direction_end_description,
            }}
          />
        </div>
      </section> */}

      {/* ================= VIDEO ================= */}
      <ScrollVideo videoUrl={data.scroll_video} />

      {/* ================= PLACES ================= */}
      <PlacesCarousel />

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}
