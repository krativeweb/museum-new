"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroBanner() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH API ---------------- */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-hero`)
      .then((res) => res.json())
      .then((data) => {
        const parsedData = typeof data === "string" ? JSON.parse(data) : data;

        setHero(parsedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Hero API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="hero-banner d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="spinner-border text-light" role="status" />
      </section>
    );
  }

  if (!hero) return null;

  return (
    <section className="hero-banner">
      {/* LOGO */}
      <div className="hero-logo">
        <Image
          src={hero.logo}
          alt="Museum Logo"
          width={160}
          height={160}
          priority
        />
      </div>

      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 d-flex align-items-center hero-content">
            <div>
              <span className="hero-top text-light slide-up delay-1">
                {hero.heroTop}
              </span>

              <h1 className="hero-title slide-up delay-2">
                {hero.title}
                <br />
                <span>{hero.highlight}</span>
                <br />
                {hero.subtitle}
              </h1>

              <p className="hero-desc slide-up delay-3">{hero.description}</p>

              <div className="opening-hours-wrapper slide-up delay-4">
                <div className="opening-hours-card">
                  <p className="opening-label">Opening Hours</p>
                  <h2 className="opening-time">{hero.openingTime}</h2>
                  <p className="opening-days">{hero.openingDays}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 hero-image card border-0">
            <Image
              src={hero.heroImage}
              alt="Historic Interior"
              fill
              priority
              sizes="50vw"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
