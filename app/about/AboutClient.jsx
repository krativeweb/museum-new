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
    <span className="editorial-kicker">NARRATED VIDEO TOURS</span>
    <h2 className="editorial-heading">VIRTUAL TOUR</h2>

    <div className="editorial-image img-right">
      <img src="../images/one.jpg" alt="Virtual tour" />
    </div>
    <div className="editorial-arrow">
    <span>→</span>
  </div>
  </div>

  <div className="editorial-line" />

  {/* ROW 2 */}
  <div className="editorial-row row-2">
    <span className="editorial-kicker center">DIVE INTO THE PAST</span>
    <h2 className="editorial-heading center">MUSEUM HISTORY</h2>

    <div className="editorial-image img-left">
      <img src="../images/six.jpg" alt="Museum history" />
    </div>
     <div className="editorial-arrow">
    <span>→</span>
  </div>
  </div>

  <div className="editorial-line" />

  {/* ROW 3 */}
  <div className="editorial-row row-3">
    <span className="editorial-kicker right">EXPERIENCE THE MUSEUM</span>
    <h2 className="editorial-heading right">PLAN A VISIT</h2>

    <div className="editorial-image img-right">
      <img src="../images/two.jpg" alt="Plan visit" />
    </div>

    <div className="editorial-image img-bottom">
      <img src="../images/c1.png" alt="Interior room" />
    </div>
     <div className="editorial-arrow">
    <span>→</span>
  </div>
  </div>
</section>

<section className="future-section">
  {/* MANUSCRIPT /images */}
  <img
    src="https://cdn.prod.website-files.com/6570e8a05181277af39c19d5/657b4abc25d1ecaea536be0c_Greeble%202-p-1080.png "
    alt="Historic manuscript"
    className="manuscript manuscript-top"
  />

  <img
    src="https://cdn.prod.website-files.com/6570e8a05181277af39c19d5/6594632cacf84e2f702228e4_image%209.png"
    alt="Historic manuscript"
    className="manuscript manuscript-bottom"
  />

  {/* CONTENT */}
  <div className="future-content-wrap">
    <h2 className="future-title">
      Introduction To The 
 <br />
      <em>Three Immersive </em> Galleries
    </h2>

    <div className="future-text">
      <p>
       Step into a realm where India's foundational document springs to life, commemorating 75 years since its adoption on November 26, 1949. This immersive space at O.P. Jindal Global University honours the Constitution as a living testament to unity, justice, liberty, equality, and fraternity, crafted through the vision of 300 extraordinary Constituent Assembly members.

      </p>
    </div>
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
