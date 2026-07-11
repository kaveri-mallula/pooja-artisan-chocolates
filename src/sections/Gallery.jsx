// Gallery.jsx
import { useState, useEffect, useCallback } from 'react';
import chocolatesImg from '../assets/chocolates.jpg';
import browniesImg from '../assets/brownies.jpg';
import logo from '../assets/logo.jpg';

const galleryItems = [
  {
    id: 1,
    src: chocolatesImg,
    alt: 'Pooja Artisan Chocolates — Colourful handmade chocolate collection with bear, pig, and dog shapes in silver bowl',
    caption: 'Handmade Animal Chocolates',
    span: 'col-span-2 row-span-2',
    smallSpan: 'col-span-2',
  },
  {
    id: 2,
    src: browniesImg,
    alt: 'Freshly baked artisan brownies with ganache glaze, cut into squares',
    caption: 'Artisan Ganache Brownies',
    span: 'col-span-1 row-span-1',
    smallSpan: 'col-span-1',
  },
  {
    id: 3,
    src: logo,
    alt: 'Pooja Artisan Chocolates brand logo',
    caption: 'Crafted with Love',
    span: 'col-span-1 row-span-1',
    smallSpan: 'col-span-1',
    isLogo: true,
  },
  {
    id: 4,
    src: browniesImg,
    alt: 'Rich chocolate brownies — close up texture',
    caption: 'Rich Dark Chocolate',
    span: 'col-span-1 row-span-1',
    smallSpan: 'col-span-1',
  },
  {
    id: 5,
    src: chocolatesImg,
    alt: 'Colourful chocolate assortment with branded Pooja labels',
    caption: 'Branded Chocolate Assortment',
    span: 'col-span-1 row-span-1',
    smallSpan: 'col-span-1',
  },
];

function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="lightbox-overlay animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/20 z-10"
        aria-label="Close lightbox"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/20 z-10"
        aria-label="Previous image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/20 z-10"
        aria-label="Next image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-luxury-lg"
        />
        <div className="mt-4 text-center">
          <p className="font-display text-xl text-white/90 italic">{item.caption}</p>
          <p className="font-sans text-xs text-white/50 tracking-widest uppercase mt-1">Pooja Artisan Chocolates</p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevItem = useCallback(() =>
    setLightboxIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length), []);
  const nextItem = useCallback(() =>
    setLightboxIdx((prev) => (prev + 1) % galleryItems.length), []);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-chocolate/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="tag-badge mb-5">Our Gallery</div>
          <h2 className="section-title mb-4">
            Sweet{' '}
            <span className="italic text-gradient-gold">Moments</span>
          </h2>
          <div className="gold-divider mb-6">
            <span className="text-gold">✦</span>
          </div>
          <p className="section-subtitle max-w-md mx-auto">
            A glimpse into our handcrafted world of chocolates, brownies, and sweet creations.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
          {galleryItems.map((item, idx) => (
            <button
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(idx)}
              className={`reveal group relative overflow-hidden rounded-2xl cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
                idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ transitionDelay: `${idx * 0.08}s` }}
              aria-label={`View ${item.caption}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                  item.isLogo ? 'object-contain bg-cream-200 p-6' : 'object-cover'
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-chocolate-900/0 group-hover:bg-chocolate-900/55 transition-all duration-500" />
              {/* Caption */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="font-display text-base md:text-lg text-cream italic text-center leading-tight">
                  {item.caption}
                </p>
                <div className="mt-2 w-6 h-0.5 bg-gold mx-auto" />
                <p className="font-sans text-[10px] text-cream/70 tracking-widest uppercase mt-1">Click to view</p>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://www.instagram.com/artisanchoco.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-primary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow us on Instagram @artisanchoco.co
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          item={galleryItems[lightboxIdx]}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </section>
  );
}
