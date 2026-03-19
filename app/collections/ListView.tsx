import { useState } from "react";

type Props = {
  items: any[];
  onSelect: (item: any) => void;
};

export default function ListView({ items, onSelect }: Props) {
  const [hovered, setHovered] = useState<any>(null);

  return (
    <div className="list-view">
      <div className="list">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="list-row"
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onSelect(item)}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>

      {hovered && (
        <div className="hover-image">
          <img src={hovered.image} alt={hovered.title} />
        </div>
      )}
    </div>
  );
}
