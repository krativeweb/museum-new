"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "COLLECTIONS", href: "/collections" },
  { label: "VISIT", href: "/visit" },
  { label: "CONTACT US", href: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();

  /* ---------------- FETCH FOOTER API ---------------- */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/footer`)
      .then((res) => res.json())
      .then((data) => {
        setFooter(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Footer API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- CLOSE MENU ON ROUTE ---------------- */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ---------------- LOCK SCROLL ---------------- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /* ---------------- VIDEO CONTROL ---------------- */
  const toggleVideo = () => {
    const vid = window.heroVideo;
    if (!vid) return;

    if (vid.paused) {
      vid.muted = false;
      vid.play();
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {/* MENU BUTTON */}
      <button className="menuToggle" onClick={() => setOpen(true)}>
        MENU
      </button>

      {/* VIDEO BUTTON */}
      <button className="video-unmute-btn" onClick={toggleVideo}>
        <span className={`icon ${playing ? "pause" : "play"}`} />
        <span className="btn-text">
          {playing ? "Pause sound" : "Play with sound"}
        </span>
      </button>

      {/* MENU OVERLAY */}
      <div className={`menu ${open ? "active" : ""}`}>
        <div className="left" />

        <div className="right-two">
          <button className="close" onClick={() => setOpen(false)}>
            ✕
          </button>

          <ul className="menuList">
            {menuItems.map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} className="menuLink">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ✅ DYNAMIC FOOTER */}
          <div className="footer">
            <div>
              <p>Address</p>

              <div dangerouslySetInnerHTML={{ __html: footer?.address }} />
            </div>

            <div>
              <p>Contact us →</p>
              <p>{footer?.phone}</p>

              <p>Email us →</p>
              <p>{footer?.email || ""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
