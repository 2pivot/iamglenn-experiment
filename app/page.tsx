import BauhausHero from './components/BauhausHero';
import MondrianGrid from './components/MondrianGrid';
import ConstructivistSection from './components/ConstructivistSection';
import InteractiveTypography from './components/InteractiveTypography';
import GeometricShapes from './components/GeometricShapes';
import ModernistFooter from './components/ModernistFooter';
import TreacheryOfGlenn from './components/TreacheryOfGlenn';
import CloudTypography from './components/CloudTypography';
import BowlerHatGlenn from './components/BowlerHatGlenn';
import DayNightParadox from './components/DayNightParadox';
import FloatingLetters from './components/FloatingLetters';
import MirrorWindow from './components/MirrorWindow';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section with animated "I AM GLENN" */}
      <BauhausHero />

      {/* Mondrian-inspired grid with interactive blocks */}
      <section className="w-full min-h-screen flex items-center justify-center bg-white py-20">
        <MondrianGrid />
      </section>

      {/* Magritte: Treachery of Images - "This is not Glenn" */}
      <TreacheryOfGlenn />

      {/* Constructivist layered text section */}
      <ConstructivistSection />

      {/* Magritte: Clouds obscuring typography */}
      <CloudTypography />

      {/* Interactive typography that changes on interaction */}
      <InteractiveTypography />

      {/* Magritte: Bowler hat obscuring text */}
      <BowlerHatGlenn />

      {/* Geometric shapes with parallax effect */}
      <GeometricShapes />

      {/* Magritte: Day/Night paradox */}
      <DayNightParadox />

      {/* Magritte: Floating letters with scale distortion */}
      <FloatingLetters />

      {/* Magritte: Mirror/Window frames within frames */}
      <MirrorWindow />

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
