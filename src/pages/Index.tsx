import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Expertise from "@/components/Expertise";
import PublicDomain from "@/components/PublicDomain";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Expertise />
      <PublicDomain />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
