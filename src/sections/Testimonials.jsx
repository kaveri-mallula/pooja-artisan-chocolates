// Testimonials.jsx
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Bhimavaram',
    avatar: 'PS',
    avatarColor: 'from-rose-400 to-pink-500',
    rating: 5,
    review:
      'Ordered a custom gift box for my sister\'s birthday and it was absolutely stunning! The brownies were incredibly fudgy and the chocolates melted in your mouth. Pooja puts so much love into every piece. Will definitely order again! 🍫',
    occasion: 'Birthday Gift',
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    location: 'Rajahmundry',
    avatar: 'RK',
    avatarColor: 'from-amber-400 to-orange-500',
    rating: 5,
    review:
      'I was looking for unique wedding favours and found Pooja Artisan Chocolates. She created the most beautiful custom chocolates with our initials. All our guests were amazed! The packaging was so elegant and professional.',
    occasion: 'Wedding Favours',
  },
  {
    id: 3,
    name: 'Anjali Reddy',
    location: 'Vijayawada',
    avatar: 'AR',
    avatarColor: 'from-emerald-400 to-teal-500',
    rating: 5,
    review:
      'The animal-shaped chocolates are the cutest thing I\'ve ever seen! My kids absolutely loved them. Taste is premium — you can tell they use really good quality cocoa. Super quick delivery and beautifully packaged. Highly recommend!',
    occasion: 'Children\'s Party',
  },
  {
    id: 4,
    name: 'Srinivas Rao',
    location: 'Bhimavaram',
    avatar: 'SR',
    avatarColor: 'from-violet-400 to-purple-500',
    rating: 5,
    review:
      'Ordered 50 boxes of assorted chocolates for our office Diwali celebration. Pooja handled the bulk order perfectly and delivered on time. Each box was perfectly packed. Colleagues couldn\'t stop complimenting. Best artisan chocolates in town!',
    occasion: 'Corporate Gifting',
  },
  {
    id: 5,
    name: 'Meera Lakshmi',
    location: 'Eluru',
    avatar: 'ML',
    avatarColor: 'from-sky-400 to-blue-500',
    rating: 5,
    review:
      'These brownies are life-changing! I ordered a batch as a treat for myself and they arrived fresh, perfectly gooey in the centre and crispy at the edges. The ganache on top takes them to another level. Absolutely indulgent!',
    occasion: 'Self Treat',
  },
  {
    id: 6,
    name: 'Deepika Nair',
    location: 'Narsapur',
    avatar: 'DN',
    avatarColor: 'from-rose-400 to-red-500',
    rating: 5,
    review:
      'Gifted a Pooja Artisan chocolate box to my mother for her anniversary and she was overwhelmed with joy! The quality is truly boutique-level. The branding is beautiful and it looks so premium. Worth every rupee spent!',
    occasion: 'Anniversary Gift',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill={i < rating ? '#C8A96A' : 'none'}
          stroke={i < rating ? '#C8A96A' : '#C8A96A50'}
          strokeWidth="1.5"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-chocolate/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      {/* Large decorative quote */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 font-display text-[180px] text-chocolate/4 leading-none pointer-events-none select-none">"</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="tag-badge mb-5">Testimonials</div>
          <h2 className="section-title mb-4">
            What Our{' '}
            <span className="italic text-gradient-gold">Customers</span>
            {' '}Say
          </h2>
          <div className="gold-divider mb-6">
            <span className="text-gold">✦</span>
          </div>
          <p className="section-subtitle max-w-md mx-auto">
            Real stories from our happy customers who chose Pooja Artisan Chocolates for their special moments.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className="reveal card-luxury p-7 border border-chocolate/5 hover:border-gold/20 flex flex-col"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Quote icon */}
              <div className="text-gold text-3xl font-display leading-none mb-4 select-none">"</div>

              {/* Review */}
              <p className="font-sans text-sm text-chocolate/70 leading-relaxed flex-1 mb-5 italic">
                {t.review}
              </p>

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Divider */}
              <div className="h-px bg-chocolate/8 my-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold font-sans flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-chocolate">{t.name}</p>
                  <p className="font-sans text-xs text-chocolate/50">{t.location}</p>
                </div>
                <span className="ml-auto px-2.5 py-1 bg-gold/10 text-gold-dark text-[10px] font-sans font-medium tracking-wide rounded-full">
                  {t.occasion}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIdx * 100}%)` }}
            >
              {testimonials.map((t) => (
                <article
                  key={t.id}
                  className="min-w-full px-2"
                >
                  <div className="card-luxury p-7 border border-chocolate/5">
                    <div className="text-gold text-3xl font-display leading-none mb-4">"</div>
                    <p className="font-sans text-sm text-chocolate/70 leading-relaxed mb-5 italic">{t.review}</p>
                    <StarRating rating={t.rating} />
                    <div className="h-px bg-chocolate/8 my-5" />
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-serif text-sm font-semibold text-chocolate">{t.name}</p>
                        <p className="font-sans text-xs text-chocolate/50">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIdx(i); setIsAutoPlay(false); }}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIdx ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-chocolate/20'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Rating summary */}
        <div className="mt-14 reveal">
          <div className="bg-white rounded-2xl shadow-card p-8 flex flex-wrap justify-center gap-10 border border-chocolate/5">
            {[
              { value: '5.0', label: 'Average Rating', suffix: '/ 5' },
              { value: '500+', label: 'Happy Customers', suffix: '' },
              { value: '100%', label: 'Satisfaction', suffix: '' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-bold text-gradient-gold">{stat.value}<span className="text-xl text-chocolate/40 ml-1">{stat.suffix}</span></p>
                <p className="font-sans text-xs text-chocolate/50 tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
