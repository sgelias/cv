import { createContext, useContext, useState, useEffect } from 'react'
import translations, { type Locale } from './translations'

interface LocaleContextValue {
  locale: Locale
  t: typeof translations['en-us']
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getInitialLocale(): Locale {
  const saved = localStorage.getItem('locale')
  if (saved === 'pt-br' || saved === 'en-us') return saved
  return 'en-us'
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem('locale', next)
  }

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside LocaleProvider')
  return ctx
}
