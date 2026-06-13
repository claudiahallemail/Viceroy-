const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Residences', href: '#residences' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="mb-6">
              <p className="text-gold font-serif text-xl font-light tracking-wide">VICEROY RESIDENCES</p>
              <p className="text-cream/60 font-sans text-xs tracking-luxury uppercase mt-1">Clearwater Beach</p>
            </div>
            <div className="w-8 h-px bg-gold mb-4" />
            <p className="text-cream/50 font-sans text-xs leading-relaxed">
              An extraordinary collection of gulf-front residences designed for those who demand
              the finest in coastal luxury living.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-gold text-xs tracking-luxury uppercase font-sans mb-6">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/60 text-xs uppercase tracking-wide font-sans hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs tracking-luxury uppercase font-sans mb-6">Sales Gallery</h4>
            <div className="space-y-3">
              <p className="text-cream/80 font-sans text-sm">Claudia Hall</p>
              <p className="text-cream/50 font-sans text-xs">HomeScene Property Partners International LLC</p>
              <div className="w-8 h-px bg-gold/50 my-4" />
              <a href="tel:8134970060" className="block text-cream/60 text-xs font-sans hover:text-gold transition-colors duration-300">
                (813) 497-0060
              </a>
              <a href="mailto:claudia@luxuryfloridaresidence.com" className="block text-cream/60 text-xs font-sans hover:text-gold transition-colors duration-300">
                claudia@luxuryfloridaresidence.com
              </a>
              <p className="text-cream/50 text-xs font-sans">
                600 Cleveland St Suite 312<br />Clearwater FL 33755
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Disclaimer */}
        <div className="mb-8">
          <p className="text-cream/30 font-sans text-xs leading-relaxed">
            <strong className="text-cream/50">Broker Disclaimer:</strong> This is not an offer to sell, or solicitation of an offer to buy, condominium units in states where such offer or solicitation cannot be made. Prices, plans, and specifications are subject to change without notice. All renderings, images, and descriptions are for illustrative purposes only and should not be relied upon as representations of actual conditions. The complete offering terms are in an Offering Plan available from the Sponsor. Oral representations cannot be relied upon as correctly stating the representations of the developer. For correct representations, make reference to the documents required by the applicable state agency to be made available to you in connection with the sale.
          </p>
          <p className="text-cream/30 font-sans text-xs leading-relaxed mt-3">
            Real estate licensee: Claudia Hall, License No. CQ1060555. HomeScene Property Partners International LLC. 600 Cleveland St Suite 312, Clearwater FL 33755.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs font-sans">
            © {new Date().getFullYear()} Viceroy Residences Clearwater Beach. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/30 text-xs font-sans hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-cream/30 text-xs font-sans hover:text-gold transition-colors duration-300">Terms of Use</a>
            <a href="#" className="text-cream/30 text-xs font-sans hover:text-gold transition-colors duration-300">Fair Housing</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
