"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import DOMPurify from "dompurify";
export default function AboutPage() {
  const [data, setData] = useState(null);
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about-content`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("About API Error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/staff`)
      .then((res) => res.json())
      .then((res) => setStaff([...res].reverse()))
      .catch((err) => console.error("Staff API Error:", err));
  }, []);

  /* ✅ LOADER */
  if (loading || !data) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="spinner-border text-dark" role="status" />
      </div>
    );
  }
  return (
    <main className="about-page">
      <ScrollToTop />
      {/* HERO SECTION (your first section) */}
      <section className="about-wrapper">
        <div className="about-left-bg"></div>

        <div className="about-right-bg">
          <img
            src={data.right_bg_image}
            alt="Historic interior with garden view"
          />
        </div>

        <header className="about-center-content">
          <span className="about-tag">{data.small_title}</span>
          <h1
            className="about-title"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                data.main_title.replace(/<\/?p>/g, ""),
              ),
            }}
          />
        </header>

        <section
          className="about-mission"
          dangerouslySetInnerHTML={{
            __html: data.mission_description,
          }}
        />
      </section>

      {/* SECOND SECTION – NORMAL VERTICAL SCROLL */}
      <section className="about-second refined">
        <div className="about-second-left">
          <div className="about-image-frame">
            <img src={data.about_left_image} alt="about" />
          </div>
        </div>

        <div className="about-second-right">
          <div className="about-second-content">
            <div
              dangerouslySetInnerHTML={{
                __html: data.about_second_right_heading,
              }}
            />

            <h4>{data.about_second_right_sub_heading}</h4>

            <div
              dangerouslySetInnerHTML={{
                __html: data.about_second_right_description,
              }}
            />
          </div>
        </div>
      </section>
 <section className="editorial-nav">
        {/* ROW 1 */}
        <div className="editorial-row row-1">
          <span className="editorial-kicker">
            {data.editorial_tabs[0]?.small_title}
          </span>

          <h2 className="editorial-heading">
            {data.editorial_tabs[0]?.main_title}
          </h2>

          <div className="editorial-image img-right">
            <img
              src={data.editorial_tabs[0]?.image}
              alt={data.editorial_tabs[0]?.main_title}
            />
          </div>

          <div className="editorial-arrow">
            <span>→</span>
          </div>
        </div>

        <div className="editorial-line" />

        {/* ROW 2 */}
        <div className="editorial-row row-2">
          <span className="editorial-kicker center">
            {data.editorial_tabs[1]?.small_title}
          </span>

          <h2 className="editorial-heading center">
            {data.editorial_tabs[1]?.main_title}
          </h2>

          <div className="editorial-image img-left">
            <img
              src={data.editorial_tabs[1]?.image}
              alt={data.editorial_tabs[1]?.main_title}
            />
          </div>

          <div className="editorial-arrow">
            <span>→</span>
          </div>
        </div>

        <div className="editorial-line" />

        {/* ROW 3 */}
        <div className="editorial-row row-3">
          <span className="editorial-kicker right">
            {data.editorial_tabs[2]?.small_title}
          </span>

          <h2 className="editorial-heading right">
            {data.editorial_tabs[2]?.main_title}
          </h2>

          <div className="editorial-image img-right">
            <img
              src={data.editorial_tabs[2]?.image}
              alt={data.editorial_tabs[2]?.main_title}
            />
          </div>

          {/* 👇 THIS WAS MISSED BEFORE — NOW INCLUDED */}
          <div className="editorial-image img-bottom">
            <img src={data.editorial_end_img} alt="Editorial bottom image" />
          </div>

          <div className="editorial-arrow">
            <span>→</span>
          </div>
        </div>
      </section>

   <section className="future-section">
  {/* MANUSCRIPT IMAGES */}
  <img
    src={data.future_bg_image_1}
    alt="Historic manuscript"
    className="manuscript manuscript-top"
  />

  <img
    src={data.future_bg_image_2}
    alt="Historic manuscript"
    className="manuscript manuscript-bottom"
  />

  {/* CONTENT */}
  <div className="future-content-wrap">
    <h2
      className="future-title"
      dangerouslySetInnerHTML={{
        __html: data.feature_content_title.replace(/<\/?p>/g, ""),
      }}
    />

    <div
      className="future-text"
      dangerouslySetInnerHTML={{
        __html: data.feature_description,
      }}
    />
  </div>

  {/* CENTER DIVIDER */}
  <span className="future-divider"></span>
</section>

 <section className="education-section">
        {/* LEFT VISUAL */}
        <div className="education-visual">
          {/* COLOR / TEXTURE BACKGROUNDS */}
          <div
            className="education-bg bg-rust"
            // style={{
            //   backgroundImage: `url(${data.education_bg_image_1})`,
            // }}
          ></div>

          <div
            className="education-bg bg-paper"
            style={{
              backgroundImage: `url(${data.education_bg_image_3})`,
            }}
          ></div>

          <div
            className="education-bg bg-weave"
            style={{
              backgroundImage: `url(${data.education_bg_image_2})`,
            }}
          ></div>

          {/* FOREGROUND IMAGE */}
          <div className="education-foreground-image">
            <img
              src={data.education_bg_image_1}
              alt={data.education_content_heading}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="education-content">
          <div className="education-text">
            <h2>{data.education_content_heading}</h2>

            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.education_content_description),
              }}
            />
          </div>
        </div>
      </section>

     <section className="cottage-section">
  {/* MANUSCRIPT IMAGE */}
  <img
    src={data.cottage_main_bg_image}
    alt="Historic manuscript"
    className="cottage-manuscript"
  />

  <div className="cottage-inner">
    {/* LEFT TEXT */}
    <div className="cottage-text">
      <h2>{data.cottage_content_title}</h2>

      <div
        dangerouslySetInnerHTML={{
          __html: data.cottage_description,
        }}
      />
    </div>

    {/* RIGHT VISUAL */}
    <div className="cottage-visual">
      {/* COLOR BACKGROUNDS */}
      <div className="cottage-bg bg-green"></div>
      <div className="cottage-bg bg-pattern"></div>

      {/* FOREGROUND IMAGE */}
      <div className="cottage-image">
        <img
          src={data.cottage_right_image}
          alt="The Cottage building"
        />
      </div>
    </div>
  </div>
</section>
<section className="library-section">
  {/* MANUSCRIPT */}
  <img
    src={data.library_bg_image_1}
    alt="Historic manuscript"
    className="library-manuscript"
  />

  <div className="library-inner">
    {/* LEFT VISUAL */}
    <div className="library-visual">
      <div className="library-bg"></div>
      <div className="library-bgtwo"></div>

      <div className="library-image">
        <img
          src={data.library_bg_image_2}
          alt="The Library interior"
        />
      </div>
    </div>

    {/* RIGHT TEXT */}
    <div className="library-text">
      <h2>{data.library_title}</h2>

      <div
        dangerouslySetInnerHTML={{
          __html: data.library_description,
        }}
      />
    </div>
  </div>
</section>
<section className="staff-section">
  <div className="staff-header">
    <span className="staff-line"></span>
    <h2>BOARD OF ADVISORS</h2>
  </div>

  <div className="staff-grid">
    {staff.slice(0, 3).map((item, index) => {
      const roles = ["Patron", "Chairperson", "Member Secretary"];

      return (
        <div className="staff-item" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.designation}</p>
          <span className="staff-divider"></span>
          <p>{roles[index]}</p>
        </div>
      );
    })}
  </div>
</section>

<section
  className="contact-cta"
  style={{
    backgroundImage: `url(${data.cta_background_img})`,
  }}
>
  <div className="contact-overlay"></div>

  <div className="contact-content">
    <span className="contact-kicker">{data.cta_title1}</span>

    <h2
      dangerouslySetInnerHTML={{
        __html: data.cta_content.replace(/<\/?p>/g, ""),
      }}
    />

    <a href="/contact-us" className="contact-btn">
      {data.cta_btn_title}
      <span className="contact-arrow">→</span>
    </a>
  </div>
</section>
      <Footer />
    </main>
  );
}
