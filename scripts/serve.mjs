import { createServer } from "node:http";
import { readFile, stat, watch } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
const root = fileURLToPath(new URL("../", import.meta.url));
const dist = resolve(root, "dist");
const dev = process.argv.includes("--dev");
const port = Number(process.env.PORT || 3000);
async function rebuild() {
  await new Promise((res, rej) => {
    const child = spawn(process.execPath, ["scripts/build.mjs"], {
      cwd: root,
      stdio: "inherit",
    });
    child.on("error", rej);
    child.on("exit", (code) =>
      code === 0 ? res() : rej(new Error(`Build failed: ${code}`)),
    );
  });
}
await rebuild();
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
};
const server = createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    let file = resolve(dist, `.${path}`);
    if (file !== dist && !file.startsWith(dist + sep)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    try {
      if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    } catch {
      /* Read below returns the 404 response. */
    }
    const body = await readFile(file);
    res.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(await readFile(resolve(dist, "404.html")));
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Local: http://localhost:${port}`),
);
server.on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});
if (dev) {
  let timer;
  let running = false;
  let pending = false;
  async function update() {
    if (running) {
      pending = true;
      return;
    }
    running = true;
    try {
      await rebuild();
    } catch (error) {
      console.error(error.message);
    }
    running = false;
    if (pending) {
      pending = false;
      await update();
    }
  }
  (async () => {
    for await (const _ of watch(resolve(root, "src"), { recursive: true })) {
      clearTimeout(timer);
      timer = setTimeout(update, 100);
    }
  })().catch(console.error);
}
