import MarkdownBlock from './MarkdownBlock.tsx'
import introContent from '../content/software/public-tools-intro.md?raw'

interface ToolLink {
  label: string
  href: string
}

interface Tool {
  name: string
  description: string
  links: ToolLink[]
}

const tools: Tool[] = [
  {
    name: 'Mycelium API Gateway',
    description: 'An open and free API Gateway, designed to operate in modern, multi-tenant, and API-oriented environments. The project prioritizes architectural clarity, security, and extensibility, maintaining an explicit separation between technical concerns and organizational aspects of the project.',
    links: [
      { label: 'GitHub', href: 'https://github.com/LepistaBioinformatics/mycelium' },
      { label: 'Documentation', href: 'https://lepistabioinformatics.github.io/mycelium/' },
    ],
  },
  {
    name: 'Mycelium WebApp',
    description: 'The official web interface of Mycelium API Gateway, designed to allow rapid implementation of access policies to the API Gateway endpoints, without the need for additional implementation.',
    links: [
      { label: 'GitHub', href: 'https://github.com/LepistaBioinformatics/mycelium-webapp' },
    ],
  },
  {
    name: 'Blutils CLI',
    description: 'A command line interface designed to be an Blast Wrapper, used to improve their execution performance and implements an exclusive consensus algorithm to improve the interpretation of the results.',
    links: [
      { label: 'GitHub', href: 'https://github.com/LepistaBioinformatics/blutils' },
      { label: 'Documentation', href: 'https://github.com/LepistaBioinformatics/blutils/blob/main/docs/book/README.md' },
      { label: 'Crates', href: 'https://crates.io/crates/blutils-cli' },
    ],
  },
  {
    name: 'Blutils UI',
    description: 'A web interface designed to visualize the results of the Blutils CLI. It is designed to be used in the browser, without the need for additional implementation.',
    links: [
      { label: 'GitHub', href: 'https://github.com/LepistaBioinformatics/blutils-ui' },
      { label: 'Online Interface', href: 'https://lepistabioinformatics.github.io/blutils-ui/' },
    ],
  },
  {
    name: 'Classeq',
    description: 'A biological sequence classifier designed to perform the biological sequences placement into a predefined phylogeny. It is designed as a web friendly application, with a focus on usability.',
    links: [
      { label: 'GitHub', href: 'https://github.com/LepistaBioinformatics/classeq2' },
      { label: 'Documentation', href: 'https://github.com/LepistaBioinformatics/classeq2/blob/main/docs/README.md' },
    ],
  },
]

export default function PublicTools() {
  return (
    <section className="my-5 print:break-before-page text-justify">
      <h2 id="public-tools">Public Domain Software</h2>

      <MarkdownBlock content={introContent} className="mt-4 [&_p]:my-2" />

      <ol className="list-inside space-y-4 mt-6">
        {tools.map((tool) => (
          <li key={tool.name}>
            <strong>{tool.name}</strong>
            <p>{tool.description}</p>
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
