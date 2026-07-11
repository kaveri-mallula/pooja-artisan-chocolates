// Pricing.jsx
import { useState } from 'react';

const pricingData = [
  {
    id: 'normal',
    title: 'Normal Chocolates',
    description: 'A selection of our classic milk, dark, and white chocolates.',
    emoji: '🍫',
    rates: {
      6: 90,
      12: 170,
      24: 320,
    },
    tag: 'Classic Blend',
    tagColor: 'bg-gold/15 text-gold-dark border border-gold/10',
  },
  {
    id: 'chocolate-ganache',
    title: 'Chocolate Ganache Filled',
    description: 'Luxurious chocolates filled with a rich, silky chocolate ganache.',
    emoji: '🟤',
    rates: {
      6: 120,
      12: 220,
      24: 420,
    },
    tag: 'Most Popular',
    tagColor: 'bg-chocolate/10 text-chocolate border border-chocolate/5',
  },
  {
    id: 'strawberry-ganache',
    title: 'Strawberry Ganache Filled',
    description: 'Chocolates filled with a fruity, sweet strawberry ganache.',
    emoji: '🍓',
    rates: {
      6: 130,
      12: 240,
      24: 460,
    },
    tag: 'Fruity & Rich',
    tagColor: 'bg-rose-50 text-rose-600 border border-rose-100',
  },
  {
    id: 'pista-filled',
    title: 'Pista Filled',
    description: 'Traditional chocolate shell filled with premium pistachio filling.',
    emoji: '🟢',
    rates: {
      6: 150,
      12: 280,
      24: 540,
    },
    tag: 'Premium Choice',
    tagColor: 'bg-gold/20 text-gold-dark border border-gold/30',
  },
  {
    id: 'assorted-box',
    title: 'Assorted Chocolate Box',
    description: 'A perfect mix of all our flavours (Normal, Ganaches, Pista).',
    emoji: '🎁',
    rates: {
      6: 140,
      12: 260,
      24: 500,
    },
    tag: 'Perfect Gift',
    tagColor: 'bg-chocolate text-cream shadow-sm',
    isFeatured: true,
  },
];

function PricingCard({ item }) {
  const [pieces, setPieces] = useState(12);

  const whatsappMsg = encodeURIComponent(
    `Hi Pooja! I'd like to order the ${pieces}-piece box of ${item.title}.`
  );

  return (
    <article
      id={`pricing-${item.id}`}
      className={`group relative bg-white rounded-3xl p-8 border transition-all duration-500 flex flex-col h-full ${
        item.isFeatured
          ? 'border-gold shadow-luxury ring-1 ring-gold/30 lg:scale-105 z-10'
          : 'border-chocolate/10 shadow-card hover:shadow-card-hover hover:-translate-y-2'
      }`}
    >
      {item.isFeatured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-chocolate-dark text-[10px] font-sans font-bold tracking-widest uppercase shadow-md">
          Best Seller
        </span>
      )}

      <div className="flex justify-between items-start mb-4">
        <span className="text-4xl">{item.emoji}</span>
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase ${item.tagColor}`}>
          {item.tag}
        </span>
      </div>

      <h3 className="font-serif text-xl font-bold text-chocolate mb-2 group-hover:text-chocolate-dark transition-colors duration-200">
        {item.title}
      </h3>
      <p className="font-sans text-xs text-chocolate/60 leading-relaxed mb-6 flex-1">
        {item.description}
      </p>

      {/* Price display */}
      <div className="bg-cream-100/50 rounded-2xl p-4 mb-6 text-center border border-chocolate/5">
        <span className="font-sans text-[10px] text-chocolate/40 uppercase tracking-widest block mb-1">
          {pieces} Pieces Price
        </span>
        <span className="font-display text-3xl font-bold text-gold-dark">
          ₹{item.rates[pieces]}
        </span>
      </div>

      {/* Select size */}
      <div className="mb-8">
        <span className="block font-sans text-[10px] text-chocolate/50 uppercase tracking-wider mb-3 font-semibold">
          Select Box Size
        </span>
        <div className="grid grid-cols-3 gap-2">
          {[6, 12, 24].map((size) => (
            <button
              key={size}
              id={`btn-${item.id}-${size}`}
              onClick={() => setPieces(size)}
              className={`py-2 px-3 rounded-xl font-sans text-xs font-semibold transition-all duration-300 ${
                pieces === size
                  ? 'bg-chocolate text-cream shadow-md'
                  : 'bg-cream-50 text-chocolate/70 hover:bg-cream-100 hover:text-chocolate border border-chocolate/10'
              }`}
            >
              {size} Pcs
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-4 border-t border-chocolate/10">
        <a
          id={`order-btn-${item.id}`}
          href={`https://wa.me/919999999999?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3.5 rounded-full font-sans text-xs font-semibold tracking-wider uppercase text-center transition-all duration-300 inline-block ${
            item.isFeatured
              ? 'bg-gold text-chocolate-dark hover:bg-gold-light hover:shadow-gold hover:-translate-y-0.5'
              : 'bg-chocolate text-cream hover:bg-chocolate-dark hover:shadow-luxury hover:-translate-y-0.5'
          }`}
        >
          Order {pieces} Pcs Box →
        </a>
      </div>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-chocolate/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="tag-badge mb-5">Indulgence Packages</div>
          <h2 className="section-title mb-4">
            Premium <span className="italic text-gradient-gold">Pricing</span>
          </h2>
          <div className="gold-divider mb-6">
            <span className="text-gold">✦</span>
          </div>
          <p className="section-subtitle max-w-xl mx-auto">
            Choose your box size and favorite filling. Handcrafted, beautifully boxed, and customized to perfection.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 justify-center max-w-6xl mx-auto">
          {pricingData.map((item, i) => (
            <div
              key={item.id}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <PricingCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
