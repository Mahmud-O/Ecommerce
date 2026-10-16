# Task 4 Report — Home: hero, brands, featured, bento, testimonials

## Status
Done. Editorial home composition rebuilt on Tasks 1–3 tokens/primitives/shell. All data hooks untouched (`useAllProduct`, `useAllCategories`, `CartContext.addProduct`, Redux `openCart`).

## Commits
- `885b634` — `feat: rebuild home editorial hero and sections` (7 files)

## Tests
- `npm run build` — PASS (`vite build`, 2596 modules, dist/ emitted; only pre-existing chunk-size warning).
- Grep over `LandingPage/*`, `HomeSlick/*`, `CategoriesSlider/*` for `gradient|indigo|purple-600|blue-600|gray-900|bg-gray` — zero hits.
- Manual `/` check at 1440 + 390 still required (hero readability, marquee + tickers animate once).

## Files
- `src/Components/LandingPage/LandingPage.jsx` — deleted gradient hero (~lines 18–78); new paper `grain` split hero: marigold eyebrow chip, Fraunces H1 with persimmon accent, `ShimmerButton` → `/products` + olive outline → `/categories`, `NumberTicker` stats (50K+/1M+/4.9), right bento collage (4 HomeSlick images, ink borders, rotated marigold tickets); olive promo `Marquee` tape; new "Shop by category" band rendering `CategorySlider`.
- `src/Components/LandingPage/FeaturedProducts.jsx` — Fraunces header + `Tabs` filter (All/Featured ≥4.5★/On sale), restyled bestseller banner (paper-deep, marigold ticket, persimmon price), `BlurFade`-stagger grid of existing `ProductCard` (Task 5 rebuilds it), clay empty state with reset.
- `src/Components/LandingPage/Benefit.jsx` — 4 ink-bordered cards with marigold icon chips (Truck/Headphones/RotateCcw/ShieldCheck).
- `src/Components/LandingPage/Testimonial.jsx` — paper-deep band; avatar carousel via `ui/carousel` with `trackRef` + `targetRef` prev/next; `Avatar` + marigold stars.
- `src/Components/LandingPage/NewsLetter.jsx` — olive `grain` card, paper `Input`, marigold submit, `sonner` success/error with email regex validation.
- `src/Components/HomeSlick/HomeSlick.jsx` — ink-bordered tiles, persimmon dots, ink-bordered arrows (arrows enabled per spec), fixed `autoplay_speed` → `autoplaySpeed`.
- `src/Components/CategoriesSlider/CategoriesSlider.jsx` — same slider system; responsive `slidesToShow` 6→5→4→2 (was fixed 10), ink-bordered tiles, brick error card.

## Concerns
- Newsletter uses `sonner` toast but `App.jsx` still mounts `react-hot-toast` Toaster until Task 6 swaps it — toasts will render only after Task 6. Flagged for Task 6 verification.
- `SimpleSlider` (HomeSlick) is no longer rendered on the landing page (hero now uses a static bento); kept restyled as a reusable component. If Task 5 wants a product-page carousel, it can consume it or `ui/carousel`.
- Large hero images (`laptop_12.jpg` 1.8MB, `mark-konig` 1.1MB) inflate the bundle — consider compressed variants in a later perf pass.

## Encoding fix verification (2026-10-15)
- Reviewer flagged mojibake (`Γ`/`£`/`å`) in `LandingPage.jsx` (~L585 hero sub, ~L652/658/664 alts, ~L687 marquee sep, ~L706 "View all") and `Testimonial.jsx` (~L1024 quotes). Those line numbers predate the Task 4 rebuild (file is now 162 / 120 lines).
- Byte-level check of both current files: zero `Ã`/`Â`/`�` sequences; non-ASCII lines confirmed as intended UTF-8 glyphs only — `—` (U+2014) hero sub + 4 bento alts, `✦` (U+2726) marquee separator, `→` (U+2192) "View all" link, `" "` (U+201C/U+201D) testimonial blockquote. No edits required; files already valid UTF-8.
- `npm run build` — PASS (vite v7, 2596 modules, built in ~10s; only pre-existing >500kB chunk-size warning).
- No source diff, so no new fix commit; HEAD remains `885b634`. (Requested `fix: restore utf-8 glyphs in home hero and testimonials` commit skipped — nothing to commit, working tree clean.)
