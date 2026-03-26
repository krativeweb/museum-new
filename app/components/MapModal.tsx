"use client";

type Props = {
  data: {
    name: string;
    description: string;
    image: string;
  };
  onClose: () => void;
};

export default function RoomModal({ data, onClose }: Props) {
  return (
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        {/* CLOSE BUTTON */}
        <button className="close-btn" onClick={onClose}>✕</button>

        {/* LEFT IMAGE */}
        <div className="left">
          <img src={data.image} alt={data.name} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="right">
          <h1 className="title">{data.name}</h1>

          <div className="divider" />

          <div className="text">
            <p>{data.description}</p>

            <p>
              This section encompasses a collection of special edition books on the Constitution.
              The elevated placement of the books sends out a deeper message; although the Constitution
              is within our reach, we often perceive it as a mere legal document instead of a living
              guide for society.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* OVERLAY FULL SCREEN */
        .modal-wrapper {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 9999;
        }

        /* FULL CONTAINER */
        .modal-container {
          position: relative;
          width: 100%;
          height: 100vh; /* ✅ FULL HEIGHT */
          display: flex;
          background: #e9e5df; /* ✅ MATCH LIGHT BEIGE */
        }

        /* LEFT IMAGE */
        .left {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background: #e9e5df;
        }

        .left img {
          width: 100%;
          height: auto;
          max-height: 80vh;
          object-fit: contain;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        /* RIGHT CONTENT */
        .right {
          flex: 1;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow-y: auto; /* ✅ SCROLL */
        }

        /* TITLE */
        .title {
          font-size: 48px;
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #222;
        }

        /* DIVIDER */
        .divider {
          width: 100%;
          height: 1px;
          background: #ccc;
          margin: 20px 0;
        }

        /* TEXT */
        .text {
          font-size: 16px;
          line-height: 1.8;
          color: #444;
        }

        /* CLOSE BUTTON */
        .close-btn {
          position: absolute;
          top: 30px;
          right: 40px;
          font-size: 26px;
          border: none;
          background: transparent;
          cursor: pointer;
          color: #333;
        }

        .close-btn:hover {
          color: #000;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .modal-container {
            flex-direction: column;
          }

          .left {
            padding: 20px;
          }

          .right {
            padding: 30px 20px;
          }

          .title {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}