// WhyUs.jsx
const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Handmade with Love',
    desc: 'Every chocolate is hand-crafted from scratch. No machines, no mass production — just pure, artisan care in every piece.',
    color: 'from-rose-50 to-pink-50',
    iconBg: 'bg-rose-100 text-rose-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Premium Ingredients',
    desc: 'We use only the finest Belgian cocoa, real butter, fresh cream and natural flavours — no artificial additives, ever.',
    color: 'from-amber-50 to-yellow-50',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Freshly Prepared',
    desc: 'All orders are freshly prepared on the day of delivery. Enjoy maximum freshness and peak flavour in every order.',
    color: 'from-emerald-50 to-green-50',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: 'Beautiful Packaging',
    desc: 'Presentation matters. Our chocolates are packaged in elegant, gift-ready boxes with our signature branding.',
    color: 'from-purple-50 to-violet-50',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Perfect for Gifting',
    desc: 'Whether it\'s a birthday, anniversary, festive occasion or a corporate thank-you — our chocolates make the perfect gift.',
    color: 'from-sky-50 to-blue-50',
    iconBg: 'bg-sky-100 text-sky-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    title: 'Custom Orders',
    desc: 'We create personalised chocolates for weddings, birthdays, corporate events, and any special occasion you can imagine.',
    color: 'from-orange-50 to-red-50',
    iconBg: 'bg-orange-100 text-orange-600',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-chocolate relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, #C8A96A 1px, transparent 1px), radial-gradient(circle at 80% 70%, #C8A96A 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-shimmer opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 mb-5">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold">Why Choose Us</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
            The{' '}
            <span className="italic animate-gold-shimmer">Pooja</span>
            {' '}Difference
          </h2>
          <div className="gold-divider mb-6">
            <span className="text-gold">✦</span>
          </div>
          <p className="font-sans text-base md:text-lg text-cream/65 max-w-xl mx-auto leading-relaxed">
            We believe chocolate is more than a treat — it's an expression of love. Here's what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="reveal group relative bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-7 hover:bg-cream/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg font-semibold text-cream mb-2 group-hover:text-gold-light transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-cream/60 leading-relaxed">
                {feature.desc}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
