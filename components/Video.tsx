export default function Video() {
  return (
    <section id="video" className="bg-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">The Vision</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Experience
            <br />
            <span className="italic font-light text-gold">Viceroy Residences</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="relative w-full max-w-5xl mx-auto" style={{ aspectRatio: '16/9' }}>
          <iframe
            src="https://www.youtube.com/embed/W1sQqSMWUnM?rel=0&modestbranding=1"
            title="Viceroy Residences Clearwater Beach"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
