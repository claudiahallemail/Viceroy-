export default function Overview() {
  const stats = [
    { value: '2', label: 'Iconic Towers' },
    { value: '9', label: 'Stories Each' },
    { value: '86', label: 'Private Residences' },
    { value: '8', label: 'Exclusive Penthouses' },
    { value: '2–5', label: 'Bedrooms' },
    { value: '$1.995M', label: 'Starting Price' },
    { value: '270\'', label: 'Gulf Frontage' },
    { value: '25,000', label: 'Sq Ft Amenities' },
  ]

  return (
    <section id="overview" className="bg-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label text-gold">The Development</p>
          <h2 className="font-serif text-4xl md:text-6xl text-cream font-light mb-6">
            An Unprecedented Vision
            <br />
            <span className="italic">for Gulf Living</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-cream/70 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-6">
            Viceroy Residences Clearwater Beach represents a rare convergence of architectural excellence,
            curated luxury, and Florida&apos;s most beloved coastal setting. Two towers rise gracefully above
            270 feet of pristine gulf beach frontage, offering an unparalleled residential experience
            managed by the world-renowned Viceroy Hotels &amp; Resorts.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy text-center py-10 px-6 hover:bg-navy-light transition-colors duration-300 group"
            >
              <div className="font-serif text-4xl md:text-5xl text-gold font-light mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-cream/60 text-xs tracking-luxury uppercase font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">A New Standard</p>
            <h3 className="font-serif text-3xl md:text-4xl text-cream font-light mb-4">
              Clearwater Beach&apos;s
              <br />
              <span className="italic text-gold">Most Coveted Address</span>
            </h3>
            <div className="gold-divider" />
            <p className="text-cream/70 font-sans text-sm leading-relaxed">
              Every residence commands sweeping views of the Gulf of Mexico, offering direct beach access
              through a private beach club. With floorplans ranging from two to five bedrooms and expansive
              penthouse collections, Viceroy Residences caters to those who demand nothing less than the
              extraordinary.
            </p>
          </div>
          <div className="border border-gold/20 p-8 md:p-12">
            <p className="text-gold font-serif text-xl italic mb-6">
              &ldquo;A defining chapter for Clearwater Beach — where hospitality, architecture,
              and coastal beauty unite to create something truly remarkable.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gold" />
              <p className="text-cream/60 text-xs tracking-luxury uppercase font-sans">
                Viceroy Residences Clearwater Beach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
