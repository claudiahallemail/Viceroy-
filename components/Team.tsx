import Image from 'next/image'

const teamMembers = [
  {
    name: 'Randall Stofft',
    role: 'Architect',
    company: 'Stofft Cooney Architects',
    description:
      'Internationally acclaimed architect Randall Stofft is known for creating some of the most coveted luxury residences in the world. His signature style blends coastal sensibility with timeless architectural principles, creating structures that are as functional as they are beautiful.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    credentials: ['40+ Years of Excellence', 'Global Luxury Portfolio', 'Award-Winning Design'],
  },
  {
    name: 'Steven G.',
    role: 'Interior Designer',
    company: 'Steven G. Interiors',
    description:
      "Steven G. is one of America's most celebrated interior designers, with a portfolio spanning premier residences, luxury hotels, and superyachts. His approach to Viceroy Residences brings a bespoke vision of coastal elegance, marrying the finest materials with effortless sophistication.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    credentials: ['Celebrity Interior Designer', 'Featured in Architectural Digest', 'Global Luxury Portfolio'],
  },
  {
    name: 'Viceroy Hotels & Resorts',
    role: 'Brand Partner & Manager',
    company: 'Viceroy Hotels & Resorts',
    description:
      "With hotels in the world's most desirable destinations, Viceroy Hotels & Resorts brings unparalleled hospitality expertise to Clearwater Beach. As brand partner and manager, Viceroy will deliver five-star services and experiences to all residents.",
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80',
    credentials: ['Global Luxury Brand', 'Award-Winning Hospitality', 'Five-Star Service Standard'],
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
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
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
      </div>
    </section>
  )
}
