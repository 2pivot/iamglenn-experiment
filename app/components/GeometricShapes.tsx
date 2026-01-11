'use client';

import { useState, useEffect, useRef } from 'react';

interface Shape {
  id: number;
  type: 'circle' | 'square' | 'triangle' | 'rectangle';
  color: string;
  size: string;
  position: string;
  rotation: string;
  delay: string;
}

export default function GeometricShapes() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const shapes: Shape[] = [
    { id: 1, type: 'circle', color: 'bg-[#e01e1e]', size: 'w-32 h-32', position: 'top-20 left-20', rotation: 'rotate-0', delay: '0.1s' },
    { id: 2, type: 'square', color: 'bg-[#0e47cb]', size: 'w-40 h-40', position: 'top-40 right-32', rotation: 'rotate-45', delay: '0.2s' },
    { id: 3, type: 'rectangle', color: 'bg-[#ffc107]', size: 'w-48 h-24', position: 'bottom-40 left-40', rotation: 'rotate-12', delay: '0.3s' },
    { id: 4, type: 'circle', color: 'bg-[#0e47cb]', size: 'w-24 h-24', position: 'bottom-32 right-48', rotation: 'rotate-0', delay: '0.4s' },
    { id: 5, type: 'square', color: 'bg-[#e01e1e]', size: 'w-28 h-28', position: 'top-1/2 left-1/4', rotation: '-rotate-12', delay: '0.5s' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-[#f5f5f5] overflow-hidden py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`
              absolute ${shape.position} ${shape.size} ${shape.color}
              ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}
              interactive-block
              ${shape.type === 'circle' ? 'rounded-full' : ''}
              ${shape.rotation}
            `}
            style={{
              animationDelay: shape.delay,
              transform: `${shape.rotation.replace('-', '-').replace('rotate', 'rotate')}(${shape.rotation.split('-')[1] || shape.rotation.split('rotate-')[1] || '0'}deg) translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center px-4">
        <div className={`${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <h2 className="bauhaus-text text-6xl md:text-8xl mb-8">
            I AM GLENN
          </h2>
        </div>

        <div className={`max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Where modernist principles meet digital innovation.
          </p>
          <p className="text-xl md:text-2xl font-light leading-relaxed mt-4">
            Clean lines. Bold choices. Timeless design.
          </p>
        </div>

        {/* Interactive colored blocks */}
        <div className={`flex gap-4 justify-center mt-12 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="w-20 h-20 bg-[#e01e1e] interactive-block hover-mondrian" />
          <div className="w-20 h-20 bg-[#0e47cb] interactive-block hover-mondrian" />
          <div className="w-20 h-20 bg-[#ffc107] interactive-block hover-mondrian" />
          <div className="w-20 h-20 bg-black interactive-block hover-mondrian" />
        </div>
      </div>
    </section>
  );
}
