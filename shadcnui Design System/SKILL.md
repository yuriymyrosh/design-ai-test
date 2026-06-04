---
name: shadcn-ui-design
description: Use this skill to generate well-branded interfaces and assets in the shadcn/ui design language (default Slate theme), either for production or throwaway prototypes/mocks. Contains design guidelines, color + type tokens, fonts, Lucide iconography guidance, and a UI kit of components for prototyping.
user-invocable: true
---

Read the `README.md` file in this skill first — it covers product context, content fundamentals (voice/casing/tone), visual foundations (color, type, spacing, radii, shadows, motion, states), and iconography. Then explore the other files.

Key starting points:
- `colors_and_type.css` — all design tokens (slate ramp, semantic vars like `--primary`/`--muted-foreground`, radii, shadows, and the type-role classes `.ds-h1`…`.ds-code`). Import this and use the variables; never hard-code hex.
- `ui_kits/components/` — interactive component recreations (Button, Input, Card, Switch, Tabs, Badge, Avatar, DropdownMenu, Dialog) assembled into a demo app. Copy components/markup from here.
- `assets/` — real images (avatar, photo).
- Icons: use **Lucide** (lucide.dev) — 2px stroke line icons, inherit currentColor. No emoji.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and produce static HTML files for the user to view. For production code, copy assets and follow the rules here to design authentically on-brand.

If the user invokes this skill without other guidance, ask what they want to build, ask a few clarifying questions, and act as an expert designer who outputs HTML artifacts or production code depending on the need.

**The look in one line:** black-on-white, slate neutrals, Inter with tight tracking on large headings, 1px hairline borders over heavy shadows, soft 6–8px radii, a 2px focus ring, Lucide icons, and no color except red for destructive actions.
