"use client";

import { useEffect, useState } from "react";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

const Hero = () => {
  const scrollHeight = 1500;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollHeight - 200) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <SmoothScrollHero
        scrollHeight={scrollHeight}
        desktopImage="https://images.unsplash.com/photo-1665856723112-b5b1adc93456"
        mobileImage="https://images.unsplash.com/photo-1665856723112-b5b1adc93456?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        initialClipPercentage={25}
        finalClipPercentage={75}
      />
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white transition-all duration-700 pointer-events-none ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl font-bold mb-4">Estêvão Lélis</h1>
        <p className="text-xl text-center max-w-xl opacity-80">
          Clean code, seamless experiences, and digital products built to stand
          out.
          <br />
          Design, performance, and precision — all in one place.
        </p>
      </div>
    </div>
  );
};

export { Hero };
