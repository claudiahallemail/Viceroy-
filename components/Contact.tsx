'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    residence: '',
    message: '',
    agreeToContact: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section id="contact" className="bg-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <p className="section-label">Connect With Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream font-light mb-6">
              Begin Your
              <br />
              <span className="italic text-gold">Journey Home</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-cream/70 font-sans text-sm leading-relaxed mt-6 mb-10">
              Register your interest today to receive exclusive pre-launch pricing, floor plans,
              and private previews of Viceroy Residences Clearwater Beach.
            </p>

            {/* Broker Info */}
            <div className="border border-gold/20 p-8 mb-8">
              <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-4">Exclusive Sales Representation</p>
              <h3 className="font-serif text-2xl text-cream font-light mb-1">Claudia Hall</h3>
              <p className="text-cream/60 text-xs font-sans tracking-wide mb-6">
                HomeScene Property Partners International LLC
              </p>
              <div className="space-y-3">
                <a
                  href="tel:8134970060"
                  className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors duration-300 text-sm font-sans"
                >
                  <span className="text-gold">📞</span>
                  (813) 497-0060
                </a>
                <a
                  href="mailto:claudia@luxuryfloridaresidence.com"
                  className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors duration-300 text-sm font-sans"
                >
                  <span className="text-gold">✉️</span>
                  claudia@luxuryfloridaresidence.com
                </a>
                <div className="flex items-start gap-3 text-cream/80 text-sm font-sans">
                  <span className="text-gold mt-0.5">📍</span>
                  <span>600 Cleveland St Suite 312<br />Clearwater FL 33755</span>
                </div>
              </div>
            </div>

            {/* License */}
            <p className="text-cream/40 text-xs font-sans">
              License: CQ1060555 | HomeScene Property Partners International LLC
            </p>
          </div>

          {/* Right: Form */}
          <div className="bg-cream p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-2xl">✓</span>
                </div>
                <h3 className="font-serif text-3xl text-navy mb-4">Thank You</h3>
                <p className="text-charcoal/70 font-sans text-sm leading-relaxed">
                  Your inquiry has been received. Claudia Hall will be in touch within 24 hours
                  with exclusive information about Viceroy Residences Clearwater Beach.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="section-label text-navy">Register Your Interest</p>
                  <h3 className="font-serif text-2xl text-navy font-light">Request Information</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-charcoal/60 text-xs uppercase tracking-wide font-sans mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border border-gold/30 bg-white px-4 py-3 text-charcoal font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal/60 text-xs uppercase tracking-wide font-sans mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-gold/30 bg-white px-4 py-3 text-charcoal font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal/60 text-xs uppercase tracking-wide font-sans mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gold/30 bg-white px-4 py-3 text-charcoal font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-charcoal/60 text-xs uppercase tracking-wide font-sans mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gold/30 bg-white px-4 py-3 text-charcoal font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-charcoal/60 text-xs uppercase tracking-wide font-sans mb-2">
                    Residence of Interest
                  </label>
                  <select
                    name="residence"
                    value={formData.residence}
                    onChange={handleChange}
                    className="w-full border border-gold/30 bg-white px-4 py-3 text-charcoal font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select a Residence Type</option>
                    <option value="2br">2 Bedroom – From $1.995M</option>
                    <option value="3br">3 Bedroom – From $2.995M</option>
                    <option value="4br">4 Bedroom – From $4.5M</option>
                    <option value="5br">5 Bedroom – From $7.5M</option>
                    <option value="penthouse">Penthouse – From $12M</option>
                  </select>
                </div>

                <div>
                  <label className="block text-charcoal/60 text-xs uppercase tracking-wide font-sans mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vision for coastal luxury living..."
                    className="w-full border border-gold/30 bg-white px-4 py-3 text-charcoal font-sans text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToContact"
                    id="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleChange}
                    className="mt-1 accent-gold"
                    required
                  />
                  <label htmlFor="agreeToContact" className="text-charcoal/60 text-xs font-sans leading-relaxed">
                    I consent to being contacted by Claudia Hall / HomeScene Property Partners International LLC
                    regarding Viceroy Residences Clearwater Beach. *
                  </label>
                </div>

                <button type="submit" className="w-full btn-gold text-center">
                  Submit Inquiry
                </button>

                <p className="text-charcoal/40 text-xs font-sans text-center leading-relaxed">
                  By submitting, you agree to receive communications from our sales team.
                  This does not constitute an offer to sell. Prices subject to change.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
