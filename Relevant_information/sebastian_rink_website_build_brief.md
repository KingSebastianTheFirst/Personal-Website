# Sebastian Rink Academic Website — Website Build Brief

## 1. Purpose of This Document

This document is the central source brief for building an academic website for **Sebastian Rink**.

It should be used by ChatGPT, an AI developer, or a human engineer to prepare the website structure, content, design direction, and implementation files.

The purpose is not to build a generic academic homepage. The goal is to create a professional but lively academic website with a personal tone, a digital garden / wiki-style structure, and a visually engaging design.

---

## 2. Website Vision

The website should present Sebastian Rink’s academic and professional profile in a way that is credible, easy to navigate, and visually memorable.

The site should be useful for:

- Students
- Other academics and researchers
- Journalists
- Practitioners
- Policy professionals
- Finance professionals
- A broader interested public

The website should not feel too academic, standardized, dry, or generic. It should communicate that Sebastian is a serious researcher and expert, but also someone with personality, curiosity, and enjoyment of life.

The overall concept should be:

> A playful but professional academic digital garden: part research profile, part personal research wiki, part accessible public-facing archive.

The website should be easy to navigate and should make it simple for visitors to understand:

- who Sebastian is,
- what he works on,
- what he has published,
- how to contact him,
- and what makes his perspective distinctive.

---

## 3. Core Website Goals

The website should:

1. Present Sebastian Rink’s academic identity.
2. Share publications and working papers.
3. Explain his research areas in accessible language.
4. Help people get in touch with him.
5. Let people know who he is beyond a formal CV.
6. Serve students, academics, journalists, practitioners, and a broader interested public.
7. Translate CV information into readable website sections rather than simply displaying a CV.
8. Use a digital garden / wiki-style structure where useful.
9. Be easy to update when important new information becomes available.
10. Be visually enjoyable without sacrificing professionalism.

---

## 4. Basic Identity Information

Use the following information as fixed core identity data.

```text
Full name: Sebastian Rink

Academic degree:
PhD in Banking and Finance

Current affiliation:
Frankfurt School of Finance & Management

Current center:
UNEP Collaborating Centre for Climate & Sustainable Energy Finance

Location:
Frankfurt, Germany

Email:
s.rink@fs.de
```

Important note:

```text
All other external links should be left blank in the source file for now and added later manually from the respective webpages.
```

Potential links to leave as placeholders:

```text
Google Scholar: https://scholar.google.com/citations?user=21YoueYAAAAJ&hl=de (also contains links to policy papers and other grey literature)
ORCID: 0009-0006-9955-1495
LinkedIn: https://www.linkedin.com/in/sebastian-rink-carbon/
SSRN: in other file
Working paper links: in other file
```

---

## 5. Academic and Professional Profile

The site should describe Sebastian as:

> An expert in sustainable finance with several years of experience in policy advisory, financial advisory, and academic research.

Important background points to include:

- Sebastian has worked on sustainable finance for years.
- He has experience in policy advisory and financial advisory.
- He has worked with different organizations.
- He contributed to or helped support the development of the EU Taxonomy.
- He is now a researcher in sustainable finance.
- His detailed academic profile, research areas, teaching, talks, services, grants, and publications should be extracted from the CV and papers.

The final website should not simply copy the CV. Instead, it should transform the CV into readable website content.

---

## 6. Target Audiences

The website should be written and structured for multiple audiences.

### Primary audiences

- Academic researchers
- Students
- Sustainable finance professionals
- Policy practitioners
- Journalists

### Secondary audiences

- Broader public interested in sustainable finance
- People looking for expertise on climate finance, taxonomy, regulation, and related topics
- Potential collaborators
- Event organizers
- Institutions looking for research or advisory expertise

### Implication for writing style

The language should be academically credible but accessible. Avoid unnecessary jargon. When technical concepts are introduced, explain them clearly.

---

## 7. Tone and Personality

The tone should be:

- Playful but not unserious
- Academic but accessible
- Warm
- Clear
- Professional but personal
- Easy to navigate
- Not overly corporate
- Not dry or generic

The site should communicate that Sebastian is not only an academic, but also someone with personality, curiosity, and a sense of enjoyment.

Approved personal details that may be used somewhere on the website:

```text
- Plays trumpet
- Does wing foiling
- Holds a certificate in wine
```

These details should be used lightly and tastefully. They should not dominate the site, but they can appear in an “About” section, a small personal note, or a playful sidebar.

Possible framing:

> Beyond research, Sebastian plays trumpet, spends time wing foiling, and holds a certificate in wine — details that hint at a life beyond papers, policy, and PDFs.

Avoid:

- Corporate marketing language
- Overly polished self-branding
- Excessive academic jargon
- Too much informality
- Making jokes in places where credibility matters, such as publication descriptions

---

## 8. Research Areas

Research areas should be extracted from:

- CV
- Academic papers
- Working papers
- Existing institutional or personal pages

The AI/developer should identify and synthesize the main research areas instead of asking Sebastian to manually define all of them again.

Likely broad area:

```text
Sustainable finance
```

Additional areas should be inferred from the papers and CV.

For each research area, the website should ideally include:

```text
Research area title:
Short accessible explanation:
Why it matters:
Related papers:
Related projects:
Relevant keywords:
Connection to policy/practice:
```

The explanations should be understandable to non-specialists, including journalists and practitioners.

---

## 9. Publications and Papers

All publication and paper information should be extracted from the provided files.

The source folder should include:

- Published papers
- Working papers
- Drafts intended for public description
- Links to papers
- Existing personal/institutional pages containing publication information

For each paper, the AI/developer should generate:

```text
Title:
Authors:
Year:
Status:
Venue / journal / working paper status:
Link to paper:
Short academic description:
Plain-language summary:
Main contribution:
Keywords:
Related research area:
Possible digital garden connections:
```

Important instruction:

```text
The website should link to external pages whenever possible rather than hosting downloadable paper files directly.
```

Preferred approach:

```text
Use links to Sebastian’s institutional page, SSRN, journal pages, working paper pages, or other official sources.
```

No downloads are needed for now unless explicitly added later.

---

## 10. Current Projects

Current projects should not be added separately unless they are already represented in public working papers.

Instruction:

```text
Do not invent or expose new project details.
Use working papers as the public-facing source for current projects.
If a project is too new or not clearly public, do not include it.
```

---

## 11. Teaching

Teaching information should be extracted from the CV.

The website should convert it into a readable section, not a raw CV list.

For each teaching item, extract:

```text
Course title:
Institution:
Role:
Date / semester:
Short description if available:
Level, if available:
```

If no detailed teaching descriptions are available, the site can present a concise teaching overview.

---

## 12. Talks, Conferences, Service, Awards, and Grants

These should all be extracted from the CV.

Include:

- Talks
- Conference presentations
- Workshops
- Academic service
- Reviewing
- Grants
- Awards
- Fellowships

Important privacy rule:

```text
Do not publish grant amounts.
```

The site should present this information in a clean, readable way, possibly as timelines or grouped sections.

---

## 13. CV Handling

The CV should **not** be displayed as a downloadable PDF for now.

Instead:

- Extract relevant information from the CV.
- Translate it into well-written English website sections.
- Use the CV to build an academic/professional timeline.
- Do not expose private information.
- Do not include personal address.
- Do not include phone number.
- Do not include grant amounts.

Possible website sections based on the CV:

- Academic path
- Professional experience
- Research
- Teaching
- Talks
- Selected service
- Awards and grants
- Languages

The CV should function as a source file, not as a public download.

---

## 14. Digital Garden / Wiki Concept

The digital garden should be developed by the AI from:

- Papers
- Working papers
- CV
- Research areas
- Keywords
- Sustainable finance themes
- Policy and finance concepts

The AI should identify possible “garden nodes” such as:

- Sustainable finance
- EU Taxonomy
- Climate finance
- Sustainable energy finance
- Financial regulation
- Policy advisory
- Transition finance
- Banking and finance
- Climate-related financial risk
- Green investment

Actual nodes should be based on the uploaded papers and CV.

Each digital garden node should include:

```text
Node title:
Short explanation:
Why it matters:
Related papers:
Related concepts:
Related external links, if available:
Tags:
Status: seedling / growing / evergreen
```

The garden should make the website feel exploratory and more personal than a standard academic site.

Possible garden node status system:

```text
Seedling: early idea or short note
Growing: developed explanation with links
Evergreen: mature, polished node
```

---

## 15. Visual Style Direction

The website should be visually pleasing, playful, and connected to Sebastian’s work and interests.

Suggested style direction:

> A colorful, warm, accessible academic digital garden with sustainability and subtle maritime elements.

Style ideas:

- Sustainable finance theme
- Digital garden metaphor
- Maritime / water / wind references inspired by wing foiling
- Fresh colors
- Soft but clear layout
- Playful details without becoming childish
- Easy navigation
- Professional enough for academics and journalists

Possible visual motifs:

- Garden paths
- Research trails
- Notes or cards
- Small waves or wind lines
- Soft green/blue color palette
- Subtle botanical elements
- Subtle maritime elements
- Tag clouds
- Wiki-style links
- Research map

The AI/developer should propose a concrete style guide before final implementation.

The style guide should include:

```text
Color palette:
Typography:
Layout system:
Button style:
Card style:
Navigation style:
Digital garden visual language:
Image treatment:
Accessibility rules:
Mobile behavior:
```

---

## 16. Images and Metadata

Photos and other images may be included.

The AI/developer should generate image metadata where possible, but Sebastian should still review it.

For each image, create metadata:

```text
Filename:
Suggested use:
Description:
Alt text:
Public? yes/no:
Preferred crop:
Credit, if needed:
```

Possible uses:

- Homepage portrait
- About page image
- Decorative background
- Research/garden visual
- Personal note section

Important:

```text
Only use images that are clearly approved for public use.
```

---

## 17. Recommended Website Structure

The AI/developer should propose the website structure first, based on all provided information.

Recommended starting structure:

```text
Home
About
Research
Publications
Digital Garden
Teaching
Academic Path
Contact
```

Optional pages:

```text
Talks
Notes
Now
Bookshelf
Selected Service
```

The structure should prioritize ease of navigation.

Visitors should be able to quickly find:

- Who Sebastian is
- What he works on
- His publications
- How to contact him
- His academic/professional background

---

## 18. Homepage Content Direction

The AI/developer should suggest homepage content.

The homepage should probably include:

- Short welcome line
- One-sentence bio
- Profile image
- Main research themes
- Featured publications or working papers
- Link to research/publications
- Link to digital garden
- Contact link
- Small personal note

Possible homepage concept:

> A professional but playful landing page that introduces Sebastian as a sustainable finance researcher and invites visitors to explore his work through research areas, papers, and a digital garden of ideas.

The homepage should be accessible to:

- academics who want the papers quickly,
- journalists who want to understand expertise,
- students who want to learn more,
- practitioners interested in sustainable finance.

---

## 19. Navigation Labels

The AI/developer should suggest navigation labels.

Recommended hybrid navigation:

```text
Home
Research
Papers
Garden
Teaching
About
Contact
```

Possible slightly more playful version:

```text
Start
Research Trails
Papers
Garden
Teaching
About Sebastian
Contact
```

The final labels should be clear first, playful second.

Avoid labels that are too obscure.

---

## 20. Contact and Availability

Contact information should be clearly visible.

Use:

```text
Email:
s.link@fs.de
```

The contact section should indicate that Sebastian can be contacted by:

- academics
- students
- journalists
- practitioners
- people interested in sustainable finance
- people interested in research, policy, and finance questions

Possible contact text:

> I am happy to hear from researchers, students, journalists, and practitioners interested in sustainable finance, climate finance, and related questions at the intersection of policy and financial markets.

---

## 21. Privacy Rules

Do not publish:

- Personal address
- Phone number
- Grant amounts
- Private project information
- Sensitive unpublished material
- Private photos

Okay to publish:

- Name
- PhD in Banking and Finance
- Affiliation
- Institutional email
- Academic and professional stations from CV
- Publications and working papers
- Teaching
- Talks
- Service
- Awards and grants without amounts
- Selected personal interests:
  - trumpet
  - wing foiling
  - wine certificate

Items requiring review:

- All image uses
- All external links
- All personal details
- All project descriptions

---

## 22. Technical Requirements

Sebastian has no strong technical preference.

The site should:

- Run smoothly on GitHub Pages
- Be easy to implement
- Be easy to update
- Work well for a digital garden / wiki-style structure
- Be mobile-friendly
- Be fast
- Be visually polished
- Be accessible

The AI/developer should choose an appropriate setup.

Recommended options:

- Astro with Markdown content
- Jekyll with Markdown content
- Quarto website
- Simple static HTML/CSS/JS if simplicity is preferred

Suggested default:

> Astro or Jekyll with Markdown-based content files, because this makes publications, garden notes, and page updates easier to maintain.

No special technical features are mandatory at launch.

---

## 23. Downloads and External Links

For now:

- No downloadable CV required.
- No need to host downloadable papers directly.
- Prefer linking to official pages, institutional pages, journal pages, SSRN, or other existing paper pages.

The site should include external links where relevant.

---

## 24. Maintenance

The website will be updated ad hoc when important changes occur.

Therefore, the structure should make it easy to update:

- Publications
- Working papers
- Research areas
- Talks
- Teaching
- Academic timeline
- Garden notes
- External links

The developer should avoid a setup where small updates require complicated code changes.

---

## 25. Fun Features

No special fun features are required immediately.

However, the AI/developer should propose subtle fun elements that fit the digital garden concept.

Possible suggestions:

- Digital garden landing page
- Research trail cards
- Concept tags
- Wiki-style internal links
- Small visual icons
- Subtle maritime or wind-inspired details
- “Currently thinking about” section
- Featured idea cards
- Soft hover effects
- Garden node statuses: seedling / growing / evergreen

These should support the content, not distract from it.

---

# 26. Files to Put in the Website Source Folder

Create one folder with the following structure:

```text
sebastian_link_website_source/
```

Inside, include the files and subfolders below.

---

## A. Main Brief

```text
01_website_build_brief.md
```

This file should contain the information from this document.

---

## B. CV

```text
02_cv/
```

Put the latest CV here.

Example:

```text
02_cv/
  Sebastian_Link_CV_latest.pdf
```

Add a small note file:

```text
02_cv/CV_notes.md
```

With:

```text
Use this CV as a source for:
- academic background
- professional stations
- teaching
- talks
- service
- awards
- grants
- languages

Do not publish:
- personal address
- phone number
- grant amounts

Do not make the CV downloadable for now.
Instead, translate the CV into website sections.
```

---

## C. Papers and Working Papers

```text
03_papers/
```

Put all public or semi-public academic papers here.

Example:

```text
03_papers/
  paper_1.pdf
  paper_2.pdf
  working_paper_1.pdf
  working_paper_2.pdf
```

Also create:

```text
03_papers/paper_links.md
```

With placeholders:

```text
# Paper Links

Paper 1:
External link:

Paper 2:
External link:

Paper 3:
External link:
```

Instruction:

```text
Use the PDFs and external links to create publication entries, plain-language summaries, research area connections, and digital garden nodes.
Prefer linking externally rather than offering downloads.
```

---

## D. Existing Web Profiles

```text
04_existing_profiles/
```

Put links or screenshots/text copies of existing public profiles.

Create:

```text
04_existing_profiles/profile_links.md
```

With:

```text
Frankfurt School profile:
UNEP Collaborating Centre profile:
Google Scholar:
ORCID:
LinkedIn:
SSRN:
ResearchGate:
Other:
```

Leave unknown links blank for now.

---

## E. Photos and Images

```text
05_images/
```

Put approved public images here.

Example:

```text
05_images/
  profile_photo_1.jpg
  profile_photo_2.jpg
  wing_foiling_photo.jpg
  other_photo.jpg
```

Also create:

```text
05_images/image_metadata.md
```

Template:

```text
# Image Metadata

Image file:
Description:
Suggested use:
Alt text:
Public? yes/no
Preferred crop:
Credit:
Notes:
```

Important:

```text
Only use images approved for public website use.
```

---

## F. Personal Information

```text
06_personal_information/
```

Create:

```text
06_personal_information/personal_notes.md
```

Content:

```text
Approved personal details:
- Plays trumpet
- Does wing foiling
- Holds a certificate in wine

Possible use:
- About page
- Small personal note
- Homepage sidebar
- Digital garden personal corner

Tone:
Use lightly and tastefully.
Do not make the site too informal.
```

Add later if desired:

```text
Additional personal interests:
Favorite books:
Favorite music:
Favorite places:
Things currently thinking about:
Personal motto:
```

---

## G. Design Direction

```text
07_design_direction/
```

Create:

```text
07_design_direction/style_direction.md
```

Content:

```text
The website should feel like a colorful, warm, playful academic digital garden.

It should combine:
- sustainable finance
- academic credibility
- personal warmth
- digital garden / wiki structure
- subtle maritime and wind elements inspired by wing foiling

Tone:
- playful but not unserious
- academic but accessible
- professional but not boring
- visually enjoyable
- easy to navigate

The AI/developer should propose:
- color palette
- typography
- layout
- visual motifs
- navigation style
- digital garden style
- accessibility rules
- mobile design
```

---

## H. Website Structure Request

```text
08_structure_request/
```

Create:

```text
08_structure_request/site_structure_request.md
```

Content:

```text
The AI/developer should propose the final website structure before implementation.

Recommended starting pages:
- Home
- About
- Research
- Publications
- Digital Garden
- Teaching
- Academic Path
- Contact

Optional:
- Talks
- Notes
- Now
- Bookshelf
- Selected Service

The structure should be easy to navigate and should serve:
- students
- academics
- journalists
- practitioners
- broader interested public
```

---

## I. Privacy Rules

```text
09_privacy_rules/
```

Create:

```text
09_privacy_rules/privacy_rules.md
```

Content:

```text
Do not publish:
- personal address
- phone number
- grant amounts
- private project information
- sensitive unpublished material
- private photos

Okay to publish:
- name
- PhD in Banking and Finance
- affiliation
- institutional email
- academic and professional stations from CV
- publications and working papers
- teaching
- talks
- service
- awards and grants without amounts
- selected personal interests:
  - trumpet
  - wing foiling
  - wine certificate

Review before publishing:
- all image uses
- all external links
- all personal details
- all project descriptions
```

---

## J. Technical Notes

```text
10_technical_notes/
```

Create:

```text
10_technical_notes/technical_preferences.md
```

Content:

```text
No strong technical preference.

Requirements:
- must work smoothly on GitHub Pages
- easy to update
- suitable for static website deployment
- good for digital garden / wiki-style structure
- mobile-friendly
- accessible
- fast
- visually polished

Recommended technical options:
- Astro with Markdown content
- Jekyll with Markdown content
- Quarto website
- Simple static HTML/CSS/JS if simplicity is preferred

No downloads required for now.
Prefer external links for papers, profiles, and institutional information.
```

---

# 27. Final Recommended Folder Structure

```text
sebastian_link_website_source/
  01_website_build_brief.md

  02_cv/
    Sebastian_Link_CV_latest.pdf
    CV_notes.md

  03_papers/
    paper_1.pdf
    paper_2.pdf
    working_paper_1.pdf
    paper_links.md

  04_existing_profiles/
    profile_links.md

  05_images/
    profile_photo_1.jpg
    profile_photo_2.jpg
    image_metadata.md

  06_personal_information/
    personal_notes.md

  07_design_direction/
    style_direction.md

  08_structure_request/
    site_structure_request.md

  09_privacy_rules/
    privacy_rules.md

  10_technical_notes/
    technical_preferences.md
```

---

# 28. What the Developer / AI Should Produce First

Before building the actual website files, the developer or AI should first produce:

1. Proposed website structure
2. Proposed homepage content
3. Proposed navigation labels
4. Extracted research areas
5. Publication summaries
6. Suggested digital garden nodes
7. Proposed visual style guide
8. List of missing information or unclear items

Only after Sebastian reviews those should the actual website implementation begin.

---

# 29. Missing Information to Add Later

The following items are intentionally left open and can be added later:

```text
Personal university page:
Google Scholar:
ORCID:
LinkedIn:
GitHub:
ResearchGate:
SSRN:
Working paper links:
Institutional profile:
Other external links:
```

Possible additional personal details, if desired later:

```text
Favorite books:
Favorite music:
Favorite places:
Personal motto:
Current intellectual curiosities:
Favorite sustainable finance resources:
Bookshelf notes:
```

Possible later website features:

```text
Search
RSS feed
Graph view for digital garden
Bookshelf page
Now page
Newsletter link
Downloadable CV
Downloadable papers
Blog or essay section
```

---

# 30. Final Build Instruction

The website should be built as a polished, static, GitHub Pages-compatible site that combines academic credibility with a playful digital garden concept.

The final site should make publications, research areas, and contact information easy to find while also giving visitors a more personal and exploratory sense of Sebastian’s work and character.

The guiding principle is:

> Clear enough for academics, accessible enough for journalists and practitioners, and personal enough to feel like Sebastian’s own intellectual garden rather than a generic academic template.
