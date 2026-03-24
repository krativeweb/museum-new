"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <footer className="site-footer">
      {/* LOADER */}
      {loading && (
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* FOOTER CONTENT */}
      {!loading && footer && (
        <>
          {/* TOP */}
          <div className="footer-top">
            {/* LOGO */}
            <div className="footer-brand">
              <div className="logo">
                <img
                  src={footer.logo}
                  alt="logo"
                  className="img-fluid"
                  style={{ width: "70%", height: "25vh" }}
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div className="footer-col">
              <strong>Address</strong>
              <div dangerouslySetInnerHTML={{ __html: footer.address }} />
            </div>

            {/* CONTACT */}
            <div className="footer-col">
              <strong>Contact us</strong>
              <p>
                {footer.phone && (
                  <>
                    <a href={`tel:${footer.phone}`}>{footer.phone} →</a>
                    <br />
                  </>
                )}

                {footer.email && (
                  <a href={`mailto:${footer.email}`}>Email us →</a>
                )}
              </p>
            </div>

            {/* LINKS 1 */}
            <div className="footer-col">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/history">History</a>
                </li>
                <li>
                  <a href="/collection">Collection</a>
                </li>
                <li>
                  <a href="/tour-policies">Tour Policies</a>
                </li>
              </ul>
            </div>

            {/* LINKS 2 */}
            <div className="footer-col">
              <ul>
                <li>
                  <a href="/virtual-tour">Virtual Tour</a>
                </li>
                <li>
                  <a href="/visit">Plan a Visit</a>
                </li>
                <li>
                  <a href="/shop">Book Shop</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="footer-divider" />

          {/* BOTTOM */}
          <div className="footer-bottom">
            <p>
              © 2026 Copyright
              <br />
              All rights reserved.
            </p>
          </div>
        </>
      )}
    </footer>
  );
}
