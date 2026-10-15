# Ecommerce A-to-Z Redesign — Design Spec
Date: 2026-10-15
Status: Approved (creative palette revision)
Scope: General store | Full UX rebuild + UI skin + motion (no dark mode)

## 1. Intent
Replace the generic gradient marketplace (`LandingPage.jsx:18-78` indigo-purple hero)
with a memorable, conversion-focused general store built on shadcn + Magic UI.
Keep all routes/logic in `App.jsx:25-42`, Redux `CartStore`, `AuthContext/CartProvider`,
React Query. Restyle + restructure UX only.

## 2. Creative Direction (NO AI palette)
Name: **Warm Editorial Bazaar** — paper-market meets editorial print.
Explicitly avoids: purple/blue gradients, indigo-600 primary, slate generic,
Inter-as-display, glassmorphism spam.

Palette (CSS vars, light only):
- `--paper`: #FAF6F0 (page bg)
- `--paper-deep`: #F1E9DB (alt sections)
- `--ink`: #191410 (text / borders)
- `--persimmon`: #E4572E (primary CTA, links, active)
- `--olive`: #223726 (secondary, footer, badges)
- `--marigold`: #FFB627 (highlight, stars, ticker, sale stickers)
- `--clay`: #E7DDCB (card border, dividers)
- `--brick`: #C1272D (destructive / sale)

Typography:
- Display: `Fraunces` 600-700, tight leading, for hero + section titles + oversized numerals.
- Body/UI: `Space Grotesk` 400-600, for nav, cards, buttons, prices.
- Loaded via Google Fonts in `index.html`, wired as `--font-display` / `--font-sans`.

Texture & shape:
- 2px ink borders on cards, `rounded-2xl`, hard offset shadow `4px 4px 0 ink` on hover.
- Grain overlay (SVG noise, 4% opacity) on hero + footer.
- Ticket-notch price tags, rotated sale stickers, marquee divider tapes.
- Motion sparse: one hero entrance (Blur Fade stagger), hover lift only.

DFII: Impact 4 + Fit 5 + Feasibility 4 + Performance 4 - Risk 3 = 14 (Excellent).

## 3. Architecture
- Stack unchanged: Vite + React 18 + Tailwind 3.4 + shadcn `new-york`.
- Add shadcn: button, card, badge, input, sheet, dialog, dropdown-menu, tabs,
  skeleton, carousel, pagination, accordion, separator, avatar, sonner.
- Vendor Magic UI (no package, copy source): `marquee`, `blur-fade`,
  `shimmer-button` (recolored to persimmon/ink), `number-ticker`.
- Deps delta: add `framer-motion` only. `tailwindcss-animate` already present.
- Tokens in `src/index.css` replace `--primary: 0 0% 9%` neutral ramp with
  persimmon/olive/paper mapping + `--font-*`. Remove `bg-gray-100` body rule
  and `.active #584deb`; active = persimmon underline.
- Path alias `@/*` already in `jsconfig.json`; ensure `src/lib/utils.js` (clsx + tailwind-merge).

## 4. Pages A-to-Z
### Shell (Layout/Navbar/Footer/CartDrawer)
- Sticky top: paper/90 blur, ink border-b. Left logo (Fraunces wordmark + marigold dot),
  center `navigation-menu`, right search input, account dropdown, cart sheet trigger with count badge.
- Utility tape above nav: Marquee promos (olive bg, paper text).
- Mobile: sheet nav. Cart: shadcn `sheet` with qty steppers, free-shipping progress (olive bar).
- Footer: olive bg, paper text, 4-col mega-menu + newsletter card + payment row.

### Home `/` (LandingPage + Featured + Benefit + Testimonial + NewsLetter)
- Hero: paper bg, left Fraunces headline "Everything you love, souq-fresh daily",
  persimmon shimmer CTA + olive secondary, Number Ticker stats (50K+, 1M+, 4.9).
  Right bento collage (2 large + 2 small category tiles, hard shadows), floating price tickets.
- Brand Marquee, Featured grid (Blur Fade stagger, ticket cards), category bento,
  benefit row (Truck/Shield/Refresh/Headset icons in marigold chips),
  testimonial carousel, newsletter card (olive, marigold input button).

### Shop `/products`, `/featureProduct`, `/categories`, `/brands`
- Toolbar: tabs (All/Featured/On sale), sort dropdown, filter sheet (price, brand, rating).
- Cards: paper card, ink border, image 4:3, wishlist heart, marigold stars, persimmon price + strikethrough.
- Loading: skeleton grid. Empty: ink illustration + reset CTA. Pagination bottom.

### Product `/productDetails/:id`
- 2-col: gallery (main + thumbs, sale sticker rotated) / info (breadcrumb, title Fraunces,
  rating, ticket price, qty stepper, Add persimmon + Buy olive, trust row).
- Accordion: Details / Shipping / Returns. Related carousel.

### Cart `/cart` (ConfirmationPage) + Checkout `/checkOut`
- 3-step indicator (Cart > Details > Done). Order summary card sticky.
- Checkout form shadcn inputs, Formik+Yup retained, sonner on success.
- Empty cart state with CTA back to shop.

### Auth `/login`, `/register`
- Centered paper card, ink border + hard shadow, OAuth buttons, divider, shadcn inputs.
- `RedirectIfAuthenticated` + `ProtectedRoute` unchanged.

### Static / system
- About/Contact restyled to system. NotFound: Fraunces 404 + CTA.
- Loader -> skeletons; Error -> brick card with retry; Toaster -> sonner (olive).

## 5. Data Flow
No API/store changes. React Query for products/categories; Redux for cart;
contexts for auth/cart UI. Filter/sort local state in Shop toolbar.

## 6. Error Handling
Query error -> retry card; route error -> NotFound; form -> inline Yup errors;
cart actions -> sonner confirm; images -> clay fallback block.

## 7. Testing / Verification
`npm run build`, `npm run lint`, manual pass of 12 routes desktop (1440) + mobile (390),
keyboard focus visible (persimmon ring), contrast ink-on-paper AAA, images lazy.

## 8. Out of Scope (YAGNI)
No dark mode, no new backend, no new payment provider, no i18n, no heavy 3D/particles.
Magic UI limited to 4 primitives above to protect perf.
