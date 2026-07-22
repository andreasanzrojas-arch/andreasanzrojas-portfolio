# Homepage Hiring Review — "Would I interview this designer?"

**Reviewer role:** Head of Design, screening portfolios before extending interviews
**Companies in mind:** Anthropic, Stripe, Linear, Figma, Vercel, Airbnb
**Homepage reviewed:** `src/directions/OSHome.jsx` (the live "Product OS" direction)
**Lens:** Perception only — first impression, hierarchy, story, emotion, credibility, executive presence, premium feel, clarity, memorability, differentiation. Engineering debt is ignored unless it changes how the work *feels*.

> **Note on confidentiality:** "GlobalPayments" is understood here as an intentional, ethical rebrand of enterprise payment work originally done at Mastercard, with Mastercard named in credibility because the employment is real. This is treated as a **strength** (shows judgment and NDA-awareness). Recommendations only make the distinction *clearer* — they never remove it.

---

## The 15-second verdict

**Would I keep reading? Yes.** Within the first screen I know this is a senior person with real enterprise range and taste. The dark product-OS craft, the ⌘K palette, and the "I design the logic that screens execute" line all signal someone operating above the pixel level.

**Would I interview today? Probably — but it's closer than it should be**, and that's the problem. For an 8-year designer with Google, Mastercard, and a national bank in the portfolio, the *default* answer should be an emphatic, effortless yes. Right now the site makes me **infer** the seniority from craft rather than **feel** it from evidence. The work is buried behind a beautiful-but-busy hero, the outcomes are whispered, and the case-study proof — the single thing that actually gets designers hired at this tier — is one click away instead of front and center.

**The gap in one sentence:** *This looks like the portfolio of an excellent senior designer; it should look like the portfolio of an obvious hire.*

---

## Scorecard (hiring lens)

| Dimension | Grade | One-line read |
|---|---|---|
| First impression | **A−** | Confident, distinctive, "software person." Slightly over-decorated. |
| Visual hierarchy | **B** | The hero competes with itself; the metric (the payload) is the weakest text on each card. |
| Storytelling | **B−** | Great voice, but the *thesis* arrives too late and the *proof* is thin on the homepage. |
| Emotional impact | **B** | Cool and impressive, not yet *moving*. Reads clever more than human. |
| Credibility | **A−** | Logos + roles are strong; outcomes are undersold and unlinked to their stories. |
| Executive presence | **B+** | The command palette and voice project leadership; the layout still "presents work" rather than "sets direction." |
| Premium feel | **B+** | Surfaces are premium; thumbnails are inconsistent (mixed light/dark, phone mockup) and dilute it. |
| Clarity | **B** | I have to work to learn *what she did* vs *what happened* on each project. |
| Memorability | **B** | The ⌘K is the one thing I'd remember. Everything else is well-executed genre. |
| Differentiation | **B** | Dark-mode Linear-clone aesthetic is now common. The *substance* (fintech scale + AI-native) is the real differentiator and is underplayed. |

---

## Direct answers to your 7 questions

### 1. Is the Hero compelling enough?
**Almost — it's atmospheric but not yet persuasive.** The headline *"Leading complex product design at global scale"* is good positioning, but it's an adjective-driven claim, not proof. Below it sits a dense ~60-word paragraph and two CTAs, and then immediately a moving carousel. So the first screen asks me to *read a lot* and *watch motion* before I've been given a single hard reason to care.

A Head of Design decides in seconds. In those seconds I want: **who + level + proof + one number.** Right now I get who + level + a paragraph. Missing: the instant credibility hit (Google · Mastercard · national bank · 8 yrs) as a *visual* element, and one flagship outcome I can't ignore.

**Verdict:** compelling enough to keep me reading, not compelling enough to make me *lean in*. Tighten it to a single proof-dense breath.

### 2. Does the carousel create curiosity?
**It creates ambience more than curiosity.** An auto-scrolling strip of screenshots is pretty, but motion-that-loops reads as *decoration*, and the eye learns to ignore it (banner blindness). It also competes with the headline at the exact moment I'm forming my first impression, splitting my attention.

Curiosity comes from a *specific, legible promise* — "108+ ed-tech apps," "reduced activation from days to minutes" — attached to a striking still. Right now the cards show project names on hover, so at rest they're anonymous rectangles sliding by.

**Verdict:** it's a mood, not a hook. Either make it earn attention (static, larger, with a visible outcome per frame) or demote it so it doesn't tax the hero.

### 3. Are the project thumbnails premium enough?
**Inconsistently.** This is the biggest *perceived-quality* issue. The cards mix:
- dark-framed screenshots (`bg-[#111]`),
- **white/light-background** shots (Mastercard, Monoma — `image-bg-light`), and
- a **teal-halo phone mockup** for Monoma,

all inside the same dark grid. The result is that the grid looks like *five different projects from five different portfolios* rather than one designer's coherent body of work. On a premium dark surface, the white-background thumbnails read as flat and "pasted in," and the phone-in-a-glow treatment feels a tier below the rest.

At Stripe/Linear/Figma, **thumbnail consistency is a proxy for art direction ability.** Uneven crops, backgrounds, and treatments quietly say "doesn't sweat the system."

**Verdict:** not yet. The single highest-ROI visual fix on the page is unifying thumbnail treatment (consistent framing, crop ratio, background, shadow, and device-shot style).

### 4. Is the narrative strong?
**The voice is strong; the structure isn't yet doing it justice.** *"I don't design screens. I design the logic that screens execute"* and the four principles are genuinely excellent — that's the most senior-sounding content on the site. But it lives *below* the work grid, so the page argues **"here's my work → oh, and here's how I think."** The stronger order is **"here's how I think → here's the proof."** Right now the thesis is the reward for scrolling, when it should be the frame for everything above it.

Also, each project is a single framing sentence + a quiet metric. That's a *caption*, not a *story*. I never learn the shape of a decision — the hard problem, the bet, the outcome — without leaving the homepage.

**Verdict:** the raw narrative material is A-grade; the sequencing and depth make it land as B−.

### 5. Does the portfolio feel memorable?
**Partially.** The ⌘K command palette is the memorable thing — it's a genuine "oh, she gets software" moment, and I'd mention it to a colleague. Beyond that, the aesthetic is *well-executed genre*: dark, glassy, indigo-glow, Linear-adjacent. I've seen a dozen of these this year. Memorability at this tier comes from either (a) a signature idea executed once, brilliantly, or (b) a piece of work so clearly high-stakes it sticks. You have both latent — the AI-native design process and the fintech-at-national-scale work — but neither is dramatized enough to *lodge*.

**Verdict:** memorable for the ⌘K; forgettable-adjacent for everything else. One signature moment + one dramatized flagship project would fix this.

### 6. Does anything feel visually repetitive?
**Yes, in two ways.** First, **card monotony**: every project uses the same rounded-2xl / hairline-border / index-number / title / one-line / tiny-metric / tag-row template. The featured card is barely differentiated from the grid cards, so the flagship (Google) doesn't feel flagship — it feels like card #1 of 5. Second, **section monotony**: Work, How-I-think, Skills, Experience all share the same "eyebrow + H2 + count + content" rhythm on the same dark panel, so the page has one texture from top to bottom. Premium portfolios *modulate* — a moment of contrast (a full-bleed image, a quote, a dark→slightly-lighter shift) resets the eye and signals editorial control.

**Verdict:** repetitive enough that the page reads as *one long uniform scroll*. It needs 1–2 deliberate contrast beats and a genuinely elevated hero project card.

### 7. What would make me *immediately* want to interview?
In priority order, the things that would flip me from "probably" to "yes, book it":

1. **A flagship project that hits like a headline.** One project — Google for Education is the obvious choice — given a full-bleed, editorial treatment with a real problem, a real bet, and a real outcome number *on the homepage*. Show me you can carry global scale and I don't need to see the other four to want to talk.
2. **Outcomes stated like a leader, not a footnote.** "+30% digital CDT openings." "Activation: days → minutes." "108+ apps, millions of educators." Make these the *loudest* text on each card, not the quietest.
3. **The thesis first.** Lead with "I design the logic screens execute" as the frame, so every project below reads as evidence of a point of view.
4. **A face and a sentence of humanity.** One line that makes me feel the person behind the craft — why fintech, why this work matters to *her*. Right now it's impressive but cool; a touch of conviction makes it magnetic.
5. **Consistent, premium thumbnails.** So the body of work looks like *one* art director made it.

---

## Prioritized recommendations (perception ROI)

Ranked purely by "how much does this raise my probability of extending an interview," highest first.

### Tier 1 — Flip "probably" to "yes" (do these)

**H1. Elevate one flagship project into an editorial hero moment.**
Google for Education is your strongest credibility asset (global scale, real users, recognizable brand). Give it a full-width, image-forward treatment that is visually *distinct* from the grid — larger type, a real outcome number, a one-line story with a clear before→after. This is the single biggest lever on the page. *(Perception: turns "senior designer" into "operates at global scale.")*

**H2. Make outcomes the hero of every card.**
Promote `metric` to the most prominent text after the title: larger, full-contrast white, ideally with a subtle "Impact" label. Ensure every project has a crisp, defensible outcome. *(Perception: leaders talk in outcomes; ICs talk in deliverables.)*

**H3. Unify thumbnail art direction.**
One framing system for all five: same aspect ratio, same background strategy (either all dark-inset or all in consistent branded frames), same shadow, same device-shot style. Kill the odd-one-out white cards and the halo phone. *(Perception: art-direction discipline = trust with a design system.)*

**H4. Lead with the thesis, then the proof.**
Move the "How I think" POV (or a distilled 2-line version) up so it frames the work rather than trailing it. *(Perception: point of view = seniority.)*

### Tier 2 — Sharpen the first impression (do these next)

**H5. Compress the hero to a single persuasive breath.**
One-line role, a *visual* credibility strip (Google · Mastercard · Banco de Bogotá · 8 yrs · fintech), one flagship outcome, two CTAs. Trim the paragraph to ~2 lines. Reduce the cognitive load of the first screen. *(Perception: clarity reads as confidence.)*

**H6. Rethink the carousel as a hook, not wallpaper.**
Either (a) start it paused and enlarge frames so each shows a legible outcome, or (b) replace with a static "flagship + 2 supporting" collage. Stop it from competing with the headline on load. *(Perception: curiosity, not ambience.)*

**H7. Break the uniform scroll with 1–2 contrast beats.**
Introduce one editorial moment — a full-bleed image, a pulled quote/testimonial, or a subtle background shift — between sections so the page doesn't read as one texture. *(Perception: editorial control.)*

### Tier 3 — Add warmth & memorability (high polish)

**H8. Add one line of genuine human conviction** near the hero or footer — why this work matters to *you*. The site is impressive but emotionally cool; a sentence of belief makes it magnetic. *(Perception: someone I want in the room, not just on the team.)*

**H9. Add a lightweight credibility/social-proof beat** — a one-line testimonial from a PM/eng lead, or a "shipped to millions" stat band. Third-party voice converts faster than self-description. *(Perception: others already trust her.)*

**H10. Lean into the AI-native angle as a differentiator, not a bullet.** "AI-native from the start" is buried in principle #4 and a skills pill. For *these* companies in *this* year, that's a headline-worthy edge. Give it a visible moment. *(Perception: differentiated from every other senior product designer.)*

---

## On the GlobalPayments / Mastercard distinction (clarity, not removal)

This is handled *correctly* and shows good judgment — keep it. The only issue is that a fast reviewer might read the "GlobalPayments" label + "Mastercard" logo + "name changed · confidential" note as an *inconsistency* rather than an *intentional NDA choice*. That misread costs you nothing to prevent and turns a potential confusion into a **credibility asset** (NDA-awareness is a plus at enterprise-facing companies).

**Recommendation (clarity only):** add one small, explicit line near the project — e.g. *"Client work under NDA — rebranded here to protect confidential details."* Optionally a tiny "Confidential" chip on the card. This reframes it from "wait, which is it?" to "ah, she protects client trust." Do **not** remove the rebrand or the Mastercard credibility line.

---

## What to protect (don't let polish erase these)

- **The ⌘K command palette** — your single most memorable, most on-brand asset.
- **The "I design the logic screens execute" voice** — the most senior thing on the site.
- **The dark, restrained, single-accent craft** — it's genre, but it's *well-executed* genre; the fix is elevation and contrast, not a redesign.
- **The confidentiality posture** — it's a strength; just label it.

---

## Bottom line

You are **one strong flagship project, louder outcomes, and consistent thumbnails** away from a portfolio that gets an *automatic* yes at this tier. The talent and the résumé are clearly there — the homepage currently makes me *deduce* it instead of *feel* it. Close that gap and the interview invite stops being a judgment call and becomes obvious.

**Current call:** interview — leaning yes.
**After Tier 1:** interview — no hesitation.

---

*Perception-only review. No source files were modified.*
