import MarkdownBlock from './MarkdownBlock.tsx'
import introContent from '../content/software/private-softwares-intro.md?raw'

const tdBase = "border-x border-neutral-300 dark:border-neutral-600 px-4 py-2 align-top text-left"
const trBase = "border-b border-neutral-300 dark:border-neutral-600"
const thBase = "border-x border-neutral-300 dark:border-neutral-600 px-4 py-2 text-left align-top"

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
  return (
    <section className="my-5 print:break-before-page text-justify">
      <h2>Private Software Registrations</h2>

      <MarkdownBlock content={introContent} className="mt-4 [&_p]:mt-4" />

      <table className="w-full border-collapse border border-neutral-300 dark:border-neutral-600 mt-4">
        <thead>
          <tr className="border-b-2 border-neutral-300 dark:border-neutral-600">
            <th className={thBase}>Year</th>
            <th className={thBase}>Title</th>
            <th className={thBase}>Kind (Language)</th>
            <th className={thBase}>Application</th>
          </tr>
        </thead>
        <tbody>
          {softwares.map((sw, i) => (
            <tr key={i} className={trBase}>
              <td className={tdBase}>{sw.year}</td>
              <td className={tdBase}>{sw.title}</td>
              <td className={tdBase}>{sw.kind}</td>
              <td className={tdBase}>{sw.application}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
