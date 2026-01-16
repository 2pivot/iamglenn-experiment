'use client';

import { useState, useEffect, useRef } from 'react';

export default function DayNightParadox() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Split day/night background - Magritte style impossible scene */}
      <div className="absolute inset-0">
        {/* Day side (left) */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-b from-[#87CEEB] via-[#B0E0E6] to-[#FFE4B5]">
          {/* Sun */}
          <div className={`absolute top-20 left-20 w-24 h-24 rounded-full bg-[#FFD700] shadow-2xl ${isVisible ? 'animate-rotate-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s', boxShadow: '0 0 60px rgba(255, 215, 0, 0.6)' }} />

          {/* Day clouds */}
          <div className={`absolute top-32 left-1/3 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="w-20 h-12 bg-white rounded-full opacity-80" />
              <div className="absolute top-2 -left-6 w-16 h-10 bg-white rounded-full opacity-80" />
              <div className="absolute top-2 left-12 w-18 h-12 bg-white rounded-full opacity-80" />
            </div>
          </div>

          <div className={`absolute bottom-40 left-1/4 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            <div className="relative">
              <div className="w-24 h-14 bg-white rounded-full opacity-70" />
              <div className="absolute top-2 -left-8 w-20 h-12 bg-white rounded-full opacity-70" />
              <div className="absolute top-2 left-14 w-22 h-14 bg-white rounded-full opacity-70" />
            </div>
          </div>
        </div>

        {/* Night side (right) */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-b from-[#0C1445] via-[#1a1a3e] to-[#2C1E3E]">
          {/* Moon */}
          <div className={`absolute top-20 right-20 w-24 h-24 rounded-full bg-[#F0F0F0] shadow-2xl ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.4s', boxShadow: '0 0 50px rgba(240, 240, 240, 0.5)' }}>
            {/* Moon craters */}
            <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-[#D0D0D0] opacity-30" />
            <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#D0D0D0] opacity-20" />
          </div>

          {/* Stars */}
          <div className={`absolute top-40 right-32 w-2 h-2 bg-white rounded-full ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }} />
          <div className={`absolute top-60 right-1/4 w-1.5 h-1.5 bg-white rounded-full ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }} />
          <div className={`absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }} />
          <div className={`absolute bottom-1/3 right-20 w-1 h-1 bg-white rounded-full ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }} />
          <div className={`absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-white rounded-full ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1.0s' }} />
          <div className={`absolute top-1/2 right-40 w-1 h-1 bg-white rounded-full ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1.1s' }} />
        </div>

        {/* Vertical division line */}
        <div className="absolute inset-y-0 left-1/2 w-1 bg-black/20 transform -translate-x-1/2" />
      </div>

      {/* Main text spanning both sides */}
      <div className="relative z-10 text-center px-4">
        <div className="relative">
          {/* Left half of text (day colors) */}
          <h2 className={`bauhaus-text text-6xl md:text-8xl lg:text-[10rem] ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <span className="inline-block text-[#FFD700] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">I AM</span>
          </h2>
          <h2 className={`bauhaus-text text-6xl md:text-8xl lg:text-[10rem] mt-4 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
            <span className="inline-block text-[#F0F0F0] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">GLENN</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className={`mt-12 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1.6s' }}>
          <p className="text-xl md:text-2xl font-light italic" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="text-black/70">Neither day nor night,</span>
            <br />
            <span className="text-white/90">but both at once</span>
          </p>
        </div>
      </div>

      {/* Window frame overlay - creating the "painting within reality" effect */}
      <div className={`absolute inset-8 border-8 border-[#8B4513] pointer-events-none ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1.8s' }} />
    </section>
  );
}
