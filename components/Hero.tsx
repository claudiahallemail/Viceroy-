'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Clearwater Beach Gulf Front"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-gold text-xs tracking-luxury uppercase font-sans font-medium mb-6 text-shadow">
          Clearwater Beach, Florida
        </p>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-light leading-none mb-6 text-shadow">
          Where the Gulf
          <br />
          <span className="italic text-gold">Meets Luxury</span>
        </h1>

        {/* Divider */}
        <div className="w-16 h-px bg-gold mx-auto my-8" />

        {/* Subheading */}
        <p className="text-cream/90 font-sans text-sm md:text-base tracking-wide uppercase mb-2 text-shadow">
          270 Feet of Gulf Beach Frontage
        </p>
        <p className="text-gold font-serif text-2xl md:text-3xl font-light mb-10 text-shadow">
          From $1.995M
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { value: '2', label: 'Towers' },
            { value: '9', label: 'Stories' },
            { value: '86', label: 'Residences' },
            { value: '8', label: 'Penthouses' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-gold font-serif text-3xl md:text-4xl font-light">{stat.value}</div>
              <div className="text-cream/70 text-xs tracking-luxury uppercase font-sans mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-gold">
            Register Interest
          </a>
          <a href="#overview" className="btn-outline-gold">
            Explore Residences
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gold/50" />
        <span className="text-cream/50 text-xs tracking-luxury uppercase font-sans">Scroll</span>
      </div>
    </section>
  )
}
