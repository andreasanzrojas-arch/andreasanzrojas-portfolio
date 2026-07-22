# Homepage Creative Direction Review

**Project:** Andrea Sanz Rojas — Portfolio (`OSHome` direction)
**Reviewer role:** Creative Director (audit only — no code changed)
**Target bar:** Senior/Lead Product Design applications to Anthropic, Stripe, Linear, Figma, Vercel
**Live homepage file:** `src/directions/OSHome.jsx`
**Supporting files:** `src/data.js`, `tailwind.config.js`, `src/index.css`, `index.html`

---

## 0. Context & how to read this doc

The live homepage is the **"Product Operating System"** direction (`OSHome`): a dark, software-grade layout inspired by Linear / Raycast / Stripe, with a command palette (⌘K), a self-scrolling hero marquee, tilt-reactive work cards, ambient cursor glow, and a particle footer. Two alternate directions (`EditorialHome`, `SystemsHome`) exist in the repo but are **not routed** and are out of scope here.

The craft level is already high. This review is written to the standard of the named companies, so it is deliberately demanding. The goal is not "fix what's broken" — it's "close the last 10% that separates a strong portfolio from an obviously-hireable one."

Section structure:
1. What works well (keep the intent)
2. What must remain unchanged (do not touch)
3. Prioritized improvements (P0 → P3)
4. Implementation recommendations (engineer-ready, per item)

---

## 1. What works well

These are genuine strengths. The recommendations later should **preserve** these, not override them.

1. **Coherent, opinionated art direction.** The dark product-OS aesthetic is executed consistently — glassy cards, hairline borders (`border-white/[0.06–0.08]`), inset top highlights, restrained indigo accent. It reads as "someone who understands modern software surfaces," which is exactly the signal Linear/Vercel/Stripe respond to.

2. **The command palette is a strong, on-brand differentiator.** ⌘K with Case studies / Expertise / Skills / Navigation groups (`OSHome.jsx` L824–868) is a smart way to demonstrate systems thinking and product literacy. For these specific companies it is a memorable "show, don't tell."

3. **Motion is tasteful and mostly hardware-cheap.** Scroll reveals, Ken Burns on marquee images, 3D card tilt, ambient glow — all custom, no heavy animation library, and all wrapped in a comprehensive `prefers-reduced-motion` block (`index.css` L864+). This is the right architecture.

4. **Typography foundation is correct.** Geist + Geist Mono with a proper modular scale using `clamp()` (`tailwind.config.js` L26–37) and mono reserved for labels/counters/tags. The eyebrow/label/meta letter-spacing tokens are considered.

5. **The "How I think" section is the strongest storytelling asset.** The line *"I don't design screens. I design the logic that screens execute."* (L599) plus four sharp principles is exactly the seniority signal a Lead/Principal reviewer wants. This is more valuable than the work grid itself.

6. **Accessibility is above average for a portfolio.** Semantic landmarks, heading hierarchy, ARIA on the palette (`role="dialog"`, `aria-modal`), `aria-live` on the marquee counter, marquee pause/play control, descriptive alt text on project images, real `href`s on router `Link`s. This is a solid base to finish.

7. **Graceful degradation on imagery.** `CardVisual` falls back to an SVG `Artifact` if an image is missing or fails (`OSHome.jsx` L444–502). Thoughtful and production-minded.

---

## 2. What should remain unchanged

Explicitly **do not** modify these during implementation. They are load-bearing to the concept or already correct.

1. **The dark product-OS art direction and indigo accent system.** Do not "brighten" or re-theme. The restraint is the point.
2. **The command palette (⌘K) feature and its grouping logic.** Keep it. Only polish focus styling (see P0-2).
3. **The `prefers-reduced-motion` coverage.** Preserve every rule in the reduced-motion block; extend it if new motion is added.
4. **The Geist type family and the `clamp()`-based scale in `tailwind.config.js`.** Refine usage, do not replace the system.
5. **The image fallback architecture (`Artifact` component).** Keep the resilience.
6. **The "How I think" content and voice.** Do not dilute or genericize the copy.
7. **The custom History-API router and real `href`s.** SEO/keyboard behavior is correct.
8. **The single-accent discipline.** Resist adding more accent hues; the monochrome-plus-indigo palette is a strength.

---

## 3. Prioritized improvements

Priority key:
- **P0 — Must fix before sending to these companies.** Credibility- or accessibility-blocking.
- **P1 — High impact on perceived seniority.** Do these next.
- **P2 — Meaningful polish.** Worth doing.
- **P3 — Nice-to-have / optional.**

### P0 — Blocking

**P0-1. Content credibility: client-naming is inconsistent.**
The same project is presented under two identities. In `data.js`, `heroImages[2]` is labeled **"GlobalPayments · Merchant"** with asset path `/assets/projects/globalpayments/hero.png` (L54–61), but the corresponding `featured[2]` card is titled around **"Mastercard"** with `company: 'Mastercard'` and note *"Name changed · Client confidential"* (L172–186) — and **"Mastercard" is also named outright** in the `Credibility` logo strip (`OSHome.jsx` L341) and in the SEO description (L874). So the site simultaneously (a) names Mastercard as a client, (b) says the project's client is confidential/renamed, and (c) calls it "GlobalPayments" in the hero. A sharp reviewer will notice. Similarly, `featured[3]` is "Monoma / Banco Nacional / name changed" but the marquee calls it "Monoma · Digital Banking." **Pick one confidentiality posture per client and apply it everywhere.**

**P0-2. No visible focus styles anywhere.**
There is no `:focus-visible` treatment in `index.css` (confirmed by search), and the command palette input uses `focus:outline-none`. Every interactive element — nav links, hero CTAs, work cards, marquee links, footer icon links, ⌘K — is keyboard-reachable but gives **no visible indication of focus**. For companies that screen for accessibility literacy (all five named), this is the single most damaging gap. It fails WCAG 2.4.7.

**P0-3. Placeholder/provisional content is still shipping.**
`data.js` opens with *"Copy, metrics and imagery are PROVISIONAL"* (L1–3). Metrics like "+30% digital CDT openings," "+20% satisfaction," "Activation reduced from days to minutes" must be verified as real and defensible before submission — fabricated or soft metrics are a fast rejection at this tier. Treat every number on the homepage as something you'd defend in an interview.

**P0-4. Add a skip-to-content link.**
There is no skip link. Keyboard users must tab through the entire nav (and effectively the marquee) on every navigation. Standard, cheap, expected at this bar.

### P1 — High impact on seniority signal

**P1-1. The hero doesn't lead with proof, and the eyebrow is doing too much.**
The eyebrow *"Senior Product Experience Designer · Visual Design · AI"* (`data.js` L17) crams three ideas into a label. The headline is strong, but the section under it goes straight to a dense 60-word intro paragraph (`about.intro`). For a Lead/Principal audience, the hero should surface **one crisp proof point** (e.g., "8 years · fintech & global platforms · Huge/Google, Mastercard, Banco de Bogotá") before the paragraph. Tighten the eyebrow to a single role, and let credibility carry the specifics.

**P1-2. Work cards under-sell impact; the metric is buried and mono-styled like a footnote.**
`CardMetric` renders the single most important line — the outcome — in `font-mono text-[13px] text-white/85` (`OSHome.jsx` L383–388), visually weaker than the title. At these companies the **outcome is the story.** The metric should be visually promoted (larger, higher contrast, or given a distinct "result" treatment), and ideally paired with a one-word role/scope so the reviewer instantly sees *what you did* + *what happened*.

**P1-3. Storytelling arc: the page lists sections but doesn't build a narrative.**
Current order: Hero → Credibility → Work → How I think → Skills → Experience → Contact. "How I think" — the strongest seniority asset — is buried below the fold after the work grid. Consider whether a **short positioning/POV beat belongs immediately after the hero** (or whether "How I think" should move up), so the reviewer gets the thesis before the evidence. Right now the argument is "here's my work, and by the way here's how I think"; the stronger order is "here's how I think, here's the proof."

**P1-4. Featured/grid card body copy is thin relative to the ambition.**
`framing` strings are single sentences (e.g., "End-to-end merchant platform redesign — acquisition, loyalty, and marketplace"). For a hero card especially, one line of **role + problem + outcome** would raise perceived depth without turning the card into a case study. The featured card has room (`FeaturedWorkCard`, L509–537) that currently goes to whitespace.

**P1-5. Secondary text contrast likely fails WCAG AA in several places.**
Text at `text-white/30`, `/35`, `/40`, `/55` on `#08080A` is used for labels, metadata, counters, and some body copy (e.g., `trusted-label` at `white/30` L337; card `framing` at `white/55` L558; confidential notes at `white/35` L506). `white/55` on `#08080A` is roughly 4.2:1 (borderline for normal text); `white/30`–`/40` is well below AA. Audit and lift the tiers that carry real reading content.

### P2 — Meaningful polish

**P2-1. Two competing design-token systems coexist.**
`tailwind.config.js` defines a **light "executive canvas"** palette (`canvas`, `ink`, `accent`, `hairline` — L6–19) plus a light `:root` in `index.css`, while `OSHome` is an entirely **dark, inline-value skin** (`bg-[#08080A]`, `border-white/[0.06]`, `rgba(139,92,246)` glows). The live homepage barely uses the design tokens. This is a maintainability and consistency risk: spacing/color decisions are hard-coded per component. Recommend consolidating OSHome's dark values into named tokens (see P2 impl notes).

**P2-2. Ad-hoc font sizes bypass the type scale.**
Despite a good scale, the homepage sprinkles `text-[14px]`, `text-[13px]`, `text-[11px]`, `text-[17px]`, `text-[12px]` (e.g., L385, L558, L631, L633). This undermines the modular scale and creates subtle vertical-rhythm drift. Map these back onto `body-sm`, `meta`, `label`, `h3`, etc.

**P2-3. Spacing rhythm is inconsistent between sections.**
Section vertical padding varies: Featured `py-28 md:py-36`, How-I-think `py-24 md:py-32`, Skills/Experience `py-20 md:py-28`, Footer `py-20 md:py-24`. The differences aren't clearly intentional. Define 2–3 section-rhythm tiers and apply them deliberately.

**P2-4. Container width is `max-w-6xl` (~1152px) everywhere except How-I-think (`max-w-4xl`).**
`max-w-shell` (1280px) is defined but unused on OSHome. Decide on a canonical content width and apply it; the one-off `max-w-4xl` for How-I-think is fine as an intentional "reading measure" but should be a named decision, not incidental.

**P2-5. Hero marquee: motion + autoplay considerations.**
The self-scrolling marquee (28s loop) is charming but (a) autoplays by default, (b) competes with the headline for attention immediately on load, and (c) on mobile becomes a scroll-snap strip. It's well-built (pause control, counter, `aria-live`), but consider whether it should start paused, or reduce to a static, tap-to-advance gallery on small screens. Ensure the pause button itself is keyboard-focusable with a visible ring (ties to P0-2).

**P2-6. Custom cursor hides the system cursor on desktop.**
`cursor: none !important` replaces the native cursor with a dot+ring. This is a taste call, but for a hiring reviewer it can feel gimmicky or briefly disorienting, and it's an accessibility edge case. Recommend keeping it subtle, ensuring it never hides over form fields/links, and confirming it's fully disabled for coarse pointers (it is) and reduced-motion.

**P2-7. Portrait `alt=""`.**
The hero portrait is decorative (`alt=""`, L268) with the name adjacent — defensible. But since it's a named person's portrait on a personal portfolio, an `alt` like "Andrea Sanz Rojas" is arguably more correct. Low stakes; decide intentionally.

### P3 — Optional / nice-to-have

**P3-1. `nav-resume` command palette item is a no-op** (`run: () => {}`, L865) while the footer CV link works. Wire it or remove it — a dead command in a ⌘K menu is a small credibility ding for a details-oriented reviewer.

**P3-2. Google Fonts are loaded but largely unused on OSHome.** `index.html` L15–18 pulls Fraunces, Inter, JetBrains Mono, Space Grotesk (for the alternate directions). On the live homepage this is wasted render-blocking font weight. Consider removing for the shipped direction.

**P3-3. Consider a subtle "resume/PDF" and "email" affordance in the sticky nav**, not only the footer, so a busy reviewer can act without scrolling.

**P3-4. Section anchors vs. `TopBar`.** Nav "Work" links to `#selected-work` via a plain `<a>` while other nav uses router `Link`. Minor, but unify anchor vs. route handling for consistent smooth-scroll behavior.

---

## 4. Implementation recommendations (engineer-ready)

Each item below is scoped so another engineer can execute without further design input. Line references are current at review time.

### P0-1 — Unify client confidentiality
- **Decision needed first (owner: Andrea):** For each client, choose "named" or "confidential/renamed." Recommended: if Mastercard is named in the logo strip and SEO, name it consistently on the card and in the hero — and remove the "GlobalPayments" alias.
- **Files:** `src/data.js` (`heroImages[2]` L54–61 `projectName`/`alt`; `featured[2]` L172–186 `title`/`company`/`confidentialNote`), `OSHome.jsx` Credibility logos (L339–343), SEO description (L874).
- **Action:** Make `projectName`, card `title`/`company`, logo, and SEO agree. If confidential, remove the real name from logos + SEO. If named, drop the "Name changed" note and the "GlobalPayments" label. Do the same audit for Monoma / "Banco Nacional."

### P0-2 — Global focus-visible system
- **File:** `src/index.css` (add a new base-layer rule).
- **Action:** Add a single, on-brand focus ring and remove `focus:outline-none` from the palette input.

```css
:where(a, button, [role="button"], input, .work-card-link, .hero-marquee-item):focus-visible {
  outline: 2px solid rgba(150, 120, 255, 0.9);
  outline-offset: 2px;
  border-radius: 6px;
}
```

- For work cards, ensure the ring renders on the `.work-card-link` wrapper (the anchor), not the tilted `<article>`, so it isn't clipped by `overflow` or the 3D transform.
- Verify tab order: nav → hero CTAs → marquee (pause + links) → work cards → footer links → ⌘K.

### P0-3 — Verify all metrics/copy
- **File:** `src/data.js` (`featured[*].metric`, `experience[*].context`, `stats`).
- **Action:** Confirm each number is real and citable. Remove the "PROVISIONAL" banner comment (L1–3) once content is final. Where a number can't be substantiated, replace with a qualitative but honest outcome.

### P0-4 — Skip link
- **Files:** `OSHome.jsx` (render as first child of `.os-home`, before `TopBar`); `index.css` (styles). Confirm the hero section has a matching `id` (it has `id="top"` at L242, or add `id="main"`).
- **Action:**

```jsx
<a href="#top" className="skip-link">Skip to content</a>
```

```css
.skip-link {
  position: absolute; left: 1rem; top: -3rem;
  z-index: 60; padding: 0.5rem 0.875rem;
  background: #121214; color: #fff; border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.15);
  transition: top 0.2s ease;
}
.skip-link:focus { top: 1rem; }
```

### P1-1 — Sharpen the hero
- **Files:** `src/data.js` (`hero.eyebrow` L17, `about.intro` L110–111), `OSHome.jsx` Hero (L258–320).
- **Action:** Reduce the eyebrow to one role (e.g., "Senior Product Designer"). Add a single credibility line beneath the headline (companies + domains + years) as its own element, above the paragraph. Keep the paragraph but trim to ~2 lines.

### P1-2 — Promote the outcome metric
- **File:** `OSHome.jsx` `CardMetric` (L383–388), used by both card types.
- **Action:** Give the metric a distinct "result" treatment: larger size (e.g., `text-body`/`text-h3`-adjacent), higher contrast (`text-white`), and an optional label prefix. Example:

```jsx
function CardMetric({ children }) {
  return (
    <p className="mt-4 text-[15px] font-medium tracking-tight text-white">
      <span className="mr-2 font-mono text-[11px] uppercase tracking-widest text-indigo-300/60">
        Impact
      </span>
      {children}
    </p>
  )
}
```

- Keep the featured (hero) card's metric largest; grid cards one step down.

### P1-3 — Reorder for narrative
- **File:** `OSHome.jsx` `OSHome()` render (L870–890).
- **Action (low-risk option):** Move `<HowIThink />` to sit **immediately after `<Credibility />`** and before `<Featured />`, so the thesis precedes the evidence. Alternatively, extract a 2–3 line POV statement into the hero/credibility band and keep "How I think" where it is. Validate scroll-anchor targets (`#how-i-think`, `#selected-work`) and the command-palette `run` handlers still resolve after reordering.

### P1-4 — Deepen card framing
- **File:** `src/data.js` (`featured[*].framing`).
- **Action:** Expand each `framing` to the pattern **[role] + [problem] + [outcome]** in one tight sentence. Ensure the featured card (index 01) has the richest framing since it has the most layout room.

### P1-5 — Contrast audit
- **Files:** `OSHome.jsx` (opacity utilities throughout), `index.css` (`.trusted-label`, `.project-tag`, `.exp-role`, etc.).
- **Action:** Establish a text-contrast tier system and stop using `<white/55` for content that must be read:
  - Primary body: `text-white` / `white/90`
  - Secondary body: `white/70` (min for reading)
  - Meta/labels (large or non-essential): `white/55` and only for uppercase mono labels
- Re-check each with a contrast tool against `#08080A`. Prioritize `framing` (L558) and confidential notes (L506).

### P2-1 — Consolidate tokens
- **File:** `tailwind.config.js` (`extend.colors`), then refactor `OSHome.jsx`/`index.css`.
- **Action:** Add dark-surface tokens and replace inline values incrementally:

```js
colors: {
  'os-bg': '#08080A',
  'os-panel': '#121214',
  'os-line': 'rgba(255,255,255,0.07)',
  'os-accent': '#8B5CF6',
}
```

- Replace `bg-[#08080A]` → `bg-os-bg`, `border-white/[0.06]` → `border-os-line`, glow `rgba(139,92,246,…)` → reference `--os-accent`. Do this as a mechanical, non-visual refactor and diff screenshots before/after.

### P2-2 — Re-map ad-hoc sizes to the scale
- **Files:** `OSHome.jsx` (search `text-[`), `tailwind.config.js` (extend scale if a needed step is missing).
- **Action:** Replace `text-[14px]`→`text-body-sm`, `text-[13px]`→`text-meta`, `text-[11px]`→`text-eyebrow`/`text-label`, `text-[17px]`→`text-h3` (or add an `h3-lg` step). Keep a short allowlist of intentional exceptions and comment them.

### P2-3 — Section rhythm tiers
- **File:** `OSHome.jsx` (section wrappers) — optionally a helper class in `index.css`.
- **Action:** Define e.g. `.section-lg { @apply py-28 md:py-36 }`, `.section-md { @apply py-20 md:py-28 }` and apply consistently. Featured = lg; Skills/Experience/Footer = md; make How-I-think a deliberate choice.

### P2-4 — Canonical container width
- **Files:** `OSHome.jsx` (section containers), `index.css` (`.shell`).
- **Action:** Standardize on one max width (recommend `max-w-6xl`); keep How-I-think's narrower reading measure but express it via a named `.measure` utility so intent is explicit.

### P2-5 — Marquee behavior
- **File:** `OSHome.jsx` `MarqueeStrip` (L149–222), `index.css` marquee/mobile rules.
- **Action:** Consider `useState(false)` default for `isPlaying` (start paused) OR gate autoplay behind `prefers-reduced-motion` already respected — but add "first paint calm." Ensure pause button gets the P0-2 focus ring. On mobile, confirm the scroll-snap gallery has visible affordance that it's swipeable.

### P2-6 — Custom cursor guardrails
- **Files:** `src/components/CustomCursor.jsx`, `src/styles/cursor.css`.
- **Action:** Confirm it's disabled for `(pointer: coarse)` (it is) and add a `prefers-reduced-motion` off-switch. Ensure the native caret still shows in any text input (palette). Keep the effect subtle.

### P2-7 — Portrait alt
- **File:** `OSHome.jsx` L268.
- **Action:** Decide: decorative (`alt=""`, keep `aria-hidden` logic) vs. informative (`alt="Andrea Sanz Rojas"`). Recommend informative.

### P3 items
- **P3-1:** Wire `nav-resume` (`OSHome.jsx` L865) to trigger the same CV download as the footer link, or remove the entry.
- **P3-2:** Remove unused Google Fonts from `index.html` (L15–18) for the shipped direction; keep only if alternate directions are demoed.
- **P3-3:** Add a small "CV" / "Email" affordance to `TopBar` (`OSHome.jsx` L83–111).
- **P3-4:** Make nav "Work" use the same navigation mechanism as other links for consistent smooth-scroll.

---

## 5. Suggested execution order (one sprint)

1. **P0 batch** (credibility + a11y): P0-1, P0-2, P0-3, P0-4. Ship-blocking; do first.
2. **P1 batch** (seniority signal): P1-2 (metrics), P1-1 (hero), P1-5 (contrast), P1-4 (framing), then P1-3 (reorder) last since it's structural.
3. **P2 batch** (systematization): P2-1 tokens → P2-2 type → P2-3 rhythm → P2-4 width, then P2-5/6/7.
4. **P3 batch** (cleanup): quick wins, do anytime.

**Definition of done for the target bar:** every interactive element has a visible focus state; every metric on the page is true and defensible; one consistent confidentiality posture per client; the hero states a proof point in the first viewport; and the outcome of each project is the most legible thing on its card.

---

*End of review. No source files were modified in producing this document.*
