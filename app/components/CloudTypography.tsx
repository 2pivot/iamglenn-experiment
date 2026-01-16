'use client';

import { useState, useEffect, useRef } from 'react';

export default function CloudTypography() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#87CEEB] via-[#B0E0E6] to-[#87CEEB] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Sky background with Magritte-style gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A90A4] via-[#87CEEB] to-[#B0E0E6]" />

      {/* Large text that clouds will obscure */}
      <div className="relative z-10 text-center px-4">
        <h2 className={`bauhaus-text text-7xl md:text-9xl lg:text-[10rem] text-white/20 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          I AM GLENN
        </h2>
      </div>

      {/* Floating clouds that obscure the text */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cloud 1 - large fluffy cloud */}
        <div
          className={`absolute ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          style={{
            top: '30%',
            left: `${20 + (mousePosition.x - 50) * 0.05}%`,
            animationDelay: '0.3s',
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        >
          <div className="relative">
            <div className="w-24 h-16 bg-white rounded-full opacity-95 shadow-lg" />
            <div className="absolute top-2 -left-8 w-20 h-14 bg-white rounded-full opacity-95 shadow-lg" />
            <div className="absolute top-2 left-16 w-28 h-18 bg-white rounded-full opacity-95 shadow-lg" />
            <div className="absolute -top-4 left-12 w-20 h-16 bg-white rounded-full opacity-95 shadow-lg" />
          </div>
        </div>

        {/* Cloud 2 */}
        <div
          className={`absolute ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
          style={{
            top: '40%',
            left: `${60 + (mousePosition.x - 50) * 0.03}%`,
            animationDelay: '0.5s',
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        >
          <div className="relative">
            <div className="w-32 h-20 bg-white rounded-full opacity-90 shadow-lg" />
            <div className="absolute top-3 -left-10 w-24 h-16 bg-white rounded-full opacity-90 shadow-lg" />
            <div className="absolute top-3 left-20 w-28 h-20 bg-white rounded-full opacity-90 shadow-lg" />
            <div className="absolute -top-6 left-16 w-24 h-18 bg-white rounded-full opacity-90 shadow-lg" />
          </div>
        </div>

        {/* Cloud 3 */}
        <div
          className={`absolute ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
          style={{
            top: `${50 + (mousePosition.y - 50) * 0.04}%`,
            left: '15%',
            animationDelay: '0.7s',
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        >
          <div className="relative">
            <div className="w-28 h-18 bg-white rounded-full opacity-85 shadow-lg" />
            <div className="absolute top-2 -left-6 w-20 h-14 bg-white rounded-full opacity-85 shadow-lg" />
            <div className="absolute top-2 left-18 w-24 h-16 bg-white rounded-full opacity-85 shadow-lg" />
          </div>
        </div>

        {/* Cloud 4 */}
        <div
          className={`absolute ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`}
          style={{
            top: `${60 + (mousePosition.y - 50) * 0.02}%`,
            left: `${70 + (mousePosition.x - 50) * 0.04}%`,
            animationDelay: '0.9s',
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        >
          <div className="relative">
            <div className="w-36 h-22 bg-white rounded-full opacity-90 shadow-lg" />
            <div className="absolute top-3 -left-12 w-28 h-18 bg-white rounded-full opacity-90 shadow-lg" />
            <div className="absolute top-3 left-24 w-32 h-20 bg-white rounded-full opacity-90 shadow-lg" />
            <div className="absolute -top-6 left-18 w-26 h-20 bg-white rounded-full opacity-90 shadow-lg" />
          </div>
        </div>

        {/* Small scattered clouds */}
        <div className={`absolute top-20 right-32 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1.1s' }}>
          <div className="relative">
            <div className="w-16 h-10 bg-white rounded-full opacity-80 shadow-lg" />
            <div className="absolute top-1 -left-4 w-12 h-8 bg-white rounded-full opacity-80 shadow-lg" />
            <div className="absolute top-1 left-10 w-14 h-10 bg-white rounded-full opacity-80 shadow-lg" />
          </div>
        </div>

        <div className={`absolute bottom-32 left-1/4 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1.3s' }}>
          <div className="relative">
            <div className="w-20 h-12 bg-white rounded-full opacity-80 shadow-lg" />
            <div className="absolute top-2 -left-6 w-16 h-10 bg-white rounded-full opacity-80 shadow-lg" />
            <div className="absolute top-2 left-12 w-18 h-12 bg-white rounded-full opacity-80 shadow-lg" />
          </div>
        </div>
      </div>

      {/* Visible text parts through the clouds */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className={`text-center ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
          <p className="text-xl md:text-2xl text-black/60 font-light italic" style={{ fontFamily: 'Georgia, serif' }}>
            The clouds reveal what words conceal
          </p>
        </div>
      </div>
    </section>
  );
}
