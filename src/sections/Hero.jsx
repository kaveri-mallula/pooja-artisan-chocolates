// Hero.jsx
import logo from '../assets/logo.jpg';
import chocolatesImg from '../assets/chocolates.jpg';
import browniesImg from '../assets/brownies.jpg';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image mosaic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-2 gap-0">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${browniesImg})` }}
          />
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${chocolatesImg})` }}
          />
        </div>
        {/* Rich dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-900/80 via-chocolate-dark/65 to-chocolate-900/85" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_50%] from-transparent to-chocolate-900/50" />
      </div>

      {/* Decorative gold lines */}
      <div className="absolute inset-x-0 top-0 h-1 bg-shimmer z-10 opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-shimmer z-10 opacity-60" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl scale-150" />
            <img
              src={logo}
              alt="Pooja Artisan Chocolates"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-luxury-lg border-4 border-gold/60 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" />
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold-light">
            Bhimavaram
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-6 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          Handcrafted
          <span className="block italic text-gradient-gold font-light mt-1">
            Chocolates
          </span>
          <span className="block text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1">
            Made With Love
          </span>
        </h1>

        {/* Gold divider */}
        <div
          className="flex items-center justify-center gap-4 my-6 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="h-px w-16 bg-gold/50" />
          <span className="text-gold text-xl">♦</span>
          <div className="h-px w-16 bg-gold/50" />
        </div>

        {/* Subheading */}
        <p
          className="font-sans text-lg md:text-xl text-cream/85 mb-10 tracking-wider animate-fade-up italic font-light"
          style={{ animationDelay: '0.8s' }}
        >
          "Sweet moments in every bite."
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: '1s' }}
        >
          <a
            id="hero-order-btn"
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20chocolates!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-10 py-4 shadow-gold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.534 4.09 1.47 5.83L0 24l6.336-1.43A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.604-.476-5.127-1.312L2.5 21.757l1.08-4.264A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Order Now
          </a>
          <button
            id="hero-explore-btn"
            onClick={() => scrollTo('products')}
            className="btn-secondary text-base px-10 py-4"
          >
            Explore Collection
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-up"
          style={{ animationDelay: '1.2s' }}
        >
          {[
            { value: '100%', label: 'Handmade' },
            { value: '500+', label: 'Happy Customers' },
            { value: '20+', label: 'Varieties' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl text-gold-light font-semibold">{stat.value}</p>
              <p className="font-sans text-xs text-cream/60 tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
