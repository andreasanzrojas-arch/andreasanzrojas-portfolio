# Portfolio Implementation Roadmap — Interview-Conversion Focus

**Goal:** Maximize the probability of interview invitations at Anthropic, Stripe, Linear, Figma, Vercel, and Airbnb.
**Source:** Derived from `cursor-hiring-review.md` (Head-of-Design hiring lens).
**Scope rule:** Only changes that move the *hiring decision*. Engineering cleanup, refactors, token systems, and code architecture are **out of scope** here.
**Homepage:** `src/directions/OSHome.jsx` · content in `src/data.js`.

**Effort key:** **S** = < half day · **M** = ~1–2 days · **L** = ~3–5 days.

**North-star outcome:** Move the reviewer's reaction from *"probably yes"* to *"yes, no hesitation"* — by making seniority **felt** (proof, outcomes, one flagship) rather than **deduced** (craft alone).

---

## Phase 1 — Highest ROI
*The changes that most directly flip "leaning yes" to "book the interview." If only three days exist, do only these.*

### 1.1 Elevate one flagship project into an editorial hero moment
- **Objective:** Give Google for Education a full-width, image-forward, visually distinct treatment (larger type, real outcome number, one-line before→after story) that stands clearly apart from the grid cards.
- **Why it matters:** The current featured card is barely differentiated from card #1 of 5, so the flagship doesn't *feel* flagship. One project carrying global scale is enough to earn the interview.
- **Expected hiring impact:** **Very high.** Turns "senior designer" into "operates at global scale" — the single biggest lever on the page.
- **Effort:** **M**

### 1.2 Make outcomes the loudest element on every project card
- **Objective:** Promote the `metric` line to the most prominent text after the title — larger, full-contrast, ideally with a subtle "Impact" label. Ensure every project has a crisp, defensible outcome.
- **Why it matters:** Outcomes are currently the *weakest* text on each card (small mono, low contrast). Leaders speak in outcomes; ICs speak in deliverables.
- **Expected hiring impact:** **Very high.** Directly signals seniority and business impact in the first scan.
- **Effort:** **S**

### 1.3 Unify thumbnail art direction
- **Objective:** One consistent framing system for all five projects — same aspect ratio, same background strategy, same shadow, same device-shot style. Remove the odd-one-out white cards and the halo phone mockup.
- **Why it matters:** Mixed dark/light/halo treatments make five projects look like five different portfolios. Thumbnail consistency is a proxy for art-direction ability and design-system trust.
- **Expected hiring impact:** **High.** Biggest single *perceived-quality* fix; removes the strongest "doesn't sweat the system" signal.
- **Effort:** **M**

### 1.4 Lead with the thesis, then the proof
- **Objective:** Move the "How I think" point of view (or a distilled 2-line version) up so it frames the work instead of trailing it.
- **Why it matters:** The strongest, most senior-sounding content currently rewards scrolling instead of framing everything above it. Point of view = seniority.
- **Expected hiring impact:** **High.** Reframes every project below as evidence of a clear POV.
- **Effort:** **S**

---

## Phase 2 — Sharpen first impression & narrative
*Do these once Phase 1 lands. They compound the gains by tightening the critical first screen and the story arc.*

### 2.1 Compress the hero into a single persuasive breath
- **Objective:** One-line role + a *visual* credibility strip (Google · Mastercard · Banco de Bogotá · 8 yrs · fintech) + one flagship outcome + two CTAs. Trim the intro paragraph to ~2 lines.
- **Why it matters:** The first screen currently asks the reviewer to read ~60 words and watch motion before receiving one hard reason to care. Clarity reads as confidence.
- **Expected hiring impact:** **High.** Improves the 15-second decision directly.
- **Effort:** **M**

### 2.2 Rethink the carousel as a hook, not wallpaper
- **Objective:** Either (a) start it paused and enlarge frames so each shows a legible outcome, or (b) replace it with a static "flagship + 2 supporting" collage. Stop it from competing with the headline on load.
- **Why it matters:** Looping motion reads as decoration and trains the eye to ignore it; it also splits attention at the exact moment the first impression forms.
- **Expected hiring impact:** **Medium-high.** Converts ambience into curiosity and de-clutters the hero.
- **Effort:** **M**

### 2.3 Clarify the NDA / confidentiality distinction (do not remove it)
- **Objective:** Add one explicit line near the GlobalPayments project — e.g. *"Client work under NDA — rebranded here to protect confidential details."* Optionally a small "Confidential" chip. Keep the Mastercard credibility line.
- **Why it matters:** A fast reviewer could misread the GlobalPayments label + Mastercard logo + "name changed" note as an inconsistency rather than an intentional NDA choice. Labeling it converts a possible confusion into a credibility asset.
- **Expected hiring impact:** **Medium.** Removes a doubt and signals enterprise NDA-awareness.
- **Effort:** **S**

### 2.4 Break the uniform scroll with 1–2 contrast beats
- **Objective:** Introduce one editorial moment between sections — a full-bleed image, a pulled quote, or a subtle background shift — so the page stops reading as one continuous texture.
- **Why it matters:** Work, How-I-think, Skills, and Experience share the same rhythm on the same dark panel; premium portfolios modulate to signal editorial control.
- **Expected hiring impact:** **Medium.** Improves memorability and perceived craft.
- **Effort:** **M**

---

## Phase 3 — Warmth, memorability & differentiation
*High-polish moves that separate a strong portfolio from an unforgettable one.*

### 3.1 Add one line of genuine human conviction
- **Objective:** Near the hero or footer, add a single sentence on why this work matters to *you* (why fintech, why scale, why it's meaningful).
- **Why it matters:** The site is impressive but emotionally cool; it reads clever more than human. A line of belief makes it magnetic.
- **Expected hiring impact:** **Medium.** Turns "someone on the team" into "someone I want in the room."
- **Effort:** **S**

### 3.2 Add a lightweight social-proof beat
- **Objective:** One short testimonial from a PM or eng lead, or a "shipped to millions" stat band.
- **Why it matters:** Third-party voice converts faster than self-description; it externally validates the seniority the rest of the site claims.
- **Expected hiring impact:** **Medium.** Builds trust before the interview even happens.
- **Effort:** **S**

### 3.3 Make the AI-native angle a visible differentiator
- **Objective:** Promote "AI-native from the start" out of principle #4 / a skills pill into its own visible moment on the page.
- **Why it matters:** For these companies in this cycle, an AI-native design practice is a headline-worthy edge that most senior designers can't claim — and it's currently buried.
- **Expected hiring impact:** **Medium-high** *(for this specific target list).* Differentiates from every other senior product designer.
- **Effort:** **M**

### 3.4 Add per-project story depth on the homepage
- **Objective:** Expand each project's single framing sentence toward a tight *role + problem + bet + outcome* line, so the homepage conveys the shape of a decision without requiring a click into the case study.
- **Why it matters:** Cards currently read as captions, not stories; the reviewer never sees a decision without leaving the page.
- **Expected hiring impact:** **Medium.** Deepens perceived thinking; supports the flagship in 1.1.
- **Effort:** **M**

---

## At-a-glance priority table

| # | Task | Phase | Effort | Hiring impact |
|---|------|-------|--------|---------------|
| 1.1 | Flagship editorial hero moment | 1 | M | Very high |
| 1.2 | Outcomes as loudest card element | 1 | S | Very high |
| 1.3 | Unify thumbnail art direction | 1 | M | High |
| 1.4 | Lead with thesis, then proof | 1 | S | High |
| 2.1 | Compress hero to one breath | 2 | M | High |
| 2.2 | Carousel as hook, not wallpaper | 2 | M | Medium-high |
| 2.3 | Clarify NDA distinction | 2 | S | Medium |
| 2.4 | Contrast beats to break the scroll | 2 | M | Medium |
| 3.1 | Human conviction line | 3 | S | Medium |
| 3.2 | Social-proof beat | 3 | S | Medium |
| 3.3 | AI-native as visible differentiator | 3 | M | Medium-high |
| 3.4 | Per-project story depth | 3 | M | Medium |

---

## Sequencing logic

- **Phase 1 is the "automatic yes" package.** 1.2 and 1.4 are cheap (S) and high-impact — do them first, same day. 1.1 and 1.3 are the medium lifts that carry the most weight; they're where the real conversion happens.
- **Phase 2 tightens the funnel** into Phase 1: a sharper hero and a curiosity-driven carousel get more reviewers *to* the flagship and outcomes you strengthened in Phase 1.
- **Phase 3 is the differentiator layer** — warmth, proof from others, and the AI-native edge — that separates "yes" from "we have to talk to her before someone else does."

**Fastest meaningful win if time is scarce:** ship 1.2 + 1.4 (both S) today, then 1.3, then 1.1.

---

## Definition of done (hiring lens)

The roadmap has succeeded when a Head of Design, in the first screen, can answer without scrolling:
1. **Who** and **at what level** (senior/lead, global scale).
2. **The proof** — one flagship outcome they can't ignore.
3. **The point of view** — a thesis that frames the work.
…and when the five project thumbnails look like **one art director** made them.

---

## Known asset-quality limitation — Banco de Bogotá thumbnail

**Status:** Accepted for now. Do not swap in alternate compositions.

- Current Selected Work thumbnail: `public/assets/projects/banco-bogota/bdb-landing.png`
- The file is a **compressed JPEG mislabeled as `.png`**.
- No sharper version of the **same** laptop/landing composition exists in the repository (`hero.png`, `flow-2.png`, and related assets are different compositions and must not be used as drop-in replacements).
- Softness is a **source limitation**, not CSS upscaling or responsive `srcset` selection.
- **Follow-up:** Replace later with a new high-resolution export from the original Figma/mockup source (prefer true PNG or WebP, sized for the card frame at 2x — roughly ≥1200×880).

Selected Work homepage editorial work is otherwise approved and closed.

---

*Roadmap only. No source files were modified.*
