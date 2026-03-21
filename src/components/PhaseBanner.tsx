import type { ThemeId } from '../types/theme'

interface PhaseBannerProps {
  theme: ThemeId
}

export default function PhaseBanner({ theme }: PhaseBannerProps) {
  if (theme === 'theme-modern') return null

  const isGovuk = theme === 'theme-govuk'

  return (
    <div
      className="phase-banner border-b"
      style={{
        backgroundColor: isGovuk ? '#f3f2f1' : '#e8f2f8',
        borderColor: isGovuk ? '#b1b4b6' : '#99c1de',
      }}
      role="region"
      aria-label="Service phase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3 text-sm">
        <span
          className="inline-block px-2 py-0.5 font-bold text-xs rounded"
          style={{
            backgroundColor: isGovuk ? '#1d70b8' : '#007f3b',
            color: '#ffffff',
          }}
        >
          BETA
        </span>
        <p className="m-0 text-gray-800">
          This is a new service —{' '}
          <a href="#footer" className="underline text-blue-700 hover:no-underline">
            your feedback
          </a>{' '}
          will help us improve it.
        </p>
      </div>
    </div>
  )
}
