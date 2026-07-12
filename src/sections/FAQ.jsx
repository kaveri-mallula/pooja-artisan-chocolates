// FAQ.jsx
import { useState } from 'react';

const faqs = [
  {
    q: 'Do you take custom orders?',
    a: 'Absolutely! Custom orders are our specialty. We create personalised chocolates for weddings, birthdays, corporate events, baby showers, and any occasion you can think of. Just reach out via WhatsApp or Instagram with your requirements.',
  },
  {
    q: 'How fresh are your chocolates and brownies?',
    a: 'All our products are made fresh to order. We never pre-stock or mass-produce. Your order will be prepared on the day of delivery or pick-up to ensure maximum freshness and flavour.',
  },
  {
    q: 'Do you deliver outside Bhimavaram?',
    a: 'Yes! We currently deliver within Bhimavaram and nearby areas in West Godavari district. For deliveries to other cities, we can arrange courier delivery for certain products. Please contact us to check availability.',
  },
  {
    q: 'What are your payment options?',
    a: 'We accept all major UPI apps (PhonePe, Google Pay, Paytm), bank transfers, and cash on pick-up. Payment is required in advance for all orders.',
  },
  {
    q: 'How far in advance should I place my order?',
    a: 'We recommend placing orders at least 2-3 days in advance for regular orders. For large or custom orders (50+ pieces), please order at least 5-7 days ahead to ensure we can create something truly special for you.',
  },
  {
    q: 'Are your chocolates suitable for people with dietary restrictions?',
    a: 'Our chocolates contain dairy and may contain traces of nuts. We can accommodate certain requests — please let us know your dietary requirements when ordering and we\'ll do our best to help.',
  },
  {
    q: 'What is the shelf life of your products?',
    a: 'Our chocolates stay fresh for 7-10 days when stored in a cool, dry place (below 25°C). Brownies are best consumed within 3-4 days for optimal texture. Refrigeration is recommended in warmer weather.',
  },
  {
    q: 'Do you do bulk or corporate orders?',
    a: 'Yes! We love working with businesses and corporate clients for gifting needs, event favours, and employee appreciation. Bulk orders of 25+ pieces receive special pricing. Contact us for a quote!',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-gold/40 shadow-gold/10 shadow-md' : 'border-chocolate/10 hover:border-gold/20'}`}>
      <button
        id={`faq-item-${index + 1}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-cream-50 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-serif text-base font-semibold text-chocolate group-hover:text-chocolate-dark">
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-gold/40 flex items-center justify-center transition-all duration-300 ${open ? 'bg-gold border-gold rotate-180' : 'bg-transparent'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke={open ? 'white' : '#C8A96A'} strokeWidth="2.5" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-5 pt-1">
          <div className="w-8 h-0.5 bg-gold/50 mb-3" />
          <p className="font-sans text-sm text-chocolate/65 leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="tag-badge mb-5">FAQ</div>
          <h2 className="section-title mb-4">
            Frequently Asked{' '}
            <span className="italic text-gradient-gold">Questions</span>
          </h2>
          <div className="gold-divider mb-6">
            <span className="text-gold">✦</span>
          </div>
          <p className="section-subtitle max-w-lg mx-auto">
            Have questions? We've got answers. If you don't find what you're looking for, drop us a message!
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3 reveal">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center reveal">
          <div className="bg-chocolate rounded-2xl p-8 text-cream">
            <p className="font-display text-xl italic mb-2">Still have questions?</p>
            <p className="font-sans text-sm text-cream/70 mb-6">We're just a message away. Reach out on WhatsApp and we'll be happy to help!</p>
            <a
              href="#contact"

              className="btn-gold inline-flex"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
