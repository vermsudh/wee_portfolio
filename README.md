# Vanshika Verma — Portfolio Website

A premium personal portfolio for** ** **Vanshika Verma** , a content creator, social media manager and model based in New Delhi, India. Built with React, Tailwind-inspired custom CSS, and deployed on Vercel.

---

## 🌿 Live Demo

> Deploy link will appear here after Vercel deployment

---

## 📁 Project Structure

```
vanshika-portfolio/
├── public/
│   └── index.html              ← Google Fonts loaded here
├── src/
│   ├── assets/
│   │   ├── hero-bg.jpg         ← Hero full bleed photo
│   │   └── about-bg.jpg        ← About + Contact photo
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.css
│   │   ├── Brands/
│   │   │   ├── Brands.jsx
│   │   │   └── Brands.css
│   │   ├── Work/
│   │   │   ├── workData.js     ← Reel data + filter arrays
│   │   │   ├── useWork.js      ← All logic + state
│   │   │   ├── Work.jsx        ← Pure UI
│   │   │   └── Work.css
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx
│   │   │   └── Testimonials.css
│   │   ├── Contact/
│   │   │   ├── contactData.js  ← Contact info + services
│   │   │   ├── useContact.js   ← Form logic + WhatsApp
│   │   │   ├── Contact.jsx     ← Pure UI
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── App.jsx
│   └── index.js
├── README.md
└── package.json
```

---

## 🎨 Design System

### Color Palette

| Name           | Hex         | Used In                      |
| -------------- | ----------- | ---------------------------- |
| Dark Green     | `#0A3323` | Navbar, Hero, Brands, Footer |
| Moss Green     | `#839958` | About section                |
| Beige          | `#F7F4D5` | Services, Work               |
| Rosy Brown     | `#D3968C` | Contact, accents, CTAs       |
| Midnight Green | `#105666` | Experience, Testimonials     |
| Beige Warm     | `#EDE9BE` | Hover states, subtle fills   |
| Darkest Green  | `#051a11` | Footer background            |

### Page Color Scroll Flow

```
Navbar       → #0A3323  Dark Green
Hero         → #0A3323  Dark Green   (full bleed photo)
About        → #839958  Moss Green
Services     → #F7F4D5  Beige
Experience   → #105666  Midnight Green
Brands       → #0A3323  Dark Green
Work         → #F7F4D5  Beige
Testimonials → #105666  Midnight Green
Contact      → #D3968C  Rosy Brown
Footer       → #051a11  Darkest Green
```

### Typography

| Role           | Font             | Weight   | Usage                           |
| -------------- | ---------------- | -------- | ------------------------------- |
| Display / Hero | Playfair Display | 900      | Section headings                |
| Script accent  | Dancing Script   | 700      | Name, "together!", script words |
| Body / UI      | DM Sans          | 300–600 | All body copy, labels, nav      |

### Google Fonts Import (in** **`index.html`)

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Dancing+Script:wght@600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
```

---

## 🧩 Sections — Build Log

Each section below documents the design decision, layout choice and a summary of the Copilot prompt used to generate it.

---

### 1. Navbar

**Background:** Transparent → transitions to Beige** **`#F7F4D5` on scroll
**Layout:** Logo left · Nav links right · No CTA in navbar
**Key behaviour:** `useEffect` scroll listener adds** **`.solid` class at** **`scrollY > 60`

**Design decisions:**

* Starts transparent over the dark hero — cinematic feel
* "Vanshika." in Dancing Script — personal, not generic
* Rosy Brown underline animates on link hover
* Mobile hamburger toggles a dropdown menu

**Copilot prompt summary:**

```
Navbar.jsx — Fixed navbar, transparent by default.
On scroll > 60px add class "solid": beige bg,
backdrop blur 14px, dark green text.
Logo left in Dancing Script. Links right: About,
Services, Experience, Work, Contact.
No Hire Me button. Hamburger on mobile < 768px.
useEffect scroll listener, clean up on unmount.
```

---

### 2. Hero

**Background:** Full bleed photo (`hero-bg.jpg`) with layered dark gradients
**Layout:** Content bottom-left · Photo fills full viewport
**Key behaviour:** CSS** **`zoomOut` animation on load, staggered** **`riseUp` text animations

**Design decisions:**

* Full bleed chosen over split layout — photo's dark background was a natural canvas
* "VANSHIKA" in Playfair Display 900 weight, "Verma" in Dancing Script Rosy Brown
* Tagline:** ***"Turning brands into stories — and feeds into experiences."*
* Scroll indicator right, social links bottom left, location tag top right
* Navbar transitions from transparent to beige as user scrolls off hero

**Copilot prompt summary:**

```
Hero.jsx — Full viewport section, align-items flex-end.
Import heroBg from assets. div.hero-bg uses inline
style backgroundImage. Layered gradients overlay:
left-to-right dark green 90%→transparent,
bottom-to-top near black 95%→transparent,
top vignette. Staggered riseUp animations:
eyebrow 0.3s, hi 0.42s, name-v 0.52s,
name-r 0.62s. CTAs: Hire Me (rosy) + View Work (ghost).
```

---

### 3. About

**Background:** Moss Green** **`#839958`
**Layout:** 3-column grid — Left text | Center photo | Right text
**Key behaviour:** IntersectionObserver scroll reveal, staggered delays

**Design decisions:**

* Center photo chosen over left/right split — unique, magazine-like
* Photo uses arch/oval border-radius with dashed decorative ring
* Left column: bio + 3 stat boxes (6+ brands, 8.0 CGPA, 2+ years)
* Right column: brand journey paragraph + 6 trait tags
* Rosy Brown "Available for Collabs" pill badge at photo bottom

**Photo used:** Garden café photo (warm, natural, lifestyle feel)

**Copilot prompt summary:**

```
About.jsx — 3-column grid: 1fr auto 1fr.
Import aboutImg from assets. Center column has
photo 320x430px, border-radius 180px 180px 120px 120px,
dashed ring via ::before. Left text-align right,
right text-align left. IntersectionObserver adds
"about-visible" class, triggers staggered reveals.
Left delay 0.1s, center 0.25s, right 0.4s.
```

---

### 4. Services

**Background:** Beige** **`#F7F4D5`
**Layout:** Bento Box grid — 3 columns, asymmetric card sizes
**Key behaviour:** Hover lift + border accent, scroll reveal with stagger

**Design decisions:**

* Bento chosen over carousel/editorial list for visual impact
* Card 1 (Content Creation) spans full height — hero card
* Card 4 (Modeling) spans 2 columns — wide bottom card with stat
* Each card uses a different palette color: Dark Green, Moss, Midnight, Rosy
* Decorative watermark number (01–04) in each card corner

**Card layout:**

```
┌─────────────────┬──────────┬──────────┐
│                 │ Social   │ Brand    │
│ Content Creation│ Media    │ Strategy │
│ (Dark Green)    │ (Moss)   │(Midnight)│
│ TALL            ├──────────┴──────────┤
│                 │ Modeling & On-Camera │
│                 │ (Rosy — wide)        │
└─────────────────┴─────────────────────┘
```

**Copilot prompt summary:**

```
Services.jsx — Bento grid: grid-template-columns 1.4fr 1fr 1fr,
grid-template-rows auto auto. Card-1: grid-column 1,
grid-row 1/3, bg #0A3323. Card-2: grid-column 2 row 1,
bg #839958. Card-3: grid-column 3 row 1, bg #105666.
Card-4: grid-column 2/4 row 2, bg #D3968C, flex-direction row.
IntersectionObserver adds "services-visible", stagger 0.12s.
```

---

### 5. Experience

**Background:** Midnight Green** **`#105666`
**Layout:** Vertical timeline — year column left · content right
**Key behaviour:** Hover expands bullet points + tags via** **`max-height` transition

**Design decisions:**

* Vertical timeline over cards/tabs — most readable for 6 roles
* Dot on the line glows Rosy Brown on hover with box-shadow ring
* Year text transitions from 35% opacity to Rosy Brown on hover
* Row background washes to a subtle beige tint on hover
* Company names brighten to full white on hover
* Role in Dancing Script Rosy Brown

**Companies featured:**

1. Ayuvya Ayurveda — Content & Social Media Manager
2. Remys · Paparizza · Savorworks · Jujube — Freelance SMM
3. Gharana Karigari Company — Freelance Model
4. Silvish — Fashion Model Intern
5. The Social Journey — Social Media Manager
6. The Boss Hub — Content & Social Media Marketing Intern

**Copilot prompt summary:**

```
Experience.jsx — grid-template-columns 152px 1fr.
timeline-line: position absolute left 152px,
gradient top→bottom transparent→rosy→moss→rosy→transparent.
tl-dot: position absolute right -6px top 50%.
On hover: dot glows rosy, year turns rosy,
company turns white, tl-detail: max-height 0→200px
opacity 0→1 transition 0.5s cubic-bezier(.22,.68,0,1.2).
```

---

### 6. Brands

**Background:** Dark Green** **`#0A3323`
**Layout:** Two-row animated marquee strip
**Key behaviour:** Row 1 scrolls left→right, Row 2 scrolls right→left. Hover pauses.

**Design decisions:**

* Dual reverse-direction marquee creates depth and energy
* Edge fade gradients on both sides for seamless infinite loop
* Each brand chip has: emoji icon + brand name + industry type
* Hover pauses animation, highlights brand name and turns type Rosy
* Emoji icons as placeholders — swap with real logos when available

**Brands included:** Ayuvya Ayurveda · Remys · Paparizza · Savorworks · Jujube · Gharana Karigari · Silvish · The Social Journey · The Boss Hub

**Copilot prompt summary:**

```
Brands.jsx — Define brands array with name, type, icon.
Render brands TWICE in each track for seamless loop.
marquee-track: animation marqueeLeft 28s linear infinite.
marquee-track-reverse: animation marqueeRight 22s linear infinite.
Both pause on hover. Edge fades via ::before/::after
with gradient to/from #0A3323. Width: max-content.
```

---

### 7. Work

**Background:** Beige** **`#F7F4D5`
**Layout:** Horizontal scroll strip of iPhone mockups
**Key behaviour:** Filter tabs, drag-to-scroll, tap to reveal Instagram embed

**Design decisions:**

* iPhone mockups chosen to reflect that content lives on Instagram
* Filter tabs: All · Reels · Brand Shoots · Modeling
* Dynamic Island at top of each phone mockup (CSS only)
* Tap play button → Instagram embed loads inside the phone
* Drag-to-scroll on desktop, touch-scroll on mobile
* Progress dots update as user scrolls

**Architecture — 3 files:**

* `workData.js` — reels array + filters array (data only)
* `useWork.js` — all state, refs, scroll, filter, play/close logic
* `Work.jsx` — pure UI, imports from** **`useWork`

**How to add real Instagram reels:**

```js
// In workData.js, update instaUrl for each reel:
instaUrl: "https://www.instagram.com/reel/XXXXXXXXX/"

// In useWork.js handlePlay(), replace the placeholder
// embed with the actual Instagram blockquote embed code
```

**Copilot prompt summary:**

```
workData.js — Export reels array (6 items: id, brand,
title, category, tag, labelCat, bgGradient, instaUrl)
and filters array (all, reels, brand-shoots, modeling).
useWork.js — useState activeFilter/activeReel, stripRef,
drag scroll handlers, IntersectionObserver reveal.
Work.jsx — Pure UI, maps reels, phone mockup structure,
filter tabs, arrow nav, footer CTA.
```

---

### 8. Testimonials

**Background:** Midnight Green** **`#105666`
**Layout:** Large featured hero quote + 3-card carousel below
**Key behaviour:** Carousel auto-advances every 4s, dots + arrows navigation

**Design decisions:**

* One featured testimonial commands the section — most powerful quote first
* Giant decorative** **`"` watermark in background at 6% opacity
* Rosy Brown top accent line on featured card
* Carousel auto-advances, stops at last card (no infinite loop)
* Card hover: subtle lift + rosy top trace line

**4 testimonials from:**

1. Ayuvya Ayurveda (featured hero)
2. Remys (carousel)
3. Gharana Karigari (carousel)
4. Silvish (carousel)

**Copilot prompt summary:**

```
Testimonials.jsx — testimonials array, derive featured
(featured:true) and carouselItems (featured:false).
useState current (0). Auto-advance: useEffect interval
4000ms goTo((current+1)%total), clear on unmount.
Track transform: translateX(-${current * (320+22)}px).
Dots map carouselItems, active if index===current.
```

---

### 9. Contact

**Background:** Rosy Brown** **`#D3968C`
**Layout:** Form left · Photo right (full height)
**Key behaviour:** WhatsApp button builds pre-filled message from form data

**Design decisions:**

* Rosy Brown creates warm, inviting energy for "Let's work together"
* Photo right half fades left into Rosy Brown via gradient overlay
* "Available for work" badge with pulsing green dot
* "Replies within 24hrs" badge
* Floating "New Delhi, India · Open to remote" card
* WhatsApp CTA builds message dynamically from form fields
* Quick contact links (email + phone) below form

**WhatsApp message format:**

```
Hi Vanshika! I'm {name} from {brand}.
I'm interested in {service}.
{message}
```

**Architecture — 3 files:**

* `contactData.js` — contactInfo object + services array
* `useContact.js` — formData state, handleChange, buildWhatsAppUrl, handleWhatsApp
* `Contact.jsx` — pure UI, photo with hover zoom via isHovered state

**Copilot prompt summary:**

```
contactData.js — Export contactInfo object and services array.
useContact.js — useState formData (name,brand,email,service,message).
buildWhatsAppUrl() encodes message from formData into
https://wa.me/{phoneRaw}?text={encoded}.
handleWhatsApp: e.preventDefault(), window.open url.
Contact.jsx — Pure UI, grid-template-columns 1fr 1fr,
photo backgroundImage inline style with isHovered scale.
```

---

### 10. Footer

**Background:** Darkest Green** **`#051a11`
**Layout:** 3-column compact grid — Logo/copyright left · Nav center · Social right
**Key behaviour:** Rosy Brown underline animation on nav links, arrow shift on social links

**Design decisions:**

* Single compact strip — not a tall multi-section footer
* Dancing Script logo left mirrors the Navbar
* Navigation center column with Rosy underline hover effect
* Social links right with icon + text + ↗ arrow
* Location dot pulses with CSS animation

**Copilot prompt summary:**

```
Footer.jsx — Single footer-inner div, display grid
grid-template-columns 1fr 1fr 1fr. Left: logo,
copyright, location with pulsing dot. Center: nav
label + 5 nav links with ::after underline animation.
Right: social label + 4 links (Instagram, YouTube,
Email, Phone) with icon + text + arrow, align right.
```

---

## 🚀 App.jsx — Final Component Order

```jsx
import Navbar       from './components/Navbar/Navbar'
import Hero         from './components/Hero/Hero'
import About        from './components/About/About'
import Services     from './components/Services/Services'
import Experience   from './components/Experience/Experience'
import Brands       from './components/Brands/Brands'
import Work         from './components/Work/Work'
import Testimonials from './components/Testimonials/Testimonials'
import Contact      from './components/Contact/Contact'
import Footer       from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Brands />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x"
  }
}
```

No external UI libraries. All styling is custom CSS.

---

## 🔧 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/vanshika-portfolio.git
cd vanshika-portfolio

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## 📸 Adding Real Assets

### Hero Photo

```
Drop file → src/assets/hero-bg.jpg
```

### About / Contact Photo

```
Drop file → src/assets/about-bg.jpg
```

### Brand Logos (when available)

```js
// In Brands.jsx, update the brands array:
{ name: "Ayuvya Ayurveda", type: "Wellness", icon: "/assets/logos/ayuvya.png" }

// Update the render inside brand chip from:
<span>{brand.icon}</span>
// To:
<img src={brand.icon} alt={brand.name} />
```

### Instagram Reels (when available)

```js
// In workData.js, update each reel's instaUrl:
instaUrl: "https://www.instagram.com/reel/XXXXXXXXX/"
```

---

## 🌐 Deploying to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

Or connect the GitHub repo directly on** **[vercel.com](https://vercel.com/) for automatic deployments on every push.

---

## ✦ To Do

* [ ] Add real Instagram reel URLs in** **`workData.js`
* [ ] Replace emoji icons with real brand logos in** **`Brands.jsx`
* [ ] Add real testimonial quotes from brand managers
* [ ] Set up custom domain on Vercel
* [ ] Add** **`meta` SEO tags in** **`index.html`
* [ ] Add Open Graph image for social sharing
* [ ] Test on mobile devices (iOS Safari + Android Chrome)
* [ ] Add Google Analytics or Vercel Analytics

---

## 👨‍💻 Built By

**Sudhanshu** — for his sister Vanshika Verma 🌿

---

## 📄 License

© 2026 Vanshika Verma. All rights reserved.
