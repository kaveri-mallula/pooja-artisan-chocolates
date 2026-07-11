// About.jsx
import logo from '../assets/logo.jpg';

const values = [
  { icon: '🍫', title: 'Pure Passion', desc: 'Every piece is made by hand with deep love and dedication to the craft.' },
  { icon: '✨', title: 'Premium Ingredients', desc: 'We source only the finest cocoa and natural ingredients for authentic taste.' },
  { icon: '🎁', title: 'Perfect Gifting', desc: 'Our chocolates come beautifully packaged, making every occasion special.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-chocolate/5 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Image block */}
          <div className="reveal-left relative">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-3xl" />
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-luxury-lg">
                <img
                  src={logo}
                  alt="Pooja Artisan Chocolates — Crafted with love"
                  className="w-full h-[480px] object-contain bg-cream-200 p-8"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-chocolate text-cream px-6 py-4 rounded-2xl shadow-luxury z-20">
                <p className="font-display text-3xl font-bold text-gold">3+</p>
                <p className="font-sans text-xs tracking-widest uppercase text-cream/70 mt-0.5">Years of Craft</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="reveal-right">
            {/* Tag */}
            <div className="tag-badge mb-5">Our Story</div>

            {/* Heading */}
            <h2 className="section-title mb-6">
              Crafted with{' '}
              <span className="italic text-gradient-gold">Passion</span>
              <br />& Pure Ingredients
            </h2>

            <div className="gold-divider justify-start mb-8">
              <div className="h-px bg-gold w-16" />
              <span className="text-gold text-sm">♦</span>
            </div>

            {/* Story paragraphs */}
            <div className="space-y-4 mb-10">
              <p className="section-subtitle">
                Born from a deep love for chocolate and the art of confectionery, Pooja Artisan Chocolates started as a homemade passion project in the heart of Bhimavaram. What began as sweet experiments in a home kitchen has grown into a beloved local brand known for quality, creativity, and care.
              </p>
              <p className="section-subtitle">
                Every piece we create is made by hand — no shortcuts, no compromises. We use only premium cocoa, natural flavours, and the finest ingredients to ensure each bite is a moment of pure joy. From delicate truffles to fudgy brownies and custom shaped chocolates, every creation carries our signature warmth.
              </p>
              <p className="font-display text-xl italic text-chocolate-light font-medium">
                "We don't just make chocolates. We craft memories."
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-cream-100 rounded-2xl p-5 border border-chocolate/5 hover:border-gold/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">{v.icon}</div>
                  <h3 className="font-serif text-base font-semibold text-chocolate mb-1">{v.title}</h3>
                  <p className="font-sans text-xs text-chocolate/60 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
