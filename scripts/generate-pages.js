const fs = require("fs");
const path = require("path");

const root = process.cwd();

const nav = [
  ["/guides/", "Guides"],
  ["/cars/", "Cars"],
  ["/car-list/", "Car List"],
  ["/festival-playlist/", "Playlist"],
  ["/map/", "Map"],
  ["/roblox-forza-horizon-6/", "Roblox"]
];

const footer = `
  <footer class="site-footer">
    <div>
      <h2>Forza Horizon 6 Wiki</h2>
      <p>Forza Horizon 6 Wiki is an independent fan-made guide site for players exploring Horizon Japan. It covers beginner progression, cars, map routes, Festival Playlist rewards, tuning, multiplayer modes, and official updates. This site is not affiliated with Microsoft, Xbox, Playground Games, or Turn 10 Studios.</p>
    </div>
    <div class="footer-links">
      <a href="https://www.xbox.com/en-US/games/forza-horizon-6">Official Site</a>
      <a href="https://discord.com/invite/forza">Official Discord</a>
      <a href="https://www.youtube.com/@Forza">Official YouTube</a>
      <a href="/privacy/">Privacy Policy</a>
      <a href="/terms/">Terms of Service</a>
    </div>
  </footer>`;

const pages = [
  {
    slug: "guides",
    title: "Forza Horizon 6 Guides — Cars, Map, Tuning & Playlist",
    description: "Explore Forza Horizon 6 guide pages for cars, car list, Japan map, starter tips, tuning, Festival Playlist rewards, Roblox version and PC settings.",
    keywords: "Forza Horizon 6 guides, FH6 wiki, cars, map, tuning, Festival Playlist",
    h1: "Forza Horizon 6 Guides",
    eyebrow: "Guide Directory",
    intro: "Use this page as the navigation hub for every Forza Horizon 6 guide. Start with the highest-demand topics: cars, Japan map, Festival Playlist, tuning, beginner help, and the separate Roblox experience.",
    sections: [
      {
        id: "priority",
        title: "First Pages to Build",
        body: "These pages match the strongest search intent and create the internal-link base for the rest of the site.",
        cards: [
          ["Cars", "Vehicle hub for categories, unlock routes, reward cars and JDM content.", "/cars/"],
          ["Car List", "Table-style page for make, car name, class, country, collection and add-ons.", "/car-list/"],
          ["Festival Playlist", "Weekly rewards, seasonal challenges, photo tasks and limited-time cars.", "/festival-playlist/"],
          ["Best Cars", "Use-based picks for road, dirt, drift, drag, PR stunts and beginners.", "/best-cars/"],
          ["Japan Map", "Tokyo, touge, rural roads, docks, industrial districts and exploration.", "/map/"],
          ["Roblox FH6", "Separate page for the Roblox same-name experience and platform-specific searches.", "/roblox-forza-horizon-6/"]
        ]
      },
      {
        id: "seo",
        title: "SEO Structure",
        body: "Each inner page uses one clear H1, compact intro copy, quick facts, a comparison table, FAQ, sources, and related guide links. This keeps pages useful for readers and easy to inspect with SEO tools."
      }
    ]
  },
  {
    slug: "cars",
    title: "Forza Horizon 6 Cars — Vehicle Hub & Categories",
    description: "Browse Forza Horizon 6 cars by category, country, class, unlock source, JDM favorites, reward cars, Car Pass additions and beginner-friendly picks.",
    keywords: "Forza Horizon 6 cars, FH6 cars, JDM cars, reward cars, Car Pass",
    h1: "Forza Horizon 6 Cars",
    eyebrow: "Cars Guide",
    intro: "Forza Horizon 6 has 550+ real-world cars and the vehicle pages should act as the strongest SEO hub on the site. Start here to route players toward the full car list, best cars, JDM picks, reward cars, and Car Pass pages.",
    facts: ["550+ real-world cars", "Official car list has make, type, class and country", "Reward cars rotate through Festival Playlist", "Car Pass adds weekly vehicles"],
    table: {
      headers: ["Category", "Best For", "Content Angle"],
      rows: [
        ["Starter Cars", "First two hours", "Stable handling, cheap upgrades and forgiving race picks."],
        ["JDM Cars", "Japan map fantasy", "Japanese brands, touge routes, drifting and photo content."],
        ["Fastest Cars", "Speed traps and drag", "Separate top speed, acceleration and PR stunt recommendations."],
        ["Drift Cars", "Touge and drift zones", "RWD/AWD choices, drift tuning and beginner mistakes."],
        ["Reward Cars", "Collectors", "Seasonal rewards, Series rewards, Car Pass and collection journal unlocks."]
      ]
    },
    faqs: [
      ["How many cars are in Forza Horizon 6?", "Official Xbox material describes Forza Horizon 6 as having 550+ real-world cars."],
      ["Should the cars page list every car?", "Use the Cars page as a hub and keep the full searchable table on /car-list/."],
      ["What car topics should come first?", "Starter cars, JDM cars, fastest cars, drift cars and reward cars cover the strongest early search demand."]
    ],
    sources: ["https://www.xbox.com/en-US/games/forza-horizon-6", "https://forza.net/fh6cars", "https://forza.net/fh6playlists"],
    links: ["/car-list/", "/best-cars/", "/festival-playlist/", "/tuning/"]
  },
  {
    slug: "car-list",
    title: "Forza Horizon 6 Car List — Makes, Classes & Unlocks",
    description: "Use the Forza Horizon 6 car list page plan to organize every vehicle by make, class, country, car type, collection source, add-ons and reward status.",
    keywords: "Forza Horizon 6 car list, FH6 vehicles, car unlocks, car classes",
    h1: "Forza Horizon 6 Car List",
    eyebrow: "Vehicle Database",
    intro: "The car list page should be a table-first resource for players searching whether a specific car exists, where it comes from, and how it fits into builds. The official Forza car list is the main source for vehicle fields.",
    facts: ["Make", "Car Name", "Car Type", "Car Class", "Country", "Collection", "Add-Ons"],
    table: {
      headers: ["Field", "Use On Page", "SEO Value"],
      rows: [
        ["Make", "Brand filter", "Captures Nissan, Toyota, Ferrari and manufacturer searches."],
        ["Country", "Japan/JDM grouping", "Supports JDM, Italian Exotics and country pages."],
        ["Class", "Performance filter", "Useful for A, S1, S2 and R class guide pages."],
        ["Collection", "Unlock source", "Separates Autoshow, Wheelspin, Seasonal and rewards."],
        ["Add-Ons", "DLC status", "Supports Car Pass and Premium Edition pages."]
      ]
    },
    faqs: [
      ["Where should full vehicle data come from?", "Use the official Forza car list as the primary source, then cross-check reward cars with Festival Playlist pages."],
      ["Should this page include opinions?", "Keep this page factual and table-based. Put recommendations on /best-cars/."],
      ["How often should it be updated?", "Update after Series changes, Car Pass drops and new DLC packs."]
    ],
    sources: ["https://forza.net/fh6cars", "https://forza.net/fh6playlists"],
    links: ["/cars/", "/best-cars/", "/festival-playlist/", "/roblox-forza-horizon-6/"]
  },
  {
    slug: "festival-playlist",
    title: "Forza Horizon 6 Festival Playlist — Rewards & Challenges",
    description: "Track Forza Horizon 6 Festival Playlist rewards, Series cars, weekly challenges, photo tasks, treasure hunts, event requirements and seasonal routes.",
    keywords: "Forza Horizon 6 Festival Playlist, FH6 rewards, weekly challenges",
    h1: "Forza Horizon 6 Festival Playlist",
    eyebrow: "Weekly Rewards",
    intro: "Festival Playlist pages are recurring traffic pages because players return every week for reward cars, seasonal objectives and event requirements. Keep this page current and link it to reward cars, car list and update notes.",
    facts: ["Series and Season rewards", "Weekly challenges", "Photo Challenge", "Treasure Hunt", "Event requirements"],
    table: {
      headers: ["Module", "What To Track", "Why It Matters"],
      rows: [
        ["Series Rewards", "Total points and reward cars", "Collectors search for limited-time cars."],
        ["Season Tasks", "Weekly event list", "Players need fast completion routes."],
        ["Photo Challenge", "Location and car requirement", "High long-tail search value each week."],
        ["Treasure Hunt", "Clue and reward", "Useful for quick answer snippets."],
        ["Update Notes", "Fixes and new additions", "Builds trust and freshness."]
      ]
    },
    faqs: [
      ["Why is this page important?", "It can generate repeat visits because playlist rewards and requirements change over time."],
      ["Where should reward data come from?", "Use Forza's official Festival Playlist page and official Series news."],
      ["Can missed reward cars return?", "Treat this as time-sensitive. Track history and avoid promising future returns unless official sources confirm it."]
    ],
    sources: ["https://forza.net/fh6playlists", "https://forza.net/news/forza-horizon-6-series-3"],
    links: ["/reward-cars/", "/car-list/", "/cars/", "/best-cars/"]
  },
  {
    slug: "best-cars",
    title: "Forza Horizon 6 Best Cars — Road, Drift, Dirt & Drag",
    description: "Find Forza Horizon 6 best cars by event type, including road racing, street racing, dirt, drift, drag, PR stunts, starter cars and reward picks.",
    keywords: "Forza Horizon 6 best cars, fastest cars, drift cars, starter cars",
    h1: "Forza Horizon 6 Best Cars",
    eyebrow: "Car Rankings",
    intro: "A useful best cars page should not claim one universal winner. Players need recommendations by event type, class limit, upgrade cost, handling style and whether the car is easy to unlock.",
    facts: ["Road racing picks", "Drift candidates", "Dirt and off-road choices", "Drag and top-speed options", "Starter-friendly cars"],
    table: {
      headers: ["Intent", "Best Page Angle", "Internal Link"],
      rows: [
        ["Best starter car", "Safe handling and low upgrade cost", "/best-starter-cars/"],
        ["Fastest car", "Top speed, acceleration and PR stunts", "/fastest-cars/"],
        ["Best drift car", "RWD, touge and drift zone builds", "/drift-cars/"],
        ["Best JDM car", "Japanese cars for Japan map routes", "/jdm-cars/"],
        ["Best reward car", "Limited-time cars worth unlocking", "/reward-cars/"]
      ]
    },
    faqs: [
      ["What is the best car in Forza Horizon 6?", "The best car depends on the event. Split recommendations by road, street, dirt, drift, drag and PR stunt needs."],
      ["Should rankings include exact tunes?", "Use tuning pages for exact builds so this page stays readable and easy to update."],
      ["How should new DLC cars be handled?", "Add them to a candidate section until enough data confirms their role."]
    ],
    sources: ["https://forza.net/fh6cars", "https://forza.net/fh6playlists", "https://www.xbox.com/en-US/games/forza-horizon-6"],
    links: ["/cars/", "/car-list/", "/tuning/", "/festival-playlist/"]
  },
  {
    slug: "map",
    title: "Forza Horizon 6 Map — Japan, Tokyo & Touge Routes",
    description: "Explore the Forza Horizon 6 Japan map with Tokyo routes, touge roads, rural areas, docks, industrial districts, landmarks, events and collectibles.",
    keywords: "Forza Horizon 6 map, Japan map, Tokyo map, touge routes, collectibles",
    h1: "Forza Horizon 6 Map",
    eyebrow: "Japan Map Guide",
    intro: "The map guide should explain the main regions of Horizon Japan and connect them to player goals: races, fast travel, photo spots, Treasure Cars, touge routes, landmarks and seasonal challenges.",
    facts: ["Tokyo City", "Touge roads", "Rural and urban areas", "Docks and industrial districts", "Festival routes"],
    table: {
      headers: ["Area", "Player Searches", "Content Ideas"],
      rows: [
        ["Tokyo City", "Tokyo map, street races, photo spots", "Route guide, landmarks and Car Meet suggestions."],
        ["Touge Roads", "touge battles, drift routes", "Drift cars, JDM cars and tuning links."],
        ["Rural Roads", "exploration and road trips", "Treasure Cars, scenic drives and beginner routes."],
        ["Industrial Districts", "events and photo locations", "Seasonal route pages and challenge guides."],
        ["Festival Areas", "progression and rewards", "Wristbands, events and playlist requirements."]
      ]
    },
    faqs: [
      ["Where is Forza Horizon 6 set?", "Official Xbox material describes the game as being set in Japan, with Tokyo and multiple rural and urban areas."],
      ["Should the map page include collectibles?", "Yes. Keep collectible details in subpages and use this page as the discovery hub."],
      ["What should link from the map page?", "Touge, Tokyo map, photo challenges, Treasure Cars, Festival Playlist and beginner guide pages."]
    ],
    sources: ["https://www.xbox.com/en-US/games/forza-horizon-6", "https://forza.net/news/forza-horizon-6-first-drive", "https://forza.net/fh6playlists"],
    links: ["/beginner-guide/", "/tuning/", "/festival-playlist/", "/cars/"]
  },
  {
    slug: "beginner-guide",
    title: "Forza Horizon 6 Beginner Guide — First Cars & Progression",
    description: "Start Forza Horizon 6 with beginner tips for first cars, assists, Festival Points, wristbands, early races, map unlocks, credits and safe upgrades.",
    keywords: "Forza Horizon 6 beginner guide, first car, starter tips, wristbands",
    h1: "Forza Horizon 6 Beginner Guide",
    eyebrow: "Start Here",
    intro: "The beginner guide should answer what new players need in the first two hours: which car to pick, what settings to change, where to race first, when multiplayer unlocks and how to avoid wasting credits.",
    facts: ["Starter vehicle choices", "Festival Points", "Wristbands", "World Map unlock", "Early multiplayer access"],
    table: {
      headers: ["Step", "What To Explain", "Best Follow-Up"],
      rows: [
        ["First Drive", "Opening route and controls", "/map/"],
        ["First Car", "Stable starter picks", "/cars/"],
        ["First Upgrades", "Grip before power", "/tuning/"],
        ["First Rewards", "Festival Points and wristbands", "/festival-playlist/"],
        ["First Problems", "PC and wheel setup", "/pc-settings/"]
      ]
    },
    faqs: [
      ["What should beginners do first?", "Complete the early route, choose a stable starter car and learn assists before buying expensive vehicles."],
      ["Should new players upgrade immediately?", "Upgrade carefully. Handling and tires usually help beginners more than raw power."],
      ["When should players check the playlist?", "As soon as seasonal content unlocks, because reward cars and tasks can be time-limited."]
    ],
    sources: ["https://forza.net/news/forza-horizon-6-first-drive", "https://www.xbox.com/en-US/games/forza-horizon-6", "https://forza.net/fh6cars"],
    links: ["/cars/", "/map/", "/tuning/", "/festival-playlist/"]
  },
  {
    slug: "tuning",
    title: "Forza Horizon 6 Tuning Guide — Road, Drift & Dirt Builds",
    description: "Learn Forza Horizon 6 tuning basics for road racing, drift, dirt, drag, tires, gearing, alignment, AWD swaps, body kits and beginner builds.",
    keywords: "Forza Horizon 6 tuning, FH6 tune, drift tune, road tune, dirt tune",
    h1: "Forza Horizon 6 Tuning Guide",
    eyebrow: "Build Better Cars",
    intro: "Tuning pages should teach cause and effect. Players search for fixes to understeer, oversteer, gearing, tire pressure, launch control, drift angle and class-limit upgrades.",
    facts: ["Road tuning", "Drift tuning", "Dirt tuning", "Drag gearing", "Wheel settings"],
    table: {
      headers: ["Problem", "Likely Direction", "Related Page"],
      rows: [
        ["Understeer", "More front grip, alignment review, slower corner entry", "/best-cars/"],
        ["Oversteer", "Rear grip, differential and throttle control", "/drift-cars/"],
        ["Slow launch", "Gearing, tire compound and drivetrain", "/fastest-cars/"],
        ["Bad dirt control", "Suspension travel and off-road tires", "/map/"],
        ["Wheel feels wrong", "Force feedback and rotation checks", "/wheel-settings/"]
      ]
    },
    faqs: [
      ["Is tuning required?", "No, but basic tuning makes cars easier to drive and helps fit class limits."],
      ["Should beginners use AWD?", "AWD can make early builds easier to control, while RWD is better for advanced drifting."],
      ["Where should exact tune codes go?", "Create separate build pages or tables so this guide stays educational."]
    ],
    sources: ["https://www.xbox.com/en-US/games/forza-horizon-6", "https://forza.net/fh6cars", "https://forums.forza.net/top"],
    links: ["/best-cars/", "/cars/", "/map/", "/beginner-guide/"]
  },
  {
    slug: "roblox-forza-horizon-6",
    title: "Forza Horizon 6 Roblox — Game Link, Codes & Differences",
    description: "Find the Roblox Forza Horizon 6 experience link, how it differs from the official Xbox and Steam game, what data to verify, codes status and guide ideas.",
    keywords: "Forza Horizon 6 Roblox, Roblox FH6, game link, codes, how to play",
    h1: "Forza Horizon 6 Roblox",
    eyebrow: "Roblox Experience",
    intro: "Some players are searching for a Roblox experience named Forza Horizon 6, while others mean the official Xbox and Steam racing game. This page should keep those intents separate so visitors get the right game link and are not misled.",
    facts: ["Roblox game link", "Not official Xbox FH6", "Codes status: unavailable", "Manual data check required"],
    table: {
      headers: ["Question", "Answer", "Page Use"],
      rows: [
        ["Is this the official Forza Horizon 6?", "No. Treat it as a Roblox same-name or fan-made experience.", "Trust and clarity."],
        ["Where is the Roblox page?", "Use the provided Roblox game URL as the entry source.", "Play button and source box."],
        ["Are there codes?", "No confirmed codes in current research. Use 暂无 until verified.", "Codes sidebar."],
        ["What data should be recorded?", "Playing, Visits, Favorites, Like Ratio, Creator, Updated, Server Size.", "Roblox stats module."]
      ]
    },
    faqs: [
      ["Is Forza Horizon 6 on Roblox?", "There is a Roblox experience with that name, but it should be described separately from the official Xbox and Steam game."],
      ["Are there Roblox Forza Horizon 6 codes?", "No reliable codes are confirmed in the current source record, so the codes field should show 暂无 until verified."],
      ["Why make a separate Roblox page?", "It captures Roblox-specific searches without confusing official Forza Horizon 6 facts."]
    ],
    sources: ["https://www.roblox.com/games/132955198347141/Forza-Horizon-6", "https://www.roblox.com/", "https://www.xbox.com/en-US/games/forza-horizon-6"],
    links: ["/guides/", "/release-date/", "/cars/", "/beginner-guide/"]
  },
  {
    slug: "privacy",
    title: "Privacy Policy — Forza Horizon 6 Wiki",
    description: "Privacy policy for the independent Forza Horizon 6 Wiki fan guide site, covering analytics, advertising, cookies and contact information.",
    keywords: "Forza Horizon 6 Wiki privacy policy",
    h1: "Privacy Policy",
    eyebrow: "Legal",
    intro: "This fan guide site may use basic analytics and advertising tools to understand traffic and support operations. Do not submit private account information through this site.",
    sections: [
      { id: "data", title: "Data We May Collect", body: "We may collect anonymous usage data such as pages visited, approximate region, browser type and referral source. Advertising partners may use cookies according to their own policies." },
      { id: "contact", title: "Contact", body: "For privacy requests, use the contact method published by the site owner when the public site launches." }
    ]
  },
  {
    slug: "terms",
    title: "Terms of Service — Forza Horizon 6 Wiki",
    description: "Terms of Service for the independent Forza Horizon 6 Wiki fan guide site, including fan content, accuracy limits and official affiliation notes.",
    keywords: "Forza Horizon 6 Wiki terms",
    h1: "Terms of Service",
    eyebrow: "Legal",
    intro: "This is an independent fan-made guide site. Forza Horizon, Xbox and related marks belong to their respective owners.",
    sections: [
      { id: "accuracy", title: "Accuracy", body: "Game data can change through updates, seasonal events and DLC. We aim to cite reliable sources and update time-sensitive pages." },
      { id: "affiliation", title: "Affiliation", body: "This site is not affiliated with Microsoft, Xbox, Playground Games, Turn 10 Studios, Steam or Roblox." }
    ]
  }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function header(activeSlug) {
  const links = nav.map(([href, label]) => {
    const active = href === `/${activeSlug}/` ? " active" : "";
    return `<a class="${active.trim()}" href="${href}">${label}</a>`;
  }).join("");

  return `<header class="site-header">
    <a class="brand" href="/">
      <img src="/android-chrome-192x192.png" alt="" />
      <span>FH6 Wiki</span>
    </a>
    <button class="nav-toggle" aria-label="Open navigation">☰</button>
    <nav class="main-nav" aria-label="Primary navigation">${links}</nav>
  </header>`;
}

function cardGrid(cards) {
  return `<div class="card-grid three">${cards.map(([title, desc, href], index) => `
    <article class="card">
      <span class="card-number">${index + 1}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(desc)}</p>
      ${href ? `<a class="button subtle" href="${href}">Open Guide</a>` : ""}
    </article>`).join("")}</div>`;
}

function tableBlock(table) {
  if (!table) return "";
  return `<div class="content-panel" id="table">
    <h2>Quick Reference</h2>
    <table class="data-table">
      <thead><tr>${table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
      <tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell.startsWith("/") ? `<a href="${cell}">${cell}</a>` : escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  </div>`;
}

function factsBlock(facts) {
  if (!facts) return "";
  return `<div class="content-panel" id="facts">
    <h2>Quick Facts</h2>
    <div class="badge-row">${facts.map((fact) => `<span class="badge">${escapeHtml(fact)}</span>`).join("")}</div>
  </div>`;
}

function faqBlock(faqs) {
  if (!faqs) return "";
  return `<div class="content-panel" id="faq">
    <h2>FAQ</h2>
    ${faqs.map(([q, a]) => `<h3>${escapeHtml(q)}</h3><p>${escapeHtml(a)}</p>`).join("")}
  </div>`;
}

function sourcesBlock(sources) {
  if (!sources) return "";
  return `<div class="content-panel" id="sources">
    <h2>Sources</h2>
    <ul class="source-list">${sources.map((src) => `<li><a href="${src}">${src}</a></li>`).join("")}</ul>
  </div>`;
}

function linksBlock(links) {
  if (!links) return "";
  return `<div class="content-panel" id="related">
    <h2>Related Guides</h2>
    <div class="badge-row">${links.map((href) => `<a class="badge" href="${href}">${href}</a>`).join("")}</div>
  </div>`;
}

function sectionBlocks(sections) {
  if (!sections) return "";
  return sections.map((section) => `<div class="content-panel" id="${section.id}">
    <h2>${escapeHtml(section.title)}</h2>
    <p>${escapeHtml(section.body)}</p>
    ${section.cards ? cardGrid(section.cards) : ""}
  </div>`).join("");
}

function toc(page) {
  const items = [
    page.facts && ["facts", "Quick Facts"],
    page.table && ["table", "Quick Reference"],
    page.sections && ["sections", "Sections"],
    page.faqs && ["faq", "FAQ"],
    page.sources && ["sources", "Sources"],
    page.links && ["related", "Related Guides"]
  ].filter(Boolean);

  return `<aside class="toc">
    <p class="eyebrow">On This Page</p>
    ${items.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}
  </aside>`;
}

function render(page) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="keywords" content="${escapeHtml(page.keywords)}" />
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RPB5DDFCYS"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RPB5DDFCYS');
    </script>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="stylesheet" href="/src/styles.css" />
  </head>
  <body>
    ${header(page.slug)}
    <main>
      <section class="page-hero">
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1>${escapeHtml(page.h1)}</h1>
        <p class="hero-text">${escapeHtml(page.intro)}</p>
      </section>
      <div class="layout">
        ${toc(page)}
        <div class="content-stack">
          ${factsBlock(page.facts)}
          ${tableBlock(page.table)}
          <div id="sections">${sectionBlocks(page.sections)}</div>
          ${faqBlock(page.faqs)}
          ${sourcesBlock(page.sources)}
          ${linksBlock(page.links)}
        </div>
      </div>
    </main>
    ${footer}
    <script src="/src/site.js"></script>
  </body>
</html>`;
}

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), render(page));
}

fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>/</loc></url>
${pages.map((page) => `  <url><loc>/${page.slug}/</loc></url>`).join("\n")}
</urlset>
`);

fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *
Allow: /
Sitemap: /sitemap.xml
`);
