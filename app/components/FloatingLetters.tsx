'use client';

import { useState, useEffect, useRef } from 'react';

export default function FloatingLetters() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#E8D5C4] via-[#C9B8A8] to-[#A89888] overflow-hidden"
    >
      {/* Background with subtle texture */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.03) 10px, rgba(0,0,0,.03) 20px)' }} />

      {/* Floating letters at impossible scales */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Massive 'I' in foreground */}
        <div
          className={`absolute ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
          style={{
            top: `${20 - scrollY * 30}%`,
            left: '10%',
            transform: `scale(${1 + scrollY * 0.3})`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '0.2s',
          }}
        >
          <span className="bauhaus-text text-[20rem] md:text-[25rem] text-black/20 leading-none">
            I
          </span>
        </div>

        {/* Tiny 'AM' floating in distance */}
        <div
          className={`absolute ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
          style={{
            top: `${35 + scrollY * 20}%`,
            right: '15%',
            transform: `scale(${0.3 - scrollY * 0.1})`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '0.4s',
          }}
        >
          <span className="bauhaus-text text-4xl md:text-6xl text-black/40">
            AM
          </span>
        </div>

        {/* Medium 'G' */}
        <div
          className={`absolute ${isVisible ? 'animate-rotate-in' : 'opacity-0'}`}
          style={{
            top: `${50 + scrollY * 15}%`,
            left: '25%',
            transform: `scale(${1.5 + scrollY * 0.2}) rotate(${scrollY * 20}deg)`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '0.6s',
          }}
        >
          <span className="bauhaus-text text-[12rem] md:text-[15rem] text-black/30">
            G
          </span>
        </div>

        {/* Enormous 'L' partially off-screen */}
        <div
          className={`absolute ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          style={{
            bottom: `${-20 + scrollY * 25}%`,
            right: '-5%',
            transform: `scale(${2 - scrollY * 0.3})`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '0.8s',
          }}
        >
          <span className="bauhaus-text text-[30rem] text-black/15 leading-none">
            L
          </span>
        </div>

        {/* Small 'E' floating mid-air */}
        <div
          className={`absolute ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
          style={{
            top: `${45 - scrollY * 10}%`,
            left: `${60 + scrollY * 5}%`,
            transform: `scale(${0.5 + Math.sin(scrollY * Math.PI) * 0.2})`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '1.0s',
          }}
        >
          <span className="bauhaus-text text-5xl md:text-7xl text-black/50">
            E
          </span>
        </div>

        {/* Another large 'N' */}
        <div
          className={`absolute ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`}
          style={{
            top: `${-10 + scrollY * 20}%`,
            left: `${45 - scrollY * 10}%`,
            transform: `scale(${1.8 + scrollY * 0.4})`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '1.2s',
          }}
        >
          <span className="bauhaus-text text-[18rem] text-black/20 leading-none">
            N
          </span>
        </div>

        {/* Tiny repeated 'N' */}
        <div
          className={`absolute ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
          style={{
            bottom: '30%',
            left: '15%',
            transform: `scale(${0.25})`,
            animationDelay: '1.4s',
          }}
        >
          <span className="bauhaus-text text-3xl text-black/60">
            N
          </span>
        </div>
      </div>

      {/* Central readable text */}
      <div className="relative z-10 text-center px-4">
        <div className={`${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1.6s' }}>
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 border-4 border-black shadow-2xl">
            <h2 className="bauhaus-text text-5xl md:text-7xl text-black">
              I AM GLENN
            </h2>
            <p className="mt-6 text-lg md:text-xl font-light italic text-black/70" style={{ fontFamily: 'Georgia, serif' }}>
              Perspective is merely a suggestion
            </p>
          </div>
        </div>
      </div>

      {/* Tiny figure at bottom for scale reference (Magritte loved this) */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`} style={{ animationDelay: '1.8s' }}>
        <svg width="40" height="60" viewBox="0 0 40 60" className="opacity-40">
          <ellipse cx="20" cy="15" rx="8" ry="10" fill="#000" />
          <rect x="14" y="25" width="12" height="20" fill="#000" />
          <line x1="20" y1="35" x2="10" y2="30" stroke="#000" strokeWidth="2" />
          <line x1="20" y1="35" x2="30" y2="30" stroke="#000" strokeWidth="2" />
          <line x1="20" y1="45" x2="15" y2="60" stroke="#000" strokeWidth="2" />
          <line x1="20" y1="45" x2="25" y2="60" stroke="#000" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
}
