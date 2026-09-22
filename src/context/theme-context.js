import { createContext } from 'react'

export const THEME_STORAGE_KEY = 'ej-theme'

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
})
