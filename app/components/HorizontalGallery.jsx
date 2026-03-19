"use client";

import { useEffect, useState } from "react";
import useReveal from "./useReveal";

export default function HorizontalGallery() {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [door, setDoor] = useState(false); // 👈 trigger

  const [ref, visible] = useReveal(door);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-horizontal-gallery`)
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);

        // 👇 trigger animation AFTER API
        setDoor(true);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Horizontal Gallery API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- LOADER ---------------- */
  if (loading || !gallery) {
    return (
      <section
        className="museum-garden-section d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  return (
    <section className="museum-garden-section">
      <div className="container-fluid px-0">
        <div className="row">
          {/* MAIN CONTENT */}
          <div className="col-lg-10">
            <div className="container-fluid" ref={ref}>
              {/* TOP ROW */}
              <div className="row align-items-start">
                {/* MURAL + TEXT */}
                <div
                  className={`col-lg-6 d-flex mural-wrap reveal delay-1 ${visible ? "active" : ""}`}
                >
                  <img
                    src={gallery.topMural_image}
                    alt={gallery.topMural_alt}
                    className="img-fluid bordered-img mural-img"
                  />

                  <div className="text-block vision-text">
                    <h6>{gallery.vision_title}</h6>
                    <p>{gallery.vision_description}</p>
                  </div>
                </div>

                {/* MAP */}
                <div
                  className={`col-lg-6 map-wrap d-flex text-center reveal delay-2 ${visible ? "active" : ""}`}
                >
                  <img
                    src={gallery.indiaMap_image}
                    alt=""
                    className="img-fluid map-img"
                  />
                  <div className="map-text">
                    <h6>{gallery.indiaMap_title}</h6>
                    <p>{gallery.indiaMap_description}</p>
                  </div>
                </div>
              </div>

              {/* MIDDLE ROW */}
              <div className="row align-items-center secondrow">
                {/* FRAMED ART */}
                <div
                  className={`col-lg-4 framed-wrap reveal delay-3 ${visible ? "active" : ""}`}
                >
                  <img
                    src={gallery.framedArt_image}
                    alt={gallery.framedArt_alt}
                    className="bordered-img framed-img"
                  />
                </div>

                {/* CENTER HERO */}
                <div
                  className={`col-lg-8 center-wrap reveal delay-4 ${visible ? "active" : ""}`}
                >
                  <div className="center-hero">
                    <img
                      src={gallery.centerHero_image}
                      alt=""
                      className="img-fluid"
                    />

                    <div className="hero-overlay">
                      <h2>
                        <span>{gallery.centerHero_title1}</span>
                        <br />
                        <span>{gallery.centerHero_title2}</span>
                      </h2>

                      <p className="garden-text">
                        {gallery.centerHero_description
                          .split("\n\n")
                          .map((para, i) => (
                            <span key={i}>
                              {para}
                              <br />
                              <br />
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT STATUE */}
          <div
            className={`col-lg-1 statue-col statue-wrap reveal delay-3 ${visible ? "active" : ""}`}
          >
            <img
              src={gallery.statue_image}
              alt={gallery.statue_alt}
              className="statue-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
