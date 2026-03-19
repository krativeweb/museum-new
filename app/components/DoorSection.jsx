"use client";

import { useEffect, useState } from "react";
import useReveal from "./useReveal";

export default function DoorSection() {
  const [door, setDoor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ref, visible] = useReveal(door);
  /* ---------------- FETCH API ---------------- */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/door-section`)
      .then((res) => res.json())
      .then((data) => {
        const parsedData = typeof data === "string" ? JSON.parse(data) : data;

        setDoor(parsedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Door Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- LOADER ---------------- */
  if (loading) {
    return (
      <section className="door-section min-vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-dark" role="status" />
      </section>
    );
  }

  if (!door) return null;

  return (
    <section className="door-section min-vh-100">
      <div className="container-fluid px-0 h-100">
        <div className="row g-0 h-100 align-items-stretch">
          {/* LEFT IMAGE */}
          <div className="col-lg-3 d-flex justify-content-end align-items-center">
            <div className="left-image-wrap">
              <img
                src={door.doorleftImage}
                alt="Historic Interior"
                className="img-fluid"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="col-lg-4 d-flex align-items-center">
            <div ref={ref} className="center-content text-light">
              <span
                className={`eyebrow reveal delay-1 ${visible ? "active" : ""}`}
              >
                {door.eyebrow}
              </span>

              <h2
                className={`timeless-title reveal delay-2 ${visible ? "active" : ""}`}
              >
                {door?.door_title}
              </h2>

              <p
                className={`timeless-desc reveal delay-3 ${visible ? "active" : ""}`}
              >
                {door.description_door}
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-lg-5 red-panel d-flex align-items-center justify-content-center">
            <div className="right-image-wrap">
              <img
                src={door.doorrightImage}
                alt="Museum Entrance"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
