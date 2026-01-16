'use client';

import { useState, useEffect } from 'react';

export default function TreacheryOfGlenn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#87CEEB] to-[#4A90A4] overflow-hidden">
      {/* Magritte-style clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-90 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }} />
        <div className={`absolute top-24 left-24 w-24 h-12 bg-white rounded-full opacity-90 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }} />
        <div className={`absolute top-40 right-20 w-40 h-20 bg-white rounded-full opacity-90 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }} />
        <div className={`absolute top-44 right-36 w-28 h-14 bg-white rounded-full opacity-90 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }} />
        <div className={`absolute bottom-32 left-1/3 w-36 h-18 bg-white rounded-full opacity-90 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8">
        {/* The text "I AM GLENN" in a frame */}
        <div className={`relative inline-block ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          {/* Frame/Border like a painting */}
          <div className="border-8 border-[#8B4513] bg-white p-8 md:p-12 shadow-2xl">
            <h2 className="bauhaus-text text-6xl md:text-8xl text-black">
              I AM GLENN
            </h2>
          </div>

          {/* The Magritte-style contradiction text */}
          <div className={`mt-8 ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <p className="text-2xl md:text-3xl italic font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Ceci n'est pas Glenn
            </p>
            <p className="text-xl md:text-2xl font-light text-white mt-2 opacity-80">
              (This is not Glenn)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
