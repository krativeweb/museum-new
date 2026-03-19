"use client";

import { useEffect } from "react";
import HeroBanner from "./components/HeroBanner";
import DoorSection from "./components/DoorSection";
import HorizontalGallery from "./components/HorizontalGallery";
import CollectionSection from "./components/CollectionSection";
import HistorySection from "./components/HistorySection";
import ExploreSection from "./components/ExploreSection";
import Jindal from "./components/JindalHistory";
import VideoSection from "./components/VideoSection";
import VisitSection from "./components/VisitSection";
import HorizontalScrollHandler from "./components/HorizontalScrollHandler";

export default function Home() {
  useEffect(() => {
    // ✅ enable scroll on Home
    document.body.classList.add("home-scroll");

    return () => {
      // cleanup when leaving Home
      document.body.classList.remove("home-scroll");
    };
  }, []);

  return (
    <HorizontalScrollHandler>
      <div className="h-wrapper">
        <div className="h-track">
          <section className="panel"><HeroBanner /></section>
          <section className="panel"><DoorSection /></section>
          <section className="panel"><CollectionSection /></section>
          <section className="panel"><HorizontalGallery /></section>
          <section className="panel"><HistorySection /></section>
          <section className="panel"><Jindal/></section>
          <section className="panel"><ExploreSection /></section>
          <section className="panel"><VideoSection /></section>
          <section className="panel"><VisitSection /></section>
        </div>
      </div>
    </HorizontalScrollHandler>
  );
}
