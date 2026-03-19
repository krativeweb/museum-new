"use client";

import { useEffect, useState } from "react";
import useReveal from "./useReveal";

export default function VisitSection() {
  const [visit, setVisit] = useState(null);
  const [loading, setLoading] = useState(true);

  const [ref, visible] = useReveal(visit); // 👈 important

  /* ---------------- FETCH API ---------------- */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-visit`)
      .then((res) => res.json())
      .then((data) => {
        // 🔥 MAP API → STATIC STRUCTURE
        const mappedData = {
          heroImage: {
            src: data.visit_hero_image,
            alt: data.visit_hero_image_alt,
          },
          heroText: {
            eyebrow: data.visit_eyebrow,
            titleLines: [data.visit_title_line1, data.visit_title_line2],
            link: {
              label: data.visit_link_label,
              href: data.visit_link_href,
            },
          },
          address: {
            label: data.visit_address_label,
            lines: data.visit_address_lines,
          },
          phone: {
            label: data.visit_phone_label,
            value: data.visit_phone_value,
          },
          tours: {
            label: data.visit_tours_label,
            linkText: data.visit_tours_text,
            href: data.visit_tours_href,
          },
          footer: {
            navLeft: [], // API not providing → keep empty or add later
            navRight: [],
            copyright: data.visit_footer_copyright,
          },
        };

        setVisit(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Visit Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="visit-exact d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="spinner-border text-dark" role="status" />
      </section>
    );
  }

  if (!visit) return null;

  return (
    <section className="visit-exact">
      <div className="visit-layout" ref={ref}>
        {/* LEFT IMAGE */}
        <div className="visit-image d-flex">
          <img src={visit.heroImage.src} alt={visit.heroImage.alt} />

          <div className="visit-image-text">
            <span className={`reveal delay-1 ${visible ? "active" : ""}`}>
              {visit.heroText.eyebrow}
            </span>

            <h2>
              {visit.heroText.titleLines.map((line, i) => (
                <span
                  key={i}
                  className={`reveal ${visible ? "active" : ""}`}
                  style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
                >
                  {line}
                  <br />
                </span>
              ))}
            </h2>

            <a
              href={visit.heroText.link.href}
              className={`reveal delay-3 ${visible ? "active" : ""}`}
            >
              {visit.heroText.link.label} <i>→</i>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="visit-panel">
          <div
            className={`panel-block reveal delay-1 ${visible ? "active" : ""}`}
          >
            <label>{visit.address.label}</label>
            <p className="panel-big">
              {visit.address.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div
            className={`panel-block reveal delay-2 ${visible ? "active" : ""}`}
          >
            <label>{visit.phone.label}</label>
            <p className="panel-big">{visit.phone.value}</p>
          </div>

          <div
            className={`panel-block reveal delay-3 ${visible ? "active" : ""}`}
          >
            <label>{visit.tours.label}</label>
            <p className="panel-link">
              <a href={visit.tours.href}>{visit.tours.linkText} →</a>
            </p>
          </div>

          {/* FOOTER */}
          <div
            className={`panel-footer reveal delay-4 ${visible ? "active" : ""}`}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="footer-cols">
                  <ul>
                    {visit.footer.navLeft.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <ul>
                    {visit.footer.navRight.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="panel-copy">{visit.footer.copyright}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
