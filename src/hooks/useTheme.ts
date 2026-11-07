import { useCallback, useSyncExternalStore } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'pixelsync-theme'

/**
 * Tiny external store shared by every `useTheme` consumer so the toggle,
 * logo, favicon meta and any future themed component update together.
 * Dark is the default brand experience.
 */

function readStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

let currentTheme: Theme = readStoredTheme()
const listeners = new Set<() => void>()

function applyTheme(theme: Theme) {
  currentTheme = theme
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = theme
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0B0D0F' : '#F5F6F8')
    }
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* private mode — theme just won't persist */
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot(): Theme {
  return currentTheme
}

function getServerSnapshot(): Theme {
  return 'dark'
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggleTheme = useCallback(() => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }, [])

  return { theme, toggleTheme }
}
