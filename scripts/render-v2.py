#!/usr/bin/env python3
"""Generate Version B static HTML pages."""
from pathlib import Path

ROOT = Path("/workspace")

NAV = [
    ("Work", "/work", "work"),
    ("Lab", "/lab-workspace", "lab"),
    ("About", "/about", "about"),
    ("Contact", "/contact", "contact"),
]

RESUME = "/Andrea-Sanz-Rojas-Resume.pdf?v=20260916b"


def head(title, description, path, extra=""):
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content="{description}" />
  <meta name="author" content="Andrea Sanz Rojas" />
  <meta name="robots" content="noindex, follow" />
  <meta name="theme-color" content="#0b0c0a" />
  <link rel="icon" type="image/png" href="/assets/aa-avatar.png" />
  <link rel="apple-touch-icon" href="/assets/aa-avatar.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/src/v2/styles.css" />
  {extra}
</head>
"""


def chrome(active):
    items = []
    for label, href, key in NAV:
        cur = ' aria-current="page"' if key == active or (active == "lab-assistant" and key == "lab") else ""
        items.append(f'          <li><a href="{href}"{cur}>{label}</a></li>')
    nav = "\n".join(items)
    return f"""<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="shell header-inner">
      <a class="logo" href="/">Andrea Sanz Rojas</a>
      <button class="nav-toggle" type="button" aria-controls="site-nav" aria-expanded="false" aria-label="Open menu">Menu</button>
      <nav id="site-nav" class="site-nav" aria-label="Primary">
        <ul>
{nav}
          <li><a href="{RESUME}">Resume</a></li>
        </ul>
      </nav>
    </div>
  </header>
"""


FOOT = f"""  <footer class="site-footer">
    <div class="shell footer-inner">
      <p>Andrea Sanz Rojas · Senior Product Designer</p>
      <p>
        <a href="mailto:andreasanzrojas@gmail.com">Email</a>
        ·
        <a href="https://linkedin.com/in/andrea-sanz-rojas-66329a106" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </div>
  </footer>
  <script type="module" src="/src/v2/app.js"></script>
</body>
</html>
"""


def page(title, description, path, active, main, extra=""):
    return head(title, description, path, extra) + chrome(active) + f'  <main id="main">\n{main}\n  </main>\n' + FOOT


def stage_case(i, fragment, href, kicker, title, body, main_src, sat_a, sat_b, extra="", visual=None):
    current = " is-current" if i == 0 else ""
    left = visual or f"""
          <div class="constellation" aria-hidden="true">
            <div class="artifact-main"><img src="{main_src}" alt="" /></div>
            <div class="artifact-sat artifact-sat--a"><img src="{sat_a}" alt="" /></div>
            <div class="artifact-sat artifact-sat--b"><img src="{sat_b}" alt="" /></div>
          </div>"""
    return f"""
        <article class="stage-case{current}" data-stage="{i}" data-fragment="{fragment}" data-title="{title}">
          {left}
          <div class="stage-copy">
            <p class="eyebrow">{kicker}</p>
            <h3>{title}</h3>
            <p>{body}</p>
            {extra}
            <p class="hero-actions"><a class="btn btn-primary" href="{href}">Open case</a></p>
          </div>
        </article>
"""


BANCO_DEPTH = """
            <div class="depth-surface" data-work-depth tabindex="0">
              <div class="depth-artifact">
                <img class="depth-photo" src="/assets/projects/banco-bogota/bdb-landing.png" alt="Banco de Bogotá CDT digital investing surface" />
                <div class="depth-ritual" data-depth-ritual>
                  <span>Branch</span><span>Paper</span><span>Queue</span><span>Form</span>
                  <span>ID</span><span>Advisor</span><span>Terms</span><span>Wait</span>
                  <span>Stamp</span><span>File</span><span>Renew</span><span>Return</span>
                </div>
                <div class="depth-resolve" data-depth-resolve aria-hidden="true">
                  <figure><img src="/assets/projects/banco-bogota/bdb-simulator.png" alt="Simulate your investment" /><figcaption>Simulate</figcaption></figure>
                  <figure><img src="/assets/projects/banco-bogota/bdb-account.png" alt="Validate account data" /><figcaption>Validate</figcaption></figure>
                  <figure><img src="/assets/projects/banco-bogota/bdb-confirm.png" alt="Confirm conditions and open" /><figcaption>Confirm</figcaption></figure>
                </div>
              </div>
              <div class="depth-actions">
                <button class="btn" type="button" data-depth-hold aria-pressed="false">Hold the surface</button>
                <label class="depth-control" for="banco-depth">
                  <span>Reveal</span>
                  <input id="banco-depth" type="range" min="0" max="100" value="0" aria-label="Reveal Simulate Validate Confirm through the CDT surface" />
                </label>
              </div>
              <p class="depth-live" data-depth-live aria-live="polite">Hold the surface to see the 12-step ritual resolve into Simulate · Validate · Confirm.</p>
            </div>
"""

STAGES = (
    stage_case(
        0,
        "google",
        "/case-google",
        "01 · Google for Education",
        "Scaling app discovery at Google",
        "App Hub for institutions, educators, and partners — live at edu.google.com. Recently launched; long-term metrics are not yet available.",
        "/assets/projects/huge/hero.png",
        "/assets/projects/huge/hub-audience.png",
        "/assets/projects/huge/hub-filters.png",
    )
    + stage_case(
        1,
        "banco",
        "/case-banco",
        "02 · Banco de Bogotá",
        "Bringing CDT investing online",
        "+30% overall openings. Hold the surface: a 12-step analog ritual resolves into Simulate · Validate · Confirm.",
        "/assets/projects/banco-bogota/bdb-landing.png",
        "/assets/projects/banco-bogota/bdb-simulator.png",
        "/assets/projects/banco-bogota/bdb-confirm.png",
        visual=BANCO_DEPTH,
    )
    + stage_case(
        2,
        "mastercard",
        "/case-mastercard",
        "03 · Mastercard",
        "Merchant activation at global scale",
        "Acquisition, marketplace, loyalty, and biometrics in one mobile journey. Activation reduced from days to minutes. Client branding anonymized.",
        "/assets/projects/globalpayments/gp-home-dashboard.png",
        "/assets/projects/globalpayments/gp-d01-location.png",
        "/assets/projects/globalpayments/gp-d02-terminal.png",
    )
)


INDEX = page(
    "Andrea Sanz Rojas — Senior Product Designer",
    "Senior Product Designer with 8+ years across fintech, banking, and global digital products.",
    "/",
    "home",
    f"""
    <section class="hero shell" data-field-gravity aria-label="Field Gravity product fragments">
      <div class="hero-grid">
        <div>
          <p class="eyebrow">Senior Product Designer · Fintech, banking, education</p>
          <h1 class="display">Work that holds complexity without losing the person in it.</h1>
          <p class="lede">I design product systems for banks, payments, and classrooms — from research through high-fidelity delivery. Currently at Huge, designing for Google for Education.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#selected-work">See selected work</a>
            <a class="btn" href="/contact">Get in touch</a>
          </div>
        </div>
        <div>
          <div class="gravity-field" role="group" aria-label="Product fragments">
            <button class="fragment fragment--main" type="button" data-fragment="google" data-label="Google for Education App Hub" aria-pressed="false">
              <img src="/assets/projects/huge/hero.png" alt="" />
              <span class="fragment-label">Google · App Hub</span>
            </button>
            <button class="fragment fragment--sat-a" type="button" data-fragment="banco" data-label="Banco de Bogotá CDT" aria-pressed="false">
              <img src="/assets/projects/banco-bogota/bdb-landing.png" alt="" />
              <span class="fragment-label">Banco de Bogotá</span>
            </button>
            <button class="fragment fragment--sat-b" type="button" data-fragment="mastercard" data-label="Mastercard merchant platform" aria-pressed="false">
              <img src="/assets/projects/globalpayments/gp-home-dashboard-card.png" alt="" />
              <span class="fragment-label">Mastercard</span>
            </button>
            <button class="fragment fragment--sat-c" type="button" data-fragment="lab" data-label="Lab prototype" aria-pressed="false">
              <img src="/assets/projects/travel-adventures/ta-discover-home-card.png" alt="" />
              <span class="fragment-label">Lab Prototype</span>
            </button>
          </div>
          <p class="gravity-live" data-gravity-live aria-live="polite">Move toward a fragment. Click or tap to lock focus — surrounding work yields.</p>
        </div>
      </div>
    </section>

    <section class="shell proof" aria-label="Verified outcomes">
      <div class="proof-item">
        <strong>+30%</strong>
        <span>overall CDT openings after the digital experience launched — not digital conversions alone</span>
      </div>
      <div class="proof-item">
        <strong>12 → 3</strong>
        <span>analog branch steps redesigned into Simulate · Validate · Confirm</span>
      </div>
      <div class="proof-item">
        <strong>Days → minutes</strong>
        <span>merchant activation moved from a branch process into a self-service mobile flow</span>
      </div>
    </section>

    <section class="shell work-stage" data-stage-dissolve tabindex="0" aria-labelledby="selected-work">
      <p class="section-kicker">Selected work</p>
      <h2 id="selected-work" class="section-title">Cases take the stage. The last one yields.</h2>
      <div class="stage-viewport">
        {STAGES}
      </div>
      <div class="stage-controls">
        <button type="button" data-stage-prev aria-label="Previous case">Prev</button>
        <div class="stage-dots" role="group" aria-label="Selected work stages">
          <button class="stage-dot" type="button" data-stage-to="0" aria-label="Google for Education" aria-current="true"></button>
          <button class="stage-dot" type="button" data-stage-to="1" aria-label="Banco de Bogotá" aria-current="false"></button>
          <button class="stage-dot" type="button" data-stage-to="2" aria-label="Mastercard" aria-current="false"></button>
        </div>
        <button type="button" data-stage-next aria-label="Next case">Next</button>
      </div>
      <p class="stage-caption" data-stage-status aria-live="polite">Scaling app discovery at Google</p>
    </section>
""",
)

WORK = page(
    "Work — Andrea Sanz Rojas",
    "Selected product design work across Google for Education, Banco de Bogotá, Mastercard, and lab prototypes.",
    "/work",
    "work",
    f"""
    <section class="shell case-hero">
      <p class="eyebrow">Work</p>
      <h1 class="display">Selected work</h1>
      <p class="lede">Shipped product design across education, regulated banking, and enterprise payments — plus lab prototypes labeled as such. Cases take the stage; the last one yields.</p>
    </section>
    <section class="shell work-stage" data-stage-dissolve tabindex="0" aria-label="Selected work stages">
      <div class="stage-viewport">
        {STAGES}
      </div>
      <div class="stage-controls">
        <button type="button" data-stage-prev aria-label="Previous case">Prev</button>
        <div class="stage-dots" role="group" aria-label="Selected work stages">
          <button class="stage-dot" type="button" data-stage-to="0" aria-label="Google for Education" aria-current="true"></button>
          <button class="stage-dot" type="button" data-stage-to="1" aria-label="Banco de Bogotá" aria-current="false"></button>
          <button class="stage-dot" type="button" data-stage-to="2" aria-label="Mastercard" aria-current="false"></button>
        </div>
        <button type="button" data-stage-next aria-label="Next case">Next</button>
      </div>
      <p class="stage-caption" data-stage-status aria-live="polite">Scaling app discovery at Google</p>
    </section>
    <section class="shell" style="margin-top:var(--pad-y)">
      <p class="section-kicker">More</p>
      <p class="lede"><a href="/case-more">Mastercard digital banking</a> · <a href="/lab-workspace">Lab Prototype</a> · <a href="/lab-assistant">Lab Concept</a></p>
    </section>
""",
)

CASE_GOOGLE = page(
    "Google for Education App Hub — Andrea Sanz Rojas",
    "Redesigning App Hub so institutions, educators, and partners could navigate a growing catalog of tools. Designed at Huge.",
    "/case-google",
    "work",
    """
    <article class="shell case-hero">
      <p class="eyebrow">Education · Designed at Huge · 2025</p>
      <h1 class="display">Rebuilding discovery across Google’s education ecosystem</h1>
      <p class="lede">App Hub is Google for Education’s discovery platform. As the library grew past 100 integrations, one URL had to serve buyers, IT, educators, and partners — without a system for finding the right path.</p>
      <p class="chip-row" style="margin-top:1rem">
        <span class="pill">Senior Experience Designer</span>
        <span class="pill">UX strategy · IA · interaction</span>
      </p>
      <p style="margin-top:1.1rem"><a class="btn btn-primary" href="https://edu.google.com/intl/ALL_us/resources/get-started/apps/" rel="noopener noreferrer">Explore the live experience</a></p>
      <figure class="case-figure">
        <img src="/assets/projects/huge/hero.png" alt="Google for Education App Hub live discovery experience" />
        <figcaption>Live at edu.google.com — recently launched; long-term metrics are not yet available.</figcaption>
      </figure>
    </article>
    <div class="shell prose">
      <h2>The challenge</h2>
      <p>Discovery stopped being a content problem and became a product problem: competing intents, sort-only navigation, and no above-the-fold path by role.</p>
      <h2>Diagnosis</h2>
      <ul>
        <li>108+ apps with sort-only controls — users could reorder, not narrow.</li>
        <li>The page was organized around what Google offered, not who arrived.</li>
        <li>Integration labels were technically accurate and operationally opaque.</li>
        <li>Every stakeholder entered the same undifferentiated flow.</li>
      </ul>
    </div>
    <section class="shell" style="margin-top:2rem">
      <div class="flow-grid">
        <figure class="flow-card">
          <img src="/assets/projects/huge/before-hero.png" alt="Previous App Hub hero with undifferentiated entry" loading="lazy" />
          <figcaption>Before — one entry, no audience paths</figcaption>
        </figure>
        <figure class="flow-card">
          <img src="/assets/projects/huge/before-catalog.png" alt="Previous App Hub catalog with sort-only controls" loading="lazy" />
          <figcaption>Before — sort-only catalog across 108+ apps</figcaption>
        </figure>
      </div>
    </section>
    <div class="shell prose">
      <h2>What the work became</h2>
      <p>Stakeholder requests arrived as page-level asks. The useful question was different: what structure would discovery need at this scale — for everyone arriving?</p>
    </div>
    <section class="shell decision-list" style="margin-top:1.5rem">
      <article class="decision">
        <div>
          <p class="eyebrow">01</p>
          <h3 class="section-title" style="font-size:var(--step-2)">Start with self-identification</h3>
          <p>Instead of opening into a catalog, the landing asks who you are and what you need. Parallel entry points reduce the search space before options appear.</p>
        </div>
        <figure class="case-figure">
          <img src="/assets/projects/huge/screen-audiences.png" alt="App Hub entry points for administrators, educators, and developers" loading="lazy" />
        </figure>
      </article>
      <article class="decision">
        <div>
          <p class="eyebrow">02</p>
          <h3 class="section-title" style="font-size:var(--step-2)">Teach before filtering</h3>
          <p>Filters only work if people understand the labels. Explainer cards turn technical integration types into concrete outcomes — then the catalog becomes usable.</p>
        </div>
        <figure class="case-figure">
          <img src="/assets/projects/huge/screen-integrations.png" alt="Integration type cards explaining Classroom Add-ons, SIS, and licensing" loading="lazy" />
        </figure>
      </article>
      <article class="decision">
        <div>
          <p class="eyebrow">03</p>
          <h3 class="section-title" style="font-size:var(--step-2)">Pair filters with editorial discovery</h3>
          <p>Many visitors arrive without a formed intent. Editorial curation sits beside the taxonomy so exploration and precision can coexist.</p>
        </div>
        <figure class="case-figure">
          <img src="/assets/projects/huge/screen-trailblazing.png" alt="Discover trailblazing apps editorial section" loading="lazy" />
        </figure>
      </article>
      <article class="decision">
        <div>
          <p class="eyebrow">04</p>
          <h3 class="section-title" style="font-size:var(--step-2)">Order taxonomy by decision priority</h3>
          <p>Integration type, institution, subject, category, language — ordered by how buyers and educators evaluate apps. Pagination replaced endless scroll.</p>
        </div>
        <figure class="case-figure">
          <img src="/assets/projects/huge/screen-filters.png" alt="App Hub filter bar and catalog results" loading="lazy" />
        </figure>
      </article>
    </section>
    <div class="shell prose">
      <h2>What shipped</h2>
      <p>Landing, app details, product information architecture, filter taxonomy, entry paths, and partner onboarding. Embedded with Google product and marketing stakeholders. After UX handoff, engineering and visual design implemented the experience within Google’s design system.</p>
      <p>Recently launched. Long-term metrics are not yet available; the current signal is structural — the live architecture reflects the diagnosis above.</p>
    </div>
    <div class="shell">
      <a class="next-link" href="/case-banco"><span>Next · Banco de Bogotá CDT</span><span aria-hidden="true">→</span></a>
    </div>
""",
)

CASE_BANCO = page(
    "Banco de Bogotá CDT — Andrea Sanz Rojas",
    "End-to-end redesign of Banco de Bogotá’s CDT product — a 12-step analog process designed into a 3-step digital flow. +30% overall openings.",
    "/case-banco",
    "work",
    f"""
    <article class="shell case-hero">
      <p class="eyebrow">Banking · Colombia · 2021–2022</p>
      <h1 class="display">Rebuilding digital investing at Colombia’s largest bank</h1>
      <p class="lede">End-to-end redesign of Banco de Bogotá’s CDT product — turning a 12-step analog process into a digital flow.</p>
      <div class="impact-grid">
        <div class="impact-item"><strong>+30%</strong><p>overall CDT openings post-launch — the digital experience expanded product adoption, not digital conversions alone</p></div>
        <div class="impact-item"><strong>12 → 3</strong><p>analog steps reduced to Simulate · Validate · Confirm</p></div>
      </div>
      {BANCO_DEPTH}
    </article>
    <div class="shell prose">
      <h2>Context</h2>
      <p>CDTs (Certificates of Deposit) are a cornerstone of Colombian banking. At Banco de Bogotá the process was analog: branch visits, paper forms, days of waiting. Digital-native competitors were taking investment volume. The ask: educate, reduce friction, and drive adoption without compromising regulatory compliance.</p>
      <h2>My role</h2>
      <p>End-to-end Product Designer. I owned research, stakeholder alignment, UX, visual UI, prototyping, and post-launch data capture. Collaborators: risk, compliance, brand, and product. Methods: Design Thinking · usability testing.</p>
      <h2>Signal</h2>
      <p>The complaint wasn’t the product. It was the experience around it: branch visits for something simple, legal terms that surprised people after they had already committed, and a renewal mechanic that re-invested savings without explicit consent. The opportunity was to redesign the sequence of information so people could understand, decide, and commit without a teller.</p>
    </div>
    <section class="shell" aria-label="Three-step flow">
      <p class="section-kicker">The flow</p>
      <h2 class="section-title">Twelve analog steps. Three digital ones.</h2>
      <div class="flow-grid">
        <article class="flow-card">
          <img src="/assets/projects/banco-bogota/bdb-simulator.png" alt="CDT investment simulator" loading="lazy" />
          <p class="eyebrow">01 Simulate</p>
          <h3>See the investment first</h3>
          <p>Amount, term, and salary range return three personalised CDT options with projected returns — before any commitment.</p>
        </article>
        <article class="flow-card">
          <img src="/assets/projects/banco-bogota/bdb-account.png" alt="Pre-filled account selection" loading="lazy" />
          <p class="eyebrow">02 Validate</p>
          <h3>Confirm data &amp; account</h3>
          <p>Personal data is pre-filled from existing bank records. No forms, no documents, no branch visit.</p>
        </article>
        <article class="flow-card">
          <img src="/assets/projects/banco-bogota/bdb-confirm.png" alt="CDT summary and auto-renewal toggle" loading="lazy" />
          <p class="eyebrow">03 Confirm</p>
          <h3>Review conditions &amp; open</h3>
          <p>Rate, maturity, projected returns, and an explicit auto-renewal toggle — visible in the flow, not buried in a PDF.</p>
        </article>
      </div>
    </section>
    <div class="shell prose">
      <h2>Key design decisions</h2>
      <h3>Value before compliance</h3>
      <p>We reorganized the process around the customer’s decision — not the bank’s operating sequence. Required checks stay in the flow, but only after the decision has enough context to feel grounded.</p>
      <h3>Transparent conditions</h3>
      <p>Rate, term, and legal information appear as a readable summary at confirmation. Users see what they are agreeing to before they confirm.</p>
      <h3>Auto-renewal as an explicit choice</h3>
      <p>Customers often discovered reinvestment only after maturity. Alignment across product, compliance, and business produced a clear toggle at confirmation, with continued control in the app.</p>
    </div>
    <div class="shell">
      <figure class="case-figure">
        <img src="/assets/projects/banco-bogota/bdb-email.png" alt="CDT confirmation email with rate, maturity, and renewal link" loading="lazy" />
        <figcaption>Confirmation email closes the loop — amount, rate, maturity, and a link to manage auto-renewal.</figcaption>
      </figure>
      <a class="next-link" href="/case-mastercard"><span>Next · Mastercard merchant platform</span><span aria-hidden="true">→</span></a>
    </div>
""",
)

CASE_MC = page(
    "Mastercard merchant platform — Andrea Sanz Rojas",
    "Senior product experience design for a merchant banking platform via Mastercard. Activation reduced from days to minutes. Client confidential.",
    "/case-mastercard",
    "work",
    """
    <article class="shell case-hero">
      <p class="eyebrow">Payments · Enterprise · Mastercard</p>
      <h1 class="display">One app. Four merchant capabilities. Zero branch visits.</h1>
      <p class="lede">Designed the end-to-end merchant banking platform — POS acquisition, fiscal validation, marketplace, loyalty, and biometric security — in a single mobile experience.</p>
      <p class="chip-row" style="margin-top:1rem">
        <span class="pill">Senior Product Experience Designer</span>
        <span class="pill">Client branding anonymized</span>
      </p>
      <p class="lede">Merchant activation reduced from days to minutes — a multi-day branch process became a self-service mobile flow.</p>
      <figure class="case-figure">
        <img src="/assets/projects/globalpayments/gp-home-dashboard.png" alt="Merchant banking platform home with acquisition, marketplace, loyalty and biometric flows" />
      </figure>
    </article>
    <div class="shell prose">
      <h2>Context</h2>
      <p>A major bank needed to modernize how businesses access merchant services. A POS terminal required branch visits. Fiscal address validation was manual. Selling online meant unrelated third-party platforms. Loyalty existed but was invisible. The goal: four needs in one self-service mobile platform.</p>
      <h2>My role</h2>
      <p>Senior Product Experience Designer, end-to-end. I owned discovery research, co-facilitation of a Design Thinking workshop, information architecture, interaction design, and high-fidelity prototype. I collaborated with product, compliance, and engineering before any screen was designed.</p>
    </div>
    <section class="shell decision-list">
      <article class="decision">
        <div>
          <p class="eyebrow">01</p>
          <h3 class="section-title" style="font-size:var(--step-2)">Map-based fiscal address</h3>
          <p>The highest drop-off was a text form that didn’t match how owners think about location. A map pin captures the same compliance data with a single visual confirmation.</p>
        </div>
        <figure class="case-figure"><img src="/assets/projects/globalpayments/gp-d01-location.png" alt="Map-based fiscal address validation" loading="lazy" /></figure>
      </article>
      <article class="decision">
        <div>
          <p class="eyebrow">02</p>
          <h3 class="section-title" style="font-size:var(--step-2)">Guided POS selection</h3>
          <p>Three terminals with different fit. The system recommends based on profile while still showing all options — fewer wrong-device returns.</p>
        </div>
        <figure class="case-figure"><img src="/assets/projects/globalpayments/gp-d02-terminal.png" alt="POS terminal selection with recommended device" loading="lazy" /></figure>
      </article>
      <article class="decision">
        <div>
          <p class="eyebrow">03</p>
          <h3 class="section-title" style="font-size:var(--step-2)">Biometrics during onboarding</h3>
          <p>Face ID and fingerprint as a required onboarding step — not a settings task people defer. Later approvals stay frictionless.</p>
        </div>
        <figure class="case-figure"><img src="/assets/projects/globalpayments/gp-d03-biometric.png" alt="Biometric settings with Face ID and fingerprint" loading="lazy" /></figure>
      </article>
      <article class="decision">
        <div>
          <p class="eyebrow">04</p>
          <h3 class="section-title" style="font-size:var(--step-2)">Help at the moment of confusion</h3>
          <p>Phone, email, or chat inline at fiscal validation, terminal selection, and document submission — the steps that generated the most drop-off.</p>
        </div>
        <figure class="case-figure"><img src="/assets/projects/globalpayments/gp-d04-help.png" alt="Inline multi-channel support options" loading="lazy" /></figure>
      </article>
    </section>
    <div class="shell prose">
      <h2>Outcomes we can stand behind</h2>
      <ul>
        <li>Activation reduced from a multi-day branch process to a self-service mobile flow (days → minutes).</li>
        <li>Marketplace setup sits in the same onboarding journey — a service-discovery problem, not an upsell metric.</li>
        <li>Biometric authentication configured inline. Support surfaced at high-friction steps.</li>
      </ul>
      <p>No fabricated conversion rates. The proof is the architecture and the activation-time change.</p>
    </div>
    <div class="shell">
      <a class="next-link" href="/case-more"><span>Next · More work</span><span aria-hidden="true">→</span></a>
    </div>
""",
)

CASE_MORE = page(
    "More work — Andrea Sanz Rojas",
    "Additional product design: mobile banking via Mastercard, and pointers to lab prototypes.",
    "/case-more",
    "work",
    f"""
    <article class="shell case-hero">
      <p class="eyebrow">More work</p>
      <h1 class="display">Mobile banking, and the work that stays in the lab</h1>
      <p class="lede">A confidential Mastercard banking engagement, plus honest pointers to prototypes that are not shipped products.</p>
    </article>
    <section class="shell">
      <p class="section-kicker">Mastercard · client confidential</p>
      <h2 class="section-title">Digital banking for everyday customers</h2>
      <p class="lede">Senior Product Experience Designer, embedded through Mastercard. Digital credit card issuance, contactless payments, card management, and a 40+ component Figma system. Client branding anonymized.</p>
      <div class="flow-grid" style="margin-top:1.5rem">
        <figure class="flow-card"><img src="/assets/projects/monoma/monoma-d01-approval.png" alt="Credit card approval with virtual card" loading="lazy" /><figcaption>Virtual card at approval</figcaption></figure>
        <figure class="flow-card"><img src="/assets/projects/monoma/monoma-d03-identity.png" alt="Identity verification options: document or selfie" loading="lazy" /><figcaption>Flexible identity verification</figcaption></figure>
        <figure class="flow-card"><img src="/assets/projects/monoma/monoma-d07-nfc.png" alt="NFC contactless payment screen" loading="lazy" /><figcaption>Tap to pay</figcaption></figure>
        <figure class="flow-card"><img src="/assets/projects/monoma/monoma-d05-home.png" alt="Banking home with active card actions" loading="lazy" /><figcaption>Home after activation</figcaption></figure>
      </div>
      <div class="prose">
        <ul>
          <li>Full credit card issuance inside the app — zero branch visits required.</li>
          <li>Virtual card active at approval so people can transact before the physical card arrives.</li>
          <li>Payment flow compressed from 6+ steps to select · confirm · pay.</li>
        </ul>
      </div>
    </section>
    <section class="shell" style="margin-top:var(--pad-y)">
      <p class="section-kicker">Lab</p>
      <h2 class="section-title">Not everything here is a shipped case.</h2>
      <p class="lede"><a href="/lab-workspace">Lab Prototype · travel workspace</a> · <a href="/lab-assistant">Lab Concept · design assistant</a>. Same interaction physics, lower fidelity. No fabricated metrics.</p>
    </section>
""",
)

LAB_WS = page(
    "Lab Prototype · Travel workspace — Andrea Sanz Rojas",
    "Lab Prototype: a high-fidelity travel workspace exploring discovery, booking, and trip boards. Not a shipped product.",
    "/lab-workspace",
    "lab",
    """
    <article class="shell case-hero">
      <p class="eyebrow">Lab Prototype · not a shipped product</p>
      <h1 class="display">A workspace for decision-heavy travel</h1>
      <p class="lede">High-fidelity flows exploring the tension between discovery (exploratory, emotional) and booking (intentional, high-stakes). This is a design challenge prototype — interaction, IA, and visual systems — not live metrics.</p>
      <span class="pill lab-note">Lab Prototype / Concept</span>
      <div data-field-gravity data-fidelity="low" style="margin-top:1.4rem">
        <div class="gravity-field" data-fidelity="low" role="group" aria-label="Lab prototype fragments">
          <button class="fragment fragment--main" type="button" data-fragment="discover" data-label="Discover itinerary" aria-pressed="false">
            <img src="/assets/projects/travel-adventures/ta-d01-days.png" alt="" />
            <span class="fragment-label">Discover</span>
          </button>
          <button class="fragment fragment--sat-a" type="button" data-fragment="agency" data-label="Agency share" aria-pressed="false">
            <img src="/assets/projects/travel-adventures/ta-d02-agency-share.png" alt="" />
            <span class="fragment-label">Agency</span>
          </button>
          <button class="fragment fragment--sat-b" type="button" data-fragment="book" data-label="Booking" aria-pressed="false">
            <img src="/assets/projects/travel-adventures/ta-star-flight.png" alt="" />
            <span class="fragment-label">Book</span>
          </button>
          <button class="fragment fragment--sat-c" type="button" data-fragment="board" data-label="Trip board" aria-pressed="false">
            <img src="/assets/projects/travel-adventures/ta-d03-trips-empty.png" alt="" />
            <span class="fragment-label">Board</span>
          </button>
        </div>
        <p class="gravity-live" data-gravity-live aria-live="polite">Lab Prototype — same field physics, lower fidelity. Tap to lock a fragment. Not a shipped product.</p>
      </div>
    </article>
    <div class="shell prose">
      <h2>What this is</h2>
      <p>A B2B2C travel concept connecting travelers with agencies and package tours. I designed research framing, information architecture, and a 40+ screen Figma prototype covering discovery, booking, trip management, agency browsing, and payment — plus a component-level system.</p>
      <p>Role on this prototype: Senior Product Designer, end-to-end. It is labeled as a lab prototype because it was not shipped as a commercial product.</p>
    </div>
    <section class="shell flow-grid">
      <figure class="flow-card"><img src="/assets/projects/travel-adventures/ta-d01-days.png" alt="Day-by-day Bangkok itinerary" loading="lazy" /><figcaption>Day-by-day structure so discovery is editorial, not a blank search</figcaption></figure>
      <figure class="flow-card"><img src="/assets/projects/travel-adventures/ta-d02-agency-share.png" alt="Agency selection and trip sharing" loading="lazy" /><figcaption>Agency choice with collaborative sharing in-flow</figcaption></figure>
      <figure class="flow-card"><img src="/assets/projects/travel-adventures/ta-d03-trips-empty.png" alt="Empty trips state inviting a travel board" loading="lazy" /><figcaption>Empty state as invitation, not a dead end</figcaption></figure>
      <figure class="flow-card"><img src="/assets/projects/travel-adventures/ta-star-flight.png" alt="Flight selection from Bogotá to Bangkok" loading="lazy" /><figcaption>Booking as a continued workspace, not a funnel drop</figcaption></figure>
    </section>
    <div class="shell">
      <a class="next-link" href="/lab-assistant"><span>Next · Lab Concept · design assistant</span><span aria-hidden="true">→</span></a>
    </div>
""",
)

LAB_ASSIST = page(
    "Lab Concept · Design assistant — Andrea Sanz Rojas",
    "Lab Concept: a prototype for sequencing design briefs with AI-native tools. No fabricated metrics.",
    "/lab-assistant",
    "lab",
    """
    <article class="shell case-hero">
      <p class="eyebrow">Lab Concept · not a production product</p>
      <h1 class="display">An assistant that sequences the work before it draws the screen</h1>
      <p class="lede">A concept for how I already work with Claude, Cursor, and ChatGPT: research synthesis, constraint listing, and rapid prototyping. This page is a lab prototype. It does not call a model, and it does not invent AI case metrics.</p>
      <span class="pill lab-note">Lab Prototype / Concept</span>
    </article>
    <section class="shell">
      <p class="lede">Screen + AI Assistant = Concept. The form below sequences a brief locally. It does not call a model.</p>
      <div class="lab-shell" data-lab-assistant data-fidelity="low">
        <div class="lab-toolbar">
          <span class="pill lab-note">Concept</span>
          <span>Local prototype · no API · no claimed accuracy</span>
        </div>
        <form class="lab-body">
          <div class="lab-pane">
            <label for="brief">Brief</label>
            <textarea id="brief" name="brief" placeholder="Paste a messy product brief…"></textarea>
            <p style="margin-top:0.8rem">
              <button class="btn btn-primary" type="submit">Structure the brief</button>
            </p>
            <p class="lede" style="font-size:var(--step-0)">Honest practice: I use Claude for synthesis, Cursor for prototyping, and ChatGPT for content strategy. What used to take weeks of discovery can take days — without claiming a percentage that was never measured.</p>
          </div>
          <div class="lab-pane">
            <p class="eyebrow">Output</p>
            <div data-lab-output>
              <p>The concept separates evidence, constraints, and open questions before Figma. Submit a brief to see the sequencing — still a prototype, still on-device.</p>
            </div>
          </div>
        </form>
      </div>
    </section>
    <div class="shell prose" style="margin-top:2rem">
      <h2>What this is not</h2>
      <ul>
        <li>Not a shipped assistant for a named client.</li>
        <li>Not a claim about model quality, time saved as a universal metric, or AI-driven conversion.</li>
        <li>A working sketch of how I keep AI in the workflow without letting it invent the evidence.</li>
      </ul>
    </div>
""",
)

ABOUT = page(
    "About — Andrea Sanz Rojas",
    "Senior Product Designer with 8+ years across fintech, banking, and global digital products.",
    "/about",
    "about",
    """
    <article class="shell case-hero split">
      <div>
        <p class="eyebrow">About</p>
        <h1 class="display">I don’t design screens. I design decisions.</h1>
        <p class="lede">I’m Andrea — a Senior Product Designer combining visual craft, UX rigor, and systems thinking. 8 years across LATAM and Europe on investment platforms, payment infrastructure, and digital banking.</p>
      </div>
      <figure class="case-figure">
        <img src="/assets/andrea-hero.webp" alt="Portrait of Andrea Sanz Rojas" width="960" height="1200" />
      </figure>
    </article>
    <div class="shell prose">
      <p>I’ve led design from discovery to delivery, adapted systems across 30+ enterprise clients at Mastercard, and use AI-native workflows to prototype faster and synthesize research — without substituting tools for evidence.</p>
    </div>
    <section class="shell">
      <p class="section-kicker">Experience</p>
      <div class="experience">
        <article>
          <p>Mar 2025–Present</p>
          <div>
            <h2>Senior Experience Designer · Huge — Google</h2>
            <p>Product experiences for Google for Education and YouTube Blog. Intuitive paths for educators and global audiences.</p>
          </div>
        </article>
        <article>
          <p>Apr 2022–Jan 2025</p>
          <div>
            <h2>Senior Product Experience Designer · Mastercard</h2>
            <p>Enterprise payment design across LATAM and Europe — multi-market products, workshops, and design systems adapted for 30+ clients.</p>
          </div>
        </article>
        <article>
          <p>Aug 2017–Apr 2022</p>
          <div>
            <h2>Product Designer · Banco de Bogotá</h2>
            <p>Digital banking across investments, authentication, security, and CDT Digital (+30% overall openings).</p>
          </div>
        </article>
        <article>
          <p>Mar 2017–Aug 2017</p>
          <div>
            <h2>UX Designer · Imaginamos</h2>
            <p>Web and mobile products for startups and enterprise clients, concept to high-fidelity.</p>
          </div>
        </article>
      </div>
    </section>
    <section class="shell" style="margin-top:2.5rem">
      <p class="section-kicker">Languages</p>
      <p>Français · English · Italiano · Español · Português (learning)</p>
      <p class="lede">Colombia · open to remote and hybrid conversation. Off the clock: jewelry design, travel, and the future of fintech.</p>
    </section>
""",
)

CONTACT = page(
    "Contact — Andrea Sanz Rojas",
    "Contact Andrea Sanz Rojas, Senior Product Designer — email, LinkedIn, and resume.",
    "/contact",
    "contact",
    f"""
    <article class="shell case-hero">
      <p class="eyebrow">Contact</p>
      <h1 class="display">Let’s talk about the work.</h1>
      <p class="lede">Senior Product Designer with 8+ years across fintech, banking, and global digital products. Currently at Huge, designing for Google for Education.</p>
      <ul class="contact-list">
        <li><span class="eyebrow">Email</span><br /><a href="mailto:andreasanzrojas@gmail.com">andreasanzrojas@gmail.com</a></li>
        <li><span class="eyebrow">LinkedIn</span><br /><a href="https://linkedin.com/in/andrea-sanz-rojas-66329a106" rel="noopener noreferrer">linkedin.com/in/andrea-sanz-rojas-66329a106</a></li>
        <li><span class="eyebrow">Resume</span><br /><a href="{RESUME}">Download CV</a></li>
        <li><span class="eyebrow">Based in</span><br />Colombia · remote and hybrid</li>
      </ul>
    </article>
""",
)

NOT_FOUND = page(
    "Not found — Andrea Sanz Rojas",
    "That page is not on this preview.",
    "/404",
    "home",
    """
    <article class="shell case-hero">
      <h1 class="display">This page isn’t here.</h1>
      <p class="lede">Try the work index, or go home.</p>
      <p class="hero-actions"><a class="btn btn-primary" href="/">Home</a><a class="btn" href="/work">Work</a></p>
    </article>
""",
)

PAGES = {
    "index.html": INDEX,
    "work.html": WORK,
    "case-google.html": CASE_GOOGLE,
    "case-banco.html": CASE_BANCO,
    "case-mastercard.html": CASE_MC,
    "case-more.html": CASE_MORE,
    "lab-workspace.html": LAB_WS,
    "lab-assistant.html": LAB_ASSIST,
    "about.html": ABOUT,
    "contact.html": CONTACT,
    "404.html": NOT_FOUND,
}

def main():
    for name, html in PAGES.items():
        path = ROOT / name
        path.write_text(html, encoding="utf-8")
        print("wrote", path)

if __name__ == "__main__":
    main()
