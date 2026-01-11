'use client';

import { useState, useEffect } from 'react';

export default function BauhausHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-32 h-32 bg-[#e01e1e] rounded-full ${isVisible ? 'animate-rotate-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }} />
        <div className={`absolute bottom-32 right-20 w-48 h-48 bg-[#0e47cb] ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }} />
        <div className={`absolute top-1/3 right-1/4 w-24 h-24 border-8 border-[#ffc107] rotate-45 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }} />
        <div className={`absolute bottom-1/4 left-1/3 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-[#e01e1e] ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }} />
      </div>

      {/* Main text */}
      <div className="relative z-10 text-center px-4">
        <h1 className="bauhaus-text text-7xl md:text-9xl lg:text-[12rem] leading-none">
          <span className={`inline-block ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            I
          </span>{' '}
          <span className={`inline-block ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            AM
          </span>{' '}
          <span className={`inline-block ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            GLENN
          </span>
        </h1>

        <div className={`mt-8 flex items-center justify-center gap-4 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="w-16 h-2 bg-[#e01e1e]" />
          <div className="w-16 h-2 bg-[#0e47cb]" />
          <div className="w-16 h-2 bg-[#ffc107]" />
        </div>
      </div>
    </section>
  );
}
