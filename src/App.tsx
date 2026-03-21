import { useState, useEffect } from 'react'
import Header from './components/Header'
import PhaseBanner from './components/PhaseBanner'
import Breadcrumb from './components/Breadcrumb'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import InfoBanner from './components/InfoBanner'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import { THEMES, DEFAULT_THEME, STORAGE_KEY, type ThemeId } from './types/theme'

function App() {
  const [theme, setTheme] = useState<ThemeId>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && THEMES.some(t => t.id === stored)) {
        return stored as ThemeId
      }
    } catch (_e) {
      // localStorage unavailable
    }
    return DEFAULT_THEME
  })

  useEffect(() => {
    // Remove all theme classes
    THEMES.forEach(t => {
      document.documentElement.classList.remove(t.id)
    })
    // Add current theme class (for CSS variables)
    // Modern theme uses :root (default), others add class
    if (theme !== 'theme-modern') {
      document.documentElement.classList.add(theme)
    }
    // Persist to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (_e) {
      // localStorage unavailable
    }
  }, [theme])

  const handleThemeChange = (newTheme: ThemeId) => {
    setTheme(newTheme)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 btn-primary"
      >
        Skip to main content
      </a>

      <Header theme={theme} />
      <PhaseBanner theme={theme} />
      <Breadcrumb theme={theme} />
      <Hero theme={theme} />

      <main id="main-content" className="flex-1">
        <ServicesSection />
        <InfoBanner />
        <NewsSection />
      </main>

      <Footer />
      <ThemeSwitcher currentTheme={theme} onThemeChange={handleThemeChange} />
    </div>
  )
}

export default App
