# Curriculum Vitae — Samuel Galvão Elias

CV pessoal construído com React, TypeScript, Tailwind CSS e react-markdown. Suporta modo web (com cards e dark mode) e modo impressão (layout limpo para PDF/A4).

## Stack

- **React 18** + **TypeScript**
- **Vite** — bundler e dev server
- **Tailwind CSS v3** — estilização utilitária
- **react-markdown** + **remark-gfm** — renderização dos blocos de texto em Markdown
- **GitHub Actions** — deploy automático para GitHub Pages

## Estrutura

```
src/
├── App.tsx                  # Layout principal, dark mode, cards
├── main.tsx                 # Entry point
├── index.css                # Tailwind directives + estilos globais + dark mode CSS
├── vite-env.d.ts
├── components/
│   ├── Header.tsx           # Título, toggle de tema e botão PDF
│   ├── ContactInfo.tsx      # Grid web / data table impressão
│   ├── Summaries.tsx        # In Microbiology + And in Bioinformatics
│   ├── Titration.tsx        # Formação acadêmica
│   ├── Publications.tsx     # Publicações científicas
│   ├── PublicTools.tsx      # Softwares públicos
│   ├── PrivateSoftwares.tsx # Registros de software
│   └── MarkdownBlock.tsx    # Wrapper react-markdown
└── content/
    ├── summaries/
    │   ├── in-microbiology.md
    │   ├── and-in-bioinformatics.md
    │   └── mentor-links.md
    ├── titration/
    │   ├── phd.md
    │   ├── master.md
    │   └── bachelor.md
    ├── publications/
    │   ├── intro.md
    │   ├── life-sciences-intro.md
    │   └── health-sciences-intro.md
    └── software/
        ├── public-tools-intro.md
        └── private-softwares-intro.md
```

## Desenvolvimento

```bash
yarn install
yarn dev
```

## Build

```bash
yarn build     # gera dist/
yarn preview   # serve o build localmente
```

## Deploy

O deploy é feito automaticamente via GitHub Actions a cada push na branch `main`.

Para ativar: **Settings → Pages → Source: GitHub Actions**.

A URL final será `https://<usuario>.github.io/<repositório>/`.

## PDF

No navegador, clique em **PDF** no canto superior direito. O documento é renderizado em modo claro (independente do tema atual) e formatado para A4 via `@page` CSS.
