"use client";

import React from "react";

/* ================= HTML PARSER ================= */

function renderHTML(html) {
  if (!html) return null;

  // remove <p>
  let clean = html.replace(/<\/?p>/g, "").trim();

  // decode HTML entities
  const txt = document.createElement("textarea");
  txt.innerHTML = clean;
  clean = txt.value;

  // split by <br>
  const lines = clean.split(/<br\s*\/?>/gi).filter(Boolean);

  return lines.map((line, i) => {
    const parts = line.split(/(<em>.*?<\/em>)/g).filter(Boolean);

    return (
      <React.Fragment key={i}>
        {parts.map((part, j) => {
          if (part.startsWith("<em>")) {
            const text = part.replace(/<\/?em>/g, "");
            return <em key={j}>{text}</em>;
          }
          return <span key={j}>{part}</span>;
        })}
        <br />
      </React.Fragment>
    );
  });
}

/* ================= COMPONENT ================= */

export default function DirectionsSection({ data }) {
  return (
    <section className="directions-section">
      {/* BACKGROUND IMAGE */}
      <div
        className="manuscript-bg"
        style={{
          backgroundImage: `url(${data?.direction_bg_image})`,
        }}
      />

      <div className="directions-inner">
        {/* LEFT CONTENT */}
        <div className="directions-content">
          <span className="directions-eyebrow">
            {data?.direction_main_title}
          </span>

          <h2 className="directions-title">
            {renderHTML(data?.direction_content_title)}
          </h2>

          <p className="directions-text">
            {renderHTML(data?.direction_description)}
          </p>

          <button className="directions-btn">
            DRIVING DIRECTIONS <span>→</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="directions-image-wrap">
          <img
            src={data?.direction_image}
            alt="Map"
            className="directions-image"
          />
        </div>
      </div>
    </section>
  );
}
