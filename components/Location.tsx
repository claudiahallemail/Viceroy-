import Image from 'next/image'

const highlights = [
  {
    title: 'Clearwater Beach',
    description: "Consistently ranked among America's Top 10 Beaches, Clearwater Beach offers crystal-clear waters, white sand, and a vibrant waterfront lifestyle.",
  },
  {
    title: 'Tampa Bay Area',
    description: "Just 30 minutes from Tampa International Airport, offering world-class dining, arts, sports, and entertainment in one of Florida's fastest-growing metro areas.",
  },
  {
    title: 'Year-Round Sunshine',
    description: 'With over 361 days of sunshine annually, Clearwater Beach offers a near-perfect climate for outdoor living and waterfront recreation.',
  },
  {
    title: 'Private Island Setting',
    description: "Clearwater Beach's barrier island setting provides a true sense of escape, while remaining easily connected to urban conveniences.",
  },
]

const nearbyPoints = [
  { name: 'Tampa International Airport', distance: '30 min' },
  { name: 'Downtown St. Petersburg', distance: '25 min' },
  { name: 'Downtown Tampa', distance: '35 min' },
  { name: 'Pier 60 Sunset Festival', distance: '5 min walk' },
  { name: 'Clearwater Marine Aquarium', distance: '10 min' },
  { name: 'Golf Courses', distance: '15 min' },
]

export default function Location() {
  return (
    <section id="location" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label">The Location</p>
          <h2 className="font-serif text-4xl md:text-6xl text-navy font-light mb-6">
            Clearwater Beach,
            <br />
            <span className="italic text-gold">Florida</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-charcoal/70 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-6">
            Discover why Clearwater Beach has long been celebrated as one of the Gulf Coast&apos;s
            premier destinations — where natural beauty meets sophisticated coastal living.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative h-80 md:h-[500px] mb-20 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1548612773-5a39ff8ea63a?w=1920&q=80"
            alt="Clearwater Beach Florida"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div>
              <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-3">America&apos;s Best Beach</p>
              <h3 className="font-serif text-4xl md:text-6xl text-cream font-light max-w-lg leading-tight">
                Where Florida Shines Brightest
              </h3>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="flex gap-6">
              <div className="w-px bg-gold flex-shrink-0" />
              <div>
                <h3 className="font-serif text-2xl text-navy font-medium mb-3">{highlight.title}</h3>
                <p className="text-charcoal/70 font-sans text-sm leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nearby Points */}
        <div className="bg-navy p-8 md:p-12">
          <h3 className="font-serif text-2xl md:text-3xl text-cream font-light mb-8 text-center">
            What&apos;s <span className="italic text-gold">Nearby</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyPoints.map((point) => (
              <div key={point.name} className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-cream/80 font-sans text-xs">{point.name}</span>
                <span className="text-gold font-sans text-xs font-medium tracking-wide">{point.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
