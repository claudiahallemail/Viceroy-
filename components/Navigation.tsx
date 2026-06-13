'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Residences', href: '#residences' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy shadow-xl py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start">
          <span className="text-gold font-serif text-lg md:text-xl font-light tracking-wide leading-none">
            VICEROY RESIDENCES
          </span>
          <span className="text-cream font-sans text-xs tracking-luxury uppercase mt-0.5">
            Clearwater Beach
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream text-xs tracking-wide uppercase font-sans font-medium hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold ml-4">
            Register Interest
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-gold/20 mt-3">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-cream text-sm tracking-wide uppercase font-sans font-medium hover:text-gold transition-colors duration-300 py-2 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold text-center mt-2" onClick={() => setMenuOpen(false)}>
              Register Interest
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
