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
    <div id="app" className="m-0 px-6 my-6 text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 transition-colors duration-200 [&_h2]:text-blue-500 dark:[&_h2]:text-blue-400 [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:text-2xl [&_h3]:text-blue-500 dark:[&_h3]:text-blue-400 [&_h3]:font-semibold [&_h3]:uppercase [&_h3]:text-xl [&_h3]:my-6 [&_h4]:text-blue-500 dark:[&_h4]:text-blue-400 [&_h4]:font-semibold [&_h4]:uppercase [&_h4]:text-lg [&_h4]:my-6 [&_a]:text-indigo-500 dark:[&_a]:text-indigo-400 [&_a]:underline">
      <div id="content" className="max-w-5xl mx-auto">
        <Header isDark={isDark} onToggleTheme={() => setIsDark(d => !d)} />

        <ContactInfo />

        <hr className="my-5 border-neutral-300 dark:border-neutral-600" />

        <Summaries />

        <hr className="my-5 border-neutral-300 dark:border-neutral-600" />

        <Titration />

        <Publications />

        <PublicTools />

        <PrivateSoftwares />
      </div>
    </div>
  )
}
