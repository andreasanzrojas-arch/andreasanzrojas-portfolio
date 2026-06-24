# DESIGN DECISIONS — Rationale Log

_Purpose: let any future human or AI understand the "why" behind this project instantly,
so no one re-litigates settled decisions or accidentally undoes intentional ones._

---

## Decision 1 — Why **Product OS** was selected (the chosen direction)

Three art directions were built and compared as live homepages: **Editorial Leadership**,
**Product OS**, and **Strategic Systems**. Product OS won because it best resolves the project's
core tension: proving she can _lead a product_, using a homepage that _behaves like a product_.

- It maps directly to her target peer set (Linear, Raycast, Arc, Vercel, Stripe) — the visual
  language hiring managers associate with elite product orgs.
- Software-grade craft (precision, depth, restrained motion, the `⌘K` palette) signals seniority
  implicitly — the medium is the message.
- It is **memorable and distinctive**, which was the explicit bar: the earlier generic version
  read as "professional but forgettable" (closer to McKinsey/Deloitte than to Linear/Raycast).
- It carries believable visual proof (architecture maps, blueprints, system diagrams) without
  relying on screenshots or marketing mockups.

**Mandate:** "Feel like the portfolio itself is a world-class product." Product OS delivers this.

---

## Decision 2 — Why **Editorial** was rejected

Editorial Leadership (Pitch / The Gentlewoman / Vercel Editorial references: serif display,
asymmetric layouts, magazine whitespace) was strong and sophisticated, but:

- It leans on **point of view and typography** more than on **demonstrated product/systems thinking** —
  it asks the viewer to trust the voice rather than see the evidence.
- It risks reading as "designer with taste" over "designer who can lead complex product
  initiatives at enterprise scale" — taste was never the gap; perceived leadership was.
- It is further from her target peer companies' visual language, weakening the "belongs in the
  Linear/Raycast conversation" signal.

Kept as dormant reference: `src/directions/EditorialHome.jsx`.

---

## Decision 3 — Why **Systems** was rejected

Strategic Systems Designer (Vercel / Ramp / Mercury / Anthropic references: diagrams and
frameworks as the primary visual identity) was conceptually on-target but:

- Making frameworks/diagrams the **entire identity** risked feeling cold, academic, or
  consulting-like — the exact "McKinsey/Deloitte" trap we were trying to escape.
- The best parts of Systems (systems thinking made visible) were **absorbed into Product OS**
  as the credible artifacts inside case-study cards — so we kept the substance without adopting
  the whole austere aesthetic.
- Product OS achieves the same "leads through complexity" signal while also feeling premium,
  modern and emotionally engaging.

Kept as dormant reference: `src/directions/SystemsHome.jsx`.

> Net: Product OS = the craft/emotion of Premium Product + the substance of Systems, structured
> for enterprise leadership perception.

---

## Decision 4 — Why the **command palette** exists

The `⌘K` command palette is not decoration; it is a positioning argument.

- **It makes the portfolio behave like a product.** A functional, Raycast/Linear-style navigation
  layer is the single clearest way to _show_ (not claim) product + systems thinking.
- **It reinforces the narrative through interaction.** Visitors explore by **projects, expertise,
  and skills**, each mapped to the case studies that evidence them — the IA literally demonstrates
  how she connects skills to outcomes.
- **It reduces navigation friction** while signaling craft: keyboard-first, fuzzy search, grouped
  results, smooth scroll-to and card-highlight actions.
- It is **useful, not gimmicky** — that was the explicit bar. It must always reduce friction and
  reinforce systems thinking, never just impress.

Because it is doing positioning work, it is **frozen** — see Decision 6.

---

## Decision 5 — Why the portfolio targets **Lead Product Designer** positioning

The explicit goal is **not** another Senior IC role; it is to be perceived as a **future Lead
Product Designer**.

- She already has the pedigree (Huge/Google, Mastercard, Banco de Bogotá) and 8+ years — the gap
  is **perception**, not capability.
- Hiring managers promote/hire Leads who demonstrate: framing the right problem, aligning
  stakeholders, thinking in systems, owning outcomes, and operating at enterprise scale.
- Every design choice therefore optimizes for **perceived leadership and strategic judgment**,
  not for showcasing UI craft in isolation.
- This is why content leads with decisions and outcomes, artifacts show complexity and scale, and
  process screenshots are deliberately avoided.

---

## Decision 6 — Why the homepage architecture is **frozen**

The information architecture, section order, navigation, command palette and content hierarchy
are locked. This is intentional discipline, not inertia.

- The architecture was deliberately designed and validated across multiple iterations; it
  successfully communicates leadership, enterprise scale and strategic thinking.
- The remaining gap is **credibility of content**, not structure. Re-opening the architecture
  would burn time on a solved problem and risk regressing a working frame.
- Freezing the frame lets all future effort compound on the **highest-impact work**: real
  case-study evidence (see `NEXT_SPRINT.md`).
- A stable frame also keeps the eventual **Squarespace port** tractable — a moving structure is
  far harder to reimplement.

**Rule of thumb:** if a change touches IA, section order, nav, the palette, or what's
featured/secondary → it is a redesign and needs an explicit decision. Everything else (content,
craft polish within the direction) is fair game.
