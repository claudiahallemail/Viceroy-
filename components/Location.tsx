import Image from 'next/image'

const highlights = [
  { label: 'Clearwater Beach', detail: 'Consistently rated America\'s #1 beach' },
  { label: 'Tampa International', detail: '30 minutes to Tampa International Airport' },
  { label: 'St. Pete/Clearwater', detail: '10 minutes to St. Pete/Clearwater Airport' },
  { label: 'Downtown Tampa', detail: '35 minutes to vibrant downtown Tampa' },
  { label: 'Fine Dining & Culture', detail: 'World-class restaurants, Dali Museum, Mahaffey Theater' },
  { label: 'Golf & Marinas', detail: 'Championship golf, deep-sea fishing, and private marina access' },
]

export default function Location() {
  return (
    <section id="location" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85"
                alt="Aerial view of Clearwater Beach, Florida"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-navy p-8 max-w-xs hidden lg:block">
              <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-2">Location</p>
              <p className="font-serif text-white text-xl">Clearwater Beach</p>
              <p className="font-sans text-white/60 text-xs mt-1">Pinellas County, Florida</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="section-label">The Destination</p>
            <h2 className="section-heading">
              America&apos;s<br />
              <span className="italic font-light">Premier Beach</span>
            </h2>
            <div className="gold-divider" />
            <p className="font-sans text-charcoal/60 text-sm leading-relaxed mt-4 mb-10">
              Clearwater Beach has earned its reputation as Florida&apos;s crown jewel — a destination
              celebrated for its powdery white sand, warm Gulf waters, and the golden sunsets that have
              made Pier 60 world-famous. Viceroy Residences places you at the very heart of it all.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((h) => (
                <div key={h.label} className="flex gap-3">
                  <div className="w-1 bg-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans text-xs tracking-wider uppercase text-navy font-medium">{h.label}</p>
                    <p className="font-sans text-xs text-charcoal/60 mt-0.5">{h.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
