"use client";

import { useEffect, useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import CollectionModal from "./CollectionModal";
import "./collections.css";

/* ---------------- TYPES ---------------- */

interface CollectionApiItem {
  id: number;
  title: string;
  name: string;
  category: string;
  gallery_image: string;
  description: string;
}

export interface CollectionItem {
  id: number;
  title: string;
  name: string;
  category: string;
  image: string;
  detail: string;
}

/* ---------------- CONSTANTS ---------------- */

const categories = ["All Items", "GROUND FLOOR", "MEZZANINE", "FIRST FLOOR"];

/* ---------------- COMPONENT ---------------- */

export default function CollectionClient() {
  const [items, setItems] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [activeCategory, setActiveCategory] = useState<string>("All Items");
  const [activeItem, setActiveItem] = useState<CollectionItem | null>(null);

  /* ---------------- FETCH COLLECTION API ---------------- */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/collection`)
      .then((res) => res.json())
      .then((data: CollectionApiItem[]) => {
        const formatted: CollectionItem[] = data.map(
          (item: CollectionApiItem) => ({
            id: item.id,
            title: item.title,
            name: item.name,
            category: item.category,
            image: item.gallery_image,
            detail: item.description,
          }),
        );

        setItems(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Collection API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- FILTER ---------------- */
  const filteredItems =
    activeCategory === "All Items"
      ? items
      : items.filter((item) => item.category === activeCategory);

  /* ---------------- LOADER ---------------- */
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  /* ---------------- RENDER ---------------- */
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="view-toggle">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            Grid View
          </button>
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            List View
          </button>
        </div>
      </div>

      {/* Views */}
      {view === "grid" ? (
        <GridView items={filteredItems} onSelect={setActiveItem} />
      ) : (
        <ListView items={filteredItems} onSelect={setActiveItem} />
      )}

      {/* Modal */}
      {activeItem && (
        <CollectionModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </>
  );
}
