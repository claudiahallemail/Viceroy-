const teamMembers = [
  {
    name: 'Randall Stofft',
    role: 'Architect',
    company: 'Stofft Cooney Architects',
    initials: 'RS',
    description:
      'Randall Stofft of Stofft Cooney Architects is internationally recognized for designing some of the most coveted luxury residences in the world. With a portfolio spanning ultra-high-end estates, resort communities, and branded residences across Florida, the Caribbean, and beyond, his signature style seamlessly blends coastal sensibility with timeless architectural elegance.',
    credentials: ['Stofft Cooney Architects', 'International Luxury Portfolio', 'Award-Winning Coastal Design'],
  },
  {
    name: 'Steven G.',
    role: 'Interior Designer',
    company: 'Steven G. Interiors',
    initials: 'SG',
    description:
      "Steven G. is one of America's most celebrated interior designers, renowned for a portfolio spanning premier residences, luxury hotels, yachts, and private jets. His approach to Viceroy Residences Clearwater Beach brings a bespoke vision of coastal glamour — marrying the finest materials, custom furnishings, and effortless sophistication in every home.",
    credentials: ['Steven G. Interiors', 'Featured in Architectural Digest', 'Celebrity & Luxury Portfolio'],
  },
  {
    name: 'Viceroy Hotels & Resorts',
    role: 'Brand Partner & Manager',
    company: 'Viceroy Hotels & Resorts',
    initials: 'VH',
    description:
      "Viceroy Hotels & Resorts is one of the world's most celebrated luxury hospitality brands, with iconic properties in the most sought-after destinations globally. As brand partner and manager of Viceroy Residences Clearwater Beach, Viceroy brings its acclaimed five-star service culture, world-class amenity programming, and global prestige directly to residents.",
    credentials: ['Global Luxury Hospitality Brand', 'Award-Winning Service', 'Five-Star Residential Management'],
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label">The Team</p>
          <h2 className="font-serif text-4xl md:text-6xl text-navy font-light mb-6">
            Visionaries Behind
            <br />
            <span className="italic text-gold">the Masterpiece</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-charcoal/70 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-6">
            Viceroy Residences Clearwater Beach brings together a world-class team of architects,
            designers, and hospitality professionals committed to creating an unrivaled living experience.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group border border-gold/20 hover:border-gold transition-colors duration-300">
              {/* Portrait — elegant monogram */}
              <div className="relative h-64 bg-navy flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 border border-gold/40 flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-4xl text-gold font-light">{member.initials}</span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-1">{member.role}</p>
                  <h3 className="font-serif text-2xl text-cream font-light">{member.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-charcoal/60 text-xs tracking-wide uppercase font-sans mb-4 border-b border-gold/20 pb-4">
                  {member.company}
                </p>
                <p className="text-charcoal/70 font-sans text-sm leading-relaxed mb-6">
                  {member.description}
                </p>
                <ul className="space-y-2">
                  {member.credentials.map((cred) => (
                    <li key={cred} className="flex items-center gap-2 text-xs font-sans text-charcoal/60">
                      <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-sans text-xs text-charcoal/40 mt-10">
          For full team biographies, visit the official developer site at{' '}
          <a href="https://viceroycwb.com/team/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
            viceroycwb.com/team
          </a>
        </p>
      </div>
    </section>
  )
}
