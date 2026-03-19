"use client";

import { useEffect, useState } from "react";

export default function HeroAdmin() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/hero").then(res => res.json()).then(setData);
  }, []);

  if (!data) return null;

  return (
    <div style={{ padding: 40 }}>
      <h2>Edit Hero Section</h2>

      <input
        value={data.heroTop}
        onChange={e => setData({ ...data, heroTop: e.target.value })}
      />

      <textarea
        value={data.description}
        onChange={e => setData({ ...data, description: e.target.value })}
      />

      <button
        onClick={async () => {
          await fetch("/api/hero", {
            method: "POST",
            body: JSON.stringify(data),
          });
          alert("Updated!");
        }}
      >
        Save
      </button>
    </div>
  );
}

