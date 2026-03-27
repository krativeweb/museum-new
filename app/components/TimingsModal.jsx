"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function TimingsModal({ show, onClose }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (show) {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/timing-content`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.error(err));
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="modal-overlay d-flex justify-content-center align-items-center">
      <div className="modal-box container-fluid bg-white shadow-lg p-0">
        <div className="row g-0">
          
          {/* LEFT IMAGE */}
          <div className="col-md-6 position-relative modal-left">
            <div className="img-wrapper">
              {data?.left_bg_image && (
                <Image
                  src={data.left_bg_image}
                  alt="Museum"
                  fill
                  className="img-fluid object-fit-cover"
                />
              )}
            </div>

            <div className="image-overlay text-white text-start">
              <h2>{data?.overlay_title || "Timings"}</h2>
              <p>{data?.overlay_subtitle || "Book your experience in advance"}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 modal-right">
            
            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-3 modal-header-dark">
              <h4 className="mb-0">{data?.right_title || "Timings"}</h4>
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
                  {data?.logo1 && (
                    <Image
                      src={data.logo1}
                      alt="Logo"
                      width={120}
                      height={60}
                      className="img-fluid"
                      style={{ maxWidth: "200px", height: "auto" }}
                    />
                  )}
                </a>

                <a href="https://jgu.edu.in/">
                  {data?.logo2 && (
                    <Image
                      src={data.logo2}
                      alt="Logo"
                      width={370}
                      height={60}
                      className="img-fluid"
                      style={{ maxWidth: "350px", height: "auto" }}
                    />
                  )}
                </a>

              </div>

              {/* CONTENT */}
              <p
                className="small text-muted text-start"
                dangerouslySetInnerHTML={{
                  __html: data?.timings_description || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
