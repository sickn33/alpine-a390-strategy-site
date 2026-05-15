# Alpine A390 Strategy Site

Interactive React + Vite + Tailwind website for the Alpine A390 launch strategy presentation. The current version is designed as a desktop-first live strategy walkthrough: short context, Sergio/Laurent personas, the four practical phases, Alpine Escape, and a concise closing.

## Source Files

- `/Users/nicco/Downloads/ALPINE ITALIA (1).pdf`
- `/Users/nicco/Downloads/Apline A390 - Media Report (1).xlsx`
- `/Users/nicco/Downloads/Alpine_A390/Alpine italia x LUMSA.pdf`
- `/Users/nicco/Downloads/ALPINE FINALE !! (1).pdf`

## Stack

- React
- Vite
- Tailwind CSS v4 through `@tailwindcss/vite`
- Oswald through `@fontsource/oswald`
- Phosphor icons

## Run Locally

```bash
npm install
npm run dev -- --host 127.0.0.1
```

Open `http://127.0.0.1:5173/` or the preview URL shown by Vite.

## Validate

```bash
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

## Deploy On GitHub Pages

The Vite config uses `base: './'`, so the built output is portable for GitHub Pages project hosting.

```bash
npm run build
```

Deploy the generated `dist/` directory with your preferred GitHub Pages flow, for example a Pages action that uploads `dist/` as the static artifact.
