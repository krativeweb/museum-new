"use client";

import { useEffect, useRef, useState } from "react";
import useReveal from "./useReveal";

export default function VideoSection() {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const videoRef = useRef(null);
  const [ref, visible] = useReveal(video); // 👈 trigger after API load

  /* ---------------- FETCH API ---------------- */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-video`)
      .then((res) => res.json())
      .then((data) => {
        // 🔥 MAP API → STATIC STRUCTURE
        const mappedData = {
          video: {
            src: data.home_video_src,
            autoPlay: data.home_video_autoplay,
            muted: data.home_video_muted,
            loop: data.home_video_loop,
            playsInline: data.home_video_inline,
          },
          thumbnail: {
            src: data.home_video_thumb,
            alt: data.home_video_thumb_alt,
          },
        };

        setVideo(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Video Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- VIDEO GLOBAL CONTROL ---------------- */
  useEffect(() => {
    if (videoRef.current) {
      window.heroVideo = videoRef.current;
    }
  }, [video]);

  /* ---------------- LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="video-hero d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="spinner-border text-light" role="status" />
      </section>
    );
  }

  if (!video) return null;

  return (
    <section ref={ref} className={`video-hero ${visible ? "fade-active" : ""}`}>
      <div className="video-left-strip" />

      <video
        ref={videoRef}
        className="hero-video"
        src={video.video.src}
        autoPlay={video.video.autoPlay}
        muted={video.video.muted}
        loop={video.video.loop}
        playsInline={video.video.playsInline}
      />

      <div className="video-thumbnail">
        <img src={video.thumbnail.src} alt={video.thumbnail.alt} />
      </div>
    </section>
  );
}
