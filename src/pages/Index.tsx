import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import TracksSection from "@/components/TracksSection";
import ExcellenceDNA from "@/components/ExcellenceDNA";
import LiveScience from "@/components/LiveScience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <section id="vision">
          <VisionSection />
        </section>
        <section id="tracks">
          <TracksSection />
        </section>
        <section id="features">
          <ExcellenceDNA />
        </section>
        <section id="science">
          <LiveScience />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
