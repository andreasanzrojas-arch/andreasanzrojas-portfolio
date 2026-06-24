# PROJECT STATUS — Andrea Sanz Rojas Portfolio

_Last updated: Jun 23, 2026 — end of craft refinement sprint._

This is the single source of truth for where the project stands. Read this first.

---

## 1. Current selected direction: **Product OS**

The portfolio is built as a single, locked visual direction called **Product OS** — a dark,
software-grade aesthetic inspired by Linear, Raycast, Arc Browser and Stripe Sessions. The
homepage itself behaves like a product: precise typography, glassy cards, subtle depth and a
functional command palette (`⌘K`).

- **Live file:** `src/directions/OSHome.jsx`
- **Rendered by:** `src/App.jsx` (OSHome only — the other directions are dormant, see below)
- **Run locally:** `npm run dev` → opens on `http://localhost:5173` (or next free port, e.g. 5174)

Two earlier explorations still exist in the repo but are **not rendered and not maintained**:
`src/directions/EditorialHome.jsx` and `src/directions/SystemsHome.jsx`. They are kept only as
historical reference. See `DESIGN_DECISIONS.md` for why they were rejected.

---

## 2. What is FROZEN (do not change without an explicit decision)

The following are locked. Changing any of them is a redesign, not a refinement:

- **Visual direction** — Product OS. No new art directions.
- **Information architecture** — section set and section order.
- **Navigation** — sticky top bar, links, behavior.
- **Command palette** — the `⌘K` navigation layer, its interaction model, search,
  keyboard handling, grouping (Case studies / Expertise / Skills / Navigation), and the
  hero command-launcher motif.
- **Content hierarchy** — what is featured vs. secondary, and the order of featured work.
- **Project lineup** (see Architecture below).

### Homepage section order (frozen)

1. Top bar (sticky nav, `⌘K` launcher)
2. Hero (positioning statement + command launcher motif)
3. Credibility bar (trusted brands)
4. Selected work (3 featured case studies, with visual-proof artifacts)
5. Footer / contact

> Note: `src/data.js` still contains some content blocks from earlier iterations (`focus`,
> `pov`, `secondary`, extended `footer`, `nav.links` with About/Experience). The **rendered**
> OSHome currently uses a leaner set. These are data definitions, not live sections — treat the
> rendered `OSHome.jsx` as the source of truth for what is on the page.

---

## 3. What has been COMPLETED

**Strategy & positioning**
- Positioning locked: targeting **future Lead Product Designer** roles (not another Senior IC role).
- Project lineup decided and reframed for leadership perception.
- NDA-safe storytelling approach defined for Mastercard and Google.

**Architecture**
- Homepage structure and section order locked.
- Project lineup: 3 featured + 1 secondary.

**Visual design**
- Three art directions explored (Editorial, Product OS, Systems); **Product OS selected**.
- Full Product OS homepage built in React + Vite + Tailwind.

**Interaction & motion**
- First-class motion system: scroll reveals, parallax, cursor-responsive tilt/depth,
  ambient drift, full `prefers-reduced-motion` support.
- Functional **command palette** (Raycast/Linear-style) wired to real navigation:
  scroll-to-section, highlight specific case-study cards, filter by expertise/skill.

**Visual proof / credibility**
- Placeholder UI replaced with believable, document-grade SVG artifacts per featured project:
  - CDT — service blueprint (12-step → 3-tap transformation)
  - Mastercard — enterprise payments architecture (KYC/compliance, acquisition flow)
  - Google/Huge — design-system dependency map + governed component library
- Artifacts carry "working-document" chrome (file tabs, meta) for credibility.

**Craft refinement sprint (most recent)**
- Modular type scale rebuilt in `tailwind.config.js` (display / h2 / h3 / lead / body / label / meta).
- Hero headline set to balanced composition; metadata uses tabular numerals.
- Vertical rhythm normalized across sections; card density and internal spacing tuned.
- Motion softened (calmer tilt, reduced glow/ambient intensity) for an "invisible, premium" feel.
- Surfaces elevated: gradient card surfaces, inset top-edge highlights, unified borders,
  raised text contrast, elevated credibility bar with hairline dividers.
- Production build verified clean; lints pass.

---

## 4. What REMAINS to be done

**The big one: real case-study content.** The homepage frame is strong; the case studies are
still provisional copy + abstract artifacts. The next sprint turns each featured project into a
real, evidence-backed executive product story. Full plan in `NEXT_SPRINT.md`.

Outstanding items:
- Write real narratives for CDT, Mastercard, Google (problem → role → decisions → outcome).
- Confirm / source real metrics (currently provisional, e.g. "+30%").
- Replace text wordmarks in the credibility bar with real brand logos (content task, not craft).
- Decide whether About / Experience / secondary (Monoma) get dedicated surfaces or stay folded in.
- Squarespace implementation strategy (the prototype is React; production target is Squarespace).
- Resume + LinkedIn links (currently placeholders).
- Per-project detail/case-study pages (if pursued) — not yet designed.

---

## 5. Current design philosophy

> **"The portfolio itself is the proof of product thinking."**

- Show, don't claim: visual artifacts demonstrate systems thinking, enterprise scale and
  strategic decision-making faster than paragraphs can.
- Software-grade craft signals seniority — precision, restraint, and motion that feels
  invisible rather than performative.
- Every element must pass the **seniority test**: _"Would a Head of Design believe this came
  from real enterprise work?"_ If no, remove it.
- Spacing and typography create hierarchy; decoration does not.

---

## 6. Current portfolio positioning

- **Person:** Andrea Sanz Rojas, Senior Product Designer, 8+ years.
- **Pedigree:** Huge (Google for Education), Mastercard, Banco de Bogotá.
- **Goal:** Be perceived as a **future Lead Product Designer** — someone who can lead complex
  product initiatives across large, complex organizations.
- **Differentiators to surface:** product leadership, strategic + systems thinking, enterprise
  scale, business impact, stakeholder alignment, design systems. AI-augmented workflow is a
  secondary signal.
- **Must NOT feel like:** a generic UX portfolio, a wall of process screenshots, a SaaS landing
  page, or an AI-generated template.

---

## 7. Current architecture

**Featured case studies (in order):**
1. **Banco de Bogotá — CDT** — digital investing transformation. _Metric: +30% digital CDT openings (provisional)._
2. **Mastercard — Global Payments** — merchant onboarding / payments at scale. _NDA-safe; client anonymized._
3. **Huge / Google for Education** — product design at Google's quality bar; design systems.

**Secondary work:**
- **Monoma — Mobile Banking** — anonymized enterprise product work.

**Removed (earlier decision):** Travel Adventures, Beans & Brew.

**Tech stack (prototype):** React 18, Vite 5, Tailwind 3. Playwright for screenshots.
**Production target:** Squarespace (implementation approach still to be defined).

**Key files:**
- `src/App.jsx` — renders OSHome.
- `src/directions/OSHome.jsx` — the live homepage.
- `src/components/CommandPalette.jsx` — `⌘K` navigation layer (frozen).
- `src/components/artifacts/` — SVG visual-proof artifacts + themes.
- `src/data.js` — content/data definitions.
- `src/lib/motion.js` — motion hooks (parallax, tilt, pointer area, in-view).
- `tailwind.config.js` — design tokens (type scale, colors, spacing, motion easing).
- `src/index.css` — base styles, motion classes, reduced-motion guards.
