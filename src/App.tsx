import { useState, useEffect } from 'react'
import Header from './components/Header.tsx'
import ContactInfo from './components/ContactInfo.tsx'
import Summaries from './components/Summaries.tsx'
import Titration from './components/Titration.tsx'
import Publications from './components/Publications.tsx'
import PublicTools from './components/PublicTools.tsx'
import PrivateSoftwares from './components/PrivateSoftwares.tsx'

function getInitialTheme(): boolean {
  const saved = localStorage.getItem('theme')
  if (saved) return saved === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`web-card bg-white dark:bg-zinc-800/50 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 px-8 py-6 print:shadow-none print:border-none print:rounded-none print:px-0 print:py-0 print:bg-transparent ${className}`}>
      {children}
    </div>
  )
}

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches)
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const beforePrint = () => document.documentElement.classList.remove('dark')
    const afterPrint = () => { if (isDark) document.documentElement.classList.add('dark') }
    window.addEventListener('beforeprint', beforePrint)
    window.addEventListener('afterprint', afterPrint)
    return () => {
      window.removeEventListener('beforeprint', beforePrint)
      window.removeEventListener('afterprint', afterPrint)
    }
  }, [isDark])

  return (
    <div
      id="app"
      className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors duration-200 print:bg-white print:min-h-0 [&_h2]:text-blue-500 [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:text-2xl [&_h3]:text-blue-500 [&_h3]:font-semibold [&_h3]:uppercase [&_h3]:text-xl [&_h3]:my-6 [&_h4]:text-blue-500 [&_h4]:font-semibold [&_h4]:uppercase [&_h4]:text-lg [&_h4]:my-6 [&_a]:text-indigo-500 [&_a]:underline"
    >
      <div className="max-w-3xl mx-auto py-8 px-4 space-y-12 text-zinc-800 dark:text-zinc-50 print:max-w-none print:py-0 print:px-6 print:space-y-0 print:text-zinc-700">

        <Card>
          <Header isDark={isDark} onToggleTheme={() => setIsDark(d => !d)} />
          <ContactInfo />
        </Card>

        <hr className="hidden print:block my-5 border-neutral-300" />

        <Card className="print:break-before-page">
          <Summaries />
        </Card>

        <hr className="hidden print:block my-5 border-neutral-300" />

        <Card>
          <Titration />
        </Card>

        <Card>
          <Publications />
        </Card>

        <Card>
          <PublicTools />
        </Card>

        <Card>
          <PrivateSoftwares />
        </Card>

      </div>
    </div>
  )
}
