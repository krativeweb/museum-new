"use client";

import { useEffect, useState } from "react";
import useReveal from "./useReveal";

export default function ExploreSection() {
  const [explore, setExplore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [door, setDoor] = useState(false);

  const [ref, visible] = useReveal(door);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-jindal-history`)
      .then((res) => res.json())
      .then((data) => {
        setExplore(data);

        // ✅ trigger animation
        setDoor(true);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Jindal History API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- LOADER ---------------- */
  if (loading || !explore) {
    return (
      <section
        className="explore-mansion d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="spinner-border text-dark" />
      </section>
    );
  }

  // ✅ convert paragraph string → array
  const paragraphs = explore.jindal_paragraphs
    ? explore.jindal_paragraphs.split("\n\n")
    : [];

  return (
    <section className="explore-Museum">
      <div className="explore-wrapper">
        {/* LEFT IMAGE */}
        <div className="explore-left">
          <img
            src={explore.jindal_left_image}
            alt={explore.jindal_left_image_alt}
          />
        </div>

        {/* RIGHT */}
        <div className="explore-right">
          {/* FLOATING IMAGE */}
          <div
            className={`fabric-float reveal delay-2 ${visible ? "active" : ""}`}
          >
            <img
              src={explore.jindal_floating_image}
              alt={explore.jindal_floating_image_alt}
            />
          </div>

          <div ref={ref} className="explore-content">
            <h2
              className={`explore-title reveal delay-1 ${visible ? "active" : ""}`}
            >
              {explore.jindal_title_main}{" "}
              <em>{explore.jindal_title_emphasis}</em>
              <br />
              {explore.jindal_title_sub}
            </h2>

            {paragraphs.map((text, i) => (
              <p
                key={i}
                className={`reveal ${visible ? "active" : ""}`}
                style={{ transitionDelay: `${0.4 + i * 0.15}s` }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
