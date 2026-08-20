const fs = require("fs");
const path = require("path");

const root = process.cwd();
const dist = path.join(root, "dist");
const includeNames = [
  "index.html",
  "src",
  "guides",
  "cars",
  "car-list",
  "festival-playlist",
  "best-cars",
  "map",
  "beginner-guide",
  "tuning",
  "roblox-forza-horizon-6",
  "privacy",
  "terms",
  "sitemap.xml",
  "robots.txt",
  "site.webmanifest",
  "favicon.ico",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "apple-touch-icon.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png"
];

function copyRecursive(source, target) {
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(target, entry));
    }
    return;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const name of includeNames) {
  const source = path.join(root, name);
  if (fs.existsSync(source)) {
    copyRecursive(source, path.join(dist, name));
  }
}

console.log(`Built static site into ${dist}`);
