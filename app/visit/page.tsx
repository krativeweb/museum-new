"use client";

import Image from "next/image";
import Footer from "../components/Footer"
import styles from "./VisitHero.module.css";
import ScrollVideo from "./ScrollVideo";
import PlacesCarousel from "./PlacesCarousel";
import { useState } from "react";
export default function VisitPage() {

const testimonials = [
  {
    quote:
      "I learn something new and interesting each time I go; can't wait for my next tour.",
    author: "James",
  },
  {
    quote:
      "An unforgettable experience that brings history to life in the most engaging way.",
    author: "Emily",
  },
];
const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);



  return (
    <main>
        <section className={styles.hero}>
      {/* LEFT MAROON PANEL */}
      <div className={styles.left}></div>

      {/* RIGHT IMAGE PANEL */}
      <div className={styles.right}>
        <Image
          src="../images/one.png" // replace with your image
          alt="Museum interior"
          fill
          priority
          className={styles.image}
        />
      </div>

      {/* CENTER TEXT */}
      <div className={styles.textWrapper}>
        <span className={styles.subTitle}>PLAN A VISIT</span>

        <h1 className={styles.title}>
          Discover India’s  <br />
<em>First Constitution</em>
          <br />
          Museum
        </h1>
      </div>
    </section>
    <section className={styles.section}>
      {/* Manuscript strip */}
      <div className={styles.manuscript}>
        <Image
          src="https://cdn.prod.website-files.com/6570e8a05181277af39c19d5/65a8bc44429528ae89d4833d_scribble%20(1)-p-800.png" // same manuscript image
          alt="Historic manuscript"
          fill
          className={styles.manuscriptImg}
          priority
        />
      </div>

      <div className={styles.content}>
        <span className={styles.label}>DIRECTIONS</span>

        <h2 className={styles.titletwo}>
          Plan Your Visit to India’s 

          <br />
          First Constitution Museum
        </h2>

        <p className={styles.textone}>
          Welcome to India's first Constitution Museum, commemorating 75 years of the adoption of the Constitution of India. Inaugurated on the historic 75th anniversary on November 26, 2024, the museum serves as a tribute to the enduring legacy and transformative journey of this foundational document through immersive experiences.
Start your virtual tour
        </p>

        <button className={styles.cta}>
          <span>START VIRTUAL TOUR</span>
          <span className={styles.circle}>→</span>
        </button>
      </div>
    </section>
    <section className={styles.section} >
      <div className="container">
        {/* ROW 1 */}
      <div className={styles.row}>
        <span className={styles.index}>01</span>

        <h3 className={styles.heading}>Hours of Operation</h3>

        <p className={styles.text}>
         Open: Tuesday to Sunday <br />
Timings: 10:00 AM - 6:00 PM <br />
Closed: Mondays <br />
Note: Last entry at 5:30 PM

        </p>
      </div>

      {/* ROW 2 */}
      <div className={styles.row}>
        <span className={styles.index}>02</span>

        <h3 className={styles.heading}>Location</h3>

        <div className={styles.textBlock}>
          <p className={styles.text}>
            Address:
Samvidhaan Marg <br />
Ratan Jindal Block <br />
O. P. Jindal Global University <br />
Sonipat, Haryana - 131001

          </p>

         
        </div>
      </div>

      {/* ROW 3 */}
      <div className={styles.row}>
        <span className={styles.index}>03</span>

        <h3 className={styles.heading}>Schedule a Tour</h3>

        <p className={styles.text}>
          Experience a guided journey through India's constitutional heritage.
        
         <button className={styles.link}>
            <span className="mt-3">Book Your Tour</span>
            <span className={styles.circle}>→</span>
          </button>
        </p>
      </div>
      </div>
    </section>
    <ScrollVideo/>
    <PlacesCarousel/>
    <Footer/>
    </main>
  );
}
