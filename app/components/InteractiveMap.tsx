"use client";

import { useState, useEffect } from "react";

type Room = {
  id: number;
  name: string;
  top: string;
  left: string;
  image: string;
  description: string;
};

// ✅ FIXED PROP TYPE
type Props = {
  mapLink?: string;
};

export default function BuildingMap({ mapLink }: Props) {
  const [hovered, setHovered] = useState<Room | null>(null);
  const [selected, setSelected] = useState<Room | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // ✅ Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rooms: Room[] = [
    {
      id: 1,
      name: "Gallery Area",
      top: "40%",
      left: "40%",
      image:
        "https://cdn.prod.website-files.com/6570e8a05181277af39c19d5/65cd1de265653c8178b2cfe5_Group%20556.jpg",
      description: "Main gallery exhibition area.",
    },
    {
      id: 2,
      name: "Visitor Hall",
      top: "50%",
      left: "60%",
      image: "https://digitalreach-projects.com/museum/images/home.png",
      description: "Visitor interaction space.",
    },
  ];

  return (
    <section className="container-fluid px-3 px-md-5 py-5 my-5">
      <div className="map-container">
        {/* MAP */}
        <div
          className="map-inner"
          style={{ transform: `scale(${zoom})` }}
        >
          <iframe
            src={
              mapLink ||
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.7880408058813!2d77.05640468925846!3d28.926639151457913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daf000e5c5067%3A0xd9aa41c9487e356!2sConstitution%20Museum!5e1!3m2!1sen!2sin!4v1774261821187!5m2!1sen!2sin"
            }
            className="map-frame"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        .map-container {
          position: relative;
          height: 500px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          background: #000;
        }

        .map-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.3s ease;
        }

        .map-frame {
          width: 100%;
          height: 100%;
          border: 0;
        }

        /* HOTSPOT */
        .hotspot {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
          z-index: 10;
        }

        .dot {
          width: 14px;
          height: 14px;
          background: red;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        .ring {
          width: 40px;
          height: 40px;
          border: 2px solid red;
          border-radius: 50%;
          position: absolute;
          top: -13px;
          left: -13px;
          animation: pulse 1.5s infinite;
          background: white;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        /* TOOLTIP */
        .tooltip-box {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          color: black;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 14px;
          white-space: nowrap;
        }

        .tooltip-box::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: black transparent transparent transparent;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .map-container {
            height: 350px;
          }

          .dot {
            width: 18px;
            height: 18px;
          }

          .ring {
            width: 50px;
            height: 50px;
            top: -16px;
            left: -16px;
          }
        }
      `}</style>
    </section>
  );
}
