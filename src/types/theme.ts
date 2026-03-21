export type ThemeId = 'theme-modern' | 'theme-govuk' | 'theme-nhs'

export interface Theme {
  id: ThemeId
  label: string
  emoji: string
}

export const THEMES: Theme[] = [
  { id: 'theme-modern', label: 'Modern Demo', emoji: '🎨' },
  { id: 'theme-govuk', label: 'GOV.UK Style', emoji: '🏛️' },
  { id: 'theme-nhs', label: 'NHS Style', emoji: '🏥' },
]

export const STORAGE_KEY = 'demo-redesign-theme'
export const DEFAULT_THEME: ThemeId = 'theme-modern'
