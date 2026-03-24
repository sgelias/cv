import MarkdownBlock from './MarkdownBlock.tsx'
import { useLocale } from '../i18n/index.tsx'

import phdEn from '../content/en-us/titration/phd.md?raw'
import phdPt from '../content/pt-br/titration/phd.md?raw'
import masterEn from '../content/en-us/titration/master.md?raw'
import masterPt from '../content/pt-br/titration/master.md?raw'
import bachelorEn from '../content/en-us/titration/bachelor.md?raw'
import bachelorPt from '../content/pt-br/titration/bachelor.md?raw'

const tdBase = "border-x border-neutral-300 dark:border-neutral-600 px-4 py-2 align-top text-left"
const trBase = "border-b border-neutral-300 dark:border-neutral-600"

interface AcademicTableProps {
  rows: [string, string][]
}

function AcademicTable({ rows }: AcademicTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-neutral-300 dark:border-neutral-600 my-5">
        <colgroup>
          <col style={{ width: '140px' }} />
          <col />
        </colgroup>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className={trBase}>
              <td className={`${tdBase} font-bold`}>{label}</td>
              <td className={tdBase}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Titration() {
  const { t, locale } = useLocale()

  const phdContent = locale === 'pt-br' ? phdPt : phdEn
  const masterContent = locale === 'pt-br' ? masterPt : masterEn
  const bachelorContent = locale === 'pt-br' ? bachelorPt : bachelorEn

  return (
    <section className="my-5 print:break-before-page">
      <h2 id="academic-activities">{t.titration.title}</h2>

      <div className="space-y-4">
        <div>
          <h3>{t.titration.phd}</h3>
          <AcademicTable rows={[
            [t.titration.institution, t.titration.phdInstitution],
            [t.titration.degree, t.titration.phdDegree],
            [t.titration.year, t.titration.phdYear],
          ]} />
          <MarkdownBlock content={phdContent} className="[&_p]:my-2" />
        </div>

        <div>
          <h3>{t.titration.master}</h3>
          <AcademicTable rows={[
            [t.titration.institution, t.titration.masterInstitution],
            [t.titration.degree, t.titration.masterDegree],
            [t.titration.year, t.titration.masterYear],
          ]} />
          <MarkdownBlock content={masterContent} className="[&_p]:my-2" />
        </div>

        <div>
          <h3>{t.titration.bachelor}</h3>
          <AcademicTable rows={[
            [t.titration.institution, t.titration.bachelorInstitution],
            [t.titration.degree, t.titration.bachelorDegree],
            [t.titration.year, t.titration.bachelorYear],
          ]} />
          <MarkdownBlock content={bachelorContent} className="[&_p]:my-2" />
        </div>
      </div>
    </section>
  )
}
