import { mkdir, rm, cp, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import {
  layout,
  home,
  about,
  projectsPage,
  experiencePage,
  contact,
  caseStudy,
  escape,
  notFound,
} from "../src/templates.mjs";
import { projects, profile } from "../src/content/site.mjs";
const root = fileURLToPath(new URL("../", import.meta.url));
export async function build() {
  const dist = resolve(root, "dist");
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  await cp(resolve(root, "src/assets"), resolve(dist, "assets"), {
    recursive: true,
  });
  const pages = [
    [
      "/",
      "Home",
      "Dominic Yap is an Information Systems student and software developer in Cebu. Explore independent projects, applied AI research, and technical leadership.",
      home(),
      "/",
    ],
    [
      "/about/",
      "About",
      "Meet Dominic John S. Yap: Information Systems student, independent developer, researcher, and musician in Cebu City.",
      about(),
      "/about/",
    ],
    [
      "/projects/",
      "Projects",
      "Explore Carlee, BasuraScan, and Rush Gym Wear: independent software, applied AI research, and client web development by Dominic Yap.",
      projectsPage(),
      "/projects/",
    ],
    [
      "/experience/",
      "Experience",
      "Dominic Yap’s experience in student technical leadership, freelance web development, and applied AI research.",
      experiencePage(),
      "/experience/",
    ],
    [
      "/contact/",
      "Contact",
      "Get in touch with Dominic Yap about software development, freelance projects, and collaborations.",
      contact(),
      "/contact/",
    ],
    ...projects.map((p) => [
      `/projects/${p.slug}/`,
      p.name,
      p.description,
      caseStudy(p),
      "/projects/",
    ]),
    [
      "/404/",
      "Page not found",
      "The requested page could not be found.",
      notFound(),
      "",
    ],
  ];
  for (const [path, title, description, content, section] of pages) {
    const dir = resolve(dist, `.${path}`);
    await mkdir(dir, { recursive: true });
    await writeFile(
      resolve(dir, "index.html"),
      layout({ title, description, path, content, section }),
    );
  }
  await cp(resolve(dist, "404/index.html"), resolve(dist, "404.html"));
  if (profile.url) {
    const urls = pages
      .filter(([path]) => path !== "/404/")
      .map(
        ([path]) =>
          `<url><loc>${escape(new URL(path, profile.url).href)}</loc></url>`,
      )
      .join("");
    await writeFile(
      resolve(dist, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    );
  }
  await writeFile(
    resolve(dist, "robots.txt"),
    `User-agent: *\nAllow: /\n${profile.url ? `Sitemap: ${new URL("/sitemap.xml", profile.url).href}\n` : ""}`,
  );
  console.log(`Built ${pages.length} pages into dist/.`);
}
if (process.argv[1] === fileURLToPath(import.meta.url)) await build();
