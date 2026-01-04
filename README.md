# Curriculum Vitae - Samuel Galvão Elias

## Setup

Instale as dependências:

```bash
yarn install
```

## Desenvolvimento

Para compilar o CSS do Tailwind em modo watch (recompila automaticamente ao salvar):

```bash
yarn watch-css
```

## Produção

Para compilar o CSS minificado para produção:

```bash
yarn build-css
```

## Estrutura

- `src/input.css` - Arquivo CSS de entrada com diretivas do Tailwind
- `src/output.css` - CSS compilado pelo Tailwind (gerado automaticamente)
- `src/styles.css` - Estilos customizados adicionais (não mais necessário, movido para input.css)
- `src/cv.html` - Arquivo HTML principal
- `tailwind.config.js` - Configuração do Tailwind CSS
