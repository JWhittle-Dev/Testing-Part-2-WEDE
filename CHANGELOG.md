# Changelog

All notable changes to the Durban Youth Council website project are recorded here, newest first.
Each entry says **what** changed, **where**, and **why** (including which Part 1 feedback item it answers).
Format follows Keep a Changelog (https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased] — Part 2: CSS styling and responsive design
Planned (will be filled in as each commit is made):
- Apply and refine the external stylesheet on all five pages with a consistent naming convention.
- Add default styles, typography scale, layout, colour, and pseudo-classes (`:hover`, `:focus`, `:active`).
- Add media queries for tablet and mobile, responsive images, and screenshot evidence.

---

## [1.1.0] — 2026-10-05 — Part 1 feedback corrections

### Proposal reports (feedback items 1–9: "Reports were not submitted")
- **Added** `Reports/` folder with each report in its own file so it can be found and marked separately:
  - `01-goals-and-objectives.md` — measurable objectives (O1–O6) with how success is measured.
  - `02-current-website-analysis.md` — **its own section** now (feedback said it was only in the summary): current site, strengths, weaknesses, opportunities.
  - `03-features-and-functionality.md` — **its own section** now (feedback item 3): page table, nine features with benefits, content specification, out of scope.
  - `04-design-aesthetic.md` — colour palette with hex values and usage, typography, imagery, layout principles (item 4).
  - `05-wireframes.md` + `Reports/wireframes/*.svg` — five desktop wireframes and a mobile home wireframe (item 5).
  - `06-technical-requirements.md` — each technology now has a justification and references (item 6).
  - `07-timeline.md` — phased week-by-week plan with risks (item 7).
  - `08-budget.md` — every cost shows where it comes from (domain price range, free hosting, registry fee change) with references, plus an assumption-based value of volunteer time (item 8).
  - `09-proposal-1-durban-youth-council.md` and `10-proposal-2-the-baking-pan.md` — both proposals present in the repository (item 9).
- **Note:** The Baking Pan proposal contains **[VERIFY]** flags where facts must be confirmed with the owner.

### Content research and sourcing (item 10)
- **Added** the `images/`, `documents/` and `text/` folders that the research README already described but which did not exist.
- **Added** `images/README.md` (image sourcing record), `documents/README.md` and `text/research-notes.md` (dated raw research notes and open questions).
- **Added** four new sources to `sources.md` (domain pricing and hosting cost sources) with access dates.
- **Fixed** the broken Markdown table in `assets-sourcing.md` (a stray row of `/` characters) and added an Illustrations section.
- **Fixed** the research README, which pointed to a path that did not exist.

### Sitemap (item 11)
- **Changed** `images/sitemap.png`: each page box now lists what the page contains (e.g. Programmes: School Support, Charity Partnerships, Youth Leadership, sponsor call-out) and the shared files are noted.
- **Fixed** README path: it said the sitemap was in `/docs/`; it is in `images/`.

### File and folder structure (item 12)
- **Added** a real `images/` folder with content: 6 original SVG illustrations and `favicon.svg`, alongside `sitemap.png`.
- **Changed** the structure diagram in the main README to include `Reports/`, `CHANGELOG.md` and the images folder.

### HTML content tags and images (item 14)
- **Added** `<img>` elements with descriptive `alt` text, explicit `width`/`height` (prevents layout shift) and `loading="lazy"` on all pages except Enquiry.
- **Added** a `<figure>`/`<figcaption>` and a `<dl>` facts list on the Home page, replacing the "images will be added once the site is live" placeholder text.
- **Added** a favicon link in the `<head>` of every page.
- **Fixed** the `&` in the Google Fonts URL to `&amp;` in all five pages so the HTML is valid.

### Sufficient content (item 15)
- **Added** "Who it helps / When / How to join" detail to each programme on `services.html`.
- **Added** a volunteer roles list to `about.html`.

### Comments (item 17: "could be more detailed")
- **Changed** all five HTML files: comments now explain the skip link, viewport tag, hamburger button, navigation `aria-current`, forms (`novalidate`, `fieldset`/`legend`, `aria-live`), images, and the script placement.
- **Changed** `css/style.css`: added a contents list, numbered section comments, and explanations of design tokens, reset, sticky header, flexbox/grid usage and the mobile breakpoint.
- **Changed** `js/script.js`: added a file header, a comment on every function and key line (event handling, `classList.toggle`, ARIA updates, validation rules).

### JavaScript
- **Added** contact form validation (name, valid email, message) with an accessible feedback message; previously the contact form had no validation.
- **Changed** `js/script.js`: moved the shared email pattern and a `showFeedback()` helper to the top so both forms reuse the same code instead of repeating it.

### CSS (supporting the new content only)
- **Added** a small block at the end of `css/style.css` for the hero layout, card and section images, figure caption, facts list and roles list. Full styling work is part of Part 2.

### GitHub: commits, README and changelog (items 18–20)
- **Changed** commit practice: smaller, descriptive commits (one per feedback area) — see the commit list in the hand-over notes.
- **Changed** README: now one complete document at the repository root (overview, structure, goals, features, sitemap, part status, how to run, **references**). The folder README now points to it.
- **Added** this `CHANGELOG.md` as its **own file** at the repository root (feedback item 20 said it should not sit inside the README).
- **Added** a Harvard-style **References** list and in-text citations in the reports and README (item 21).

### Known gaps (not yet resolved)
- No real photographs yet; original illustrations are used as an interim.
- Contact addresses are still suggestive and must be confirmed with DYC.
- Forms do not send data (no back end).

---

## [1.0.0] — September 2026 — Part 1: Foundation
- **Added** five HTML pages (`index`, `about`, `services`, `enquiry`, `contact`) with semantic HTML5 and shared header/footer.
- **Added** `css/style.css` base styling, `js/script.js` (mobile menu toggle and enquiry form validation).
- **Added** `Content_Research_and_Sourcing/` (sources, page copy, asset sourcing) and a first `sitemap.png`.
- **Added** README with project overview and Part 1 checklist.
