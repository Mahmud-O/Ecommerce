# Ecommerce Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the general-store ecommerce UI A-to-Z on Warm Editorial Bazaar system with shadcn + 4 Magic UI primitives, no logic changes.

**Architecture:** Keep Vite + React 18 routes/store/query; replace tokens in `src/index.css`, add shadcn components under `src/Components/ui/`, vendor Magic UI under `src/Components/magic/`, then restyle Shell → Home → Shop → Product → Cart/Checkout → Auth/static.

**Tech Stack:** React 18.3, Vite 7, Tailwind 3.4, shadcn new-york, Radix, framer-motion, react-router-dom 7, Redux Toolkit, React Query 5, Formik+Yup.

## Global Constraints

- Light-only theme, no dark mode in this scope.
- No purple/blue gradients, no indigo-600 primary, no Inter-as-display.
- Tokens exact: paper #FAF6F0, paper-deep #F1E9DB, ink #191410, persimmon #E4572E, olive #223726, marigold #FFB627, clay #E7DDCB, brick #C1272D.
- Fonts exact: display `Fraunces`, body `Space Grotesk` via `index.html` link.
- Magic UI limited to: marquee, blur-fade, shimmer-button, number-ticker.
- New dep allowed: `framer-motion` only; no backend/API/store-shape changes.
- Routes in `src/App.jsx:25-42` preserved; ProtectedRoute/RedirectIfAuthenticated unchanged.
- Verify each task with `npm run build` and `npm run lint`.

---

## File Structure

- Modify: `index.html` — add Fraunces + Space Grotesk links.
- Modify: `src/index.css` — paper/ink/persimmon/olive/marigold/clay/brick vars, font vars, grain, hard-shadow utilities; remove `bg-gray-100` body and `.active #584deb`.
- Modify: `tailwind.config.js` — map `font-display`, `font-sans`, `colors.paper/persimmon/olive/marigold/clay/ink` to CSS vars.
- Verify: `src/lib/utils.js` — exports `cn`; `jsconfig.json` `@/*` already maps to `src/*`.
- Create: `src/Components/ui/card.jsx`, `badge.jsx`, `input.jsx`, `skeleton.jsx`, `separator.jsx`, `tabs.jsx`, `dropdown-menu.jsx`, `dialog.jsx`, `carousel.jsx`, `pagination.jsx`, `accordion.jsx`, `avatar.jsx`, `sonner.jsx` (keep existing `button.jsx`, `sheet.jsx`).
- Create: `src/Components/magic/marquee.jsx`, `blur-fade.jsx`, `shimmer-button.jsx`, `number-ticker.jsx`.
- Modify: `src/Components/Navbar/Navbar.jsx`, `src/Components/Layout/Layout.jsx`, `src/Components/Footer/Footer.jsx`, `src/Components/CartDrawer/Drawer.jsx`.
- Modify: `src/Components/LandingPage/LandingPage.jsx`, `FeaturedProducts.jsx`, `Benefit.jsx`, `Testimonial.jsx`, `NewsLetter.jsx`, `src/Components/HomeSlick/HomeSlick.jsx`, `src/Components/CategoriesSlider/CategoriesSlider.jsx`.
- Modify: `src/Components/Shop/ShopProducts.jsx`, `src/Components/Categories/Categories.jsx`, `src/Components/Brands/Brands.jsx`, `src/Components/ProductDetails/ProductDetails.jsx`, `ProductCard.jsx`.
- Modify: `src/Components/ConfirmationPage/ConfirmationPage.jsx`, `src/Components/PaymentPages/CheckOut.jsx`.
- Modify: `src/Components/Login/Login.jsx`, `src/Components/Register/Register.jsx`, `src/Components/About/About.jsx`, `src/Components/Contact/Contact.jsx`, `src/Components/NotFound/NotFound.jsx`, `src/Components/Loader/ScaleLoader.jsx`, `src/Components/Error/Error.jsx`, `src/ReusableComponents/Button.jsx`, `Badge.jsx`, `Input.jsx`.

---

### Task 1: Design tokens + fonts + Tailwind wiring

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`
- Modify: `tailwind.config.js`
- Test: manual `npm run build`

**Interfaces:**
- Consumes: nothing.
- Produces: CSS vars `--paper --ink --persimmon --olive --marigold --clay --brick`, classes `bg-paper text-ink bg-persimmon bg-olive text-marigold border-clay font-display`.

- [ ] **Step 1: Add font links to index.html**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Edit `index.html` head after `<title>Ecommerce</title>` to insert the three lines above.

- [ ] **Step 2: Replace tokens in src/index.css**

Replace the entire `@layer base` `:root` block with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --paper: #FAF6F0;
    --paper-deep: #F1E9DB;
    --ink: #191410;
    --persimmon: #E4572E;
    --olive: #223726;
    --marigold: #FFB627;
    --clay: #E7DDCB;
    --brick: #C1272D;
    --background: 40 33% 97%;
    --foreground: 20 20% 8%;
    --card: 40 33% 97%;
    --card-foreground: 20 20% 8%;
    --primary: 14 77% 54%;
    --primary-foreground: 40 33% 97%;
    --secondary: 140 25% 17%;
    --secondary-foreground: 40 33% 97%;
    --accent: 40 100% 57%;
    --accent-foreground: 20 20% 8%;
    --muted: 38 30% 89%;
    --muted-foreground: 20 10% 35%;
    --border: 38 30% 82%;
    --input: 38 30% 82%;
    --ring: 14 77% 54%;
    --destructive: 2 66% 44%;
    --destructive-foreground: 40 33% 97%;
    --radius: 1rem;
    --font-display: "Fraunces", Georgia, serif;
    --font-sans: "Space Grotesk", system-ui, sans-serif;
  }
  body { @apply bg-[#FAF6F0] text-[#191410]; font-family: var(--font-sans); }
  .font-display { font-family: var(--font-display); }
  * { @apply border-border; }
  .active { @apply text-[#E4572E] underline underline-offset-4; }
  .hard-shadow { box-shadow: 4px 4px 0 #191410; }
  .hard-shadow-sm { box-shadow: 2px 2px 0 #191410; }
  .grain::after { content:""; position:absolute; inset:0; pointer-events:none; opacity:.05; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E"); }
}
```

Delete old `--background: 0 0% 100%` neutral ramp and `.active { @apply text-[#584deb]; }` and `body { @apply bg-gray-100 }`.

- [ ] **Step 3: Extend tailwind.config.js theme**

In `tailwind.config.js` inside `theme.extend`, add:

```js
fontFamily: {
  display: ['Fraunces', 'Georgia', 'serif'],
  sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
},
colors: {
  paper: '#FAF6F0',
  'paper-deep': '#F1E9DB',
  ink: '#191410',
  persimmon: '#E4572E',
  olive: '#223726',
  marigold: '#FFB627',
  clay: '#E7DDCB',
  brick: '#C1272D',
},
```

Keep existing `borderRadius` and shadcn `background/foreground/card/primary` mappings.

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: `vite build` completes with `dist/` output, no CSS errors.

- [ ] **Step 5: Commit**

```bash
git add index.html src/index.css tailwind.config.js
git commit -m "feat: add warm editorial bazaar tokens and fonts"
```

---

### Task 2: shadcn core + Magic UI primitives

**Files:**
- Create: `src/Components/ui/card.jsx`, `badge.jsx`, `input.jsx`, `skeleton.jsx`, `separator.jsx`, `tabs.jsx`, `dropdown-menu.jsx`, `dialog.jsx`, `carousel.jsx`, `accordion.jsx`, `pagination.jsx`, `avatar.jsx`, `sonner.jsx`
- Create: `src/Components/magic/marquee.jsx`, `blur-fade.jsx`, `shimmer-button.jsx`, `number-ticker.jsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: Task 1 tokens (`bg-paper`, `text-ink`, `font-display`).
- Produces: `Card`, `Badge`, `Input`, `Skeleton`, `Tabs`, `Marquee`, `BlurFade`, `ShimmerButton`, `NumberTicker` for Tasks 3-7.

- [ ] **Step 1: Install missing Radix deps + framer-motion**

Run: `npm i framer-motion @radix-ui/react-tabs @radix-ui/react-dropdown-menu @radix-ui/react-dialog @radix-ui/react-separator @radix-ui/react-avatar @radix-ui/react-accordion sonner`
Expected: `package.json` updated, no peer errors.

- [ ] **Step 2: Add shadcn card with ink border + hard shadow**

Create `src/Components/ui/card.jsx`:

```jsx
import * as React from "react"
import { cn } from "@/lib/utils"
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-2xl border-2 border-ink bg-paper text-ink shadow-sm", className)} {...props} />
))
Card.displayName = "Card"
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5", className)} {...props} />
))
CardContent.displayName = "CardContent"
export { Card, CardContent }
```

Create `badge.jsx`, `input.jsx`, `skeleton.jsx`, `separator.jsx` with same border-2 ink language (badge persimmon/olive/marigold variants; input paper bg ink border focus persimmon ring; skeleton clay pulse).

- [ ] **Step 3: Vendor Magic UI marquee + blur-fade (recolored)**

Create `src/Components/magic/marquee.jsx`:

```jsx
import { cn } from "@/lib/utils"
export function Marquee({ className, children, repeat = 2 }) {
  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      {Array.from({ length: repeat }).map((_, i) => (
        <div key={i} className="flex shrink-0 animate-[marquee_22s_linear_infinite] items-center gap-8 pr-8">
          {children}
        </div>
      ))}
    </div>
  )
}
```

Add `@keyframes marquee { to { transform: translateX(-100%); } }` to `src/index.css` utilities layer in this task.

Create `blur-fade.jsx` using framer-motion `motion.div` with `initial={{opacity:0, y:16, filter:"blur(6px)"}}` `whileInView` to visible; delay prop.

Create `shimmer-button.jsx` (persimmon bg, paper text, marigold sweep) and `number-ticker.jsx` (olive numerals counting via framer-motion `useSpring`).

- [ ] **Step 4: Verify**

Run: `npm run build`
Expected: PASS. Run: `npm run lint`
Expected: no new errors in `src/Components/ui/*`.

- [ ] **Step 5: Commit**

```bash
git add src/Components/ui src/Components/magic src/index.css package.json
git commit -m "feat: add shadcn core and magic ui primitives"
```

---

### Task 3: Shell — Navbar, Layout, Footer, Cart sheet

**Files:**
- Modify: `src/Components/Navbar/Navbar.jsx`
- Modify: `src/Components/Layout/Layout.jsx`
- Modify: `src/Components/Footer/Footer.jsx`
- Modify: `src/Components/CartDrawer/Drawer.jsx`
- Test: `npm run build`, manual `/` header/footer/cart open

**Interfaces:**
- Consumes: Task 2 `Sheet`, `Badge`, `Input`, `Marquee`, `Button`.
- Produces: Shell layout used by all routes.

- [ ] **Step 1: Rewrite Navbar with promo tape + ink header**

In `src/Components/Navbar/Navbar.jsx`: top olive tape with `Marquee` promos ("Free shipping over $75 • New souq drop weekly"), main bar paper/90 blur border-b-2 border-ink, left Fraunces wordmark `souq<span class=text-persimmon>.</span>`, center links (Home, Shop, Categories, Brands, About, Contact) with `.active` persimmon, right search `Input`, account `DropdownMenu`, cart `Sheet` trigger with persimmon count `Badge`. Mobile hamburger opens left `Sheet`. No gradients.

- [ ] **Step 2: Update Layout + Footer + Drawer to system**

`Layout.jsx`: wrap `<Outlet/>` in `bg-paper text-ink font-sans min-h-screen`, include Navbar + Footer.
`Footer.jsx`: olive bg paper text, 4 columns (Shop, Company, Support, newsletter Input + marigold button), bottom payment row.
`Drawer.jsx`: shadcn `Sheet` right panel, clay item rows, olive free-shipping progress bar, persimmon Checkout CTA linking to `/checkOut`.

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: PASS. Open `/`: header tape scrolls, cart sheet opens, footer olive.

- [ ] **Step 4: Commit**

```bash
git add src/Components/Navbar/Navbar.jsx src/Components/Layout/Layout.jsx src/Components/Footer/Footer.jsx src/Components/CartDrawer/Drawer.jsx
git commit -m "feat: rebuild shell navbar footer cart sheet"
```

---

### Task 4: Home — hero, brands, featured, bento, testimonials

**Files:**
- Modify: `src/Components/LandingPage/LandingPage.jsx`, `FeaturedProducts.jsx`, `Benefit.jsx`, `Testimonial.jsx`, `NewsLetter.jsx`
- Modify: `src/Components/HomeSlick/HomeSlick.jsx`, `src/Components/CategoriesSlider/CategoriesSlider.jsx`
- Test: `npm run build`, manual `/`

**Interfaces:**
- Consumes: Tasks 1-2 tokens, `BlurFade`, `ShimmerButton`, `NumberTicker`, `Marquee`, `Card`.
- Produces: Home composition.

- [ ] **Step 1: Replace gradient hero with editorial split hero**

In `LandingPage.jsx` delete `bg-gradient-to-br from-indigo-900 via-purple-700` section (`LandingPage.jsx:18-78`) and write: paper `grain` section, left eyebrow marigold chip "New season souq drop", Fraunces H1 "Everything you love, souq-fresh daily.", Space Grotesk sub, `ShimmerButton` Shop Now → `/products` + olive outline Explore → `/categories`, `NumberTicker` stats 50K+/1M+/4.9. Right bento collage reusing `HomeSlick` images in 2-large + 2-small ink-bordered tiles with rotated marigold price tickets.

- [ ] **Step 2: Restyle sections to system**

`FeaturedProducts.jsx`: section title Fraunces + tabs filter, grid `BlurFade` stagger `Card`s with persimmon price ticket.
`Benefit.jsx`: 4 marigold icon chips (Truck/Shield/Refresh/Headset).
`Testimonial.jsx`: paper-deep band, avatar carousel.
`NewsLetter.jsx`: olive card, paper text, marigold submit, sonner success.
Sliders: dots persimmon, arrows ink bordered.

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: PASS. Check `/` at 1440 + 390: no purple, hero readable, marquee + tickers animate once.

- [ ] **Step 4: Commit**

```bash
git add src/Components/LandingPage src/Components/HomeSlick src/Components/CategoriesSlider
git commit -m "feat: rebuild home editorial hero and sections"
```

---

### Task 5: Shop system + Product details

**Files:**
- Modify: `src/Components/Shop/ShopProducts.jsx`, `src/Components/Categories/Categories.jsx`, `src/Components/Brands/Brands.jsx`
- Modify: `src/Components/ProductDetails/ProductDetails.jsx`, `ProductCard.jsx`
- Modify: `src/ReusableComponents/Button.jsx`, `Badge.jsx`, `Input.jsx`
- Test: `npm run build`, manual `/products`, `/productDetails/1`

**Interfaces:**
- Consumes: Tasks 1-3 `Card/Badge/Tabs/Dropdown/Skeleton/Pagination/Accordion`.
- Produces: Pluggable `ProductCard` used by shop/featured/related.

- [ ] **Step 1: Build ProductCard ticket component**

Rewrite `ProductCard.jsx` as paper `Card` border-2 ink: 4:3 image, rotated sale sticker (marigold, `-rotate-6`), wishlist heart top-right, clay category label, Fraunces title 1-line clamp, marigold stars, persimmon price + muted strikethrough, olive Add button. Skeleton variant with `Skeleton` blocks.

- [ ] **Step 2: Rebuild shop toolbar + grids + product page**

`ShopProducts.jsx` + `Categories.jsx` + `Brands.jsx`: toolbar with `Tabs` (All/Featured/On sale), sort `DropdownMenu`, filter `Sheet` (price radio, brand checkbox, rating), `BlurFade` grid of `ProductCard`, `Pagination` bottom, empty state card with reset.
`ProductDetails.jsx`: breadcrumb, 2-col gallery + info (qty stepper, persimmon Add + olive Buy, trust row), `Accordion` Details/Shipping/Returns, related `ProductCard` carousel. Reusable `Button/Badge/Input` re-export shadcn variants in persimmon/olive.

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: PASS. Filter/sort updates grid; product page accordion opens; skeletons show on slow query.

- [ ] **Step 4: Commit**

```bash
git add src/Components/Shop src/Components/Categories src/Components/Brands src/Components/ProductDetails src/ReusableComponents
git commit -m "feat: rebuild shop grids and product details"
```

---

### Task 6: Cart, Checkout, Auth, static + final pass

**Files:**
- Modify: `src/Components/ConfirmationPage/ConfirmationPage.jsx`, `src/Components/PaymentPages/CheckOut.jsx`
- Modify: `src/Components/Login/Login.jsx`, `src/Components/Register/Register.jsx`, `src/Components/About/About.jsx`, `src/Components/Contact/Contact.jsx`, `src/Components/NotFound/NotFound.jsx`, `src/Components/Loader/ScaleLoader.jsx`, `src/Components/Error/Error.jsx`
- Test: `npm run build`, `npm run lint`, full 12-route pass

**Interfaces:**
- Consumes: all prior tasks.
- Produces: shippable redesign.

- [ ] **Step 1: Stepped cart + checkout**

`ConfirmationPage.jsx`: 3-step indicator (Cart > Details > Done), line items clay cards with steppers, order summary sticky `Card` with olive progress + persimmon CTA.
`CheckOut.jsx`: keep Formik+Yup + Redux submit, restyle to 2-col (form `Input`s + summary), sonner success, brick inline errors.

- [ ] **Step 2: Auth + static + system states**

`Login/Register`: centered paper card hard-shadow, OAuth buttons, divider, shadcn inputs.
`About/Contact`: hero Fraunces + olive stats + form card.
`NotFound`: Fraunces 404 + Shop CTA. `ScaleLoader`: marigold pulse dots (replace spinner). `Error`: brick card retry. Swap `react-hot-toast Toaster` for `sonner Toaster` in `App.jsx` (keep import path, position bottom-right, richColors off to keep palette).

- [ ] **Step 3: Final verification**

Run: `npm run build`
Expected: PASS. Run: `npm run lint`
Expected: zero errors. Visit `/`, `/products`, `/categories`, `/brands`, `/productDetails/:id`, `/cart`, `/checkOut`, `/login`, `/register`, `/about`, `/contact`, `/404` at 1440 + 390; keyboard tab shows persimmon ring; no purple gradients remain (search `from-indigo via-purple` returns nothing).

- [ ] **Step 4: Commit**

```bash
git add src/Components/ConfirmationPage src/Components/PaymentPages src/Components/Login src/Components/Register src/Components/About src/Components/Contact src/Components/NotFound src/Components/Loader src/Components/Error src/App.jsx
git commit -m "feat: rebuild cart checkout auth static and final pass"
```
