import Image from 'next/image'

const residenceTypes = [
  {
    type: '2 Bedroom',
    label: 'Coastal Residence',
    beds: 2,
    baths: 2.5,
    sqft: '1,850 – 2,200',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    features: ['Gulf Views', 'Private Terrace', 'Open Kitchen', 'Floor-to-Ceiling Glass'],
  },
  {
    type: '3 Bedroom',
    label: 'Gulf Residence',
    beds: 3,
    baths: 3.5,
    sqft: '2,400 – 3,100',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    features: ['Panoramic Gulf Views', "Chef's Kitchen", 'Master Suite', 'Wraparound Terrace'],
  },
  {
    type: '4 Bedroom',
    label: 'Grand Residence',
    beds: 4,
    baths: 4.5,
    sqft: '3,200 – 4,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    features: ['Corner Gulf Views', 'Private Foyer', 'Media Room', 'Dual Terraces'],
  },
  {
    type: '5 Bedroom',
    label: 'Estate Residence',
    beds: 5,
    baths: 5.5,
    sqft: '4,200 – 5,500',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    features: ['360° Views', 'Private Elevator', 'Staff Quarters', 'Multiple Terraces'],
  },
  {
    type: 'Penthouse',
    label: 'Sky Penthouse',
    beds: 4,
    baths: 5,
    sqft: '5,500 – 8,000+',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    features: ['Full Floor Living', 'Private Rooftop', 'Plunge Pool', 'Bespoke Finishes'],
  },
]

export default function Residences() {
  return (
    <section id="residences" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label">Residences & Penthouses</p>
          <h2 className="font-serif text-4xl md:text-6xl text-navy font-light mb-6">
            Thoughtfully Designed
            <br />
            <span className="italic text-gold">for Elevated Living</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-charcoal/70 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-6">
            Each residence is a masterwork of interior design by Steven G., featuring premium finishes,
            expansive terraces, and floor-to-ceiling glass framing the endless Gulf horizon.
          </p>
          <p className="font-serif italic text-gold text-lg mt-4">
            Floor plans and pricing available upon request — contact Claudia Hall for exclusive access.
          </p>
        </div>

        {/* Residence Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residenceTypes.map((residence, index) => (
            <div
              key={residence.type}
              className={`group bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={residence.image}
                  alt={residence.type}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-navy text-xs tracking-luxury uppercase px-3 py-1 font-sans font-semibold">
                    {residence.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 border-b border-gold/20">
                <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-2">
                  {residence.label}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-navy font-light mb-4">
                  {residence.type}
                </h3>

                {/* Specs */}
                <div className="flex gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-navy font-serif text-xl">{residence.beds}</div>
                    <div className="text-charcoal/60 text-xs uppercase tracking-wide font-sans">Beds</div>
                  </div>
                  <div className="w-px bg-gold/30" />
                  <div className="text-center">
                    <div className="text-navy font-serif text-xl">{residence.baths}</div>
                    <div className="text-charcoal/60 text-xs uppercase tracking-wide font-sans">Baths</div>
                  </div>
                  <div className="w-px bg-gold/30" />
                  <div className="text-center">
                    <div className="text-navy font-serif text-lg">{residence.sqft}</div>
                    <div className="text-charcoal/60 text-xs uppercase tracking-wide font-sans">Sq Ft</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1">
                  {residence.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-charcoal/70 text-xs font-sans">
                      <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6">
                <a
                  href="#contact"
                  className="block text-center text-navy border border-navy text-xs tracking-luxury uppercase font-sans font-medium py-3 hover:bg-navy hover:text-cream transition-all duration-300"
                >
                  Request Floor Plans & Pricing
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interior Design Note */}
        <div className="mt-16 bg-navy p-8 md:p-12 text-center">
          <p className="section-label text-gold">Interior Design</p>
          <h3 className="font-serif text-3xl md:text-4xl text-cream font-light mb-4">
            Curated by <span className="italic">Steven G.</span>
          </h3>
          <p className="text-cream/70 font-sans text-sm max-w-2xl mx-auto leading-relaxed">
            World-renowned interior designer Steven G. brings his signature blend of timeless elegance
            and coastal sophistication to every residence, creating spaces that are both breathtakingly
            beautiful and supremely livable.
          </p>
        </div>
      </div>
    </section>
  )
}
