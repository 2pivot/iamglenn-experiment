'use client';

import { useState, useEffect, useRef } from 'react';

export default function BowlerHatGlenn() {
  const [isVisible, setIsVisible] = useState(false);
  const [hatPosition, setHatPosition] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setHatPosition((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-[#2C3E50] overflow-hidden"
    >
      {/* Dark Magritte-style background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#34495E] to-[#2C3E50]" />

      {/* Main text */}
      <div className="relative z-10 text-center px-4">
        <div className="relative inline-block">
          <h2 className={`bauhaus-text text-7xl md:text-9xl lg:text-[11rem] text-white ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <span className="inline-block">I</span>{' '}
            <span className="inline-block">AM</span>{' '}
            <span className="inline-block">GLENN</span>
          </h2>

          {/* Floating Bowler Hat - CSS-based */}
          <div
            className={`absolute ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`}
            style={{
              top: hatPosition === 0 ? '10%' : hatPosition === 1 ? '40%' : '15%',
              left: hatPosition === 0 ? '15%' : hatPosition === 1 ? '50%' : '70%',
              transform: 'translate(-50%, -50%)',
              transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1)',
              animationDelay: '0.8s',
            }}
          >
            {/* Bowler Hat SVG */}
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="drop-shadow-2xl"
            >
              {/* Hat brim */}
              <ellipse
                cx="100"
                cy="140"
                rx="80"
                ry="12"
                fill="#1a1a1a"
                stroke="#000"
                strokeWidth="2"
              />
              {/* Hat crown */}
              <ellipse
                cx="100"
                cy="100"
                rx="50"
                ry="60"
                fill="#2a2a2a"
                stroke="#000"
                strokeWidth="2"
              />
              {/* Hat top edge */}
              <ellipse
                cx="100"
                cy="100"
                rx="50"
                ry="8"
                fill="#1a1a1a"
                stroke="#000"
                strokeWidth="1"
              />
              {/* Highlight for dimension */}
              <ellipse
                cx="85"
                cy="90"
                rx="15"
                ry="20"
                fill="#3a3a3a"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Second floating hat */}
          <div
            className={`absolute ${isVisible ? 'animate-rotate-in' : 'opacity-0'}`}
            style={{
              top: hatPosition === 0 ? '50%' : hatPosition === 1 ? '20%' : '60%',
              left: hatPosition === 0 ? '70%' : hatPosition === 1 ? '25%' : '40%',
              transform: 'translate(-50%, -50%)',
              transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1)',
              animationDelay: '1.2s',
            }}
          >
            <svg
              width="150"
              height="150"
              viewBox="0 0 200 200"
              className="drop-shadow-2xl opacity-80"
            >
              <ellipse cx="100" cy="140" rx="80" ry="12" fill="#1a1a1a" stroke="#000" strokeWidth="2" />
              <ellipse cx="100" cy="100" rx="50" ry="60" fill="#2a2a2a" stroke="#000" strokeWidth="2" />
              <ellipse cx="100" cy="100" rx="50" ry="8" fill="#1a1a1a" stroke="#000" strokeWidth="1" />
              <ellipse cx="85" cy="90" rx="15" ry="20" fill="#3a3a3a" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Subtitle */}
        <div className={`mt-12 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
          <p className="text-xl md:text-2xl text-white/80 font-light italic" style={{ fontFamily: 'Georgia, serif' }}>
            The familiar obscures the identity
          </p>
        </div>
      </div>

      {/* Silhouette figure at bottom (like Magritte's suited men) */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`} style={{ animationDelay: '1.8s' }}>
        <svg width="200" height="300" viewBox="0 0 200 300" className="opacity-60">
          {/* Simple suited figure silhouette */}
          <rect x="70" y="200" width="60" height="100" fill="#1a1a1a" /> {/* Body/suit */}
          <ellipse cx="100" cy="180" rx="30" ry="35" fill="#1a1a1a" /> {/* Head */}
          <rect x="50" y="220" width="100" height="80" fill="#1a1a1a" /> {/* Coat */}
          {/* Bowler hat on figure */}
          <ellipse cx="100" cy="165" rx="35" ry="5" fill="#0a0a0a" />
          <ellipse cx="100" cy="150" rx="22" ry="25" fill="#1a1a1a" />
        </svg>
      </div>
    </section>
  );
}
