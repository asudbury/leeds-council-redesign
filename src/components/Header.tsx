import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import type { ThemeId } from '../types/theme'

interface HeaderProps {
  theme: ThemeId
}

const navLinks = [
  { href: '#services', label: 'Residents' },
  { href: '#services', label: 'Business' },
  { href: '#news', label: 'News' },
  { href: '#footer', label: 'Your Council' },
  { href: '#footer', label: 'Contact' },
]

export default function Header({ theme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search:', searchQuery)
  }

  return (
    <header
      className="site-header sticky top-0 z-40 shadow-sm"
      style={{ backgroundColor: 'var(--header-bg)', color: 'var(--header-fg)' }}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="Demo City Council — Home"
          >
            {theme === 'theme-modern' && (
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-black"
                style={{ backgroundColor: 'var(--logo-icon-bg)', color: 'var(--btn-primary-fg)' }}
                aria-hidden="true"
              >
                L
              </div>
            )}
            {theme === 'theme-govuk' && (
              <span
                className="text-3xl"
                aria-hidden="true"
                style={{ color: 'var(--header-fg)' }}
              >
                ♔
              </span>
            )}
            {theme === 'theme-nhs' && (
              <div
                className="bg-white text-blue-700 font-black text-sm px-2 py-1 rounded"
                aria-hidden="true"
              >
                NHS
              </div>
            )}
            <div>
              <div className="font-bold text-lg leading-tight" style={{ color: 'var(--header-fg)' }}>
                Demo City Council
              </div>
              <div
                className="text-xs leading-tight opacity-75"
                style={{ color: 'var(--header-fg)' }}
              >
                Serving Demo Since 1974
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-opacity hover:opacity-80 py-1 border-b-2 border-transparent hover:border-current"
                style={{ color: 'var(--header-fg)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Search */}
          <form
            className="hidden lg:flex items-center gap-2"
            role="search"
            aria-label="Site search"
            onSubmit={handleSearch}
          >
            <label htmlFor="header-search-input" className="sr-only">
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="header-search-input"
                name="q"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search demo.gov.uk"
                aria-label="Search demo.gov.uk"
                className="w-56 pl-4 pr-10 py-2 rounded-lg text-sm text-gray-900 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <Search size={16} aria-hidden="true" />
              </button>
            </div>
          </form>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            style={{ color: 'var(--header-fg)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/20">
            <nav className="flex flex-col gap-1 mt-3" aria-label="Mobile navigation">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                  style={{ color: 'var(--header-fg)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <form
              className="mt-3 flex gap-2"
              role="search"
              aria-label="Mobile site search"
              onSubmit={handleSearch}
            >
              <input
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search demo.gov.uk"
                className="flex-1 px-4 py-2 rounded-lg text-sm text-gray-900 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg font-semibold text-sm bg-yellow-400 text-gray-900 hover:bg-yellow-500"
              >
                Go
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}
