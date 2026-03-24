import MarkdownBlock from './MarkdownBlock.tsx'
import { useLocale } from '../i18n/index.tsx'

import introEn from '../content/en-us/software/public-tools-intro.md?raw'
import introPt from '../content/pt-br/software/public-tools-intro.md?raw'

interface ToolLink {
  label: string
  href: string
}

type ToolKey = 'myceliumGateway' | 'myceliumWebapp' | 'blutilsCli' | 'blutilsUi' | 'classeq'

interface Tool {
  name: string
  descriptionKey: ToolKey
  links: ToolLink[]
}

const tools: Tool[] = [
  {
    name: 'Mycelium API Gateway',
    descriptionKey: 'myceliumGateway',
    links: [
      { label: 'GitHub', href: 'https://github.com/LepistaBioinformatics/mycelium' },
      { label: 'Documentation', href: 'https://lepistabioinformatics.github.io/mycelium/' },
    ],
  },
  {
    name: 'Mycelium WebApp',
    descriptionKey: 'myceliumWebapp',
    links: [
      { label: 'GitHub', href: 'https://github.com/LepistaBioinformatics/mycelium-webapp' },
    ],
  },
  {
    name: 'Blutils CLI',
    descriptionKey: 'blutilsCli',
    links: [
      { label: 'GitHub', href: 'https://github.com/LepistaBioinformatics/blutils' },
      { label: 'Documentation', href: 'https://github.com/LepistaBioinformatics/blutils/blob/main/docs/book/README.md' },
      { label: 'Crates', href: 'https://crates.io/crates/blutils-cli' },
    ],
  },
  {
    name: 'Blutils UI',
    descriptionKey: 'blutilsUi',
    links: [
      { label: 'GitHub', href: 'https://github.com/LepistaBioinformatics/blutils-ui' },
      { label: 'Online Interface', href: 'https://lepistabioinformatics.github.io/blutils-ui/' },
    ],
  },
  {
    name: 'Classeq',
    descriptionKey: 'classeq',
    links: [
      { label: 'GitHub', href: 'https://github.com/LepistaBioinformatics/classeq2' },
      { label: 'Documentation', href: 'https://github.com/LepistaBioinformatics/classeq2/blob/main/docs/README.md' },
    ],
  },
]

export default function PublicTools() {
  const { t, locale } = useLocale()
  const introContent = locale === 'pt-br' ? introPt : introEn

  return (
    <section className="my-5 print:break-before-page">
      <h2 id="public-tools">{t.publicTools.title}</h2>

      <MarkdownBlock content={introContent} className="mt-4 [&_p]:my-2" />

      <ol className="list-inside space-y-4 mt-6">
        {tools.map((tool) => (
          <li key={tool.name}>
            <strong>{tool.name}</strong>
            <p>{t.publicTools.tools[tool.descriptionKey]}</p>
            <div className="flex gap-4">
              {tool.links.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
