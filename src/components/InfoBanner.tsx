export default function InfoBanner() {
  return (
    <aside
      className="info-banner py-12"
      aria-labelledby="info-banner-heading"
      style={{ background: 'var(--info-banner-bg)', color: 'var(--info-banner-fg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div
            className="text-5xl flex-shrink-0"
            aria-hidden="true"
          >
            💰
          </div>
          <div className="flex-1">
            <h3
              id="info-banner-heading"
              className="text-2xl font-bold mb-2"
              style={{ color: 'var(--info-banner-fg)' }}
            >
              Cost of Living Support
            </h3>
            <p className="mb-4 text-base leading-relaxed opacity-90">
              Demo City Council is here to help if you&apos;re struggling with the rising cost of
              living. Find out what financial support, food help and energy advice is available to
              you.
            </p>
            <a href="#" className="btn-primary">
              Get support now
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
