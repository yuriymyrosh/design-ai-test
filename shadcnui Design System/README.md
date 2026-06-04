# shadcn/ui — Design System

A faithful, reusable recreation of the **shadcn/ui** design language (the default **Slate** theme): a clean, neutral, high-contrast component library built on Radix UI primitives and Tailwind CSS. This package gives a design agent everything needed to produce on-brand interfaces, mocks, and prototypes that read as authentic shadcn/ui.

> **What is shadcn/ui?** Not a component *dependency* but a collection of copy-paste components. Its aesthetic is deliberately understated: black-on-white, slate neutrals, tight tracking on large headings, soft borders, restrained shadows, and Lucide line icons. It has become the de-facto look of modern indie SaaS and developer tools.

## Sources

- **Figma:** *"shadcn/ui - Design System (Community)"* — a community recreation made by **@skirano**. Mounted read-only as a virtual filesystem. Pages explored: `Cover`, `Typography`, `Colors`, `Components` (27 components), `Primitives` (atomic parts), `Icons` (877 Lucide icons).
- **Canonical reference:** [ui.shadcn.com](https://ui.shadcn.com) — the live docs and component source. Where the community Figma diverged from the real library (e.g. the Switch "on" track), this system follows the canonical shadcn tokens.
- **Real assets copied out:** one avatar photo and one landscape photo (used in the Avatar + Aspect-Ratio demos) live in `assets/`.

---

## Content Fundamentals

shadcn/ui's voice (in its docs and component demo copy) is **plain, calm, and developer-direct**. There is no marketing gloss.

- **Tone:** matter-of-fact and instructional. Component descriptions are a single declarative sentence: *"Displays a button or a component that looks like a button."*, *"An image element with a fallback for representing the user."* Always present tense, always describing what the thing *is* or *does*.
- **Person:** second person ("you") in docs and form helper text — *"Enter your email address."* / *"Enter your email address."* Never "we". Microcopy speaks to the user directly and briefly.
- **Casing:** **Sentence case everywhere** — headings, buttons, labels, menu items. ("Add to library", "Airplane mode", "Are you sure absolutely sure?"). Title Case appears only in proper product names. Never ALL-CAPS in UI.
- **Buttons / actions:** short verbs — *Continue*, *Subscribe*, *Cancel*, *Login with Email*, *Add to calendar*. Destructive actions are explicit ("Delete", "Destructive").
- **Labels & helper text:** label is a terse noun ("Email", "Username"), with optional muted helper below ("Enter your email address.").
- **Demo content vibe:** playful placeholder lore — the docs typography sample is *"Taxing Laughter: The Joke Tax Chronicles"* about a king and a joke tax. This whimsy lives only in *sample* content, never in chrome or instructions.
- **Emoji:** **none.** The brand never uses emoji in UI or docs. Icons do that job.
- **Punctuation:** helper sentences end with a period; labels and buttons do not. No exclamation points in chrome.

**Rule of thumb:** if a string sounds like a product marketer wrote it, rewrite it shorter and flatter.

---

## Visual Foundations

The whole system is **monochrome-first**: black/near-black text on white, with the *slate* ramp doing all the structural work. There is **no brand hue** — color enters only as red for destructive states. (The violet `#9747FF` seen in the Figma is Figma's own annotation color for primitive frames — **not** part of the brand.)

- **Color:**
  - Surface is pure white (`--background #fff`); text is near-black slate-950 (`#020817`).
  - **Primary** is slate-900 (`#0f172a`) with slate-50 text — solid dark buttons on light ground.
  - **Secondary / muted / accent** all map to slate-100 (`#f1f5f9`) — the universal "quiet fill".
  - **Muted text** is slate-500 (`#64748b`).
  - **Borders** are slate-200 (`#e2e8f0`); **input borders** slightly darker at slate-300 (`#cbd5e1`).
  - **Destructive** is red-500 (`#ef4444`). That is essentially the only saturated color in the system.
- **Type:** **Inter** for everything; a monospace (Menlo in the Figma → JetBrains Mono / `ui-monospace` here) only for inline code. Large headings use **tight negative tracking** (-0.012em on h1, -0.007em on h2). Body is 16px with generous 28px line-height (`leading-7`). See the Typography page / `colors_and_type.css` for the full role scale.
- **Spacing:** Tailwind's 4px-based scale. Component padding clusters at 8/12/16px; gaps at 6/8/16px; section padding 24–32px. Buttons are `h-10` (40px) with `px-4` (16px); inputs match at 40px tall.
- **Corner radii:** base radius **0.5rem (8px)** for cards/popovers/dialogs; **6px** for buttons and inputs; **4px** for badges; **full** for switches, avatars, radio dots. Soft but not pill-shaped.
- **Borders:** hairline **1px solid** slate-200 is the dominant separator — on cards, inputs, dropdowns, table rows, dividers. The system leans on borders far more than on shadows.
- **Shadows:** **soft, low-spread, low-opacity** (black at 5–10%). Popovers/dropdowns/dialogs get `shadow-md`/`shadow-lg`; cards often get none and rely on a border. No colored or hard shadows, ever.
- **Backgrounds:** flat white. **No gradients, no textures, no patterns, no hero imagery** in the chrome. Photography appears only as *content* (avatar, aspect-ratio demo), never as decoration. Dialogs darken the page behind with a translucent black scrim (`bg-black/80`).
- **Transparency / blur:** sparingly — the modal overlay scrim, a 50%-opacity primary for loading/disabled buttons. No frosted-glass surfaces by default.
- **Animation:** quick and subtle. Radix-driven enter/exit — fades + small scale (0.95→1) and slide-on-side for popovers/tooltips/menus, ~150–200ms, ease-out. Accordions animate height. **No bounce, no springy overshoot, no looping/decorative motion.**
- **Hover states:** subtle. Primary button → slightly lighter (`primary/90`); ghost/outline → slate-100 fill; links → underline; rows → slate-100/50 fill. Color shifts, not movement.
- **Press / active:** no scale-down; active just holds the hover fill. Focus shows a 2px slate-900 **ring** with a 2px offset (`ring-2 ring-ring ring-offset-2`) — the focus ring is a signature detail.
- **Disabled:** 50% opacity + `cursor-not-allowed`. No desaturation tricks.
- **Cards:** white surface, 1px slate-200 border, 8px radius, optional `shadow-sm`. Header (title + muted description) / content / footer stack with 24px padding.
- **Layout:** content-width containers, left-aligned, comfortable whitespace. Forms are single-column with label-over-field. Nothing is centered except empty/auth states.

---

## Iconography

- **System:** **Lucide** ([lucide.dev](https://lucide.dev)) — the official shadcn/ui icon set. The Figma's `Icons` page contains **877** of them (`IconArrowRight`, `IconCheck`, `IconChevronDown`, `IconPlus`, `IconMail`, …), names matching Lucide 1:1.
- **Style:** outline / line icons, **2px stroke**, round caps & joins, 24×24 viewBox, drawn on a 1px grid. Currently sized 16px in buttons/inputs and 16–20px in menus. They inherit `currentColor`, so they take the text color of their context (slate-900 on light, slate-500 when muted).
- **How to use here:** link Lucide from CDN rather than hand-drawing SVGs. Either the web-font/SVG CDN or the `lucide` UMD build:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  <i data-lucide="arrow-right"></i>
  <script>lucide.createIcons();</script>
  ```
  Icon names are kebab-case of the Figma `IconXxx` component (`IconArrowRight` → `arrow-right`). The UI kit uses inline Lucide SVGs (copied paths) so previews are self-contained.
- **Emoji / unicode:** never used as iconography. All glyphs come from Lucide.

---

## Index — what's in this package

| Path | What it is |
|---|---|
| `README.md` | This file — context, content + visual foundations, iconography, index. |
| `colors_and_type.css` | All design tokens: color ramps, semantic vars, radii, shadows, type roles. **Start here when building.** |
| `SKILL.md` | Agent-Skill manifest so this folder works as a downloadable Claude skill. |
| `assets/` | Real images copied from the Figma (`avatar.jpg`, `aspect-ratio-photo.png`). |
| `preview/` | Small HTML cards that populate the Design System tab (color, type, spacing, component specimens). |
| `ui_kits/components/` | The component UI kit: `index.html` (interactive showcase) + JSX component files (Button, Input, Card, Dialog, Switch, Tabs, Dropdown, …). |

**Fonts:** **Inter** is self-hosted from the uploaded variable font files in `fonts/` (`Inter-VariableFont_opsz_wght.ttf` + the italic companion), wired via `@font-face` in `colors_and_type.css` — no CDN dependency, works offline. The monospace (JetBrains Mono, for inline code only) still loads from Google Fonts. Inter is the genuine typeface, not a substitute.
