# Dominic Yap — Personal Portfolio

An editorial, responsive personal portfolio. White content sections alternate with a bright blue introduction, lemon-yellow achievements, warm gold details, and a pink contact section. Typography, thin separators, and alternating project layouts keep the content easy to scan. Built as static HTML with shared Node.js templates and structured content. No production packages, UI framework, tracking, or client-side router.

## Local development

Requires Node.js 20 or newer. No dependency installation is needed.

```sh
npm run dev
```

Open `http://localhost:3000`. Changes under `src/` rebuild the pages automatically; refresh the browser to see them. Use `PORT=3001 npm run dev` to choose another port.

```sh
npm run build   # Generate deployable dist/
npm test        # Build and check pages, links, metadata, and content safeguards
npm run preview # Build and serve the production output locally
```

## Structure

- `src/content/site.mjs`: profile, projects, experience, awards, and skills.
- `src/templates.mjs`: shared shell, navigation, footer, page templates, and case studies.
- `src/assets/`: responsive styles, progressive mobile menu, favicon, social image, and locally hosted project screenshots and logos.
- `ASSETS.md`: image provenance, official logo sources, and replacement guidance.
- `scripts/build.mjs`: dependency-free static generator.
- `scripts/serve.mjs`: local server, rebuild watcher, and real 404 responses.
- `tests/site.test.mjs`: generated-site integrity checks.
- `dist/`: generated output; do not edit directly.

Pages: Home, About, Projects, Experience, Contact, three project case studies, and a 404 page. Each route is a directory with an `index.html`, so direct links work on static hosts. Project routes are generated from the content array. Add a project object following the existing fields to generate its case study and index entries.

## Complete before publishing

1. In `src/content/site.mjs`, provide the real `email`, `github`, `linkedin`, and `resume` values. Missing values intentionally render as inactive text. Put the résumé PDF under `src/assets/` and set `resume` to `/assets/resume.pdf`.
2. Set `profile.url` to the final production origin. This enables canonical URLs, Open Graph URL/image metadata, and a sitemap. A 1200×630 sharing image is included at `src/assets/social-card.png`; update it if the headline changes.
3. Add real BasuraScan screenshots; its cover remains a labeled editorial placeholder. Carlee and Rush Gym Wear now use optimized screenshots captured directly from their live sites, and Carlee includes gameplay and result views. Set a project’s `cover` and `screenshots` fields in the content file to add or replace images without changing the template. Images include descriptive alt text, intrinsic dimensions, and lazy loading below the fold. See `ASSETS.md` for image sources.
4. Confirm each project’s technologies, process, important decisions, challenges, outcomes, and current status. The `missing` prompts and “To be completed” notices are intentional. Replace these with first-hand details, then update the case-study template to render confirmed content.
5. Add verified experience dates and order entries chronologically. They are currently grouped by leadership, client work, and research, with that limitation disclosed.
6. Review the listed areas of technical experience. The brief supplies these areas, but no proficiency level or project-specific stack is asserted.
7. Confirm the supplied achievement and education wording. Add BasuraScan team attribution, approved research links, and any publication details if available.
8. Add the Microsoft Student Community website only after its scope, contribution, screenshots, and links are confirmed.
9. Check permission to publish client imagery and research material. Verify the two supplied live project URLs before public launch.

## Deployment

Build with `npm run build` and publish **the contents of `dist/`** to a static host. For Netlify or Cloudflare Pages, use the build command `npm run build` and output directory `dist`. No environment variables, server runtime, or third-party services are required. Configure the host to serve `404.html` for unknown paths; do not rewrite all routes to the homepage.

The templates use root-relative URLs, so deploy at the domain root. A GitHub Pages project subdirectory would require adding a consistent base-path configuration first. Point `profile.url` to your actual domain and rebuild whenever the domain changes.

## Design and accessibility

The reference palette is defined in `src/assets/theme.css`: blue `#268fff`, lemon `#ffff45`, gold `#ffd15b`, and pink `#fb0064`. Dark text is used on saturated surfaces for contrast, with white backgrounds around the work and experience details. The theme file is loaded after the layout styles, so palette and motion adjustments stay separate from responsive layout rules.

Entrances last 400–500 ms, and selected project and milestone sections receive a small one-time reveal. Links and buttons use short hover transitions. Content is never hidden pending a scroll observer. Reduced-motion preferences disable CSS and JavaScript animations, including when the preference changes during a visit.

Two font families: DM Sans and IBM Plex Mono, with system fallbacks. Fonts currently load through Google Fonts; self-host them if you prefer no external font requests. Content and navigation render without JavaScript. The menu supports keyboard use, expanded state, Escape, and focus return. Focus rings, a skip link, semantic landmarks, reduced-motion styles, and active navigation are included. All missing contact links remain inactive; there is no nonfunctional contact form.

Automated checks supplement manual review. They do not constitute a complete accessibility audit. Before public launch, review final screenshots, keyboard behavior, screen-reader output, link destinations, and the completed content.

## Verification performed

- Production build and five automated integrity tests passed.
- Installed Chrome checked all eight content routes at 375, 768, and 1440 pixels: no horizontal overflow or page JavaScript errors.
- Browser checks covered opening the mobile menu, Escape and focus return, visible navigation without JavaScript, reduced-motion scrolling, and the missing-page response.
- Reviewed full-page mobile homepage and desktop case-study screenshots.
- Both supplied live project URLs returned HTTP 200; Rush Gym Wear redirects to its `www` domain.

The portfolio is prepared locally and has not been published to a host.

README by AI
