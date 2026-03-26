import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

async function findHtmlFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(fullPath)));
    } else if (entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

async function inject() {
  const distDir = "dist";
  const htmlFiles = await findHtmlFiles(distDir);
  const scriptTag = `<script src="/api-nav.js" defer></script>`;

  let count = 0;
  for (const file of htmlFiles) {
    const content = await readFile(file, "utf-8");
    if (content.includes("api-nav.js")) continue;
    if (!content.includes("</head>")) continue;

    const updated = content.replace("</head>", `${scriptTag}\n</head>`);
    await writeFile(file, updated);
    count++;
  }

  console.log(`Injected api-nav.js into ${count} HTML files.`);
}

inject();
