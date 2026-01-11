'use client';

import { useState, useEffect } from 'react';

const phrases = [
  'I AM GLENN',
  'GLENN I AM',
  'I\nAM\nGLENN',
  'G·L·E·N·N',
];

const colors = ['text-black', 'text-[#e01e1e]', 'text-[#0e47cb]', 'text-[#ffc107]'];

export default function InteractiveTypography() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setCurrentColor((prev) => (prev + 1) % colors.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white py-20">
      <div
        className="relative cursor-pointer select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          setCurrentColor((prev) => (prev + 1) % colors.length);
        }}
      >
        <h2
          className={`
            bauhaus-text
            ${colors[currentColor]}
            text-7xl md:text-9xl lg:text-[10rem]
            transition-all duration-500
            ${isHovered ? 'scale-110' : 'scale-100'}
            whitespace-pre-line text-center
          `}
        >
          {phrases[currentPhrase]}
        </h2>

        <p className="text-center mt-8 text-sm md:text-base text-gray-600 font-light">
          {isHovered ? 'Click to change' : 'Hover to pause · Auto-rotating'}
        </p>
      </div>
    </section>
  );
}
