# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Vanshika Verma's Portfolio** — a premium single-page portfolio website showcasing content creation, social media management, and modeling work. Built with React 19, Vite, and custom CSS. Deployed on Vercel with analytics tracking.

## Quick Commands

```bash
npm run dev        # Start local dev server (http://localhost:5173)
npm run build      # Build production bundle to /dist
npm run lint       # Run ESLint check
npm run preview    # Preview production build locally
npm run deploy     # Deploy to GitHub Pages (gh-pages)
```

## Architecture Overview

### Component Structure

The site is a single-page app with 10 sequential sections imported and rendered in `App.jsx`:

```
Navbar → Hero → About → Services → Experience → Brands → Work → Testimonials → Contact → Footer
```

Each section is a self-contained component folder with `.jsx` file + `.css` file. Most are simple UI components; **Work** and **Contact** follow a special 3-file pattern:

#### 3-File Pattern (Work & Contact)

For complex components with significant state and logic:

- **`ComponentData.js`** — Pure data: static arrays, config objects, constants
- **`useComponent.js`** — Custom hook: all state management, event handlers, business logic
- **`Component.jsx`** — Pure UI: renders JSX, imports from the hook, no logic
- **`Component.css`** — Styling

Example: `src/components/Work/` contains:
- `workData.js` — Reels array + filter options
- `useWork.js` — Filter state, drag scroll, play/close handlers
- `Work.jsx` — iPhone mockup UI, maps reels + filters
- `Work.css` — Styling

**When to use this pattern:** If a component will have more than ~50 lines of logic or state management, split it into the 3-file pattern.

### Design System

**7-Color Palette** (Semantic color mapping per section):
- `#0A3323` Dark Green — Navbar, Hero, Brands
- `#839958` Moss Green — About
- `#F7F4D5` Beige — Services, Work
- `#D3968C` Rosy Brown — Contact, accents, CTAs
- `#105666` Midnight Green — Experience, Testimonials
- `#EDE9BE` Beige Warm — Hover states
- `#051a11` Darkest Green — Footer

**Typography** (loaded from Google Fonts in `index.html`):
- **Playfair Display 900** — Section headings (hero, feature titles)
- **Dancing Script 700** — Name, accents, script elements
- **DM Sans 300–600** — Body copy, UI labels, navigation

### Key UI Patterns

#### Scroll Reveal with IntersectionObserver
Many components use `IntersectionObserver` to trigger animations on scroll. Pattern:
1. Add `ref` to container in JSX
2. In `useEffect`, create observer that adds `.visible` class when element enters viewport
3. CSS defines animation keyed on `.visible` selector with staggered delays for child elements

**Example:** About section reveals left, center, right columns at 0.1s, 0.25s, 0.4s delays.

#### CSS Grid Layouts
- **Services**: Bento grid with asymmetric card sizes (card 1 spans 2 rows, card 4 spans 2 columns)
- **Experience**: 2-column grid (year left, content right) with absolute-positioned timeline line
- **Contact**: 2-column split (form left, photo right)

#### Hover Animations
Hover states use CSS transitions on:
- `max-height` for expanding detail sections (Experience)
- `transform: scale()` for lift effects (Services cards)
- `color` transitions for text highlights (Navbar, Footer)
- `box-shadow` for glows (Experience timeline dot)

### Important Implementation Details

#### Brands Marquee (Dual-Direction Scroll)
`Brands.jsx` renders brands **twice** in each track for infinite-loop effect. Two marquee tracks scroll in opposite directions via CSS animation—pause on hover stops both.

#### Work Filter + Horizontal Scroll
- Filter state controls which reels render
- Horizontal scroll is drag-enabled on desktop (via `useRef` + mouse/touch event handlers)
- iPhone mockup structure includes CSS-only Dynamic Island
- Tap to play loads Instagram embed inside the phone mockup

#### Experience Timeline
- Vertical line drawn via `:before` pseudo-element with gradient (transparent → rosy → moss → rosy → transparent)
- Dots positioned absolute, glow on hover
- Detail sections (bullets + tags) use `max-height: 0 → 200px` transition on hover for smooth expand

#### Navbar Links (`NAV_LINKS` in `Navbar.jsx`)
The desktop link list and mobile drawer are both driven by a single `NAV_LINKS` array — keep it in sync with every section's `id` in `App.jsx`. Current list (page order): About, Services, Experience, Brands, Work, Testimonials, Contact. The logo links to `#hero` and serves as the implicit "Home" link, so Hero has no separate nav entry.

**Gotcha — `.navbar` requires `box-sizing: border-box`:** `.navbar` uses `width: 100%` plus `padding: 0 4.5%`. Without `box-sizing: border-box`, the padding adds *on top of* the 100% width, rendering the bar ~9% wider than the viewport. Because the link `<ul>` is right-aligned via `justify-content: space-between`, that overflow pushes the rightmost links (e.g. Contact) off-screen — invisible, with no scrollbar to reach them, since `position: fixed` elements don't register in `document.scrollWidth`. This was the real root cause of a "missing nav buttons" bug (confirmed via Playwright at 1024–1920px viewports) and is easy to silently reintroduce if `box-sizing` is removed or overridden on `.navbar`.

#### Contact WhatsApp Integration
`useContact.js` builds a pre-filled WhatsApp message URL:
```
Hi Vanshika! I'm {name} from {brand}.
I'm interested in {service}.
{message}
```
Encodes via `encodeURIComponent()` into `https://wa.me/{phoneRaw}?text={encoded}`.

Phone number stored in `contactData.js` — update when contact details change.

### Styling Notes

- **No CSS framework** — all custom CSS
- **No CSS-in-JS** — separate `.css` files per component
- **Global styles** in `src/index.css` (resets, fonts, base utilities)
- **CSS animations** defined in component CSS files; keyframes for stagger reveals, zoom, fade
- **Responsive design** — mobile-first approach with comprehensive breakpoints at 320px, 375px, 480px, 768px, 1024px, 1280px, 1600px

#### Responsive Breakpoints Strategy
All 10 component CSS files include optimized media queries:
- **≤375px** — Extra-small phones (iPhone SE) — minimal padding, scaled typography
- **≤480px** — Small phones — tighter spacing, optimized component sizing
- **768px–1024px** — Tablets — intermediate layouts (e.g., Services bento grid switches from 3-col to 2-col, Work phone mockup scales to 200px)
- **≥1025px** — Desktop — full-width layouts with generous spacing

**Critical responsive fixes (June 2026):**
- Removed `min-height: 100vh` from Contact section (was causing overflow on mobile)
- Services bento grid adapts: 3-column → 2-column → 1-column
- Work phone mockup scales: 220px (desktop) → 200px (tablet) → 160px (mobile)
- All touch targets (buttons, links) guaranteed ≥44px height on mobile
- No horizontal scrollbar on any breakpoint
- Experience timeline left-offset and text scale for tablets

### External Dependencies

- **framer-motion** — Not heavily used; imported but consider leveraging for animation sequences
- **@emailjs/browser** — Contact form email delivery (requires API key setup in `.env` or component)
- **react-icons** — Icon library (imported for social links, etc.)
- **@vercel/analytics** — Vercel analytics integration (enabled in `App.jsx`)
- **@vercel/speed-insights** — Performance monitoring (currently commented out in `App.jsx`)

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main entry, imports all 10 sections |
| `src/index.css` | Global styles, Google Fonts import, resets |
| `src/components/Work/workData.js` | Instagram reel URLs + filter config (placeholders) |
| `src/components/Contact/contactData.js` | Contact info, services, WhatsApp phone number |
| `vite.config.js` | Vite configuration, base path |
| `package.json` | Dependencies, scripts, build config |

## Common Tasks

### Add a New Section
1. Create folder `src/components/SectionName/`
2. Create `SectionName.jsx` + `SectionName.css`
3. Import in `App.jsx` and add to component order
4. If complex state: follow 3-file pattern with `Data.js` + `useSection.js`

### Update Colors
Search for hex color values in component `.css` files. Update both the CSS and any corresponding color comments in the README's color palette section.

### Add Instagram Reels
In `src/components/Work/workData.js`, update the `instaUrl` field for each reel object with actual Instagram URL (e.g., `https://www.instagram.com/reel/XXXXXXXXX/`). The embed will load inside the iPhone mockup on click.

### Update Contact Info
Edit `src/components/Contact/contactData.js`:
- `contactInfo` object — phone, email, location
- `services` array — service options in form dropdown
- Update WhatsApp phone number (stored raw, formatted on use)

### Replace Placeholder Brand Logos
In `src/components/Brands/Brands.jsx`, brands array currently uses emoji icons. Replace `icon` property with image paths and update render to use `<img>` instead of `<span>`.

## Development Notes

### Responsive Testing
Before merging CSS changes, verify all breakpoints using browser DevTools:
```
Widths to test: 320px, 375px, 480px, 768px, 1024px, 1280px, 1600px
Check: no horizontal scrolling, touch targets ≥44px, proper text scaling
```

Use Chrome DevTools device toolbar or responsive design mode to test:
- iPhone SE (375px)
- iPhone 12/13 (390px)
- Pixel 5 (393px)
- iPad (768px landscape)
- Desktop (1280px+)

**Key responsive patterns in each component:**
- **Navbar**: Hamburger shown on mobile, desktop nav hidden. `.navbar` must keep `box-sizing: border-box` — see warning below.
- **Hero**: Text scales with clamp(), CTAs stack on mobile, location/scroll hints hidden
- **About**: 3-column grid → 1-column, photo responsive scaling
- **Services**: 3-column bento → 2-column (tablet) → 1-column (mobile)
- **Experience**: Timeline left-offset adjusts per breakpoint
- **Brands**: Marquee edge fades narrow on mobile
- **Work**: Phone mockup scales 220px → 200px → 160px, filters wrap
- **Testimonials**: Featured card + carousel layout adapts
- **Contact**: 2-column grid → 1-column stacked layout
- **Footer**: 3-column grid → 1-column on mobile

### No Tests
This project has no test suite. If adding one, consider:
- Unit tests for custom hooks (`useWork`, `useContact`)
- Integration tests for form submission flow
- Visual regression tests for animations (given custom CSS focus)
- Responsive layout snapshot tests using tools like Percy or Chromatic

### Debugging Layout Bugs — Verify Live, Don't Just Read CSS
Static code review can miss real rendering bugs (e.g. the Navbar `box-sizing` issue above — the CSS rule order looked correct on paper, but elements were actually clipping off-screen). When a layout bug is reported, prefer verifying against the actual rendered page over reasoning from source alone:
1. Run `npm run dev`
2. Drive a headless browser against it (`npx --yes playwright install chromium` if not already installed, then a small Node script using `playwright`'s `chromium.launch()`)
3. Check real `getBoundingClientRect()` / `getComputedStyle()` values at the specific viewport widths in question, not just `isVisible()` — an element can be "visible" (rendered, not `display:none`) while still positioned outside the viewport bounds and unreachable.

### EmailJS Setup Required
Contact form uses EmailJS for email delivery. Ensure API key is configured before deploying to production.

### Mobile-First Testing
Given portfolio focus on mobile work (Instagram reels, modeling), test extensively on iOS Safari and Android Chrome. Horizontal scroll strip (Work section) and touch interactions need special attention. All form inputs and buttons have been optimized for touch (min 44px).

### Asset Paths
- Hero background: `src/assets/hero-bg.jpg`
- About/Contact background: `src/assets/about-bg.jpg`
- Brand logos: Should live in `src/assets/logos/` when available

## Deployment

Deployed via Vercel with:
- Analytics enabled (`@vercel/analytics`)
- Speed Insights available (currently commented out)
- Custom domain ready (update in Vercel dashboard)

Build runs `npm run build` → outputs to `/dist` → deployed as static site.

### Responsive Deployment Verification
After pushing CSS changes:
1. Run `npm run build` and `npm run preview` locally to test production bundle
2. Test at multiple breakpoints in DevTools to confirm no regressions
3. Deploy to Vercel and test on actual mobile devices (iOS Safari, Chrome mobile)
4. Check Vercel Analytics dashboard for Core Web Vitals on mobile
5. Use Lighthouse audit on mobile view to check performance impact of responsive changes
