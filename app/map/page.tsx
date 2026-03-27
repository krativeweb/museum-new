"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import InteractiveMap from "../components/InteractiveMap";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://thekreativeweb.com/codes/museum/api/museum-map")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about-wrapper">
        <div className="map-left-bg"></div>

        <div className="about-right-bg">
          <img
            src={data?.about_bg_image || "../images/map-hero.jpg"}
            alt="Historic interior with garden view"
          />
        </div>

        <header className="about-center-content">
          <span className="about-tag text-white ">
            {data?.about_tag || "ABOUT US"}
          </span>

          <h1
            className="about-title text-white"
            dangerouslySetInnerHTML={{
              __html:
                data?.about_title ||
                `Find Your Way to the Republic’s Living Legacy<br /><span></span>`,
            }}
          />
        </header>

        <section className="about-mission">
          <p
            dangerouslySetInnerHTML={{
              __html:
                data?.about_mission
            }}
          />
        </section>
      </section>

      <InteractiveMap mapLink={data?.map_link} />

      <Footer />
    </>
  );
}
