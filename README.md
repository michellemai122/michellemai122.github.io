# michellemai122.github.io

Michelle Mai's personal site: software/AI projects, Gable, and EE lab work.

React + TypeScript + Vite, plain CSS. Deploys to GitHub Pages on every push to `main`.

```bash
npm install
npm run dev     # http://localhost:5173
npm run build
```

## Adding content

- Software and startup projects: `src/data/projects.ts`
- EE lab write-ups: `src/data/labs.ts` (summary + figure only, no full reports)
- Experience and links: `src/data/profile.ts`
- Screenshots and figures: `public/shots/`, `public/labs/`

Projects without an image get a generated SVG pattern (`src/components/Pattern.tsx`), seeded by the slug.
