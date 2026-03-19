"use client";

import styles from "./PlacesCarousel.module.css";
import { useEffect, useRef } from "react";
const places = [
  {
    title: "The Constitution: A Kaleidoscope: ",
    category: "Explore the philosophical underpinnings and key provisions that define our democracy, including beautiful artwork by Nandalal Bose and his team from Kala Bhavana, Santiniketan",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "Graphic Panels:",
    category: "Discover illustrated panels detailing critical aspects of the Constitution, citizenship, elections, local self-governance, and protections for marginalised communities.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "The Maker's Gallery:",
    category: "Journey into India's collective conscience through archival treasures— witness the hopes, anxieties, and convictions of the Constitution's framers as they met for 165 days to draft our foundational document.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "Freedom's Journey: ",
    category: "Explore the lived experiences of becoming a republic.  Witness the Constitution's evolution through landmark judgments, amendments, and the six Fundamental Rights that have continually reshaped Indian society over 75 years.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "The Handwritten Constitution:",
    category: "Experience the original manuscript of the Constitution- This beautifully crafted document represents the collective dream of a diverse nation committed to its pillars of liberty, equality, justice, and fraternity.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "The Wall of Busts:",
    category: "Pay tribute to the luminaries of the Constituent Assembly. This section displays busts of the 300 extraordinary members, freedom fighters, lawyers, social reformers, industrialists, and princes who undertook the monumental task of drafting our Constitution.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "Founding Mothers:",
    category: " Celebrate the women members of the Constituent Assembly through an engaging video exhibition. Discover their inspiring stories and the groundbreaking roles they played in shaping India's democratic framework.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "Hologram of Dr. B.R. Ambedkar:",
    category: "Interact with an innovative hologram installation that brings Dr. Ambedkar's words and vision to life. Experience his legacy first-hand through questions and answers crafted from his speeches and writings.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "Decoding the Constitution:",
    category: "Demystify the complex language of the Constitution through interactive installations. A comprehensive glossary of key terms and concepts, complemented by quizzes and animated videos, enhances understanding for visitors of all ages.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "Archival Deep Dive:",
    category: " Access a rich repository of archival data, including rare photographs, video material, and historical documents.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "Aaj Ke Samachar: ",
    category: "  Experience history through an interactive vintage radio installation by artist Hasan Shahrukh. Turn the knobs to select decades from the 1940s onwards and hear narratives of significant constitutional events.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "360° Immersive Experience:",
    category: "Step into a breathtaking 360-degree visual journey. Utilising cutting-edge technology and multimedia storytelling, this space brings the nation's supreme legal document to life through engaging visuals.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "The Constitution Theatre:",
    category: "Relax in the Samvidhaan Theatre and watch documentaries and films inspired by the Constitution of India. A cinematic exploration of constitutional values and their impact on our nation.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "Constitution Through Art:",
    category: " Explore 'Ways of Seeing: The Constitution Through Contemporary Art' —a collection of artworks by renowned artists that underpins the values of the Constitution. Each piece offers a unique perspective on our constitutional heritage.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "Experts Speak:",
    category: " Deepen your understanding through insights from constitutional experts.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
  {
    title: "Aapka Adhikar:",
    category: "  Watch inspiring stories of individuals who fought legal battles to uphold their constitutional guarantees.",
    image: "https://cdn.prod.website-files.com/657744429cb32a5ca0059f27/65cd038da2cb321288697044_Group%2031-p-500.jpg",
  },
];

export default function PlacesCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const CARD_SCROLL = 360; // card (320) + gap (~40)

    const start = () => {
      if (intervalRef.current) return;

      intervalRef.current = setInterval(() => {
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth - 5
        ) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: CARD_SCROLL, behavior: "smooth" });
        }
      }, 3000);
    };

    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Pause when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? start() : stop();
      },
      { threshold: 0.3 }
    );

    observer.observe(carousel);

    // Pause on interaction
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("touchstart", stop);
    carousel.addEventListener("touchend", start);

    return () => {
      stop();
      observer.disconnect();
      carousel.removeEventListener("mouseenter", stop);
      carousel.removeEventListener("mouseleave", start);
      carousel.removeEventListener("touchstart", stop);
      carousel.removeEventListener("touchend", start);
    };
  }, []);

  return (
    <section className={styles.section}>
      <span className={styles.label}>Galleries To Explore</span>

      <h2 className={styles.heading}>PLACES TO VISIT</h2>

      {/* <p className={styles.description}>
        In addition to Wright’s Ferry Museum, Columbia, Pennsylvania offers
        visitors the opportunity to explore historic downtown and revel in
        scenic views along the Susquehanna River.
      </p> */}

      <div className={styles.carousel} ref={carouselRef}>
        {places.map((place, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.imageWrap}>
              <img src={place.image} alt={place.title} />
            </div>

            <div className={styles.cardContent}>
              <h3>{place.title}</h3>

              <div className={styles.meta}>
                <span className={styles.line} />
                <span className={styles.category}>{place.category}</span> <br />
                {/* <span className={styles.arrow}>→</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
