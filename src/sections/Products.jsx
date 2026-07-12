// Products.jsx
import { useState } from 'react';
import chocolatesImg from '../assets/chocolates.jpg';
import browniesImg from '../assets/brownies.jpg';

const products = [
  // Classic Chocolates
  {
    id: 'milk-chocolate',
    category: 'Classic Chocolates',
    title: 'Milk Chocolate',
    tag: 'Classic',
    tagColor: 'bg-gold text-chocolate-dark',
    description:
      'Smooth, creamy milk chocolate made with rich cocoa butter and premium milk solids. Melt-in-your-mouth perfection.',
    image: chocolatesImg,
    price: 'Starting from ₹90',
    emoji: '🍫',
    features: ['Creamy', 'Premium Milk', 'Melt-in-mouth'],
  },
  {
    id: 'dark-chocolate',
    category: 'Classic Chocolates',
    title: 'Dark Chocolate',
    tag: 'Intense',
    tagColor: 'bg-chocolate text-cream',
    description:
      'Rich, intense dark chocolate crafted from the finest single-origin cocoa beans. Bold and sophisticated flavour profile.',
    image: chocolatesImg,
    price: 'Starting from ₹90',
    emoji: '🖤',
    features: ['Rich Cocoa', 'Single-Origin', 'Deep Flavour'],
  },
  {
    id: 'white-chocolate',
    category: 'Classic Chocolates',
    title: 'White Chocolate',
    tag: 'Sweet',
    tagColor: 'bg-cream-200 text-chocolate border border-gold/40',
    description:
      'Silky smooth white chocolate with delicate vanilla notes and a creamy, buttery finish. Pure cocoa butter indulgence.',
    image: chocolatesImg,
    price: 'Starting from ₹90',
    emoji: '🤍',
    features: ['Vanilla Notes', 'Silky Smooth', 'Cocoa Butter'],
  },
  // Filled Chocolates
  {
    id: 'chocolate-ganache',
    category: 'Filled Chocolates',
    title: 'Chocolate Ganache',
    tag: 'Velvety',
    tagColor: 'bg-chocolate text-cream',
    description:
      'Decadent, premium chocolate shell filled with a velvety, smooth chocolate ganache center that melts slowly and luxuriously.',
    image: chocolatesImg,
    price: 'Starting from ₹120',
    emoji: '🟤',
    features: ['Rich Center', 'Velvety Ganache', 'Artisan Shell'],
  },
  {
    id: 'strawberry-ganache',
    category: 'Filled Chocolates',
    title: 'Strawberry Ganache',
    tag: 'Fruity',
    tagColor: 'bg-gold text-chocolate-dark',
    description:
      'Delightful chocolate shell filled with a luscious, tangy-sweet strawberry ganache made from real fruit puree.',
    image: chocolatesImg,
    price: 'Starting from ₹130',
    emoji: '🍓',
    features: ['Real Fruit', 'Tangy-Sweet', 'Berries & Choco'],
  },
  {
    id: 'pista-filling',
    category: 'Filled Chocolates',
    title: 'Pista Filling',
    tag: 'Nutty',
    tagColor: 'bg-cream-200 text-chocolate border border-gold/40',
    description:
      'Luxurious chocolate filled with a rich, nutty pistachio paste. An exquisite, traditional blend of flavors.',
    image: chocolatesImg,
    price: 'Starting from ₹150',
    emoji: '🟢',
    features: ['Toasted Pistachio', 'Exquisite Blend', 'Premium Paste'],
  },
  // Brownies
  {
    id: 'classic-chocolate-brownie',
    category: 'Brownies',
    title: 'Classic Chocolate Brownie',
    tag: 'Fudgy',
    tagColor: 'bg-chocolate text-cream',
    description:
      'Rich, fudgy, and intensely chocolatey classic brownie baked daily to a moist, gooey perfection in the center.',
    image: browniesImg,
    price: '₹ 150 onwards',
    emoji: '🍰',
    features: ['Fudgy Texture', 'Baked Daily', 'Intense Cocoa'],
  },
  {
    id: 'fudge-brownie',
    category: 'Brownies',
    title: 'Fudge Brownie',
    tag: 'Gooey',
    tagColor: 'bg-gold text-chocolate-dark',
    description:
      'Extra-rich chocolate brownie with a dense fudge texture and a beautiful glossy, crackly top crust.',
    image: browniesImg,
    price: '₹ 150 onwards',
    emoji: '🍮',
    features: ['Dense Fudge', 'Glossy Crust', 'Super Decadent'],
  },
  {
    id: 'walnut-brownie',
    category: 'Brownies',
    title: 'Walnut Brownie',
    tag: 'Crunchy',
    tagColor: 'bg-cream-200 text-chocolate border border-gold/40',
    description:
      'Our signature fudgy brownie loaded with premium toasted walnut chunks for a satisfying, nutty crunch in every bite.',
    image: browniesImg,
    price: '₹ 150 onwards',
    emoji: '🌰',
    features: ['Toasted Walnuts', 'Crunchy Bite', 'Signature Recipe'],
  },
  {
    id: 'choco-chip-brownie',
    category: 'Brownies',
    title: 'Choco Chip Brownie',
    tag: 'Double Chocolate',
    tagColor: 'bg-chocolate/10 text-chocolate border border-chocolate/20',
    description:
      'Moist brownie packed with melting semi-sweet chocolate chips throughout for a double dose of chocolate indulgence.',
    image: browniesImg,
    price: '₹ 150 onwards',
    emoji: '🍪',
    features: ['Melting Choco Chips', 'Double Chocolaty', 'Kids Favourite'],
  },
];

function ProductCard({ product }) {
  const whatsappMsg = encodeURIComponent(
    `Hi! I'd like to order: ${product.title}`
  );

  return (
    <article
      id={`product-${product.id}`}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Image / Gradient top */}
      <div className="relative h-56 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center ${product.gradientDir === 'br'
              ? 'bg-gradient-to-br from-cream-200 via-gold/20 to-chocolate-light/30'
              : 'bg-gradient-to-b from-chocolate-dark/80 to-chocolate/50'
              }`}
          >
            <span className="text-7xl animate-float" style={{ animationDuration: '4s' }}>
              {product.emoji}
            </span>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Tag */}
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-sans font-semibold tracking-wider ${product.tagColor}`}>
          {product.tag}
        </span>

        {/* Emoji overlay on image */}
        {product.image && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-5xl drop-shadow-lg">{product.emoji}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl font-semibold text-chocolate mb-2 group-hover:text-chocolate-dark transition-colors duration-200">
          {product.title}
        </h3>
        <p className="font-sans text-sm text-chocolate/65 leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.features.map((f) => (
            <span
              key={f}
              className="px-2.5 py-1 bg-cream-100 rounded-full text-[10px] font-sans font-medium tracking-wider text-chocolate/70 border border-chocolate/10"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-chocolate/10">
          <div>
            <p className="font-sans text-[10px] text-chocolate/40 uppercase tracking-wider">Starting from</p>
            <p className="font-display text-lg font-semibold text-gold-dark">{product.price}</p>
          </div>
          <a
            href="#contact"

            className="btn-primary text-xs px-5 py-2.5 rounded-full"
          >
            Order
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <section id="products" className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-chocolate/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 reveal">
          <div className="tag-badge mb-5">Our Collection</div>
          <h2 className="section-title mb-4">
            Featured{' '}
            <span className="italic text-gradient-gold">Products</span>
          </h2>
          <div className="gold-divider mb-6">
            <span className="text-gold">✦</span>
          </div>
          <p className="section-subtitle max-w-xl mx-auto">
            Each creation is handcrafted with premium ingredients, wrapped with love, and delivered fresh to your door.
          </p>
        </div>

        {/* Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 reveal">
          {['All', 'Classic Chocolates', 'Filled Chocolates', 'Brownies'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${activeTab === tab
                ? 'bg-chocolate text-cream shadow-luxury scale-105'
                : 'bg-white text-chocolate/75 hover:bg-cream-100 hover:text-chocolate border border-chocolate/10'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7">
          {products.map((product, i) => {
            const isVisible = activeTab === 'All' || product.category === activeTab;
            return (
              <div
                key={product.id}
                className={`reveal ${isVisible ? 'block' : 'hidden'}`}
                style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 reveal">
          <p className="font-sans text-sm text-chocolate/60 mb-5">
            Looking for something special? We do custom orders!
          </p>
          <a
            id="custom-order-btn"
            href="#contact"

            className="btn-gold inline-flex"
          >
            Request Custom Order →
          </a>
        </div>
      </div>
    </section>
  );
}
