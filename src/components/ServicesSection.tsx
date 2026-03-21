const services = [
  { href: '#', emoji: '🗑️', label: 'Bins, waste & recycling' },
  { href: '#', emoji: '🏡', label: 'Council tax' },
  { href: '#', emoji: '🚗', label: 'Parking, roads & travel' },
  { href: '#', emoji: '🎓', label: 'Schools & education' },
  { href: '#', emoji: '🏠', label: 'Housing' },
  { href: '#', emoji: '💷', label: 'Benefits & support' },
  { href: '#', emoji: '📋', label: 'Births, deaths & marriages' },
  { href: '#', emoji: '💼', label: 'Jobs & careers' },
  { href: '#', emoji: '🏗️', label: 'Planning & building' },
  { href: '#', emoji: '🌿', label: 'Environmental health' },
  { href: '#', emoji: '🎭', label: 'Leisure & culture' },
  { href: '#', emoji: '🏢', label: 'Business & licensing' },
]

export default function ServicesSection() {
  return (
    <section
      className="services-section py-16 lg:py-20"
      aria-labelledby="services-heading"
      id="services"
      style={{ backgroundColor: 'var(--section-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl lg:text-4xl font-bold mb-3"
          >
            Council Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Quick access to the most-used council services in Demo
          </p>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          role="list"
        >
          {services.map(service => (
            <a
              key={service.label}
              href={service.href}
              className="service-card"
              role="listitem"
              aria-label={service.label}
            >
              <div className="service-icon-wrap" aria-hidden="true">
                {service.emoji}
              </div>
              <span className="text-sm font-medium text-gray-800 leading-tight">
                {service.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
