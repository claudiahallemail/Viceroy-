import Image from 'next/image'

const amenities = [
  {
    icon: '🏖️',
    title: 'Private Beach Club',
    description: 'Exclusive access to 270 feet of pristine Gulf frontage with dedicated beach attendants, cabanas, and water sports.',
  },
  {
    icon: '🏊',
    title: 'Infinity Pool',
    description: 'Resort-style infinity pool and spa pool perched above the Gulf, offering seamless horizon views.',
  },
  {
    icon: '💆',
    title: 'Viceroy Spa & Wellness',
    description: 'Full-service spa offering treatments, steam rooms, saunas, and a dedicated wellness sanctuary.',
  },
  {
    icon: '🏋️',
    title: 'State-of-the-Art Fitness',
    description: 'Fully equipped fitness center with cardio, strength training, yoga studio, and personal training.',
  },
  {
    icon: '🍽️',
    title: 'Private Dining & Bar',
    description: 'Residents-only restaurant and bar with Gulf views, curated menus, and private event spaces.',
  },
  {
    icon: '🎭',
    title: 'Entertainment Lounge',
    description: 'Sophisticated social spaces including a screening room, game lounge, and grand salon.',
  },
  {
    icon: '🛎️',
    title: 'Viceroy Concierge',
    description: '24/7 hotel-style concierge services including housekeeping, room service, and bespoke experiences.',
  },
  {
    icon: '🚗',
    title: 'Valet & Parking',
    description: 'Dedicated valet service, private parking garage with EV charging stations.',
  },
]

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="section-label">World-Class Amenities</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy font-light mb-6">
              25,000 Square Feet
              <br />
              <span className="italic text-gold">of Pure Indulgence</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-charcoal/70 font-sans text-sm leading-relaxed mt-6">
              Managed by Viceroy Hotels &amp; Resorts, the amenity collection rivals the world&apos;s
              finest resort destinations. Residents enjoy a seamless blend of private residential
              living and five-star hospitality services — all steps from the Gulf of Mexico.
            </p>
          </div>
          <div className="relative h-80 md:h-96 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
              alt="Luxury Pool"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-navy/20" />
            <div className="absolute bottom-6 left-6 bg-navy/80 backdrop-blur-sm px-6 py-4">
              <p className="text-gold text-xs tracking-luxury uppercase font-sans">Managed By</p>
              <p className="text-cream font-serif text-xl font-light mt-1">Viceroy Hotels & Resorts</p>
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="bg-white p-8 hover:bg-cream transition-colors duration-300 group"
            >
              <div className="text-3xl mb-4">{amenity.icon}</div>
              <h3 className="font-serif text-xl text-navy font-medium mb-3 group-hover:text-gold transition-colors duration-300">
                {amenity.title}
              </h3>
              <p className="text-charcoal/60 text-xs font-sans leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 relative h-64 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
            alt="Luxury Resort Amenities"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-3">The Viceroy Experience</p>
              <p className="font-serif text-3xl md:text-4xl text-cream font-light">
                Resort Living. <span className="italic">Private Residences.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
