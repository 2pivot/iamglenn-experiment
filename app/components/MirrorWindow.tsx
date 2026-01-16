'use client';

import { useState, useEffect, useRef } from 'react';

export default function MirrorWindow() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFrame, setHoveredFrame] = useState<number | null>(null);
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
      className="relative w-full min-h-screen flex items-center justify-center bg-[#8B7355] overflow-hidden p-8"
    >
      {/* Wall texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A0826D] to-[#8B7355]" />

      {/* Main window/painting frame */}
      <div className={`relative ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        {/* Outer frame - ornate museum-style */}
        <div className="relative border-[20px] border-[#3E2723] bg-gradient-to-b from-[#87CEEB] to-[#B0E0E6] p-8 md:p-12 shadow-2xl">
          {/* Inner gold detail */}
          <div className="absolute inset-0 border-8 border-[#D4AF37] pointer-events-none" />

          {/* Sky/window view */}
          <div className="relative bg-gradient-to-b from-[#87CEEB] via-[#B0E0E6] to-[#87CEEB] min-h-[60vh] flex items-center justify-center">
            {/* Clouds in the "window" */}
            <div className="absolute top-12 left-12">
              <div className="relative">
                <div className="w-20 h-12 bg-white rounded-full opacity-80" />
                <div className="absolute top-2 -left-6 w-16 h-10 bg-white rounded-full opacity-80" />
                <div className="absolute top-2 left-12 w-18 h-12 bg-white rounded-full opacity-80" />
              </div>
            </div>

            {/* Second frame inside - painting within window */}
            <div
              className={`relative border-[12px] border-[#3E2723] bg-white shadow-xl transition-transform duration-300 ${isVisible ? 'animate-rotate-in' : 'opacity-0'} ${hoveredFrame === 1 ? 'scale-105' : 'scale-100'}`}
              style={{ animationDelay: '0.6s' }}
              onMouseEnter={() => setHoveredFrame(1)}
              onMouseLeave={() => setHoveredFrame(null)}
            >
              <div className="absolute inset-0 border-4 border-[#D4AF37] pointer-events-none" />

              <div className="bg-gradient-to-b from-[#2C3E50] to-[#34495E] p-6 md:p-8 min-h-[30vh] flex items-center justify-center relative">
                {/* Text in the inner frame */}
                <h2 className="bauhaus-text text-4xl md:text-6xl text-white">
                  I AM GLENN
                </h2>

                {/* Third nested frame - even smaller */}
                <div
                  className={`absolute bottom-4 right-4 border-4 border-white bg-[#87CEEB] p-2 shadow-lg transition-transform duration-300 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'} ${hoveredFrame === 2 ? 'scale-110' : 'scale-100'}`}
                  style={{ animationDelay: '1.0s' }}
                  onMouseEnter={() => setHoveredFrame(2)}
                  onMouseLeave={() => setHoveredFrame(null)}
                >
                  <span className="text-xs font-bold text-black">GLENN</span>
                </div>
              </div>
            </div>

            {/* Another frame to the side - like a reflected image */}
            <div
              className={`absolute -right-8 top-1/4 border-8 border-[#3E2723] bg-white p-4 shadow-xl transform rotate-12 transition-transform duration-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'} ${hoveredFrame === 3 ? 'scale-105 rotate-6' : 'scale-100 rotate-12'}`}
              style={{ animationDelay: '1.2s' }}
              onMouseEnter={() => setHoveredFrame(3)}
              onMouseLeave={() => setHoveredFrame(null)}
            >
              <div className="bg-black/80 p-3">
                <p className="text-white text-sm md:text-base font-bold">I AM</p>
              </div>
            </div>

            {/* Broken/shattered frame effect */}
            <div
              className={`absolute -left-6 bottom-1/4 border-6 border-[#3E2723] bg-gradient-to-br from-[#e01e1e] to-[#0e47cb] p-3 shadow-xl transform -rotate-6 transition-transform duration-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'} ${hoveredFrame === 4 ? 'scale-105 -rotate-3' : 'scale-100 -rotate-6'}`}
              style={{ animationDelay: '1.4s' }}
              onMouseEnter={() => setHoveredFrame(4)}
              onMouseLeave={() => setHoveredFrame(null)}
            >
              <span className="bauhaus-text text-white text-lg md:text-xl">AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating frame pieces - suggesting broken reality */}
      <div className={`absolute top-20 right-32 border-4 border-[#3E2723] w-24 h-16 bg-white/50 transform rotate-45 ${isVisible ? 'animate-rotate-in' : 'opacity-0'}`} style={{ animationDelay: '1.6s' }} />
      <div className={`absolute bottom-32 left-24 border-4 border-[#D4AF37] w-16 h-24 bg-white/30 transform -rotate-12 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1.8s' }} />

      {/* Caption below */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`} style={{ animationDelay: '2.0s' }}>
        <p className="text-xl md:text-2xl font-light italic text-white/90 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Reality framed, reframed, and questioned
        </p>
      </div>
    </section>
  );
}
