"use client";

import { useEffect, useState } from "react";
import useReveal from "./useReveal";

export default function ExploreSection() {
  const [explore, setExplore] = useState(null);
  const [loading, setLoading] = useState(true);

  const [ref, visible] = useReveal(explore); // 👈 important

  /* ---------------- FETCH API ---------------- */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-explore`)
      .then((res) => res.json())
      .then((data) => {
        // 🔥 MAP API → STATIC STRUCTURE
        const mappedData = {
          leftImage: {
            src: data.explore_left_image,
            alt: data.explore_left_image_alt,
          },
          floatingImage: {
            src: data.explore_floating_image,
            alt: data.explore_floating_image_alt,
          },
          eyebrow: data.explore_eyebrow,
          title: {
            main: data.explore_title_main,
            emphasis: data.explore_title_emphasis,
            sub: data.explore_title_sub,
          },
          paragraphs: [data.explore_paragraphs], // convert string → array
          button: {
            label: data.explore_button_label,
            link: data.explore_button_link,
          },
        };

        setExplore(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Explore Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="explore-mansion d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="spinner-border text-dark" role="status" />
      </section>
    );
  }

  if (!explore) return null;

  return (
    <section className="explore-Museum">
      <div className="explore-wrapper">
        {/* LEFT IMAGE */}
        <div className="explore-leftanother">
          <img src={explore.leftImage.src} alt={explore.leftImage.alt} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="explore-right exex">
          <div ref={ref} className="explore-contenttwo">
            <span
              className={`explore-eyebrow reveal delay-1 ${visible ? "active" : ""}`}
            >
              {explore.eyebrow}
            </span>

            <h2
              className={`explore-title reveal delay-2 ${visible ? "active" : ""}`}
            >
              {explore.title.main} <em>{explore.title.emphasis}</em>
              <br />
              {explore.title.sub}
            </h2>

            {explore.paragraphs.map((text, i) => (
              <p
                key={i}
                className={`reveal delay-3 ${visible ? "active" : ""}`}
                style={{ transitionDelay: `${0.6 + i * 0.15}s` }}
              >
                {text}
              </p>
            ))}

            <a
              href={explore.button.link}
              className={`explore-link reveal delay-4 ${visible ? "active" : ""}`}
            >
              {explore.button.label} <span>→</span>
            </a>
          </div>

          {/* FLOATING IMAGE */}
          <div
            className={`fabric-float reveal delay-2 ${visible ? "active" : ""}`}
          >
            <img
              src={explore.floatingImage.src}
              alt={explore.floatingImage.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
