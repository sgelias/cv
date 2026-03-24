import MarkdownBlock from './MarkdownBlock.tsx'
import inMicrobiology from '../content/summaries/in-microbiology.md?raw'
import andInBioinformatics from '../content/summaries/and-in-bioinformatics.md?raw'
import mentorLinks from '../content/summaries/mentor-links.md?raw'

export default function Summaries() {
  return (
    <section className="space-y-2">
      <h2 className="my-1 print:break-after-avoid">My Summaries</h2>

      <div className="grid grid-cols-2 gap-x-3.5 w-full print:grid-cols-1">
        <div className="align-top text-justify">
          <h3>In Microbiology</h3>
          <MarkdownBlock
            content={inMicrobiology}
            className="text-justify text-sm [&_p]:my-3"
          />
        </div>

        <div className="align-top text-justify">
          <h3 id="bioinformatics">And in Bioinformatics</h3>
          <MarkdownBlock
            content={andInBioinformatics}
            className="text-justify text-sm [&_p]:my-3"
          />
        </div>
      </div>

      <MarkdownBlock
        content={mentorLinks}
        className="text-justify [&_p]:mt-2"
      />
    </section>
  )
}
