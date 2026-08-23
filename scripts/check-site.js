const fs = require("fs");
const path = require("path");

const root = process.cwd();
const pages = [
  "index.html",
  "guides/index.html",
  "cars/index.html",
  "car-list/index.html",
  "festival-playlist/index.html",
  "best-cars/index.html",
  "map/index.html",
  "beginner-guide/index.html",
  "tuning/index.html",
  "roblox-forza-horizon-6/index.html"
];

const failures = [];
const requiredHomepageMarkers = [
  ["media-card", "homepage official media card"],
  ["ad-slot", "homepage ad-ready placement"],
  ["review-note", "homepage reviewed note"]
];

for (const page of pages) {
  const fullPath = path.join(root, page);
  const html = fs.readFileSync(fullPath, "utf8");
  const titleCount = (html.match(/<title>/g) || []).length;
  const h1Count = (html.match(/<h1>/g) || []).length;
  const h2Count = (html.match(/<h2>/g) || []).length;
  const description = html.match(/<meta name="description" content="([^"]+)"/);

  if (titleCount !== 1) failures.push(`${page}: expected one title, got ${titleCount}`);
  if (h1Count !== 1) failures.push(`${page}: expected one h1, got ${h1Count}`);
  if (h2Count < 2) failures.push(`${page}: expected at least two h2 headings, got ${h2Count}`);
  if (!description || description[1].length < 90) failures.push(`${page}: missing or thin description`);
  if (page !== "index.html" && !html.includes("ad-slot")) {
    failures.push(`${page}: missing ad-ready placement`);
  }
}

const homepage = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const [marker, label] of requiredHomepageMarkers) {
  if (!homepage.includes(marker)) failures.push(`index.html: missing ${label}`);
}

const css = fs.readFileSync(path.join(root, "src", "styles.css"), "utf8");
if (!css.includes("@media (max-width: 840px)")) {
  failures.push("src/styles.css: missing mobile media query");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`SEO and responsive smoke checks passed for ${pages.length} pages.`);
