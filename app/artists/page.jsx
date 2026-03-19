"use client";

import { useState } from "react";
import artists from "./artistsData";
import "./ArtistPage.css";

export default function ArtistsPage() {
  const [active, setActive] = useState(artists[2]); // desktop
  const [openId, setOpenId] = useState(null); // mobile accordion

  const handleClick = (item) => {
    setOpenId(openId === item.id ? null : item.id);
    setActive(item);
  };

  return (
    <section className="editorial-layout">

      {/* LEFT / MAIN */}
      <div className="editorial-list">

        {/* HEADING */}
        <div className="editorial-heading">
          {/* HEADING */}
<div className="editorial-heading">
  <span className="eyebrow">THE CREATORS</span>
  <h1>Artist Profiles</h1>
</div>
        </div>

        {/* LIST */}
        {artists.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="accordion-item">

              {/* ROW */}
              <div
                className={`editorial-row ${
                  active.id === item.id ? "active" : ""
                }`}
                onMouseEnter={() => setActive(item)}
                onClick={() => handleClick(item)}
              >
                <span className="index">{item.id}</span>
                <span className="title">{item.title}</span>
              </div>

              {/* MOBILE ACCORDION CONTENT */}
              <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                <h3>{item.heading}</h3>
                <p>{item.content}</p>
              </div>

            </div>
          );
        })}
      </div>

      {/* RIGHT (DESKTOP ONLY) */}
      <div className="editorial-content">
        <h2>{active.heading}</h2>
        <p>{active.content}</p>
      </div>

    </section>
  );
}
