"use client";

import { useEffect, useState } from "react";
import useReveal from "./useReveal";
import { useRouter } from "next/navigation";

export default function CollectionSection() {
  const [door, setDoor] = useState(false); // 👈 default false
  const [ref, visible] = useReveal(door);
  const router = useRouter();

  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleItemClick = (title) => {
    if (title.toLowerCase() === "artists") {
      router.push("/artists");
    } else {
      router.push("/collections");
    }
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-collection`)
      .then((res) => res.json())
      .then((data) => {
        setCollection(data);

        // 👇 IMPORTANT: trigger reveal AFTER data loads
        setDoor(true);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Collection Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- LOADER ---------------- */
  if (loading || !collection) {
    return (
      <section
        className="collection-section d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  return (
    <section className="collection-section">
      <div className="collection-container" ref={ref}>
        {/* LEFT */}
        <div className="collection-left">
          <span
            className={`collection-eyebrow reveal delay-1 ${visible ? "active" : ""}`}
          >
            {collection.collection_eyebrow}
          </span>

          <h1 className="collection-title">
            {collection.collection_titleLines.map((line, i) => (
              <span
                key={i}
                className={`reveal ${visible ? "active" : ""}`}
                style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
              >
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p
            className={`collection-desc reveal delay-3 ${visible ? "active" : ""}`}
          >
            {collection.collection_description}
          </p>

          <a
            href={collection.collection_button_link}
            className={`collection-btn reveal delay-4 ${visible ? "active" : ""}`}
          >
            {collection.collection_button_label} <span>→</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="collection-right">
          <ul className="collection-list">
            {collection.collection_items.map((item, i) => (
              <li
                key={i}
                className={`collection-item reveal ${visible ? "active" : ""}`}
                style={{
                  transitionDelay: `${0.4 + i * 0.12}s`,
                  cursor: "pointer",
                }}
                onClick={() => handleItemClick(item.title)}
              >
                {item.sub && <span className="collection-sub">{item.sub}</span>}
                <span className="collection-main">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
