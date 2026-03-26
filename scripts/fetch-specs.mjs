import { writeFile, mkdir } from "node:fs/promises";
import { execSync } from "node:child_process";

const specs = [
  {
    url: "https://api.myparcel.nl/openapi.json",
    output: "openapi/shipping-api.json",
    bundle: true, // Has external $ref, needs bundling via redocly
  },
  {
    url: "https://order.api.myparcel.nl/openapi.json",
    output: "openapi/order-api.json",
    bundle: false,
  },
  {
    url: "https://iam.api.myparcel.nl/openapi.json",
    output: "openapi/iam-api.json",
    bundle: false,
  },
  {
    url: "https://rule.api.myparcel.nl/openapi.json",
    output: "openapi/rule-api.json",
    bundle: false,
  },
  {
    url: "https://address.api.myparcel.nl/openapi.json",
    output: "openapi/address-api.json",
    bundle: false,
  },
  {
    url: "https://printing.api.myparcel.nl/openapi.json",
    output: "openapi/printing-api.json",
    bundle: false,
  },
  {
    url: "https://product.api.myparcel.nl/openapi.json",
    output: "openapi/product-api.json",
    bundle: false,
  },
];

async function fetchSpecs() {
  await mkdir("openapi", { recursive: true });

  for (const spec of specs) {
    console.log(`Fetching ${spec.url}...`);

    if (spec.bundle) {
      // Use redocly CLI to bundle specs with external $refs
      console.log(`  Bundling with @redocly/cli...`);
      execSync(
        `npx @redocly/cli bundle ${spec.url} -o ${spec.output} --dereferenced`,
        { stdio: "inherit" },
      );
    } else {
      const response = await fetch(spec.url);
      if (!response.ok) {
        console.error(`Failed to fetch ${spec.url}: ${response.status}`);
        process.exit(1);
      }
      const data = await response.text();
      await writeFile(spec.output, data);
    }

    console.log(`  → ${spec.output}`);
  }

  console.log("\nAll specs fetched successfully.");
}

fetchSpecs();
