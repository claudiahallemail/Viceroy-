import Image from 'next/image'

const team = [
  {
    name: 'Randall Stofft',
    role: 'Architect',
    bio: 'Internationally acclaimed architect Randall Stofft brings over three decades of luxury residential design to Viceroy Residences. Known for seamlessly integrating coastal environments with world-class architecture, Stofft\'s portfolio spans ultra-luxury estates and landmark towers across Florida, the Caribbean, and beyond.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    alt: 'Portrait of architect Randall Stofft',
  },
  {
    name: 'Steven G.',
    role: 'Interior Design',
    bio: 'Miami-based design icon Steven G. transforms interiors into living works of art. His signature aesthetic — bold, glamorous, and timeless — has graced the homes of celebrities and discerning collectors worldwide. At Viceroy Residences, Steven G. creates spaces that are as dramatic as the Gulf horizon itself.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
    alt: 'Portrait of interior designer Steven G.',
  },
  {
    name: 'Viceroy Hotels & Resorts',
    role: 'Brand Partner',
    bio: 'Viceroy Hotels & Resorts is one of the world\'s most celebrated luxury hospitality brands, renowned for transforming destinations into unforgettable experiences. As the brand partner, Viceroy brings its acclaimed service culture, amenity programming, and global prestige directly to residents — elevating every moment of life at home.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
    alt: 'Luxury hotel resort beachfront by Viceroy Hotels and Resorts',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="section-label">The Visionaries</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
            Curated by the<br />
            <span className="italic font-light text-gold">World&apos;s Best</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((t) => (
            <div key={t.name}>
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-navy/30" />
              </div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-1">{t.role}</p>
              <h3 className="font-serif text-2xl text-white mb-3">{t.name}</h3>
              <p className="font-sans text-white/50 text-xs leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
