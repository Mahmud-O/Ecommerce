# Task 1 Report — Design tokens + fonts + Tailwind wiring

status: DONE

## Commits made
- 68d8a01 `feat: add warm editorial bazaar tokens and fonts` (index.html, src/index.css, tailwind.config.js)

## Test command + output summary
- `npm run build` — PASS. `vite v7.0.0 building for production...`, 2095 modules transformed, `built in 35.56s` with dist/ output (index.html, assets JS/CSS/images). Only warning: chunk >500kB code-split suggestion (pre-existing). No CSS errors.

## Files changed
- `index.html` — added 3 Google Fonts lines after `<title>Ecommerce</title>`: preconnect fonts.googleapis.com, preconnect fonts.gstatic.com (crossorigin), Fraunces 600;700 + Space Grotesk 400;500;600;700 stylesheet.
- `src/index.css` — replaced whole file with plan CSS verbatim: `:root` vars --paper #FAF6F0, --paper-deep #F1E9DB, --ink #191410, --persimmon #E4572E, --olive #223726, --marigold #FFB627, --clay #E7DDCB, --brick #C1272D + shadcn HSL mappings (background/foreground/card/primary/secondary/accent/muted/border/input/ring/destructive, --radius 1rem, --font-display Fraunces, --font-sans Space Grotesk); body bg-[#FAF6F0] text-[#191410] + font-sans; `.font-display`, `* border-border`, `.active` persimmon underline-offset-4, `.hard-shadow` / `.hard-shadow-sm`, `.grain::after` SVG noise. Deleted old neutral ramp, `bg-gray-100`, `.active #584deb`.
- `tailwind.config.js` — added `theme.extend.fontFamily` (display Fraunces/Georgia/serif, sans "Space Grotesk"/system-ui/sans-serif) and `theme.extend.colors` paper/paper-deep/ink/persimmon/olive/marigold/clay/brick. Kept existing borderRadius + all shadcn background/foreground/card/popover/primary/secondary/muted/accent/destructive/border/input/ring/chart mappings.

## Concerns
- None blocking. Minor note for later tasks: `tailwind.config.js` still references `chart` colors via `hsl(var(--chart-*))` but the new `:root` block (per plan) no longer defines `--chart-1..5` — harmless for build (vars just unresolved) but Task 2+ may want to re-add or drop chart keys if charts are used.
