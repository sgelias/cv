# Curriculum Vitae — Samuel Galvão Elias

Personal CV built with [mdBook](https://rust-lang.github.io/mdBook/), the same
stack used by the [Mycelium documentation](https://github.com/LepistaBioinformatics/mycelium/tree/main/docs/book).
English is the source language; the Portuguese (pt-BR) version is produced with
[mdbook-i18n-helpers](https://github.com/google/mdbook-i18n-helpers) (gettext).

## Structure

```
book.toml              # mdBook configuration
src/
├── SUMMARY.md         # Table of contents (one chapter per section)
├── summaries.md       # Header, contact links and summaries (first printed page)
├── public-software.md # Public domain software
├── private-software.md# Software registrations
├── titration.md       # Academic qualifications
├── publications.md    # Scientific publications
└── assets/            # Contact icons
theme/
├── custom.css         # Colors, contact grid, tables and print (A4) styles
└── custom.js          # EN/PT switcher and light theme when printing
po/
└── pt-BR.po           # Portuguese translation
```

## Prerequisites

```bash
cargo install mdbook --version 0.5.2 --locked
cargo install mdbook-i18n-helpers --version 0.4.0 --locked
```

## Development

```bash
mdbook serve --open                                   # English
MDBOOK_BOOK__LANGUAGE=pt-BR mdbook serve -d /tmp/pt   # Portuguese
```

## Build

```bash
mdbook build
MDBOOK_BOOK__LANGUAGE=pt-BR mdbook build --dest-dir book/pt-BR
```

## Updating the translation

After editing any file under `src/`, regenerate the template and merge it into
the Portuguese catalog, then fill the new or fuzzy `msgstr` entries:

```bash
MDBOOK_OUTPUT='{"xgettext": {}}' mdbook build -d po
msgmerge --update po/pt-BR.po po/messages.pot
```

Entries left with an empty `msgstr` fall back to the English text.

## Deploy

Deployment is handled by GitHub Actions (`.github/workflows/deploy.yml`) on
every push to `main`: the English version is published at the site root and the
Portuguese version under `/pt-BR/`. Pull requests run the same build as a check,
without deploying. mdBook and mdbook-i18n-helpers are pinned in the workflow's
`env` block and cached between runs.

To enable: **Settings → Pages → Source: GitHub Actions**.

## PDF

Click the printer icon in the top bar. mdBook opens `print.html` with every
chapter, one per page; the document is always printed in the light theme and
formatted for A4.
