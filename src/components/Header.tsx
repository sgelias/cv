interface HeaderProps {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <section>
      <div className="text-blue-500 dark:text-blue-400 text-start text-3xl font-semibold my-5 border-b border-neutral-300 dark:border-neutral-600 px-1 uppercase flex justify-between items-center">
        <h1>Samuel Galvão Elias – CV</h1>
        <div className="flex gap-2 items-center print:hidden">
          <button
            onClick={onToggleTheme}
            className="text-blue-500 dark:text-blue-400 px-3 py-2 rounded-md cursor-pointer text-sm hover:bg-neutral-100 dark:hover:bg-zinc-800 transition-colors"
            title="Alternar tema"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => window.print()}
            className="text-blue-500 dark:text-blue-400 underline px-4 py-2 rounded-md cursor-pointer text-sm hover:bg-neutral-100 dark:hover:bg-zinc-800 transition-colors"
          >
            PDF
          </button>
        </div>
      </div>
    </section>
  )
}
