import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import MeltOverlay from "@/components/MeltOverlay";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { useSudoCommand } from "@/hooks/useSudoCommand";

const Index = () => {
  const { isActivated: konamiActivated, reset: resetKonami } = useKonamiCode();
  const { isActivated: sudoActivated, reset: resetSudo } = useSudoCommand();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Easter Eggs */}
      <MatrixRain isActive={konamiActivated} onComplete={resetKonami} />
      <MeltOverlay isActive={sudoActivated} onComplete={resetSudo} />
    </div>
  );
};

export default Index;
