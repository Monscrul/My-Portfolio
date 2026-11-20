# Dominic Yap — Personal Portfolio

A blue, black, and white portfolio with Newsreader headlines, Hanken Grotesk body text, real project imagery, and a shared responsive design system. Built as static HTML with Node.js templates and structured content. No production packages, tracking, or client-side router.

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

- `src/content/site.mjs`: profile, projects, project presentation, experience, awards, skills, and interests.
- `src/templates.mjs`: shared shell, navigation, footer, page templates, and case studies.
- `src/assets/style.css`: client palette and portfolio-specific presentation.
- `src/assets/kit/`: unmodified design-taste-frontend system, layout, motion, and word-highlight modules.
- `src/assets/images/`: locally hosted real project captures and organization logos.
- `ASSETS.md`: image provenance, official logo sources, and replacement guidance.
- `scripts/build.mjs`: dependency-free static generator.
- `scripts/serve.mjs`: local server, rebuild watcher, and real 404 responses.
- `tests/site.test.mjs`: generated-site integrity checks.
- `dist/`: generated output; do not edit directly.

Pages: Home, About, Projects, Experience, Contact, three project case studies, and a 404 page. Each route is a directory with an `index.html`, so direct links work on static hosts. Project routes are generated from the content array. Add a project object following the existing fields and a matching `projectLooks` entry to generate its case study and index entries. Case-study themes in `style.css` use the project slug as their scope.

## Complete before publishing

1. Review the email, GitHub, and LinkedIn URLs extracted from the supplied resume in `src/content/site.mjs`. The supplied resume is available under `src/assets/documents/`.
2. Set `profile.url` to the final production origin. This enables canonical URLs, Open Graph URL/image metadata, and a sitemap. A sharing image is included at `src/assets/social-card.png`; update it if the headline changes.
3. Add real BasuraScan screenshots; its supplied app icon is displayed as branding, not an application screenshot. Carlee and Rush Gym Wear now use optimized screenshots captured directly from their live sites, and Carlee includes gameplay and result views. Set a project’s `cover` and `screenshots` fields in the content file to add or replace images without changing the template. Images include descriptive alt text, intrinsic dimensions, and lazy loading below the fold. See `ASSETS.md` for image sources.
4. Confirm Carlee and Rush Gym Wear’s technologies, process, important decisions, challenges, outcomes, and current status. BasuraScan now uses the supplied research paper and poster, including the limits of its validation results. The `missing` prompts and “To be completed” notices are intentional. Supply verified text in a project’s `details` fields to replace its `missing` prompts.
5. Add verified experience dates and order entries chronologically. They are currently grouped by leadership, client work, and research, with that limitation disclosed.
6. Review the listed areas of technical experience. The brief supplies these areas, but no proficiency level or project-specific stack is asserted.
7. Confirm the supplied achievement and education wording. BasuraScan includes the supplied team attribution and local research documents; add publication details if available.
8. Add the Microsoft Student Community website only after its scope, contribution, screenshots, and links are confirmed.
9. Check permission to publish client imagery and research material. Verify the two supplied live project URLs before public launch.

## Deployment

Build with `npm run build` and publish **the contents of `dist/`** to a static host. For Netlify or Cloudflare Pages, use the build command `npm run build` and output directory `dist`. No environment variables, server runtime, or third-party services are required. Configure the host to serve `404.html` for unknown paths; do not rewrite all routes to the homepage.

The templates use root-relative URLs, so deploy at the domain root. A GitHub Pages project subdirectory would require adding a consistent base-path configuration first. Point `profile.url` to your actual domain and rebuild whenever the domain changes.

## Design and accessibility

The palette is defined in `src/assets/style.css`: blue, black, and white remain the base, with pale-blue surfaces, citron highlights, and a mint interests section. Case-study themes are scoped by `data-project`: Carlee uses midnight/blue, BasuraScan green/ivory, and Rush black/red. Full-width surfaces preserve aligned content edges on ultrawide screens. The static generator and all existing routes remain in place. The responsive layout stress check passes at 1440×900, 1024×768, 820×1180, 768×1024, and 390×844.

Newsreader handles the main portfolio’s display type; Hanken Grotesk handles body copy and controls, and also the Carlee/Rush display headings. Fonts currently load from Google Fonts with fallbacks. Kit files under `src/assets/kit/` are copied without modification; project CSS is separate.

Motion uses the skill’s entrance and hover layer and its dealt word-highlight moment. The project preview changes on hover or keyboard focus. About includes a native, keyboard-accessible interests accordion covering music, guitar, cars, movies, and anime; the contextual guitar photo is credited in its footer. There are no generic section fades, timed carousels, parallax, animation libraries, or WebGL effects. Reduced-motion preferences show the content at rest. There is no nonfunctional contact form; missing contact links stay inactive.

Automated checks supplement manual review. They do not constitute a complete accessibility audit. Before public launch, review final screenshots, keyboard behavior, screen-reader output, link destinations, and the completed content.

## Verification performed

The production build and five integrity tests pass. The redesign is also reviewed with the design-taste-frontend skill’s browser tools. See `.taste-skill/REPORT.md` for the final check results, waivers, and remaining content requirements; earlier design screenshots and responsive results do not substitute for that redesign report.

The portfolio is prepared locally and has not been published to a host.

README by AI
