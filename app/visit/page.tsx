"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  small_title: string;
  main_title: string;
  right_bg_image: string;
  historic_manuscript_left_image: string;
  direction_heading: string;
  direction_main_heading: string;
  direction_description: string;
  direction_btn_title: string;
  direction_modules: DirectionModule[];
  scroll_video: string;
}

/* ================= COMPONENT ================= */

export default function VisitPage() {
  const [data, setData] = useState<VisitContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  /* ================= RENDER ================= */

  return (
    <main>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.left}></div>

        <div className={styles.right}>
          <Image
            src={data.right_bg_image}
            alt="Museum image"
            fill
            priority
            className={styles.image}
          />
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.subTitle}>{data.small_title}</span>

          <div
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: data.main_title }}
          />
        </div>
      </section>

      {/* DIRECTIONS SECTION */}
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

          <div
            className={styles.titletwo}
            dangerouslySetInnerHTML={{
              __html: data.direction_main_heading,
            }}
          />

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

      {/* MODULES SECTION */}
      <section className={styles.section}>
        <div className="container">
          {data.direction_modules.map((item, index) => (
            <div className={styles.row} key={index}>
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

      {/* VIDEO + PLACES */}
      <ScrollVideo video={data.scroll_video} />
      <PlacesCarousel />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
