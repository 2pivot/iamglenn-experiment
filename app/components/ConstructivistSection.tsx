'use client';

import { useState, useEffect, useRef } from 'react';

export default function ConstructivistSection() {
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
      className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-20"
    >
      {/* Diagonal lines inspired by Constructivism */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-1 bg-[#e01e1e] origin-top-left ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ transform: 'rotate(15deg) translateY(20vh)', animationDelay: '0.2s' }} />
        <div className={`absolute top-0 left-0 w-full h-1 bg-[#0e47cb] origin-top-left ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transform: 'rotate(-10deg) translateY(50vh)', animationDelay: '0.4s' }} />
        <div className={`absolute top-0 left-0 w-full h-1 bg-[#ffc107] origin-top-left ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ transform: 'rotate(5deg) translateY(80vh)', animationDelay: '0.6s' }} />
      </div>

      <div className="relative z-10 max-w-6xl px-8">
        {/* Stacked and rotated text layers */}
        <div className="relative">
          <h2
            className={`bauhaus-text text-6xl md:text-8xl lg:text-9xl ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            I AM GLENN
          </h2>
          <h2
            className={`bauhaus-text text-6xl md:text-8xl lg:text-9xl absolute top-0 left-0 text-[#e01e1e] ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            style={{
              transform: 'translate(10px, 10px)',
              animationDelay: '0.5s'
            }}
          >
            I AM GLENN
          </h2>
          <h2
            className={`bauhaus-text text-6xl md:text-8xl lg:text-9xl absolute top-0 left-0 text-[#0e47cb] ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`}
            style={{
              transform: 'translate(20px, 20px)',
              animationDelay: '0.7s'
            }}
          >
            I AM GLENN
          </h2>
        </div>

        {/* Rotated text */}
        <div className={`mt-32 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <p className="text-xl md:text-3xl font-light" style={{ transform: 'rotate(-3deg)' }}>
            Technology meets art.
          </p>
          <p className="text-xl md:text-3xl font-light mt-4" style={{ transform: 'rotate(2deg)' }}>
            Form follows function.
          </p>
          <p className="text-xl md:text-3xl font-light mt-4" style={{ transform: 'rotate(-1deg)' }}>
            Innovation through design.
          </p>
        </div>
      </div>
    </section>
  );
}
