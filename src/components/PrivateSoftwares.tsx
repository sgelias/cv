import MarkdownBlock from './MarkdownBlock.tsx'
import { useLocale } from '../i18n/index.tsx'

import introEn from '../content/en-us/software/private-softwares-intro.md?raw'
import introPt from '../content/pt-br/software/private-softwares-intro.md?raw'

const tdBase = "border-x border-neutral-300 dark:border-neutral-600 px-4 py-2 align-top text-left whitespace-nowrap"
const thBase = "border-x border-neutral-300 dark:border-neutral-600 px-4 py-2 text-left align-top whitespace-nowrap bg-zinc-600 text-white dark:bg-zinc-700 font-semibold uppercase text-sm tracking-wide"

interface Software {
  year: string
  title: string
  kind: string
  application: string
}

const softwares: Software[] = [
  { year: '2022', title: 'AgroBase-Python', kind: 'API (Python)', application: 'BR 51 2022 003471 9' },
  { year: '-', title: '-', kind: 'API (Python)', application: 'BR 51 2022 003472 7' },
  { year: '-', title: 'QuorumSensing', kind: 'API/ETL (Python)', application: 'BR 51 2022 003473 5' },
  { year: '2023', title: 'AgroBase-Python', kind: 'LIBRARY (Python)', application: 'BR 51 2023 003286 7' },
  { year: '-', title: 'AgroBase-Rust', kind: 'LIBRARY (Rust)', application: 'BR 51 2023 003288 3' },
  { year: '-', title: 'AgroIndexAPI', kind: 'API (Python)', application: 'BR 51 2023 003300 6' },
  { year: '-', title: 'Agroportal', kind: 'WEB (Typescript/HTML/CSS)', application: 'BR 51 2023 003302 2' },
  { year: '-', title: 'AgroReporterUI', kind: 'WEB (Typescript/HTML/CSS)', application: 'BR 51 2023 003305 7' },
  { year: '-', title: 'BioArchival', kind: 'API (Rust)', application: 'BR 51 2023 003309 0' },
  { year: '-', title: 'BioReferee', kind: 'API (Python)', application: 'BR 51 2023 003311 1' },
  { year: '-', title: 'BioTax', kind: 'API (Rust)', application: 'BR 51 2023 003321 9' },
  { year: '-', title: 'MetaDaVinci', kind: 'Pipeline (Python)', application: 'BR 51 2023 003324 3' },
  { year: '-', title: 'PathFinder', kind: 'Pipeline (Python)', application: 'BR 51 2023 003327 8' },
  { year: '-', title: 'QuorumSensing', kind: 'API/ETL (Python)', application: 'BR 51 2023 003328 6' },
]

export default function PrivateSoftwares() {
  const { t, locale } = useLocale()
  const introContent = locale === 'pt-br' ? introPt : introEn

  return (
    <section className="my-5 print:break-before-page">
      <h2>{t.privateSoftwares.title}</h2>

      <MarkdownBlock content={introContent} className="mt-4 [&_p]:mt-4" />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-neutral-300 dark:border-neutral-600 mt-4">
          <thead>
            <tr>
              <th className={thBase}>{t.privateSoftwares.year}</th>
              <th className={thBase}>{t.privateSoftwares.titleCol}</th>
              <th className={thBase}>{t.privateSoftwares.kind}</th>
              <th className={thBase}>{t.privateSoftwares.application}</th>
            </tr>
          </thead>
          <tbody>
            {softwares.map((sw, i) => (
              <tr key={i} className={`border-b border-neutral-300 dark:border-neutral-600 ${i % 2 === 0 ? 'bg-zinc-100 dark:bg-zinc-700/40' : ''}`}>
                <td className={tdBase}>{sw.year}</td>
                <td className={tdBase}>{sw.title}</td>
                <td className={tdBase}>{sw.kind}</td>
                <td className={tdBase}>{sw.application}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
