"use client";

import { useEffect, useState } from "react";
import ReachUsSection from "./ReachUsSection";
import DirectionsSection from "./DirectionsSection";
import GeneralInquiriesSection from "./GeneralInquiriesSection";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-info`)
      .then((res) => res.json())
      .then((data) => {
        setContactData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Contact API Error:", error);
        setLoading(false);
      });
  }, []);

  /* 🔄 Global Page Loader */
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <ReachUsSection data={contactData} />
      <DirectionsSection data={contactData} />
      <GeneralInquiriesSection data={contactData} />
      <Footer />
    </>
  );
}
