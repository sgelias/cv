import MarkdownBlock from './MarkdownBlock.tsx'
import phdContent from '../content/titration/phd.md?raw'
import masterContent from '../content/titration/master.md?raw'
import bachelorContent from '../content/titration/bachelor.md?raw'

const tdBase = "border-x border-neutral-300 dark:border-neutral-600 px-4 py-2 align-top text-left"
const trBase = "border-b border-neutral-300 dark:border-neutral-600"

interface AcademicTableProps {
  rows: [string, string][]
}

function AcademicTable({ rows }: AcademicTableProps) {
  return (
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
  )
}

export default function Titration() {
  return (
    <section className="my-5 print:break-before-page">
      <h2 id="academic-activities">Titration</h2>

      <div className="space-y-4">
        <div className="text-justify">
          <h3>PhD in Microbiology</h3>
          <AcademicTable rows={[
            ['Institution', 'University of Brasília (UnB)'],
            ['Degree', 'PhD in Microbiology'],
            ['Year', '2017'],
          ]} />
          <MarkdownBlock content={phdContent} className="[&_p]:my-2" />
        </div>

        <div className="text-justify">
          <h3>Master in Fungi, Algae and Plant Biology</h3>
          <AcademicTable rows={[
            ['Institution', 'Federal University of Santa Catarina (UFSC)'],
            ['Degree', 'Master in Fungi, Algae and Plant Biology'],
            ['Year', '2015'],
          ]} />
          <MarkdownBlock content={masterContent} className="[&_p]:my-2" />
        </div>

        <div className="text-justify">
          <h3>Bachelor in Biological Sciences</h3>
          <AcademicTable rows={[
            ['Institution', 'University of the Extreme South of Santa Catarina (UNESC)'],
            ['Degree', 'Bachelor in Biological Sciences'],
            ['Year', '2011'],
          ]} />
          <MarkdownBlock content={bachelorContent} className="[&_p]:my-2" />
        </div>
      </div>
    </section>
  )
}
