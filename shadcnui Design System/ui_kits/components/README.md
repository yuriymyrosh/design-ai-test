# Components UI Kit — shadcn/ui

A cosmetic, interactive recreation of a typical shadcn/ui application, built entirely from the kit primitives. Open `index.html`.

## What it demonstrates
- **Login** → click *Sign in* (or *Login with Email*) to enter the app.
- **Overview** — stat cards, a bar chart, and a team-members list.
- **Customers** — a data table with avatars and status badges.
- **Settings** — tabbed (Account / Notifications / Billing) with inputs, checkbox, and switches.
- **User menu** (avatar, top-right) — a real dropdown with items + destructive *Log out*.
- **Create** (Overview) — opens a modal **Dialog** with a scrim.

## Files
| File | Contents |
|---|---|
| `index.html` | Loads React + Babel + tokens, mounts the app. |
| `Icons.jsx` | `Icon` — inline Lucide paths (currentColor, 2px stroke). |
| `Primitives.jsx` | Button, Input, Label, Badge, Card*, Switch, Checkbox, Avatar, Tabs, Separator. |
| `Overlays.jsx` | DropdownMenu (+ items), Dialog (+ header/footer). |
| `App.jsx` | The screens: TopNav, Dashboard, Customers, Settings, Login. |
| `ui-kit.css` | Component styles, keyed to the design tokens. |
| `app.css` | App-shell + screen layout. |

## Conventions
- All color/radius/shadow/type values come from `../../colors_and_type.css` — never hard-coded hex.
- Components export to `window` (each Babel script has its own scope) so later files can use them.
- These are **visual** recreations — state is local and illustrative, not production logic.
