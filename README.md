# Sandip Sharan Portfolio (Next.js)

Personal portfolio and research website built with Next.js App Router.

## Stack

- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion

## Project Structure

```text
src/
  app/                  # Routes and page layouts
  components/
    layout/             # Header/theme components
    media/              # Image strip / media widgets
    entries/            # Reusable card/list entry components
  data/                 # Site content (edit these first)
  images/               # Static image import maps for components
public/
  icons/                # Site icon assets
  images/
    profile/            # Profile photos
    logos/              # Institution/company logos
    publications/       # Publication images
    projects/           # Project images
```

## Scripts

- `npm run dev` start development server
- `npm run lint` run eslint checks
- `npm run build` create production build
- `npm run start` run production server
- `npm run clean` remove `.next` build cache
- `npm run check` lint + build

## Content Editing

Update content via data files:

- `src/data/aboutme.js`
- `src/data/education.js`
- `src/data/experience.js`
- `src/data/publication.js`
- `src/data/projects.js`
- `src/data/media-highlights.js`

## Asset Conventions

- Use lowercase kebab-case file names.
- Keep assets in `public/images/<category>/`.
- Reference assets by absolute path (example: `/images/projects/gesture-driving.png`).
- Use `src/images/photos.js` for statically imported photo-strip images.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Notes

- The repo is configured as JavaScript-only (no TypeScript source/config).
- Path alias `@/*` is configured via `jsconfig.json`.
