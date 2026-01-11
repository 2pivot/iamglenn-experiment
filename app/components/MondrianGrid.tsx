'use client';

import { useState, useEffect } from 'react';

interface Block {
  id: number;
  color: string;
  span: string;
  text?: string;
  diagonal?: boolean;
}

export default function MondrianGrid() {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const blocks: Block[] = [
    { id: 1, color: 'bg-white', span: 'col-span-2 row-span-2', text: 'I AM', diagonal: false },
    { id: 2, color: 'bg-[#e01e1e]', span: 'col-span-1 row-span-1' },
    { id: 3, color: 'bg-white', span: 'col-span-1 row-span-1', text: 'GLENN' },
    { id: 4, color: 'bg-[#0e47cb]', span: 'col-span-1 row-span-2' },
    { id: 5, color: 'bg-white', span: 'col-span-2 row-span-1', text: 'I AM GLENN', diagonal: true },
    { id: 6, color: 'bg-[#ffc107]', span: 'col-span-1 row-span-1' },
    { id: 7, color: 'bg-white', span: 'col-span-1 row-span-2', text: 'I\nAM\nGLENN' },
    { id: 8, color: 'bg-[#e01e1e]', span: 'col-span-1 row-span-1' },
    { id: 9, color: 'bg-white', span: 'col-span-1 row-span-1', text: 'GLENN' },
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full max-w-4xl aspect-square p-4 md:p-8 bg-black">
      {blocks.map((block, index) => (
        <div
          key={block.id}
          className={`
            ${block.color}
            ${block.span}
            border-4 border-black
            interactive-block
            relative
            overflow-hidden
            flex items-center justify-center
            ${mounted ? 'animate-fade-in-scale' : 'opacity-0'}
          `}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
          onMouseEnter={() => setHoveredBlock(block.id)}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          {block.text && (
            <span
              className={`
                bauhaus-text
                text-black
                ${block.diagonal ? 'constructivist-diagonal' : ''}
                ${block.text.includes('\n') ? 'whitespace-pre-line text-center' : ''}
                text-2xl md:text-4xl lg:text-5xl
                transition-all duration-300
                ${hoveredBlock === block.id ? 'scale-110' : 'scale-100'}
              `}
            >
              {block.text}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
