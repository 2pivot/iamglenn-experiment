import BauhausHero from './components/BauhausHero';
import MondrianGrid from './components/MondrianGrid';
import ConstructivistSection from './components/ConstructivistSection';
import InteractiveTypography from './components/InteractiveTypography';
import GeometricShapes from './components/GeometricShapes';
import ModernistFooter from './components/ModernistFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section with animated "I AM GLENN" */}
      <BauhausHero />

      {/* Mondrian-inspired grid with interactive blocks */}
      <section className="w-full min-h-screen flex items-center justify-center bg-white py-20">
        <MondrianGrid />
      </section>

      {/* Constructivist layered text section */}
      <ConstructivistSection />

      {/* Interactive typography that changes on interaction */}
      <InteractiveTypography />

      {/* Geometric shapes with parallax effect */}
      <GeometricShapes />

      {/* Final statement section */}
      <section className="w-full min-h-[50vh] flex items-center justify-center bg-[#e01e1e] text-white">
        <div className="text-center px-4">
          <h2 className="bauhaus-text text-7xl md:text-9xl animate-pulse">
            I AM GLENN
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-2 h-32 bg-white" />
            <div className="w-2 h-32 bg-[#0e47cb]" />
            <div className="w-2 h-32 bg-[#ffc107]" />
            <div className="w-2 h-32 bg-white" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <ModernistFooter />
    </main>
  );
}
