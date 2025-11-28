"use client";

import { useEffect, useState } from "react";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

const Hero = () => {
  const scrollHeight = 2000;
  const [showContent, setShowContent] = useState(false);
  const [indicatorOpacity, setIndicatorOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > scrollHeight - 800) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }

      const newOpacity = Math.max(0, 1 - scrollY / 150);
      setIndicatorOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="relative bg-black w-full">
      <div className="relative min-h-screen">
        <SmoothScrollHero
          scrollHeight={scrollHeight}
          desktopImage="https://images.unsplash.com/photo-1665856723112-b5b1adc93456"
          mobileImage="https://images.unsplash.com/photo-1665856723112-b5b1adc93456?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          initialClipPercentage={25}
          finalClipPercentage={75}
        />
      </div>
      <div
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none mix-blend-difference z-20 transition-opacity duration-300"
        style={{ opacity: indicatorOpacity }}
      >
        <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">
          Scroll
        </span>
        <div className="animate-bounce mt-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            className="opacity-80"
          >
            <rect x="5" y="2" width="14" height="20" rx="7" />
            <path d="M12 6V10" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
          <div
            className={`transition-all duration-1000 transform flex flex-col items-center ${
              showContent
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-20 blur-sm"
            }`}
          >
            <h1 className="font-tech text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white text-center drop-shadow-2xl">
              Estêvão Lélis
            </h1>
            <p className="text-lg md:text-xl text-center max-w-xl text-gray-200 leading-relaxed px-4 drop-shadow-lg">
              Clean code, seamless experiences, and digital products built to
              stand out.
              <br className="hidden md:block" />
              <span className="text-white/60 text-sm mt-4 block">
                Design, performance, and precision.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
