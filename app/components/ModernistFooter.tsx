'use client';

export default function ModernistFooter() {
  return (
    <footer className="relative w-full bg-black text-white py-12 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-4 h-full">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="border border-white" />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Bold statement */}
          <div>
            <h3 className="bauhaus-text text-3xl md:text-4xl">
              I AM
              <br />
              GLENN
            </h3>
          </div>

          {/* Center: Colored bars */}
          <div className="flex flex-col gap-2">
            <div className="h-3 bg-[#e01e1e]" />
            <div className="h-3 bg-[#0e47cb]" />
            <div className="h-3 bg-[#ffc107]" />
          </div>

          {/* Right: Info */}
          <div className="text-right space-y-2">
            <p className="text-sm font-light">Modernist Design</p>
            <p className="text-sm font-light">× Technology</p>
            <p className="text-xs text-gray-400 mt-4">Built with Next.js</p>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm font-light">
            © 2026 · Form Follows Function
          </p>
        </div>
      </div>
    </footer>
  );
}
