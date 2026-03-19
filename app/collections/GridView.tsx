type Props = {
  items: any[];
  onSelect: (item: any) => void;
};

export default function GridView({ items, onSelect }: Props) {
  return (
    <div className="grid-view">
      {items.map(item => (
        <div
          key={item.id}
          className="grid-item"
          onClick={() => onSelect(item)}
        >
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
}
