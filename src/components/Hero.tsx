import { useState } from 'react'
import { Search } from 'lucide-react'
import type { ThemeId } from '../types/theme'

interface HeroProps {
  theme: ThemeId
}

export default function Hero({ theme }: HeroProps) {
  const [heroSearch, setHeroSearch] = useState('')

  const isModern = theme === 'theme-modern'

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Hero search:', heroSearch)
  }

  return (
    <section
      className={`hero py-16 lg:py-24 ${!isModern ? 'border-b border-gray-200' : ''}`}
      style={{ background: 'var(--hero-bg)', color: 'var(--hero-fg)' }}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1
            id="hero-heading"
            className={`font-black leading-tight mb-4 ${isModern ? 'text-4xl lg:text-6xl text-white' : 'text-3xl lg:text-5xl'}`}
            style={{ color: 'var(--hero-fg)' }}
          >
            Welcome to{' '}
            {isModern ? (
              <em
                className="not-italic"
                style={{ color: 'var(--header-accent)' }}
              >
                Demo
              </em>
            ) : (
              'Demo'
            )}
            <br />
            City Council
          </h1>
          <p
            className={`text-lg mb-8 leading-relaxed ${isModern ? 'text-white/90' : ''}`}
            style={{ color: isModern ? undefined : 'var(--hero-fg)' }}
          >
            Find council services, pay your bills, report issues and stay up to date with
            everything happening in Demo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#services" className="btn-primary">
              Find a service
            </a>
            <a href="#news" className="btn-secondary">
              Latest news
            </a>
          </div>

          {/* Hero Search (Modern only) */}
          {isModern && (
            <form
              className="hero-search flex"
              role="search"
              aria-label="Main search"
              onSubmit={handleSearch}
            >
              <label htmlFor="hero-search-input" className="sr-only">
                Search for a council service
              </label>
              <div className="flex gap-0 w-full max-w-lg">
                <input
                  type="search"
                  id="hero-search-input"
                  value={heroSearch}
                  onChange={e => setHeroSearch(e.target.value)}
                  placeholder="Search for a service, e.g. council tax"
                  className="flex-1 px-5 py-3 text-base text-gray-900 bg-white rounded-l-xl border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-500 rounded-r-xl transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center gap-2"
                >
                  <Search size={18} aria-hidden="true" />
                  Search
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
