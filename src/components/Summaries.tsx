import MarkdownBlock from './MarkdownBlock.tsx'
import { useLocale } from '../i18n/index.tsx'

import inMicrobiologyEn from '../content/en-us/summaries/in-microbiology.md?raw'
import inMicrobiologyPt from '../content/pt-br/summaries/in-microbiology.md?raw'
import andInBioinformaticsEn from '../content/en-us/summaries/and-in-bioinformatics.md?raw'
import andInBioinformaticsPt from '../content/pt-br/summaries/and-in-bioinformatics.md?raw'
import mentorLinksEn from '../content/en-us/summaries/mentor-links.md?raw'
import mentorLinksPt from '../content/pt-br/summaries/mentor-links.md?raw'

export default function Summaries() {
  const { t, locale } = useLocale()

  const inMicrobiology = locale === 'pt-br' ? inMicrobiologyPt : inMicrobiologyEn
  const andInBioinformatics = locale === 'pt-br' ? andInBioinformaticsPt : andInBioinformaticsEn
  const mentorLinks = locale === 'pt-br' ? mentorLinksPt : mentorLinksEn

  return (
    <section className="space-y-2">
      <h2 className="my-1 print:break-after-avoid">{t.summaries.title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5 w-full print:grid-cols-1">
        <div className="align-top">
          <h3>{t.summaries.inMicrobiology}</h3>
          <MarkdownBlock
            content={inMicrobiology}
            className="text-sm [&_p]:my-3"
          />
        </div>

        <div className="align-top">
          <h3 id="bioinformatics">{t.summaries.inBioinformatics}</h3>
          <MarkdownBlock
            content={andInBioinformatics}
            className="text-sm [&_p]:my-3"
          />
        </div>
      </div>

      <MarkdownBlock
        content={mentorLinks}
        className="[&_p]:mt-2"
      />
    </section>
  )
}
