# Curriculum Vitae — Samuel Galvão Elias

Personal CV built with React, TypeScript, Tailwind CSS and react-markdown.
Supports a web mode (with cards and dark mode) and a print mode (clean layout
for PDF/A4).

## Stack

- **React 18** + **TypeScript**
- **Vite** — bundler and dev server
- **Tailwind CSS v3** — utility-first styling
- **react-markdown** + **remark-gfm** — Markdown rendering for text blocks
- **GitHub Actions** — automated deployment to GitHub Pages

## Structure

```
src/
├── App.tsx                  # Main layout, dark mode, cards
├── main.tsx                 # Entry point
├── index.css                # Tailwind directives + global styles + dark mode CSS
├── vite-env.d.ts
├── components/
│   ├── Header.tsx           # Title, theme toggle and PDF button
│   ├── ContactInfo.tsx      # Web grid / print data table
│   ├── Summaries.tsx        # In Microbiology + And in Bioinformatics
│   ├── Titration.tsx        # Academic qualifications
│   ├── Publications.tsx     # Scientific publications
│   ├── PublicTools.tsx      # Public domain software
│   ├── PrivateSoftwares.tsx # Software registrations
│   └── MarkdownBlock.tsx    # react-markdown wrapper
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

## Development

```bash
yarn install
yarn dev
```

## Build

```bash
yarn build     # outputs to dist/
yarn preview   # serves the build locally
```

## Deploy

Deployment is handled automatically via GitHub Actions on every push to the
`main` branch.

To enable: **Settings → Pages → Source: GitHub Actions**.

The final URL will be `https://<username>.github.io/<repository>/`.

## PDF

In the browser, click **PDF** in the top-right corner. The document is rendered
in light mode regardless of the current theme, and formatted for A4 via `@page`
CSS.
