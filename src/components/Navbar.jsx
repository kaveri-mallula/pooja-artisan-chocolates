// Navbar.jsx
import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Update active link based on scroll position
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-luxury py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-3 group"
          aria-label="Pooja Artisan Chocolates Home"
        >
          <img
            src={logo}
            alt="Pooja Artisan Chocolates Logo"
            className={`rounded-full object-cover transition-all duration-300 group-hover:scale-105 ${
              scrolled ? 'w-12 h-12' : 'w-14 h-14'
            }`}
          />
          <div className={`hidden sm:block transition-all duration-300 ${scrolled ? '' : 'text-cream'}`}>
            <p className={`font-display text-lg font-semibold leading-none tracking-wide ${scrolled ? 'text-chocolate' : 'text-cream'}`}>
              pooja
            </p>
            <p className={`font-sans text-[9px] tracking-[0.2em] uppercase ${scrolled ? 'text-gold' : 'text-gold-light'}`}>
              Artisan Chocolates
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`font-sans text-xs font-medium tracking-[0.15em] uppercase transition-all duration-200 relative pb-1
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300
                ${activeLink === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                ${scrolled
                  ? activeLink === link.href ? 'text-chocolate' : 'text-chocolate/70 hover:text-chocolate'
                  : activeLink === link.href ? 'text-cream' : 'text-cream/80 hover:text-cream'
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Order CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20chocolates!"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-sans text-xs font-semibold tracking-wider uppercase px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold ${
              scrolled
                ? 'bg-gold text-chocolate-dark hover:bg-gold-light'
                : 'bg-gold text-chocolate-dark hover:bg-gold-light'
            }`}
          >
            Order Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-chocolate/10 ${scrolled ? 'text-chocolate' : 'text-cream'}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-chocolate' : 'bg-cream'} ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-0.5 mt-1.5 transition-all duration-300 ${scrolled ? 'bg-chocolate' : 'bg-cream'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 mt-1.5 transition-all duration-300 ${scrolled ? 'bg-chocolate' : 'bg-cream'} ${menuOpen ? '-rotate-45 -translate-y-3' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream/98 backdrop-blur-md border-t border-chocolate/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`font-sans text-sm font-medium tracking-wider uppercase py-3 px-2 border-b border-chocolate/5 transition-colors duration-200 ${
                activeLink === link.href ? 'text-chocolate font-semibold' : 'text-chocolate/70 hover:text-chocolate'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20chocolates!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 btn-gold text-center"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
