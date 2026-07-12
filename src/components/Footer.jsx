// Footer.jsx
import logo from '../assets/logo.jpg';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/artisanchoco.co',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919999999999',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.09.534 4.09 1.47 5.83L0 24l6.336-1.43A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.604-.476-5.127-1.312L2.5 21.757l1.08-4.264A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-chocolate-900 text-cream relative overflow-hidden">
      {/* Gold top line */}
      <div className="h-1 bg-shimmer opacity-70" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border border-gold" />
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full border border-gold" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Pooja Artisan Chocolates"
                className="w-14 h-14 rounded-full object-cover border-2 border-gold/40"
              />
              <div>
                <p className="font-display text-xl font-semibold text-cream leading-none">pooja</p>
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold mt-0.5">Artisan Chocolates</p>
              </div>
            </div>
            <p className="font-sans text-sm text-cream/55 leading-relaxed mb-6 max-w-sm">
              Handcrafted with premium ingredients, passion, and love. Based in Bhimavaram, Andhra Pradesh — bringing joy through the art of chocolate making.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${s.label}`}
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-gold hover:text-chocolate-dark flex items-center justify-center text-cream/70 transition-all duration-300 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-5">Quick Links</h4>
            <nav className="space-y-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="block font-sans text-sm text-cream/55 hover:text-gold transition-colors duration-200 hover:translate-x-1 transition-transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-5">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="font-sans text-xs text-cream/35 uppercase tracking-wider mb-1">Instagram</p>
                <a href="https://www.instagram.com/artisanchoco.co" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-cream/60 hover:text-gold transition-colors duration-200">
                  @artisanchoco.co
                </a>
              </div>
              <div>
                <p className="font-sans text-xs text-cream/35 uppercase tracking-wider mb-1">WhatsApp</p>
                <a href="https://wa.me/919959575926" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-cream/60 hover:text-gold transition-colors duration-200">
                  +91 9959575926
                </a>
              </div>
              <div>
                <p className="font-sans text-xs text-cream/35 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:poojasartisanchoco.co@gmail.com" className="font-sans text-sm text-cream/60 hover:text-gold transition-colors duration-200">
                  poojasartisanchoco.co@gmail.com
                </a>
              </div>
              <div>
                <p className="font-sans text-xs text-cream/35 uppercase tracking-wider mb-1">Location</p>
                <p className="font-sans text-sm text-cream/60">Bhimavaram, AP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-cream/35 text-center sm:text-left">
            © {new Date().getFullYear()} Pooja Artisan Chocolates. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-sans text-xs text-cream/25">Crafted with</span>
            <span className="text-gold text-xs animate-pulse-slow">♥</span>
            <span className="font-sans text-xs text-cream/25">in Bhimavaram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
