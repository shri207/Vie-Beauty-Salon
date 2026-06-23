import { motion, useScroll } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative selection:bg-accent/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Packages />
        <Testimonials />
        <Features />
        <FAQ />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
