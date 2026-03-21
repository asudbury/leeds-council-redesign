import { THEMES, type ThemeId } from '../types/theme'

interface ThemeSwitcherProps {
  currentTheme: ThemeId
  onThemeChange: (themeId: ThemeId) => void
}

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  return (
    <div
      id="style-switcher"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-white/95 backdrop-blur-sm shadow-2xl rounded-full px-4 py-3 border border-gray-200"
      role="region"
      aria-label="Style switcher"
    >
      <span className="text-xs font-semibold text-gray-500 mr-1 hidden sm:inline" aria-hidden="true">
        Style:
      </span>
      {THEMES.map(theme => (
        <button
          key={theme.id}
          type="button"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
            currentTheme === theme.id
              ? 'bg-purple-700 text-white shadow-md scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          aria-pressed={currentTheme === theme.id}
          onClick={() => onThemeChange(theme.id)}
        >
          <span aria-hidden="true">{theme.emoji}</span>
          <span className="hidden sm:inline">{theme.label}</span>
        </button>
      ))}
    </div>
  )
}
