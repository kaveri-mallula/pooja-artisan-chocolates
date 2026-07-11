// App.jsx
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Pricing from './sections/Pricing';
import WhyUs from './sections/WhyUs';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

// Scroll to top button
function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="scroll-to-top"
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-gold shadow-gold flex items-center justify-center text-chocolate-dark hover:bg-gold-light hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}

export default function App() {
  // Initialize scroll reveal animations
  useScrollReveal();

  // Re-run reveal on dynamic content changes
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Pricing />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
