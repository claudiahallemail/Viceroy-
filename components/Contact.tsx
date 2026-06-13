'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: broker info */}
          <div>
            <p className="section-label">Exclusive Sales</p>
            <h2 className="section-heading">
              Begin Your<br />
              <span className="italic font-light">Journey</span>
            </h2>
            <div className="gold-divider" />
            <p className="font-sans text-charcoal/60 text-sm leading-relaxed mt-4 mb-10">
              Our sales team is ready to guide you through the collection. Register your interest
              to receive priority access to floor plans, pricing, and exclusive preview opportunities.
            </p>

            <div className="border-t border-charcoal/10 pt-8">
              <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-4">Exclusive Listing Broker</p>
              <p className="font-serif text-2xl text-navy mb-1">Claudia Hall</p>
              <p className="font-sans text-xs text-charcoal/60 mb-6">HomeScene Property Partners International LLC</p>

              <div className="space-y-3">
                <a
                  href="tel:8134970060"
                  className="flex items-center gap-3 font-sans text-sm text-charcoal hover:text-gold transition-colors"
                >
                  <span className="w-8 h-8 bg-gold/10 flex items-center justify-center text-gold text-xs">☎</span>
                  (813) 497-0060
                </a>
                <a
                  href="mailto:claudia@luxuryfloridaresidence.com"
                  className="flex items-center gap-3 font-sans text-sm text-charcoal hover:text-gold transition-colors"
                >
                  <span className="w-8 h-8 bg-gold/10 flex items-center justify-center text-gold text-xs">✉</span>
                  claudia@luxuryfloridaresidence.com
                </a>
                <div className="flex items-start gap-3 font-sans text-sm text-charcoal">
                  <span className="w-8 h-8 bg-gold/10 flex items-center justify-center text-gold text-xs flex-shrink-0">⊙</span>
                  <span>600 Cleveland St, Suite 312<br />Clearwater, FL 33755</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-16">
                <div className="gold-divider mx-auto mb-6" />
                <h3 className="font-serif text-3xl text-navy mb-3">Thank You</h3>
                <p className="font-sans text-charcoal/60 text-sm">
                  Your inquiry has been received. A member of our sales team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest uppercase text-charcoal/50 mb-2">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full border border-charcoal/20 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest uppercase text-charcoal/50 mb-2">
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full border border-charcoal/20 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-widest uppercase text-charcoal/50 mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-charcoal/20 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-widest uppercase text-charcoal/50 mb-2">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-charcoal/20 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-widest uppercase text-charcoal/50 mb-2">
                    Residence Interest
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full border border-charcoal/20 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold bg-white"
                  >
                    <option value="">Select a residence type</option>
                    <option>Two Bedroom — From $1,995,000</option>
                    <option>Three Bedroom — From $2,850,000</option>
                    <option>Four Bedroom — From $4,200,000</option>
                    <option>Five Bedroom — From $5,800,000</option>
                    <option>Penthouse — From $9,500,000</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-widest uppercase text-charcoal/50 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-charcoal/20 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-center">
                  Register Interest
                </button>
                <p className="font-sans text-[10px] text-charcoal/40 leading-relaxed">
                  By submitting this form you agree to be contacted by HomeScene Property Partners
                  International LLC regarding Viceroy Residences Clearwater Beach.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
