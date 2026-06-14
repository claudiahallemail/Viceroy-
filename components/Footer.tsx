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
            <strong className="text-cream/50">Disclaimer –</strong> Homescene Property Partners International LLC (dba HomeScene). Homescene Property Partners International LLC (&ldquo;HomeScene&rdquo;) is a licensed real-estate brokerage and proudly adheres to all federal, state, and local Fair Housing and Equal Opportunity regulations. HomeScene is not—and does not represent itself to be—the developer, owner, or affiliate of Viceroy Residences Clearwater Beach or any other project shown on this website, its related landing pages, social-media channels or other marketing collateral. All content relating to Viceroy Residences Clearwater Beach is provided for informational purposes only. While the data has been gathered from sources believed to be reliable, it is subject to errors, omissions, and may change in price, availability, condition, or withdrawal without prior notice. Renderings, floor plans, square footages, interior finishes, furnishings, amenities and any other descriptions are approximate and should not be relied upon as exact representations. HomeScene acts as a buyer- or tenant-representative and may present a variety of properties or developments beyond the one featured here. All marketing materials displayed in connection with Viceroy Residences Clearwater Beach have been supplied by the respective developer; HomeScene assumes no responsibility for any inaccuracies or misstatements therein. Pricing, incentives, inventory and other details may be updated or discontinued at any time. This information is not intended to solicit listings already under signed brokerage agreements, nor should anything herein be construed as legal, tax, accounting or other professional advice outside the scope of real-estate brokerage services. Prospective purchasers should consult their own advisors for such guidance.
          </p>
          <p className="text-cream/30 font-sans text-xs leading-relaxed mt-3">
            This website is not the official site of the developer of Viceroy Residences Clearwater Beach. &copy; Homescene Property Partners International LLC. All rights reserved.
          </p>
          <p className="text-cream/30 font-sans text-xs leading-relaxed mt-3 uppercase">
            ORAL REPRESENTATIONS CANNOT BE RELIED UPON AS CORRECTLY STATING REPRESENTATIONS OF THE DEVELOPER. FOR CORRECT REPRESENTATIONS, MAKE REFERENCE TO THE DOCUMENTS REQUIRED BY SECTION 718.503, FLORIDA STATUTES, TO BE FURNISHED BY A DEVELOPER TO A BUYER OR LESSEE. All dimensions, layouts, artist renderings, specifications, prices and features are approximations and subject to availability and to change without notice, as recommended by the architect, contractor and/or developer, and/or as required by law. Stated dimensions are measured to the exterior boundaries of the exterior walls and corridor walls and to the centerline of interior demising and common walls, and in fact may vary from the dimensions of the actual living space. All offers are subject to the terms and conditions of any sales or reservation agreement with the developer. Not an offer for or solicitation where prior registration is required or otherwise prohibited by these statutes.
          </p>
          <p className="text-cream/30 font-sans text-xs leading-relaxed mt-3">
            Sales Associate: Claudia Hall, License No. SL3600500. Brokerage: HomeScene Property Partners International LLC, License No. CQ1060555. 600 Cleveland St Suite 312, Clearwater FL 33755.
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
