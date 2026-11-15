import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "../scripts/build.mjs";
import { projects, profile } from "../src/content/site.mjs";
import { escape } from "../src/templates.mjs";

await build();
const routes = [
  "/",
  "/about/",
  "/projects/",
  "/experience/",
  "/contact/",
  ...projects.map((p) => `/projects/${p.slug}/`),
  "/404/",
];

test("all generated pages have unique titles, one h1, shared navigation, and metadata", async () => {
  const titles = new Set();
  for (const route of routes) {
    const html = await readFile(
      resolve("dist", `.${route}`, "index.html"),
      "utf8",
    );
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, route);
    const title = html.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(!titles.has(title), `Duplicate title: ${title}`);
    titles.add(title);
    for (const text of [
      'name="description"',
      'property="og:title"',
      'lang="en"',
      "Skip to content",
      'aria-label="Main navigation"',
    ])
      assert.ok(html.includes(text), `${route}: missing ${text}`);
    assert.ok(!/href=["'](?:#|undefined|null)["']/.test(html), route);
    if (route !== "/404/")
      assert.equal((html.match(/aria-current="page"/g) || []).length, 1, route);
  }
});

test("every local link, script, stylesheet, and fragment resolves", async () => {
  for (const route of routes) {
    const html = await readFile(
      resolve("dist", `.${route}`, "index.html"),
      "utf8",
    );
    for (const [, target] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (target.startsWith("#"))
        assert.ok(
          html.includes(`id="${target.slice(1)}"`),
          `${route}: ${target}`,
        );
      else if (target.startsWith("/")) {
        let path = resolve("dist", `.${target}`);
        if ((await stat(path)).isDirectory())
          path = resolve(path, "index.html");
        assert.ok((await stat(path)).isFile(), `${route}: ${target}`);
      }
    }
  }
});

test("case studies distinguish real screenshots, editorial artwork, and missing development details", async () => {
  for (const project of projects) {
    const html = await readFile(
      `dist/projects/${project.slug}/index.html`,
      "utf8",
    );
    const suppliedImages = [project.cover, ...(project.screenshots || [])].filter(Boolean);
    assert.ok(suppliedImages.length
      ? suppliedImages.some(asset => html.includes(`/assets/images/${asset.image}`))
      : html.includes("not a product screenshot"), project.slug);
    if (project.cover) assert.ok(!html.includes("editorial placeholder"));
    for (const text of [
      ...(project.details ? [] : ["To be completed"]),
      "Technologies used",
      "Development process",
      "Technical decisions",
      "Challenges &amp; solutions",
      "Results &amp; current status",
    ]) {
      // Static template headings use literal ampersands, equally valid HTML here.
      assert.ok(
        html.includes(text) || html.includes(text.replaceAll("&amp;", "&")),
        `${project.slug}: ${text}`,
      );
    }
  }
});

test("missing contact details never produce invented links", async () => {
  const html = await readFile("dist/contact/index.html", "utf8");
  if (!profile.email) assert.ok(!html.includes("mailto:"));
  if (!profile.resume) assert.ok(!html.includes(" download"));
  if (!profile.email) assert.ok(html.includes("Email address to be added"));
});

test("content escaping handles HTML-sensitive characters", () => {
  assert.equal(
    escape("<script>\"&'</script>"),
    "&lt;script&gt;&quot;&amp;&#39;&lt;/script&gt;",
  );
});
