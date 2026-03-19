"use client";

type Props = {
  item: any;
  onClose: () => void;
};

export default function CollectionModal({ item, onClose }: Props) {
  return (
    <div className="collection-overlay" onClick={onClose}>
      <div
        className="collection-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-inner">
          <img src={item.image} alt={item.title} />

          <div className="modal-details">

  <h1 className="detail-title">
    {item.title}
  </h1>

  <div className="detail-divider" />

  <div className="detail-meta">

    
<h4>{item.name}</h4>
  </div>

  <div className="detail-divider" />

  <p className="detail-description">
    {item.detail}
  </p>

</div>

        </div>
      </div>
    </div>
    
  );
}
