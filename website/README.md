# Sebastian Rink — Academic Website

A polished static academic website for Dr. Sebastian Rink, sustainable finance researcher at Frankfurt School of Finance & Management. Built as a pure HTML/CSS/JS site — no build step required, deploys directly to GitHub Pages.

## Site structure

```
website/
├── index.html            # Homepage
├── about.html            # About & personal
├── research.html         # Six research areas with full descriptions
├── papers.html           # Publications, working papers, policy reports
├── teaching.html         # Course teaching & executive education
├── path.html             # Academic timeline, grants, service, conferences
├── contact.html          # Contact details & external profiles
├── garden/
│   ├── index.html        # Digital garden overview + node grid
│   ├── eu-taxonomy.html
│   ├── esg-ratings.html
│   ├── climate-stress-testing.html
│   ├── sustainable-lending.html
│   ├── responsible-investment.html
│   ├── ml-sustainability.html
│   ├── carbon-markets.html
│   ├── net-zero-banking.html
│   ├── carbon-price-uncertainty.html
│   └── disclosure-design.html
├── assets/
│   ├── css/style.css     # Main stylesheet (all design tokens, components)
│   ├── js/main.js        # Nav toggle, garden filter, active link detection
│   └── images/
│       ├── profile.jpg   # Profile photo (copied from Pictures/)
│       └── hobby.jpg     # Hobby photo (available for use in about section)
└── README.md             # This file
```

## Local preview

No build step required. Open any HTML file directly in a browser, or run a local server for accurate relative path behavior:

**Python (quickest):**
```bash
cd website
python -m http.server 8000
# Open http://localhost:8000
```

**Node (if available):**
```bash
npx serve website
```

**VS Code:** Install the "Live Server" extension, right-click `index.html` → "Open with Live Server".

## GitHub Pages deployment

1. Create a new GitHub repository (e.g., `sebastian-rink.github.io` or `academic-website`).
2. Push the contents of the `website/` folder to the repository root (or a `docs/` folder).
3. Go to **Settings → Pages** in the repository.
4. Set Source to **Deploy from a branch**, select `main` branch and `/ (root)` (or `/docs`).
5. Save. GitHub Pages will publish the site within a minute or two.
6. The site will be live at `https://yourusername.github.io/` (if using a user page) or `https://yourusername.github.io/reponame/`.

**Custom domain:** If using a custom domain (e.g., `sebastianrink.de`), add a `CNAME` file to the repo root containing just the domain name, and configure the DNS A records as per [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Updating content

### Add or update a paper
Edit `papers.html`. Find the relevant section (`#pub-*` for published, `#wp-*` for working papers). Each paper entry follows this pattern:

```html
<div id="wp-example" style="scroll-margin-top:80px;" class="paper-entry">
  <div class="flex-row" style="margin-bottom:0.6rem;">
    <span class="status status-review status-dot">Under review</span>
    <span class="tag">2026</span>
  </div>
  <div class="paper-title">Paper Title Here</div>
  <div class="paper-authors">Author One, Author Two</div>
  <div class="paper-venue">Journal or venue · Year</div>
  <p class="paper-summary">Academic description...</p>
  <div class="paper-plain">
    <strong>In plain terms</strong>
    Plain-language summary...
  </div>
  <div class="tag-list">
    <span class="tag">keyword 1</span>
    <span class="tag">keyword 2</span>
  </div>
  <div class="flex-row">
    <a href="EXTERNAL_LINK" target="_blank" rel="noopener" class="btn btn-sm btn-outline">SSRN →</a>
  </div>
</div>
```

### Add a garden node
1. Create a new file in `garden/` following the template of any existing node (e.g., copy `garden/eu-taxonomy.html`).
2. Set the `data-status` attribute to `seedling`, `growing`, or `evergreen`.
3. Add the node card to `garden/index.html` in the grid, with the matching `data-status` attribute.

### Update conferences or grants
Edit the relevant section in `path.html`.

### Update teaching
Edit `teaching.html`.

### Add external profile links
All external profile links are in `about.html`, `contact.html`, and `index.html`. Search for `placeholder` or update the href attributes for Scholar, ORCID, LinkedIn, and SSRN.

### Update the profile photo
Replace `assets/images/profile.jpg` with a new photo. The same filename is used throughout, so no HTML changes are needed.

## Design system

The design uses CSS custom properties (variables) defined at the top of `style.css`. To change the color palette or typography, edit the `:root` block.

| Token | Value | Use |
|---|---|---|
| `--primary` | `#2B5F4A` | Forest green — main brand color |
| `--teal` | `#186B68` | Ocean teal — secondary accent |
| `--warm` | `#A97025` | Warm gold — tertiary accent |
| `--bg` | `#F5F3EC` | Warm parchment background |
| `--font-head` | Lora (Google Fonts) | Headings |
| `--font-body` | Inter (Google Fonts) | Body text |

Garden node status colors:

| Status | Color |
|---|---|
| 🌱 Seedling | `#5B9D3C` |
| 🌿 Growing | `#2672A8` |
| 🌳 Evergreen | `#2B5F4A` |

## Assumptions & decisions

The following decisions were made in building this site, based on the provided source files. Sebastian should review and correct where needed:

| Item | Assumption |
|---|---|
| Contact email | `s.rink@fs.de` (from papers; brief section 20 contains a typo `s.link@fs.de`) |
| SSRN paper links | Inferred from filenames (`ssrn-XXXXXXX.pdf` → `ssrn.com/abstract=XXXXXXX`). Please verify each link. |
| ScienceDirect links | Taken directly from `online_links.txt`. Verified against paper DOIs. |
| Google Scholar | URL from brief: `scholar.google.com/citations?user=21YoueYAAAAJ&hl=de` |
| LinkedIn | URL from brief: `linkedin.com/in/sebastian-rink-carbon/` |
| ORCID | From brief: `0009-0006-9955-1495` |
| Hobby photo | Copied to `assets/images/hobby.jpg` but not currently embedded in any page. Can be added to the About page if desired. |
| Grant amounts | Not included in accordance with privacy brief |
| Personal address & phone | Not included in accordance with privacy brief |
| Policy reports | Listed in `papers.html` without external links, as no URLs were provided. Links can be added manually. |
| EU Taxonomy advisory | Described as "contributed as an additional expert to the EU Technical Expert Group" — wording taken from CV |

## Items to add later

- [ ] Verify all SSRN links once confirmed
- [ ] Add Frankfurt School institutional profile link when available
- [ ] Add ResearchGate link if desired
- [ ] Add hobby photo to About page if desired
- [ ] Add links to policy reports in `papers.html`
- [ ] Consider adding a "Now" page or "Currently thinking about" section
- [ ] Consider adding a `favicon.ico`
- [ ] Consider adding an RSS feed for papers or garden updates
- [ ] Downloadable CV (when ready) — add button in `about.html` and `path.html`

## Privacy

The site follows the privacy rules in the build brief:
- ✅ No personal address
- ✅ No phone number  
- ✅ No grant amounts
- ✅ No private project information
- ✅ No private photos (only profile and hobby photos from the approved `Pictures/` folder)
- ✅ All personal interests (trumpet, wing foiling, wine certificate) used lightly and tastefully

## Technical notes

- Pure HTML/CSS/JS — no framework, no build step, no dependencies beyond Google Fonts
- Google Fonts loaded via `<link>` tags; requires internet connection for fonts (degrades gracefully to system serif/sans-serif)
- Mobile-responsive via CSS Grid and flexbox with `@media` breakpoints at 900px and 680px
- Navigation uses a CSS `backdrop-filter` blur — degrades gracefully in older browsers
- Garden filter is vanilla JS — no library required
- Accessibility: semantic HTML (`<nav>`, `<main>`, `<header>`, `<footer>`, `<article>`), alt text on images, aria-label on nav toggle button, visible focus styles
