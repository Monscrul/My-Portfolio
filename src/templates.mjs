import {
  profile,
  projects,
  experience,
  achievements,
  skills,
  brands,
} from "./content/site.mjs";

export const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const arrow = '<span aria-hidden="true">↗</span>';
const next = '<span aria-hidden="true">↗</span>';
const external = (url, label, cls = "") =>
  `<a class="${cls}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${label} ${arrow}<span class="sr-only"> (opens in a new tab)</span></a>`;
const social = () =>
  [
    ["github", "GitHub"],
    ["linkedin", "LinkedIn"],
  ]
    .map(([key, label]) =>
      profile[key]
        ? external(profile[key], label)
        : `<span class="unavailable">${label}<span class="sr-only"> — link to be added</span></span>`,
    )
    .join("");
const sectionLabel = (number, label) =>
  `<div class="section-label"><span>${number}</span><h2>${label}</h2></div>`;
const placeholder = (text) =>
  `<div class="content-note"><span class="small-label">To be completed</span><p>${escape(text)}</p></div>`;

function brandMark(key, extraClass = "") {
  const brand = brands[key];
  if (!brand) return "";
  return `<a class="brand-mark ${brand.dark ? "brand-dark" : ""} ${extraClass}" href="${escape(brand.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escape(brand.name)} website (opens in a new tab)"><img src="/assets/images/${escape(brand.image)}" alt="" width="120" height="48" loading="lazy" decoding="async"></a>`;
}
function screenshot(image, eager = false) {
  return `<img src="/assets/images/${escape(image.image)}" alt="${escape(image.alt)}" width="1600" height="1000" loading="${eager ? "eager" : "lazy"}" decoding="async">`;
}
function gallery(p) {
  if (!p.cover)
    return placeholder(
      "Add real product screenshots, descriptive alternative text, and an optional demonstration. The cover above is a labeled editorial placeholder, not a screenshot.",
    );
  if (!p.screenshots?.length)
    return `<p class="editorial-note">The cover above shows the live website. ${p.live ? external(p.live, "Explore the website") : ""}</p>`;
  return `<div class="screenshot-gallery">${p.screenshots.map((image) => `<figure><a class="gallery-image" href="/assets/images/${escape(image.image)}" target="_blank" rel="noopener noreferrer" aria-label="Open full screenshot: ${escape(image.caption)} (opens in a new tab)">${screenshot(image)}</a><figcaption>${escape(image.caption)} <span>Open image ↗</span></figcaption></figure>`).join("")}</div>`;
}

function artwork(p, large = false) {
  if (p.cover)
    return `<div class="project-screenshot ${large ? "screenshot-large" : ""}">${screenshot(p.cover, large)}<span class="screenshot-caption">${escape(p.cover.caption)} <span>Live website capture</span></span></div>`;
  return `<div class="project-art ${p.visual} ${large ? "large" : ""}" role="img" aria-label="${escape(p.name)} editorial placeholder, not a product screenshot">
    <span class="art-top">${escape(p.visualSubtitle)}</span>
    <div class="art-center">${p.visual === "basurascan" ? '<span class="scan-mark" aria-hidden="true">↗</span>' : ""}<span class="art-title">${escape(p.visualTitle)}</span>${p.visual === "carlee" ? '<div class="guess-marks" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>' : ""}</div>
    <span class="art-caption">Editorial placeholder · Screenshot to be added</span>
  </div>`;
}

function projectRow(p, index = false) {
  return `<article class="project-row">
    <a class="project-image-link" href="/projects/${p.slug}/" aria-label="Read the ${p.name} case study">${artwork(p)}</a>
    <div class="project-info"><div class="project-meta"><span>${p.number} /</span><span>${p.category}</span></div><h${index ? "2" : "3"}><a href="/projects/${p.slug}/">${p.name}</a></h${index ? "2" : "3"}><p>${p.description}</p><div class="project-actions"><a class="text-link" href="/projects/${p.slug}/">Explore project ${next}</a>${p.live ? external(p.live, p.liveLabel, "quiet-link") : ""}</div></div>
  </article>`;
}
function experienceRows(full = false) {
  return experience
    .slice(0, full ? 3 : 2)
    .map(
      (item) =>
        `<article class="experience-row"><div class="experience-category">${item.brand ? brandMark(item.brand) : ""}<span class="small-label">${item.category}</span></div><div><h3>${item.role}</h3><p class="organization">${item.organization}</p>${full ? `<p>${item.description}</p>${item.project ? `<a class="text-link" href="/projects/${item.project}/">Related project ${next}</a>` : ""}` : ""}</div>${full ? '<span class="date-note">Dates to be added</span>' : ""}</article>`,
    )
    .join("");
}
function awards() {
  return achievements
    .map(
      ([year, title, source, brand]) =>
        `<li><span class="award-year">${year}</span><div><h3>${title}</h3><p>${source}</p></div>${brandMark(brand)}</li>`,
    )
    .join("");
}

export function home() {
  return `<section class="hero"><div class="hero-top"><p class="eyebrow"><span class="location-dot" aria-hidden="true"></span> Cebu City, Philippines</p><p class="hero-index">Personal portfolio / 2026</p></div><p class="hero-intro">Hello, I’m Dominic Yap.</p><h1>Building things.<br>Figuring things <span class="serif-word">out.</span></h1><div class="hero-bottom"><div><p class="hero-role">Information Systems student & software developer</p><p class="hero-description">I build practical software, explore new technologies, and turn ideas into working products.</p></div><div class="hero-links"><a class="button" href="/projects/">View projects <span aria-hidden="true">↗</span></a><div class="social-links">${social()}<a href="/contact/">Contact ${arrow}</a></div></div></div><div class="hero-foot"><p>Studying at the University of San Carlos.<br>Learning by building, researching, and leading.</p><a href="#selected-work">A few things I’ve worked on <span aria-hidden="true">↓</span></a></div></section>
  <section id="selected-work" class="section selected-work"><div class="section-heading">${sectionLabel("01", "Selected work")}<a class="quiet-link" href="/projects/">All projects ${next}</a></div>${projects.map((p) => projectRow(p)).join("")}</section>
  <section class="section experience-preview"><div class="section-heading">${sectionLabel("02", "Beyond the code")}<a class="quiet-link" href="/experience/">View experience ${next}</a></div>${experienceRows()}</section>
  <section class="section awards-section">${sectionLabel("03", "A few milestones")}<ul class="awards">${awards()}</ul></section>
  <section class="about-strip"><p class="small-label">A little about me</p><div><h2>Curious about how things work.<br>Even more curious about what’s next.</h2><p>I’m an Information Systems student at the University of San Carlos. My work spans independent software development, applied AI research, robotics, and technical leadership.</p><a class="text-link" href="/about/">More about me ${next}</a></div></section>`;
}

export function about() {
  return `<header class="page-heading"><p class="eyebrow">A little background</p><h1>A builder, with<br>a curious mind.</h1><p class="page-lead">I’m Dominic John S. Yap, an Information Systems student at the University of San Carlos in Cebu City, Philippines.</p></header><section class="split-section"><h2>Learning through doing.</h2><div class="prose"><p>I’m interested in building practical applications, understanding how systems work, and using technology to solve problems.</p><p>That interest has taken me from independently developing a web game to preparing datasets for applied AI research, working on robotics, and supporting a student community’s technical initiatives.</p><p>I enjoy the process of turning an idea into something that works—and learning what it takes along the way.</p><a class="text-link" href="/projects/">See what I’ve been building ${next}</a></div></section>
  <section class="split-section"><h2>Education</h2><div class="education-list"><article>${brandMark("usc", "education-brand")}<span class="small-label">2026–Present</span><h3>University of San Carlos</h3><p>Bachelor’s degree studies in Information Systems</p></article><article><span class="small-label">Graduated 2026 · With Honors</span><h3>San Carlos School of Cebu — North Campus</h3><p>Senior High School</p></article><article><span class="small-label">Junior High School</span><h3>Sacred Heart School — Hijas de Jesús</h3></article></div></section>
  <section class="split-section skills-section"><div><h2>Tools & areas of experience</h2><p class="section-aside">An inventory of experience, without proficiency scores. Individual project stacks still need confirmation.</p></div><dl class="skills-list">${skills.map(([title, text]) => `<div><dt>${title}</dt><dd>${text}</dd></div>`).join("")}</dl></section>
  <section class="split-section personal-section"><p class="small-label">Away from the keyboard</p><div><h2>There’s usually music involved.</h2><p>Outside technology, I play guitar, produce music, and perform. I also create music under the artist name <strong>dojosaya</strong>.</p></div></section>`;
}
export function projectsPage() {
  return `<header class="page-heading"><p class="eyebrow">Independent work · Research · Client projects</p><h1>Ideas, put to work.</h1><p class="page-lead">A selection of things I’ve built and contributed to, with a closer look at my role in each.</p></header><section class="project-index" aria-label="Selected projects">${projects.map((p) => projectRow(p, true)).join("")}</section><aside class="index-note"><span class="small-label">More to document</span><p>The Microsoft Student Community chapter website will be added when project details and screenshots are available.</p></aside>`;
}
export function experiencePage() {
  return `<header class="page-heading"><p class="eyebrow">Leadership · Client work · Research</p><h1>Different settings.<br>The same initiative.</h1><p class="page-lead">Experience building software, contributing to research, and helping technical teams move forward.</p></header><section class="experience-full" aria-label="Experience">${experienceRows(true)}</section><p class="editorial-note">Experience dates are awaiting confirmation. Entries are grouped by type of work; chronological ordering will be added with verified dates.</p><section class="section awards-section">${sectionLabel("01", "Achievements")}<ul class="awards">${awards()}</ul></section>`;
}
export function contact() {
  return `<header class="page-heading contact-heading"><p class="eyebrow">Contact</p><h1>Let’s make<br>something <span class="serif-word">work.</span></h1><p class="page-lead">For development opportunities, freelance projects, or a conversation about something you’re building.</p></header><div class="contact-layout"><div class="contact-intro"><span class="small-label">Based in</span><p>Cebu City,<br>Philippines.</p></div><section class="contact-list" aria-label="Contact details">${[
    ["email", "Email", "Email address to be added"],
    ["github", "GitHub", "Profile link to be added"],
    ["linkedin", "LinkedIn", "Profile link to be added"],
    ["resume", "Résumé", "Download to be added"],
  ]
    .map(
      ([key, title, empty]) =>
        `<div class="contact-row"><h2>${title}</h2>${profile[key] ? (key === "email" ? `<a class="text-link" href="mailto:${escape(profile.email)}">${escape(profile.email)} ${arrow}</a>` : key === "resume" ? `<a class="text-link" href="${escape(profile.resume)}" download>Download résumé ${arrow}</a>` : external(profile[key], `Visit ${title}`, "text-link")) : `<span class="pending-label">${empty}</span>`}</div>`,
    )
    .join(
      "",
    )}<p class="editorial-note">Contact links and résumé are pending Dominic’s details.</p></section></div>`;
}
export function caseStudy(p) {
  const following = projects[(projects.indexOf(p) + 1) % projects.length];
  return `<header class="case-heading"><a class="back-link" href="/projects/">← All projects</a><div class="case-title"><div><p class="eyebrow">${p.category}</p><h1>${p.name}</h1></div>${p.live ? external(p.live, p.liveLabel, "button button-outline") : '<span class="small-label">Research project</span>'}</div><p class="page-lead">${p.description}</p><dl class="project-facts"><div><dt>My role</dt><dd>${p.role}</dd></div><div><dt>Project type</dt><dd>${p.category}</dd></div><div><dt>Technologies</dt><dd>Awaiting confirmation</dd></div></dl></header>${artwork(p, true)}<div class="case-body"><aside class="case-contents"><p class="small-label">In this project</p><nav aria-label="Case study sections"><a href="#overview">Overview</a><a href="#contribution">My contribution</a><a href="#development">Development</a><a href="#outcome">Outcome</a></nav></aside><div class="case-narrative"><section id="overview"><p class="small-label">01 / Overview</p><h2>${p.motivation}</h2><p>${p.overview}</p></section><section id="contribution"><p class="small-label">02 / My contribution</p><h2>${p.role}</h2><p>${p.contribution}</p></section><section id="development"><p class="small-label">03 / Behind the build</p><h2>Development notes</h2><p class="editorial-note">This part of the case study is awaiting first-hand details from Dominic. The prompts below identify what still needs documenting.</p><h3>Technologies used</h3>${placeholder(p.missing.technologies)}<h3>Development process</h3>${placeholder(p.missing.process)}<h3>Technical decisions</h3>${placeholder(p.missing.decisions)}<h3>Challenges & solutions</h3>${placeholder(p.missing.challenges)}</section><section id="outcome"><p class="small-label">04 / Outcome</p><h2>Results & current status</h2><p>${p.status}</p>${p.live ? external(p.live, p.liveLabel, "text-link") : ""}<h3>Screenshots & demonstration</h3>${gallery(p)}</section></div></div><a class="next-project" href="/projects/${following.slug}/"><div><span class="small-label">Next project</span><h2>${following.name}</h2></div><span aria-hidden="true">↗</span></a>`;
}

function formatHTML(content) {
  const lines = content
    .replace(/>\s*</g, ">\n<")
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const formatted = [];
  let indent = 0;

  for (const line of lines) {
    const isClosingTag = /^<\//.test(line);
    const isSelfClosingTag = /\/\s*>$/.test(line) || /^<!/.test(line);
    const isOpeningTag = /^</.test(line) && !isClosingTag && !isSelfClosingTag;

    if (isClosingTag && indent > 0) indent -= 1;
    formatted.push(`${"  ".repeat(indent)}${line}`);
    if (isOpeningTag && !isSelfClosingTag) indent += 1;
  }

  return formatted.join("\n");
}

export function layout({ title, description, path, content, section }) {
  const nav = [
    ["/", "Home"],
    ["/about/", "About"],
    ["/projects/", "Projects"],
    ["/experience/", "Experience"],
    ["/contact/", "Contact"],
  ];
  const fullTitle =
    title === "Home"
      ? "Dominic Yap — Software Developer & IS Student"
      : `${title} — Dominic Yap`;

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(fullTitle)}</title><meta name="description" content="${escape(description)}"><meta name="theme-color" content="#ffffff"><meta property="og:type" content="website"><meta property="og:title" content="${escape(fullTitle)}"><meta property="og:description" content="${escape(description)}"><meta property="og:site_name" content="Dominic Yap"><meta property="og:locale" content="en_PH">${profile.url ? `<link rel="canonical" href="${escape(new URL(path, profile.url).href)}"><meta property="og:url" content="${escape(new URL(path, profile.url).href)}"><meta property="og:image" content="${escape(new URL("/assets/social-card.png", profile.url).href)}">` : ""}<meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/style.css"><link rel="stylesheet" href="/assets/theme.css"><script src="/assets/main.js" defer></script></head><body><a class="skip-link" href="#main">Skip to content</a><div class="site-wrap"><header class="site-header"><a class="wordmark" href="/" aria-label="Dominic Yap, home">dominic yap<span aria-hidden="true">.</span></a><button class="menu-toggle" aria-controls="primary-nav" aria-expanded="false" hidden>Menu <span aria-hidden="true">+</span></button><nav id="primary-nav" aria-label="Main navigation">${nav.map(([href, text]) => `<a href="${href}" ${section === href ? 'aria-current="page"' : ""}>${text}</a>`).join("")}</nav></header><main id="main" tabindex="-1">${content}</main><footer class="site-footer">${section !== "/contact/" ? `<div class="footer-invitation"><div><p class="small-label">Have something in mind?</p><h2>Good things start<br>with a conversation.</h2></div><a class="contact-link" href="/contact/">Let’s talk ${arrow}</a></div>` : ""}<div class="footer-bottom"><div><a class="wordmark" href="/">dominic yap<span aria-hidden="true">.</span></a><p>Building & learning in Cebu, Philippines.</p></div><div class="footer-links">${profile.email ? `<a href="mailto:${escape(profile.email)}">Email ${arrow}</a>` : '<span class="unavailable">Email pending</span>'}${social()}</div><p class="copyright">© ${new Date().getUTCFullYear()} Dominic Yap</p></div></footer></div></body></html>`;

  return formatHTML(html);
}
