const footerLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Residences', href: '#residences' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-serif text-white text-lg tracking-widest mb-1">VICEROY RESIDENCES</p>
            <p className="font-sans text-xs tracking-widest uppercase text-gold">Clearwater Beach, Florida</p>
            <div className="gold-divider mt-4" />
            <p className="font-sans text-white/40 text-xs leading-relaxed mt-4">
              Two 9-story towers. 86 residences and 8 penthouses. 270 feet of Gulf beach frontage.
              From $1,995,000.
            </p>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-5">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-sans text-xs text-white/50 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-5">Exclusive Sales</p>
            <p className="font-sans text-white/80 text-sm mb-1">Claudia Hall</p>
            <p className="font-sans text-white/40 text-xs mb-4">HomeScene Property Partners International LLC</p>
            <a href="tel:8134970060" className="block font-sans text-white/60 text-xs hover:text-gold transition-colors mb-1">
              (813) 497-0060
            </a>
            <a href="mailto:claudia@luxuryfloridaresidence.com" className="block font-sans text-white/60 text-xs hover:text-gold transition-colors mb-1">
              claudia@luxuryfloridaresidence.com
            </a>
            <p className="font-sans text-white/40 text-xs">
              600 Cleveland St, Suite 312<br />Clearwater, FL 33755
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="font-sans text-[10px] text-white/30 leading-relaxed">
            © {new Date().getFullYear()} Viceroy Residences Clearwater Beach. All rights reserved.
            Marketed exclusively by HomeScene Property Partners International LLC. Florida Real Estate
            License CQ1060555. Claudia Hall, Licensed Real Estate Broker. The information contained
            herein is deemed reliable but is subject to change without notice. All renderings are
            artist's concepts. Dimensions, specifications, prices, and availability are subject to
            change without notice. Oral representations cannot be relied upon. This is not an offer
            to sell, or solicitation of offers to buy, the condominium units in states where such
            offer or solicitation cannot be made. Viceroy Hotels &amp; Resorts is a registered trademark.
            Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </footer>
  )
}
