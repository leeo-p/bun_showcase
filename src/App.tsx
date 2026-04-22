import { CompareSection } from './components/CompareSection';
import { Cursor } from './components/Cursor';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { HeroCanvas } from './components/HeroCanvas';
import { HeroSection } from './components/HeroSection';
import { Nav } from './components/Nav';
import { SpeedSection } from './components/SpeedSection';
import { TerminalSection } from './components/TerminalSection';
import { Ticker } from './components/Ticker';
import { useHomePageEffects } from './hooks/useHomePageEffects';

export default function App() {
  useHomePageEffects();

  return (
    <>
      <Cursor />
      <HeroCanvas />
      <Nav />
      <Ticker />
      <HeroSection />
      <SpeedSection />
      <FeaturesSection />
      <TerminalSection />
      <CompareSection />
      <Footer />
    </>
  );
}
