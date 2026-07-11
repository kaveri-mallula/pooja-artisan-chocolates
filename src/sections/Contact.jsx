// Contact.jsx
const contactItems = [
  {
    id: 'instagram-link',
    label: 'Instagram',
    value: '@artisanchoco.co',
    href: 'https://www.instagram.com/artisanchoco.co',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    id: 'whatsapp-link',
    label: 'WhatsApp',
    value: '+91 99999 99999',
    href: 'https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20Pooja%20Artisan%20Chocolates!',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.09.534 4.09 1.47 5.83L0 24l6.336-1.43A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.604-.476-5.127-1.312L2.5 21.757l1.08-4.264A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    color: 'from-green-500 to-emerald-500',
    bgLight: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    id: 'email-link',
    label: 'Email',
    value: 'hello@artisanchoco.co',
    href: 'mailto:hello@artisanchoco.co',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
  {
    id: 'location-link',
    label: 'Location',
    value: 'Bhimavaram, Andhra Pradesh',
    href: 'https://maps.google.com/?q=Bhimavaram,Andhra+Pradesh',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    color: 'from-red-500 to-rose-500',
    bgLight: 'bg-red-50',
    textColor: 'text-red-600',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-chocolate/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="tag-badge mb-5">Get In Touch</div>
          <h2 className="section-title mb-4">
            Let's Create Something{' '}
            <span className="italic text-gradient-gold">Sweet</span>
          </h2>
          <div className="gold-divider mb-6">
            <span className="text-gold">✦</span>
          </div>
          <p className="section-subtitle max-w-lg mx-auto">
            Ready to order or have a custom request? We'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Cards */}
          <div className="reveal-left grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactItems.map((item) => (
              <a
                key={item.id}
                id={item.id}
                href={item.href}
                target={item.id !== 'email-link' ? '_blank' : undefined}
                rel={item.id !== 'email-link' ? 'noopener noreferrer' : undefined}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-chocolate/5 hover:border-gold/20 transition-all duration-400 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex w-12 h-12 rounded-xl items-center justify-center ${item.bgLight} ${item.textColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                {/* Label */}
                <p className="font-sans text-xs font-medium tracking-widest uppercase text-chocolate/40 mb-1">{item.label}</p>
                {/* Value */}
                <p className="font-serif text-base font-semibold text-chocolate group-hover:text-chocolate-dark transition-colors duration-200">
                  {item.value}
                </p>
                {/* Arrow */}
                <div className="mt-3 flex items-center gap-1 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  <span className="font-sans text-xs font-medium">Connect</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Order Form */}
          <div className="reveal-right bg-chocolate rounded-3xl p-8 md:p-10 text-cream relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 mb-5">
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold">Quick Order</span>
              </div>
              <h3 className="font-display text-3xl font-semibold text-cream mb-2">
                Send Us a Message
              </h3>
              <p className="font-sans text-sm text-cream/60 mb-8">
                Fill this out and we'll get back to you within 2 hours!
              </p>

              <form
                id="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const message = e.target.message.value;
                  const text = encodeURIComponent(
                    `Hi Pooja! I'm ${name}.\n\n${message}`
                  );
                  window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="contact-name" className="block font-sans text-xs text-cream/60 tracking-wider uppercase mb-2">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    required
                    className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-xl font-sans text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block font-sans text-xs text-cream/60 tracking-wider uppercase mb-2">Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-xl font-sans text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block font-sans text-xs text-cream/60 tracking-wider uppercase mb-2">Your Message / Order Details</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us what you'd like to order, occasion, quantity, delivery date..."
                    required
                    className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-xl font-sans text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full btn-gold py-4 text-sm font-semibold mt-2"
                >
                  Send via WhatsApp →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
