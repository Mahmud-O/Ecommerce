# Task 5 Report — Shop system + Product details

## Status
COMPLETE. Steps 1–2 implemented, `npm run build` PASS, committed.

## Commits
- `ad36dc8` — `feat: rebuild shop grids and product details` (8 files: `src/Components/Shop`, `src/Components/Categories`, `src/Components/Brands`, `src/Components/ProductDetails` incl. `ProductCard.jsx`, `src/ReusableComponents`)

## Test summary
- `npm run build` — PASS (`vite build`, `dist/` output, 12.30s / re-verified 10.61s after lint fix).
- `npm run lint` — 5 pre-existing errors remain, none from Task 5 files: `Navbar.jsx` unused `Icon` (Task 3), `ui/button.jsx` react-refresh export (Task 2), `tailwind.config.js`/`vite.config.js` `no-undef` (config). One Task 5 lint error (`ProductDetails.jsx` destructured `Icon`) was fixed and re-verified.
- Manual checks recommended for Task 6 owner: `/products` (Tabs filter / sort dropdown / filter Sheet / pagination / empty reset / skeletons), `/productDetails/:id` (gallery, qty stepper, accordion, related carousel).

## What was built
- **Step 1 — ProductCard ticket**: paper `Card` border-2 ink, 4:3 image, rotated marigold `-rotate-6` sale sticker with computed %, wishlist heart (local state), clay category label, Fraunces 1-line clamp title, marigold stars, persimmon price + strikethrough, olive Add button; hover quick-view/cart actions; `ProductCardSkeleton` export. Same `product/onQuickView/onAddToCart` props — FeaturedProducts (Task 4) stays compatible.
- **Step 2 — Shop toolbar + grids**: `ShopProducts.jsx` toolbar with `Tabs` (All/Featured/On sale), search `Input`, sort `DropdownMenu`, mobile filter `Sheet` (price radio, brand checkbox, rating, categories) mirrored in desktop sticky sidebar `Card`; `BlurFade` grid, `Pagination` (9/page), empty-state card with reset. Query/cart logic untouched (`useAllProduct`, `addProduct` + `openCart`).
- **Categories/Brands**: paper system, Fraunces headers, search filter, `BlurFade` card grids, `Skeleton` loading grids, empty-state cards with reset, olive stat chips. Brand/category query hooks untouched.
- **ProductDetails**: breadcrumb, 2-col gallery (ink-bordered main + persimmon-ring thumbnails + sale sticker) + info (stars, persimmon price, brand badge, local qty stepper, persimmon Add + olive Buy Now, trust row, meta card), `Accordion` Details/Shipping/Returns, related `ProductCard` carousel via `targetRef` pattern. Fixed pre-existing crash bugs (`currentProduct.currentProduct._id`, `currentProduct.count`) by using route `id` + local qty state; store/hook shapes unchanged.
- **Reusable Button/Badge/Input**: same prop APIs, restyled to persimmon/olive/marigold/brick variants with ink borders + persimmon focus rings.

## Concerns / notes for Task 6
- `ProductDetails` Buy Now calls `addProduct(id)` then navigates to `/cart` without awaiting — matches existing fire-and-forget pattern, but checkout owner should confirm cart timing.
- Pagination shows first 5 page buttons only; fine for current catalog size.
- Pre-existing lint errors (Navbar, ui/button, configs) left for final pass / owning tasks.

## Review fix — 2026-10-15 (`0dae6d4` — `fix: correct related add, buy race, stock label, input aria`)
- `ProductDetails.jsx`: `handleAddProduct(id, openSheet=true)` now adds the passed id (related carousel passes `product._id`; main Add passes `currentProduct._id`); Buy Now uses `addProduct(id, { onSuccess: () => navigate('/cart'), onError: () => toast.error(...) })` via `react-hot-toast` (app-wide `Toaster` pattern); availability ternary fixed to `'Out of Stock'` with `text-brick` (in-stock stays `text-olive`); qty stepper kept display-only with comment (Cart `AddProduct` mutation accepts `productId` only, no quantity — qty adjusted via `UpdateCount`).
- `Input.jsx`: accepts and spreads `...rest` onto `<input>` (before `className` so design classes preserved), restoring `aria-label` and other passthrough props.
- Verify: `npm run build` PASS (vite build, ~13.3s).
