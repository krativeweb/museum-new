"use client";

import { useEffect, useState } from "react";
import useReveal from "./useReveal";

export default function HistorySection() {
  const [history, setHistory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [door, setDoor] = useState(false); // 👈 trigger

  const [ref, visible] = useReveal(door);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-history`)
      .then((res) => res.json())
      .then((data) => {
        setHistory(data);

        // 👇 trigger animation after load
        setDoor(true);

        setLoading(false);
      })
      .catch((err) => {
        console.error("History API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- LOADER ---------------- */
  if (loading || !history) {
    return (
      <section
        className="history-section d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="spinner-border text-dark" />
      </section>
    );
  }

  return (
    <section className="history-section">
      <div className="history-container" ref={ref}>
        {/* LEFT CONTENT */}
        <div className="history-content">
          <span
            className={`history-eyebrow reveal delay-1 ${visible ? "active" : ""}`}
          >
            {history.history_eyebrow}
          </span>

          <h2
            className={`history-title reveal delay-2 ${visible ? "active" : ""}`}
          >
            {history.history_title_number}{" "}
            <em>{history.history_title_emphasis}</em>
            <br />
            {history.history_title_main}
          </h2>

          <p
            className={`history-desc reveal delay-3 ${visible ? "active" : ""}`}
          >
            {history.history_description}
          </p>

          <a
            href={history.history_button_link}
            className={`history-btn reveal delay-4 ${visible ? "active" : ""}`}
          >
            {history.history_button_label} <span>→</span>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="history-image">
          <img src={history.history_image} alt={history.history_image_alt} />
        </div>
      </div>
    </section>
  );
}
