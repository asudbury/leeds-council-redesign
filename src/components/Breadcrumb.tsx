import type { ThemeId } from '../types/theme'

interface BreadcrumbProps {
  theme: ThemeId
}

export default function Breadcrumb({ theme }: BreadcrumbProps) {
  if (theme === 'theme-modern') return null

  return (
    <nav
      className="breadcrumb-nav border-b border-gray-200 bg-white"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm list-none p-0 m-0">
          <li>
            <a href="/" className="text-blue-600 hover:underline">
              Home
            </a>
          </li>
          <li className="text-gray-400" aria-hidden="true">
            /
          </li>
          <li aria-current="page" className="text-gray-600">
            Demo City Council
          </li>
        </ol>
      </div>
    </nav>
  )
}
