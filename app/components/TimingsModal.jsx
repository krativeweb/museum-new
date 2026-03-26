"use client";
import React from "react";
import Image from "next/image";

export default function TimingsModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay d-flex justify-content-center align-items-center">
      <div className="modal-box container-fluid bg-white  shadow-lg p-0">
        <div className="row g-0">
          {/* LEFT IMAGE */}
          <div className="col-md-6 position-relative modal-left">
            <div className="img-wrapper">
              <Image
                src="./images/c2.png"
                alt="Museum"
                fill
                className="img-fluid object-fit-cover"
              />
            </div>

            <div className="image-overlay text-white text-start">
              <h2>Timings</h2>
              <p>Book your experience in advance</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 modal-right">
            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-3 modal-header-dark">
              <h4 className="mb-0">Timings</h4>
              <button
                className="btn-close rounded-0 timings-close"
                onClick={onClose}
              ></button>
            </div>

            {/* BODY */}
            <div className="text-center p-4 timings-modal">
              {/* LOGOS */}
              <div className="d-flex justify-content-center align-items-center gap-2 gap-md-3 mb-3 flex-wrap text-center">
               <a href="#">
                <Image
                  src="./images/logo.webp"
                  alt="Logo"
                  width={120}
                  height={60}
                  className="img-fluid"
                  style={{ maxWidth: "200px", height: "auto" }}
                />
                </a>

<a href="https://jgu.edu.in/">
                <Image
                  src="./images/jguuuu.webp"
                  alt="Logo"
                  width={370}
                  height={60}
                  className="img-fluid"
                  style={{ maxWidth: "350px", height: "auto" }}
                />
                </a>
              </div>

              {/* CONTENT */}
              <p className="small text-muted text-start">
                The museum operates from 10:00 AM to 6:00 PM (Tuesday to
                Sunday), with four 2-hour visiting slots: <br /> 10:00 AM - 12:00 PM
                12:00 PM - 2:00 PM 2:00 PM - 4:00 PM 4:00 PM - 6:00 PM
                <br /><br /> <strong>
                  Please note:</strong> The museum will remain closed on Mondays and public
                holidays. While booking slots, guest(s) should provide phone
                number(s) that can receive an OTP. For each guest there must be
                a unique phone number. A government-issued ID (like Aadhaar
                Card, Voter ID, Pan Card, etc) is required for verification and
                needs to be carried by the guest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
