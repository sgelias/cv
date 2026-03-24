import { useLocale } from '../i18n/index.tsx'

interface HeaderProps {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  const { t, locale, setLocale } = useLocale()

  const btnBase = "px-2 py-1 rounded-md cursor-pointer text-sm font-semibold transition-colors hover:bg-neutral-100 dark:hover:bg-zinc-800"
  const btnActive = "bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700"
  const btnInactive = "text-blue-500 dark:text-blue-400"

  return (
    <section>
      <div className="text-blue-500 dark:text-blue-400 text-start text-xl sm:text-3xl font-semibold my-5 border-b border-neutral-300 dark:border-neutral-600 px-1 uppercase flex justify-between items-center gap-2">
        <div className="flex flex-col">
          <h1 className="leading-tight">SAMUEL GALVÃO ELIAS</h1>
          <h2 className="leading-tight text-xs">{t.header.subtitle}</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 print:hidden">
          <button
            onClick={() => setLocale('pt-br')}
            className={`${btnBase} ${locale === 'pt-br' ? btnActive : btnInactive}`}
            title="Mudar para Português"
          >
            PT
          </button>
          <button
            onClick={() => setLocale('en-us')}
            className={`${btnBase} ${locale === 'en-us' ? btnActive : btnInactive}`}
            title="Switch to English"
          >
            EN
          </button>
          <button
            onClick={onToggleTheme}
            className={`${btnBase} ${btnInactive}`}
            title={t.header.toggleTheme}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => window.print()}
            className={`${btnBase} ${btnInactive} underline`}
          >
            {t.header.pdf}
          </button>
        </div>
      </div>
    </section>
  )
}
