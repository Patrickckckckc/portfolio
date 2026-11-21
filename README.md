# Patrick Wackerbauer — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

| Script                 | What it does               |
| ---------------------- | -------------------------- |
| `npm run build`        | Production build           |
| `npm run start`        | Serve the production build |
| `npm run lint`         | ESLint                     |
| `npm run typecheck`    | TypeScript, no emit        |
| `npm run format`       | Prettier, write            |
| `npm run format:check` | Prettier, check only       |

Husky runs `lint-staged` (ESLint and Prettier on staged files) before every commit.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui (Base UI) · Lucide React · next-themes · GSAP 3.13.0 (opening animation only) · ESLint · Prettier · Husky

## Structure

```
public/
  resume-en.pdf, resume-es.pdf      Served at /resume-en.pdf and /resume-es.pdf
  media/                            Background video and its poster
src/
  app/                              Routes: /, /works, /skills, /profile, layout, template, icon
  components/
    brand/                          Logo (inline SVG) and its path data
    home/                           Hero, headline, swoosh, dock, video, intro animation
    layout/                         Site header and bottom bar
    controls/                       Language switch and theme toggle
    sections/                       Shared placeholder page
    providers/                      Theme provider
    ui/                             shadcn/ui primitives
  config/site.ts                    Name, email, GitHub, resume paths, section list
  i18n/                             EN/ES dictionaries and the language provider
```

## How to change things

- **Copy, EN and ES:** `src/i18n/dictionaries.ts`.
- **Email, GitHub, location, resume files:** `src/config/site.ts` and `public/`.
- **Add a page to the dock:** add it to `sections` in `src/config/site.ts`, a label to both dictionaries, and a route in `src/app/`.
- **Swap the video:** replace `public/media/background.mp4` and `background-poster.webp`.
- **Colours and type scale:** CSS variables in `src/app/globals.css` (light in `:root`, dark in `.dark`).

## Behaviour notes

- **Language:** stored in a `lang` cookie so the server renders the right language with no flash. The Resume link follows it.
- **Dark mode:** `next-themes`, class based, light by default. The toggle sits in the bottom bar so the top navigation stays at exactly three items.
- **Opening animation:** plays once per session on the home page. It is skipped with reduced motion, without JavaScript, and on click, Enter or Esc. Page content never depends on it.
- **Deploy:** works on Vercel as is. Optionally set `NEXT_PUBLIC_SITE_URL` for absolute metadata URLs.
