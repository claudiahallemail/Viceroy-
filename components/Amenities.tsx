import Image from 'next/image'

const amenities = [
  { name: 'Beach Club & Cabanas', desc: 'Private beachfront access with curated cabana service along 270 feet of Gulf shoreline.' },
  { name: 'Infinity Edge Pool', desc: 'Resort-style infinity pool overlooking the Gulf, with a dedicated lap lane and sun shelf.' },
  { name: 'Viceroy Spa & Wellness', desc: 'Full-service spa featuring treatment rooms, steam, sauna, and a dedicated meditation lounge.' },
  { name: 'Performance Fitness Center', desc: 'State-of-the-art fitness facility with ocean views, Peloton studios, and private training rooms.' },
  { name: 'Private Dining & Social Club', desc: "Residents-only dining room, chef's kitchen for private events, and a curated wine cellar." },
  { name: 'Concierge & Hotel Services', desc: 'Full Viceroy hotel amenities including 24/7 concierge, valet, housekeeping, and in-residence dining.' },
  { name: 'Sunset Lounge & Bar', desc: 'Rooftop sunset lounge offering panoramic Gulf views, craft cocktails, and live music evenings.' },
  { name: 'Marina & Water Sports', desc: 'Boat slip access and curated water sports including paddleboard, kayak, and sunset sailing.' },
]

export default function Amenities() {
  return (
    <section id="amenities" className="bg-navy-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">The Lifestyle</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              25,000 Square Feet<br />
              <span className="italic font-light text-gold">of Amenity</span>
            </h2>
            <div className="gold-divider mt-6" />
            <p className="font-sans text-white/60 text-sm leading-relaxed mt-4 mb-10">
              Viceroy Residences delivers an amenity program without equal on Florida&apos;s Gulf Coast —
              an entire floor dedicated to resort living, curated by the world-renowned Viceroy Hotels &amp; Resorts.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {amenities.map((a) => (
                <div key={a.name} className="border-t border-white/10 pt-5">
                  <h3 className="font-serif text-lg text-gold mb-2">{a.name}</h3>
                  <p className="font-sans text-white/50 text-xs leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85"
                alt="Luxury resort pool overlooking the Gulf of Mexico"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold p-8 max-w-xs hidden lg:block">
              <p className="font-serif text-white text-3xl mb-1">25,000</p>
              <p className="font-sans text-white/80 text-xs tracking-widest uppercase">Square Feet of Amenity Space</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
