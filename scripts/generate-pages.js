const fs = require("fs");
const path = require("path");

const root = process.cwd();

const nav = [
  ["/guides/", "Guides"],
  ["/cars/", "Cars"],
  ["/car-list/", "Car List"],
  ["/pc-settings/", "PC Settings"],
  ["/invalid-gaming-services-detected/", "Fixes"],
  ["/festival-playlist/", "Playlist"],
  ["/map/", "Map"]
];

const footer = `
  <footer class="site-footer">
    <div>
      <h2>Forza Horizon 6 Wiki</h2>
      <p>Forza Horizon 6 Wiki is an independent fan-made guide site for players exploring Horizon Japan. It covers beginner progression, cars, map routes, Festival Playlist rewards, tuning, multiplayer modes, and official updates. This site is not affiliated with Microsoft, Xbox, Playground Games, or Turn 10 Studios.</p>
    </div>
    <div class="footer-links">
      <a href="https://forza.net/">Forza Official Site</a>
      <a href="https://www.xbox.com/en-US/games/store/forza-horizon-6/9NR1R1XWLCNB">Xbox Store</a>
      <a href="https://discord.com/invite/forza">Official Discord</a>
      <a href="https://www.youtube.com/@Forza">Official YouTube</a>
      <a href="/privacy/">Privacy Policy</a>
      <a href="/terms/">Terms of Service</a>
    </div>
  </footer>`;

const pages = [
  {
    slug: "guides",
    title: "Forza Horizon 6 Guides — PC, Cars & Starter Help",
    description: "Explore Forza Horizon 6 guides by category, including PC settings, beginner tips, best starter cars, car list, map, editions, achievements and playlist rewards.",
    keywords: "Forza Horizon 6 guides, FH6 wiki, PC settings, beginner guide, cars",
    h1: "Forza Horizon 6 Guides",
    eyebrow: "Guide Directory",
    intro: "Use this page as the navigation hub for every Forza Horizon 6 guide. The structure follows player intent first: start, optimize PC performance, choose cars, track rewards, and verify official platform details.",
    sections: [
      {
        id: "quick-access",
        title: "Quick Access",
        body: "Start with the pages that answer urgent player questions: what to do first, how to run the game better, which cars to use, and where official facts come from.",
        cards: [
          ["Beginner Guide", "No-spoilers first steps, credits, wristbands, early cars and common mistakes.", "/beginner-guide/"],
          ["PC Settings", "Optimized settings, 8GB GPU advice, upscaling, RTGI and troubleshooting.", "/pc-settings/"],
          ["Gaming Services Fix", "Fix invalid Gaming Services detected, Xbox app launch loops and install checks.", "/invalid-gaming-services-detected/"],
          ["Car List", "Table-first vehicle source fields for make, class, country and unlock route.", "/car-list/"],
          ["Treasure Cars", "Track clues, discovery routes, reward checks and spoiler-safe location notes.", "/treasure-cars/"],
          ["Best Drag Cars", "Pick launch-focused cars and tuning priorities for drag races and speed tests.", "/best-drag-cars/"],
          ["Best Starter Cars", "Early car choices by event type, handling, upgrade cost and progression.", "/best-starter-cars/"],
          ["Smooth PC Play", "Settings and troubleshooting route for stutter, ghosting, FPS drops and VRAM pressure.", "/how-to-play-smoothly/"]
        ]
      },
      {
        id: "categories",
        title: "Guide Categories",
        body: "This directory is organized like a lightweight wiki hub: each category links to practical pages instead of only repeating the game's description.",
        cards: [
          ["Cars", "Cars, car list, best cars, starter cars, JDM, reward cars and Car Pass topics.", "/cars/"],
          ["Treasure Cars", "Clues, map checks, reward tracking and spoiler-safe discovery workflow.", "/treasure-cars/"],
          ["Drag Builds", "Best drag cars, launch tuning, gearing and acceleration-focused choices.", "/best-drag-cars/"],
          ["Settings", "PC settings, wheel settings, controller setup, handheld advice and known issues.", "/pc-settings/"],
          ["Common Fixes", "Gaming Services, Xbox app, Steam launch checks, overlays and repair workflow.", "/invalid-gaming-services-detected/"],
          ["Map", "Japan map, Tokyo, touge routes, photo locations, collectibles and fast travel.", "/map/"],
          ["Events", "Festival Playlist, Series updates, weekly reset, rewards and challenge guides.", "/festival-playlist/"],
          ["Progression", "Beginner guide, money, wristbands, Festival Points, achievements and unlocks.", "/beginner-guide/"],
          ["Official Info", "Release, platforms, editions, achievements, Steam, Xbox and official links.", "/editions/"]
        ]
      },
      {
        id: "seo",
        title: "SEO Structure",
        body: "Each inner page uses one clear H1, compact intro copy, quick facts, a comparison table, FAQ, source links, and related guides. The goal is to combine official facts with player-problem pages that Fandom-style wikis often do not answer directly."
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
    links: ["/car-list/", "/best-cars/", "/treasure-cars/", "/best-drag-cars/"]
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
    links: ["/cars/", "/best-cars/", "/treasure-cars/", "/festival-playlist/"]
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
    links: ["/treasure-cars/", "/car-list/", "/cars/", "/best-cars/"]
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
    slug: "treasure-cars",
    title: "Forza Horizon 6 Treasure Cars Guide — Clues & Rewards",
    description: "Track Forza Horizon 6 Treasure Cars with spoiler-safe clues, map search routes, reward checks, weekly playlist notes and a practical discovery checklist.",
    keywords: "Forza Horizon 6 treasure cars, FH6 treasure cars, treasure car locations, clues",
    h1: "Forza Horizon 6 Treasure Cars",
    eyebrow: "Rising Search Guide",
    intro: "Treasure Cars is a rising Forza Horizon 6 search because players want fast help without accidentally spoiling the whole discovery loop. This page is built as a live tracker: use it to separate clues, map areas, route checks, reward status and official update notes.",
    facts: ["Rising query", "Spoiler-safe clues", "Map route checks", "Reward tracking", "Playlist updates"],
    flowchart: {
      eyebrow: "Original Flowchart",
      title: "Treasure Cars Search Flow",
      intro: "Use this route before jumping to a full spoiler. It keeps the hunt fun while still giving players a clear next action.",
      steps: [
        ["1", "Read the Clue", "Write down the car hint, location hint and any event or season condition."],
        ["2", "Mark the Region", "Narrow the map to city, touge, rural, dock, highway or festival areas."],
        ["3", "Drive a Loop", "Use a slow visual pass before switching cars or fast traveling away."],
        ["4", "Check Reward Status", "Confirm whether the reward is a car, credits, playlist points or cosmetic."],
        ["5", "Update the Tracker", "Record the clue, route and result so the page can be refreshed after updates."]
      ]
    },
    table: {
      headers: ["Player Intent", "What This Page Should Answer", "Best Internal Link"],
      rows: [
        ["treasure cars forza horizon 6", "Current clue, likely map area, reward and spoiler level.", "/treasure-cars/"],
        ["treasure car locations", "A route-first discovery method, then exact notes when confirmed.", "/map/"],
        ["treasure cars rewards", "Whether the reward is limited-time, playlist-linked or permanent.", "/festival-playlist/"],
        ["how to find treasure cars", "Clue reading, region narrowing and repeated route checks.", "/beginner-guide/"],
        ["Japan map treasure cars", "Tokyo, touge, rural and industrial route grouping.", "/map/"]
      ]
    },
    extraTables: [
      {
        title: "Treasure Cars Tracker Template",
        headers: ["Field", "What To Record", "Why It Helps"],
        rows: [
          ["Clue Text", "Exact clue wording from the game or official update note", "Prevents vague rewrites that lose the search intent."],
          ["Map Region", "Tokyo, touge, rural roads, industrial area, docks or festival site", "Lets players scan the right area first."],
          ["Required Car", "Any car, class, brand or event requirement", "Avoids wasted driving with the wrong vehicle."],
          ["Reward", "Car, credits, points or cosmetic", "Helps collectors decide if the hunt is urgent."],
          ["Spoiler Level", "Hint only, region clue or exact location", "Lets the page serve both casual and speed-focused players."]
        ]
      },
      {
        title: "Spoiler-Safe Help Levels",
        headers: ["Level", "What To Show", "When To Use"],
        rows: [
          ["Hint", "Broad clue explanation without exact spot", "First day of a new hunt."],
          ["Region", "Likely area and recommended driving loop", "When players are stuck but still want to search."],
          ["Exact", "Precise location and required car after confirmation", "After the clue has been verified from reliable sources."],
          ["Archive", "Past clue, reward and date", "Useful when players search old seasonal content."]
        ]
      }
    ],
    sections: [
      { id: "quick-answer", title: "Quick Answer", body: "Start with the clue, then narrow it to a map region and drive one consistent loop before looking for an exact spoiler. Treasure Cars pages should be updated from official playlist notes, player-confirmed evidence and map checks." },
      { id: "why-no-fake-locations", title: "Why This Page Avoids Fake Locations", body: "Treasure Cars can change by Series, Season or update. Listing unverified coordinates would hurt trust, so this page uses a tracker structure until exact locations are confirmed." },
      { id: "map-method", title: "Map Search Method", body: "Group possible locations by Tokyo streets, touge roads, rural roads, industrial zones, docks and festival sites. Link each confirmed hunt back to the Japan map guide." },
      { id: "update-workflow", title: "Update Workflow", body: "When a new clue appears, record the clue text, date, likely region, required car, reward and source. Then add exact location notes only after cross-checking." }
    ],
    faqs: [
      ["Are all Treasure Cars permanent?", "Treat Treasure Cars as update-sensitive until official information confirms whether a clue is permanent or seasonal."],
      ["Why not list exact locations immediately?", "Exact locations should be added only when confirmed. A spoiler-safe structure protects trust and still helps players search."],
      ["What should I do if I cannot find the car?", "Recheck the clue, confirm the required car or event condition, then drive the same route slowly before switching to exact-location help."],
      ["Where should map details live?", "Use this page for clues and rewards, then link region details to the Japan map page."]
    ],
    sources: ["https://forza.net/fh6playlists", "https://forza.net/news", "https://www.xbox.com/en-US/games/forza-horizon-6"],
    links: ["/map/", "/festival-playlist/", "/car-list/", "/beginner-guide/"]
  },
  {
    slug: "best-drag-cars",
    title: "Forza Horizon 6 Best Drag Cars — Fast Launch Builds",
    description: "Find Forza Horizon 6 best drag cars by launch, acceleration, gearing, class limits, tuning direction and when to use speed-focused builds.",
    keywords: "Forza Horizon 6 best drag car, FH6 drag cars, fastest drag build, drag tuning",
    h1: "Forza Horizon 6 Best Drag Cars",
    eyebrow: "Rising Search Guide",
    intro: "Best drag car is a rising Forza Horizon 6 query because players want quick wins for straight-line races, speed traps and acceleration tests. The useful answer is not one universal car: it depends on class limit, launch grip, gearing, drivetrain and whether the event allows upgrades.",
    facts: ["Rising query", "Launch and acceleration", "Gearing priority", "Class limits", "Drag tuning"],
    flowchart: {
      eyebrow: "Original Flowchart",
      title: "Drag Car Pick Flow",
      intro: "Use this flow before copying a build. A car that wins a runway pull may not fit a restricted class or a short launch-heavy route.",
      steps: [
        ["1", "Check Class Limit", "Do not choose a build that overshoots the event class."],
        ["2", "Prioritize Launch", "For short drag routes, grip and launch can beat pure top speed."],
        ["3", "Tune Gearing", "Set final drive so the car stays in its power band through the finish."],
        ["4", "Test One Strip", "Run the same drag strip three times and compare consistency."],
        ["5", "Save by Role", "Keep separate builds for drag, speed traps and road racing."]
      ]
    },
    table: {
      headers: ["Drag Need", "Best Direction", "Tuning Priority"],
      rows: [
        ["Short drag race", "High launch grip and strong low-speed acceleration", "Tires, launch gearing, AWD when class allows."],
        ["Long runway pull", "High horsepower and stable high-speed gearing", "Final drive, aero balance and top-end power."],
        ["Class-restricted event", "Car that reaches target PI without wasting points", "Weight, tires and gearbox before visual power upgrades."],
        ["Beginner drag build", "Predictable launch and easy shifting", "Grip-first setup, clean launch and simple gear spacing."],
        ["Speed trap crossover", "Drag car that remains stable at high speed", "Top speed, stability and route-specific braking."]
      ]
    },
    extraTables: [
      {
        title: "Drag Build Checklist",
        headers: ["Part", "What To Check", "Common Mistake"],
        rows: [
          ["Tires", "Enough grip to launch without spinning", "Adding power before the car can hook up."],
          ["Drivetrain", "AWD for easy launch or RWD for advanced power delivery", "Choosing AWD blindly when PI cost hurts the build."],
          ["Gearing", "Final gear reaches strong acceleration through the finish", "Leaving default gearing on a power-swapped car."],
          ["Weight", "Lower weight improves launch and acceleration", "Spending all PI on horsepower."],
          ["Aero", "Enough stability for high-speed routes", "Adding drag-heavy aero to a straight-line build without testing."]
        ]
      },
      {
        title: "Drag Testing Method",
        headers: ["Step", "Action", "Reason"],
        rows: [
          ["1", "Use the same strip and weather if possible", "Reduces noise when comparing tunes."],
          ["2", "Run each build three times", "One messy launch should not decide the result."],
          ["3", "Record launch feel and finish speed", "A high top speed car may still lose a short drag."],
          ["4", "Keep road and drag tunes separate", "Drag gearing often feels bad in normal races."]
        ]
      }
    ],
    sections: [
      { id: "quick-answer", title: "Quick Answer", body: "The best drag car is the one that matches the class and route. For short events, prioritize launch, grip and early acceleration. For long runway pulls, prioritize horsepower, gearing and high-speed stability." },
      { id: "launch-vs-speed", title: "Launch Beats Top Speed on Short Runs", body: "Many players overvalue top speed. If the route is short, a car that launches cleanly and shifts through the power band can beat a faster car that spins at the start." },
      { id: "tuning", title: "Drag Tuning Priorities", body: "Start with tires, weight, drivetrain choice and gearing. Power upgrades matter, but only after the car can put power down consistently." },
      { id: "when-to-update", title: "When Rankings Should Change", body: "Update this page after official car list changes, Car Pass drops, reward cars, balance changes or new community-tested builds." }
    ],
    faqs: [
      ["What is the best drag car in Forza Horizon 6?", "There is no single best answer for every route. Split drag choices by class, short launch events, long runway pulls and speed-trap use."],
      ["Should I use AWD for drag?", "AWD often helps beginners launch cleanly, but it can cost PI. Test AWD and RWD if the class limit is tight."],
      ["What should I tune first?", "Fix grip and gearing first. Extra power is wasted if the car spins or hits the wrong gear before the finish."],
      ["Can a drag car work for road racing?", "Usually not well. Keep separate drag and road tunes because gearing and grip priorities are different."]
    ],
    sources: ["https://forza.net/fh6cars", "https://forza.net/fh6playlists", "https://forums.forza.net/top"],
    links: ["/best-cars/", "/tuning/", "/car-list/", "/cars/"]
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
    slug: "pc-settings",
    title: "Forza Horizon 6 PC Settings — Best FPS, 8GB GPU & Fixes",
    description: "Use the best Forza Horizon 6 PC settings for FPS, 8GB GPUs, DLSS, FSR, XeSS, RTGI, reflections, ghosting, low GPU usage and crash troubleshooting.",
    keywords: "Forza Horizon 6 PC settings, best settings, 8GB GPU, DLSS, low FPS",
    h1: "Forza Horizon 6 PC Settings",
    eyebrow: "Optimization Guide",
    intro: "This PC settings guide turns player testing, Reddit troubleshooting, IGN-style setup structure and official PC notes into practical settings. Start with the balanced preset, then adjust RTGI, reflections, textures and upscaling for your hardware.",
    facts: ["Quick Answer", "8GB GPU preset", "RTGI vs Screen Space GI", "DLSS / FSR / XeSS", "Ghosting and crash FAQ"],
    flowchart: {
      eyebrow: "Original Flowchart",
      title: "PC Settings Decision Flow",
      intro: "Use this original flowchart before touching every graphics option. It keeps the testing path simple: protect stability first, then add visual quality.",
      steps: [
        ["1", "Pick Your Target", "Choose 60 FPS, high FPS, or visual quality before changing settings."],
        ["2", "Check VRAM", "8GB GPUs stay on High textures; 10GB+ can test higher settings carefully."],
        ["3", "Turn RT Down First", "Disable raytraced reflections before lowering car detail or geometry."],
        ["4", "Choose Upscaling", "Use Quality mode first, then compare ghosting on the same road route."],
        ["5", "Retest One Route", "Drive the same route again and keep the preset that feels smooth."]
      ]
    },
    table: {
      headers: ["Setting", "Balanced Recommendation", "Why It Matters"],
      rows: [
        ["Environment Texture Quality", "High for 8GB GPUs", "Avoids VRAM pressure while keeping the Japan map sharp."],
        ["Environment Geometry Quality", "High or Ultra", "Ultra can be heavier, so High is safer for mid-range PCs."],
        ["Screen Space GI Quality", "Medium or High", "Big lighting impact without the full ray tracing cost."],
        ["Raytraced GI Quality", "Off or Medium", "Use Medium only when FPS and VRAM headroom are stable."],
        ["Screen Space Reflections", "High or Extreme", "Best fallback when raytraced reflections are off."],
        ["Raytraced Reflections", "Off", "Turn this off first when chasing stable FPS."],
        ["Particle Effects Quality", "Low", "Helps busy rain, snow and particle-heavy scenes."],
        ["Upscaling", "DLSS / FSR / XeSS Quality", "Use quality modes first; test ghosting on the same route before changing presets."]
      ]
    },
    extraTables: [
      {
        title: "Hardware Presets",
        headers: ["PC Type", "Target", "Recommended Starting Point"],
        rows: [
          ["8GB GPU", "Stable 1080p or 1440p", "High textures, High geometry, Screen Space GI Medium, RT off, particles Low, upscaling Quality."],
          ["10-12GB GPU", "Balanced 1440p", "High textures, High or Ultra geometry, Screen Space GI High, RTGI Off or Medium, reflections High."],
          ["16GB+ GPU", "Visual quality", "Test Ultra geometry, higher reflections and RTGI Medium, but keep RT reflections off if FPS drops."],
          ["Handheld / low power", "Consistency", "Use Medium-heavy preset, upscaling Balanced, RT off, particles Low and background apps closed."]
        ]
      },
      {
        title: "Symptoms and Fixes",
        headers: ["Problem", "Likely Cause", "Player-Friendly Fix"],
        rows: [
          ["Micro-stutter while driving fast", "VRAM pressure, shader compilation or storage", "Lower Extreme textures first, keep the game on SSD and repeat the same test route."],
          ["Ghosting around cars", "Upscaling or anti-aliasing artifact", "Compare DLSS/FSR/XeSS Quality and TAA while following the same car at speed."],
          ["Rain or snow looks wrong", "Particle setting or effects state", "Switch effects higher once, apply, then return to the preferred preset and retest."],
          ["FPS drops at night", "Reflections, fog and lighting cost", "Reduce RT features before reducing car detail; test Screen Space GI Medium."]
        ]
      }
    ],
    sections: [
      { id: "quick-answer", title: "Quick Answer", body: "For most players, start with High textures, High geometry, Screen Space GI Medium or High, Screen Space Reflections High, RTGI Off or Medium, RT Reflections Off, Shader High and Volumetric Fog High. Keep Audio and Motion Blur Quality high unless you are troubleshooting." },
      { id: "hardware-presets", title: "Which Preset Should You Start With?", body: "High-end PCs can experiment with RTGI Medium and higher reflections. Mid-range PCs should prioritize Screen Space GI and reflections. 8GB GPUs should avoid Extreme texture settings and turn off ray tracing first. Handheld-style devices should target stability before visual extras." },
      { id: "troubleshooting", title: "Troubleshooting Priorities", body: "If DLSS is missing, check GPU support, driver version and Windows graphics settings. If the car shows ghosting, compare DLSS Quality, DLSS 4.5 presets, TAA, FSR and XeSS on the same route. If the game crashes, check overlays such as RTSS/RivaTuner, C++ Redistributable, GPU driver and whether the game is installed on an SSD." }
    ],
    tools: true,
    faqs: [
      ["What is the biggest FPS win?", "Turn off raytraced reflections and avoid high RTGI before lowering car detail or audio quality."],
      ["What should 8GB GPU players use?", "Use High texture quality, High geometry, Screen Space GI Medium or High, Screen Space Reflections High and ray tracing off."],
      ["Why do cars look ghosted?", "Upscaling and anti-aliasing can create motion artifacts. Compare DLSS presets, TAA, FSR and XeSS rather than judging only average FPS."],
      ["Is an SSD required?", "Steam system requirements and player reports both point toward SSD installation as the safe recommendation."]
    ],
    sources: ["https://forza.net/news/forza-horizon-6-pc-experience", "https://forza.net/news/forza-horizon-6-thank-you", "https://store.steampowered.com/app/2483190/Forza_Horizon_6/", "https://www.ign.com/articles/forza-horizon-6-pc-settings-guide", "https://www.reddit.com/r/OptimizedGaming/comments/1ti3owm/forza_horizon_6_optimization_guide_an_in_depth/"],
    links: ["/beginner-guide/", "/tuning/", "/best-cars/", "/guides/"]
  },
  {
    slug: "invalid-gaming-services-detected",
    title: "Forza Horizon 6 Gaming Services Fix — Xbox App Error",
    description: "Fix Forza Horizon 6 Gaming Services errors, invalid Gaming Services detected, Xbox app launch loops, Store account issues, Steam sign-in and overlays.",
    keywords: "gaming services Forza Horizon 6, invalid gaming services detected, Xbox app fix",
    h1: "Forza Horizon 6 Gaming Services Fix",
    eyebrow: "Launch Fix Guide",
    intro: "This page is built for the rising search query gaming services Forza Horizon 6. Use it when the game shows invalid Gaming Services detected, the Xbox app loops, Microsoft Store ownership looks wrong, Steam sign-in fails, or the game closes before the menu.",
    facts: ["Gaming Services Forza Horizon 6", "Invalid Gaming Services detected", "Xbox app repair", "Microsoft Store sync", "Steam launch checks", "Overlay conflicts"],
    fixTools: true,
    flowchart: {
      eyebrow: "Original Flowchart",
      title: "Launch Error Repair Flow",
      intro: "This flow keeps the fix order safe. Start with fast service checks, then move toward heavier repair only when the same error returns.",
      steps: [
        ["1", "Restart and Update", "Restart Windows, then update Xbox app, Store apps and Windows."],
        ["2", "Repair Gaming Services", "Use the Xbox app repair tool or Windows app repair/reset path."],
        ["3", "Verify Account", "Confirm Store and Xbox app use the account that owns access."],
        ["4", "Clean Launch Test", "Disable overlays, capture tools and performance injectors once."],
        ["5", "Reinstall Last", "Only reinstall the full game after service-level fixes fail."]
      ]
    },
    table: {
      headers: ["Symptom", "Most Likely Cause", "First Action"],
      rows: [
        ["Invalid Gaming Services detected", "Gaming Services registration or Xbox app state is broken", "Open the Xbox app, use Gaming Services Repair Tool, then restart Windows."],
        ["Install button loops or does nothing", "Microsoft Store and Xbox app account mismatch", "Confirm the same Microsoft account in Store and Xbox app."],
        ["Steam launches Xbox sign-in then fails", "Gaming Services dependency or Xbox identity sign-in issue", "Update Windows, Xbox app and Gaming Services before reinstalling the game."],
        ["Game closes after splash screen", "Overlay, injector or background app conflict", "Test with overlays, RTSS and recording tools disabled."],
        ["Error returns after reboot", "Cached service state or old app package", "Repair or reset Xbox app, Microsoft Store and Gaming Services in Windows settings."]
      ]
    },
    extraTables: [
      {
        title: "Repair Order",
        headers: ["Priority", "Action", "Why This Comes First"],
        rows: [
          ["1", "Restart Windows, then update Xbox app and Microsoft Store apps", "Fast, low risk and often refreshes broken service state."],
          ["2", "Run Gaming Services Repair Tool if the Xbox app offers it", "Targets the service layer without deleting the full game."],
          ["3", "Confirm Microsoft Store and Xbox app accounts match", "Entitlement mismatches can look like launch or install failures."],
          ["4", "Disable overlays, RTSS, capture tools and injectors", "Useful when the game reaches splash screen then closes."],
          ["5", "Repair/reset Xbox app, Microsoft Store and Gaming Services", "Deeper fix after basic account and update checks fail."],
          ["6", "Reinstall Forza Horizon 6", "Slowest option; use only after service-level fixes fail."]
        ]
      },
      {
        title: "Search Query Coverage",
        headers: ["Query", "Best Answer on This Page", "Related Section"],
        rows: [
          ["gaming services forza horizon 6", "Repair Gaming Services, Xbox app and Microsoft Store state before reinstalling.", "#quick-fix"],
          ["forza horizon 6 invalid gaming services detected", "Use the service repair flow, then test account and overlay conflicts.", "#flowchart"],
          ["forza horizon 6 gaming service", "Check whether the issue is service registration, Store ownership or Xbox identity.", "#account-check"],
          ["forza horizon 6 xbox app not launching", "Update Xbox app, Store apps, Gaming Services and Windows, then test clean launch.", "#quick-fix"],
          ["forza horizon 6 steam sign in error", "Verify Steam files, then repair Xbox identity and Gaming Services dependencies.", "#steam-note"]
        ]
      },
      {
        title: "Do Not Skip These Checks",
        headers: ["Check", "Good Sign", "Bad Sign"],
        rows: [
          ["Same account in Store and Xbox app", "Library, Game Pass and purchase status agree", "Store account owns access but Xbox app uses a different account."],
          ["Windows and Xbox app updated", "No pending Microsoft Store app updates", "Gaming Services or Xbox app update keeps failing."],
          ["Overlays disabled during test", "Game reaches menus after overlays are off", "Crash still happens before menu with a clean background."],
          ["Steam file verification", "Steam files validate, then Xbox identity succeeds", "Steam validates but Xbox sign-in or Gaming Services still blocks launch."]
        ]
      }
    ],
    sections: [
      { id: "quick-fix", title: "Fast Fix Order", body: "Start with the least destructive checks: restart Windows, update the Xbox app, update Microsoft Store apps, run the Gaming Services Repair Tool from the Xbox app if available, then test launch again before reinstalling the game." },
      { id: "account-check", title: "Account and Store Check", body: "Many launch loops come from account mismatch. Confirm the Microsoft Store, Xbox app and Windows Xbox identity prompts are using the account that owns the game or Game Pass entitlement." },
      { id: "steam-note", title: "Steam Players", body: "Steam players can still hit Xbox identity or Gaming Services problems because the game may call Microsoft sign-in services. Keep Steam, Windows, Xbox app and Gaming Services updated before assuming the Steam install itself is corrupt." },
      { id: "when-to-reinstall", title: "When to Reinstall", body: "Reinstalling the full game should be late in the workflow. Try app repair, service repair, Windows updates and overlay testing first, because the issue often sits outside the game files." }
    ],
    faqs: [
      ["How do I fix Gaming Services for Forza Horizon 6?", "Restart Windows, update Xbox app and Microsoft Store apps, run the Gaming Services Repair Tool if available, then repair or reset Xbox app and Gaming Services before reinstalling the game."],
      ["Is invalid Gaming Services detected a Forza-only bug?", "Not always. It usually points to Windows Gaming Services, Xbox app, Microsoft Store or account entitlement state, so fixing the service layer matters."],
      ["Should I reinstall Forza Horizon 6 first?", "No. Reinstalling is slow and may not fix a broken service package. Start with Xbox app and Gaming Services repair steps."],
      ["Does this affect Steam players?", "It can. Steam launches may still depend on Xbox identity or Microsoft services, especially around sign-in and entitlement checks."],
      ["Can overlays cause launch problems?", "Yes. Test with overlays, performance injectors and recording tools disabled if the game closes after splash screen."]
    ],
    sources: [
      "https://support.xbox.com/en-US/help/games-apps/troubleshooting/gaming-services-repair-tool",
      "https://support.xbox.com/en-US/help/games-apps/troubleshooting/troubleshoot-games-windows-10",
      "https://support.forzamotorsport.net/hc/en-us/articles/360007594514-My-Game-is-Not-Launching-or-is-Crashing-on-PC"
    ],
    links: ["/pc-settings/", "/how-to-play-smoothly/", "/editions/", "/guides/"]
  },
  {
    slug: "how-to-play-smoothly",
    title: "Forza Horizon 6 How to Play Smoothly — FPS & Stutter Fix",
    description: "Make Forza Horizon 6 run smoothly with practical FPS settings, upscaling choices, 8GB GPU advice, ray tracing tradeoffs, stutter checks and launch fixes.",
    keywords: "Forza Horizon 6 how to play smoothly, smooth FPS, stutter fix, best settings",
    h1: "Forza Horizon 6: How to Play It Smoothly",
    eyebrow: "Smooth Gameplay Guide",
    intro: "Players searching how to play Forza Horizon 6 smoothly usually need a simple answer: reduce VRAM pressure, use upscaling carefully, avoid expensive ray tracing first, and test changes on the same road route. This guide turns the PC settings page into a quick action plan.",
    facts: ["Smooth FPS route", "8GB GPU safe settings", "Stutter checks", "Upscaling advice", "Ray tracing tradeoffs"],
    flowchart: {
      eyebrow: "Original Flowchart",
      title: "Smooth Gameplay Test Flow",
      intro: "This flow is made for players who feel stutter but do not know which setting caused it. Change one group at a time and keep the test route consistent.",
      steps: [
        ["1", "Choose One Route", "Pick a city or mountain route with traffic, reflections and fast corners."],
        ["2", "Baseline Feel", "Drive once without changing five settings at the same time."],
        ["3", "Reduce Heavy Features", "Lower RT, particles and Extreme textures before cutting resolution."],
        ["4", "Compare Upscaling", "Test Quality or Balanced modes while watching moving cars."],
        ["5", "Save the Preset", "Keep the setup that feels consistent, not only the highest peak FPS."]
      ]
    },
    table: {
      headers: ["Goal", "Change First", "Avoid First"],
      rows: [
        ["Stable 60 FPS", "Textures High, Geometry High, RT off, particles Low or Medium", "Dropping resolution before testing upscaling."],
        ["Less stutter", "Close overlays, use SSD, update GPU driver, avoid Extreme textures on 8GB GPUs", "Maxing ray tracing while VRAM is already full."],
        ["Sharper image", "Use Quality upscaling or TAA, then compare ghosting on moving cars", "Changing five settings at once."],
        ["Better night and rain performance", "Test particles, fog and reflections on the same route", "Assuming daytime benchmark results apply everywhere."],
        ["Low input delay", "Favor stable FPS, disable unnecessary capture overlays", "Using heavy background recording while troubleshooting."]
      ]
    },
    extraTables: [
      {
        title: "Smoothness Diagnosis",
        headers: ["What You Feel", "What To Check", "Best Next Page"],
        rows: [
          ["Stutter on turns or city routes", "VRAM, storage, shader cache, overlays", "/pc-settings/"],
          ["Good FPS but blurry cars", "Upscaling preset, TAA, motion artifacts", "/pc-settings/"],
          ["Game will not open before settings menu", "Gaming Services, Xbox app, Store account", "/invalid-gaming-services-detected/"],
          ["Car feels hard to control", "Assists, steering, tune and tire choice", "/tuning/"],
          ["Early races feel too hard", "Starter car role and upgrade order", "/best-starter-cars/"]
        ]
      },
      {
        title: "One-Change Testing Method",
        headers: ["Step", "Action", "Why It Helps"],
        rows: [
          ["1", "Choose one road with traffic, reflections and fast corners", "A fixed route makes changes easier to compare."],
          ["2", "Change only one setting group at a time", "You can tell whether VRAM, RT or upscaling caused the improvement."],
          ["3", "Drive the same car at the same time of day if possible", "Removes weather, traffic and route differences."],
          ["4", "Write down the preset that feels smooth, not only the highest FPS", "Smooth driving matters more than a single benchmark number."]
        ]
      }
    ],
    sections: [
      { id: "quick-answer", title: "Quick Answer", body: "For most mid-range PCs, start with High textures, High geometry, High screen-space reflections, Medium or High screen-space GI, ray-traced reflections off, RTGI off or Medium only on stronger GPUs, and upscaling on Quality or Balanced at higher resolutions." },
      { id: "test-route", title: "Use One Test Route", body: "Pick one route with traffic, reflections and fast corners, then repeat it after each settings change. Smoothness is easier to feel when you stop changing the car, weather and route at the same time." },
      { id: "vram", title: "Watch VRAM Before Visuals", body: "If an 8GB GPU stutters, do not start by lowering everything. Keep the settings that preserve driving clarity, then reduce Extreme textures, heavy RT features and particle effects first." },
      { id: "tool", title: "Use the Settings Recommender", body: "The PC Settings page has an interactive recommender that outputs a preset based on VRAM, resolution, FPS target and ray tracing preference." }
    ],
    faqs: [
      ["What is the fastest way to make Forza Horizon 6 smoother?", "Turn off ray-traced reflections first, use High instead of Extreme textures on 8GB GPUs, and test upscaling Quality or Balanced."],
      ["Why does the game stutter even when average FPS is high?", "Average FPS can hide VRAM spikes, shader compilation, overlays, background capture tools or slow storage."],
      ["Should I use DLSS, FSR or XeSS?", "Use the upscaler that looks cleanest on your GPU and monitor. Compare moving cars and fences, not only static screenshots."],
      ["Is the PC Settings page more detailed?", "Yes. Use /pc-settings/ for a full preset table and interactive recommender."]
    ],
    sources: [
      "https://www.ign.com/articles/forza-horizon-6-pc-settings-guide",
      "https://www.reddit.com/r/OptimizedGaming/comments/1ti3owm/forza_horizon_6_optimization_guide_an_in_depth/",
      "https://support.forzamotorsport.net/hc/en-us/articles/360007594514-My-Game-is-Not-Launching-or-is-Crashing-on-PC"
    ],
    links: ["/pc-settings/", "/invalid-gaming-services-detected/", "/tuning/", "/best-starter-cars/"]
  },
  {
    slug: "ps5",
    title: "Forza Horizon 6 PS5 — Platform Status & Alternatives",
    description: "Check Forza Horizon 6 PS5 search intent, official platform status, Xbox and PC options, controller notes, cloud play possibilities and what to verify before buying.",
    keywords: "Forza Horizon 6 PS5, FH6 PlayStation 5, Forza Horizon 6 platforms",
    h1: "Forza Horizon 6 PS5",
    eyebrow: "Platform Status",
    intro: "Many players search Forza Horizon 6 PS5 because they want to know whether they can play the game on PlayStation 5. Treat platform claims carefully: use official Xbox, Steam and Forza pages first, then update this page only when an official PlayStation release is confirmed.",
    facts: ["PS5 search demand", "Verify official platforms", "Xbox Series X|S", "Windows PC", "Steam and Game Pass"],
    table: {
      headers: ["Question", "Current Site Answer", "Where to Verify"],
      rows: [
        ["Is Forza Horizon 6 on PS5?", "Use official platform pages before making a purchase decision.", "Xbox Store, Forza official site and Steam."],
        ["Can I play on PC?", "The site tracks Windows PC and Steam information separately.", "/editions/"],
        ["Can I use a controller on PC?", "Yes, controller setup belongs in PC settings and beginner pages.", "/pc-settings/"],
        ["Should I buy Xbox or PC for FH6?", "Compare Game Pass, Steam ownership, PC performance and console convenience.", "/editions/"]
      ]
    },
    sections: [
      { id: "why-search", title: "Why This Page Exists", body: "Google autocomplete shows PS5 search demand. A short, honest platform page is better than forcing PS5 users into a generic wiki page that does not answer their question." },
      { id: "official-check", title: "Official Check First", body: "Before writing that a platform is supported, check the Xbox Store, Forza.net and Steam listing. Platform availability can change, and wrong platform advice damages trust quickly." },
      { id: "alternatives", title: "Alternatives to Check", body: "If PS5 support is not officially listed, players should compare Xbox Series X|S, Windows PC, Steam and Game Pass routes instead of buying based on rumors." }
    ],
    faqs: [
      ["Why does Google suggest Forza Horizon 6 PS5?", "Players often search platform availability before buying hardware or choosing a store."],
      ["Should this page promise PS5 support?", "No. It should explain the official platform status and link to sources that players can verify."],
      ["Can this page still rank?", "Yes, because it directly answers a real search query and sends users to platform pages instead of hiding the answer."]
    ],
    sources: [
      "https://www.xbox.com/en-US/games/forza-horizon-6",
      "https://store.steampowered.com/app/2483190/Forza_Horizon_6/",
      "https://forza.net/"
    ],
    links: ["/editions/", "/pc-settings/", "/guides/", "/how-to-play-smoothly/"]
  },
  {
    slug: "best-starter-cars",
    title: "Forza Horizon 6 Best Starter Cars — Early Builds",
    description: "Choose the best Forza Horizon 6 starter cars for the first two hours, including safe road, dirt, off-road and drift picks plus early credits and upgrade advice.",
    keywords: "Forza Horizon 6 best starter cars, first car, beginner cars, early builds",
    h1: "Forza Horizon 6 Best Starter Cars",
    eyebrow: "Beginner Cars",
    intro: "The best starter car is not always the fastest car. New players need forgiving handling, cheap upgrades, useful event coverage and a car that stays relevant after the first few wristband unlocks.",
    facts: ["First two hours", "Official starter choices", "Road and dirt coverage", "Cheap upgrades", "Credits priority"],
    table: {
      headers: ["Starter Need", "Recommended Direction", "Upgrade Priority"],
      rows: [
        ["Balanced first pick", "1994 Toyota Celica GT-Four ST205", "Tires, brakes and rally-friendly grip before raw horsepower."],
        ["Street and drift learning", "1989 Nissan Silvia K's", "Keep it controllable; use a dedicated drift tune instead of a road tune."],
        ["Dirt and exploration", "1970 GMC Jimmy", "Suspension, off-road tires and controllability for mixed surfaces."],
        ["Road racing backup", "Stable grip car with predictable braking", "Tires, brakes and weight before engine swaps."],
        ["Credits plan", "Do not sink all money into one high-PI build", "Keep enough credits for upgrades across multiple event types."]
      ]
    },
    starterTools: true,
    sections: [
      { id: "official-starters", title: "Official Starter Choices", body: "The official first-drive material points new players toward three very different early choices: the 1989 Nissan Silvia K's, 1994 Toyota Celica GT-Four ST205 and 1970 GMC Jimmy. Treat them as roles, not trophies: Silvia for street and drift learning, Celica for balanced grip and rally-style control, and Jimmy for off-road comfort." },
      { id: "credits", title: "Early Credits Priority", body: "Spend first on grip, brakes and control. A single overpowered car can feel exciting, but beginners usually progress faster with two or three manageable cars that cover road, dirt and exploration." },
      { id: "upgrade-order", title: "Upgrade Order", body: "Start with tire compound, tire width, brakes, weight and suspension before big horsepower. Power upgrades are easier to enjoy after the car already turns, stops and launches cleanly." }
    ],
    faqs: [
      ["Can a wrong first car ruin progression?", "No. The first choice matters less than learning events, using sensible upgrades and collecting later rewards."],
      ["Should beginners spend all credits on one car?", "No. Keep credits for upgrades and a small set of cars that cover different event types."],
      ["Should new players use tune codes?", "Tune codes help early, but players should still learn why a tune is for road, dirt or drift."]
    ],
    sources: ["https://forza.net/news/forza-horizon-6-first-drive", "https://forza.net/fh6cars", "https://www.reddit.com/r/ForzaHorizon6/comments/1tgp8ln/fh6_a_beginners_guide_no_spoilers/"],
    links: ["/beginner-guide/", "/cars/", "/car-list/", "/tuning/"]
  },
  {
    slug: "editions",
    title: "Forza Horizon 6 Editions — Steam, Xbox & Game Pass",
    description: "Compare Forza Horizon 6 editions, Steam and Xbox purchase options, Game Pass access, Car Pass, add-ons, platforms, stores and official links.",
    keywords: "Forza Horizon 6 editions, Game Pass, Steam, Xbox Store, Premium",
    h1: "Forza Horizon 6 Editions",
    eyebrow: "Official Info",
    intro: "Use this page to keep official purchase and platform facts separate from gameplay opinions. Xbox and Steam pages should be the primary sources for editions, add-ons, Game Pass, language support and PC requirements.",
    facts: ["Xbox Store", "Steam", "Game Pass", "Standard / Deluxe / Premium", "Add-ons and Car Pass"],
    table: {
      headers: ["Topic", "Use On Page", "Primary Source"],
      rows: [
        ["Standard Edition", "Base purchase option and launch access", "Xbox Store / Steam"],
        ["Deluxe Edition", "Edition comparison and included add-ons", "Xbox Store"],
        ["Premium Edition", "Premium add-ons, early access where applicable and Car Pass", "Xbox Store / Steam"],
        ["Game Pass", "Subscription access and platform CTA", "Xbox official page"],
        ["Steam", "PC features, reviews, languages and achievements", "Steam store page"]
      ]
    },
    faqs: [
      ["Where should players buy the game?", "Link to official Xbox Store and Steam pages rather than third-party sellers."],
      ["Does edition information change?", "Yes. Treat pricing, discounts and bundle names as time-sensitive and verify on official stores."],
      ["Should this page include review opinions?", "Keep this page factual. Put performance and gameplay advice on PC settings and beginner pages."]
    ],
    sources: ["https://www.xbox.com/en-US/games/store/forza-horizon-6/9NR1R1XWLCNB", "https://www.xbox.com/en-US/games/forza-horizon-6", "https://store.steampowered.com/app/2483190/Forza_Horizon_6/"],
    links: ["/pc-settings/", "/achievements/", "/festival-playlist/", "/guides/"]
  },
  {
    slug: "achievements",
    title: "Forza Horizon 6 Achievements — Steam & Xbox Guide Plan",
    description: "Track Forza Horizon 6 achievements on Steam and Xbox by campaign, collection, multiplayer, playlist and exploration categories with source-backed guide notes.",
    keywords: "Forza Horizon 6 achievements, Steam achievements, Xbox achievements",
    h1: "Forza Horizon 6 Achievements",
    eyebrow: "Completion Guide",
    intro: "Achievements are a strong long-tail topic because players search for hidden unlocks, category lists and completion routes. Start with Steam and Xbox facts, then split guide content by progression, collection, events and multiplayer.",
    facts: ["57 Steam Achievements", "Xbox achievements", "Completion routes", "Hidden unlocks", "Playlist links"],
    table: {
      headers: ["Category", "What To Track", "Related Guide"],
      rows: [
        ["Campaign", "Progression and wristband milestones", "/beginner-guide/"],
        ["Collection", "Car collection and reward vehicles", "/cars/"],
        ["Playlist", "Series and seasonal reward objectives", "/festival-playlist/"],
        ["Exploration", "Map, landmarks, photo and Treasure Cars", "/map/"],
        ["Multiplayer", "Co-op, car meets, racing and online objectives", "/guides/"]
      ]
    },
    faqs: [
      ["How many Steam achievements are listed?", "The Steam store page lists 57 Steam Achievements."],
      ["Should hidden achievements be spoiled?", "Use spoiler warnings and split no-spoilers hints from exact unlock requirements."],
      ["How should this page link internally?", "Achievements should link into cars, map, playlist and beginner progression pages."]
    ],
    sources: ["https://store.steampowered.com/app/2483190/Forza_Horizon_6/", "https://www.xbox.com/en-US/games/forza-horizon-6", "https://forza.net/fh6playlists"],
    links: ["/beginner-guide/", "/cars/", "/map/", "/festival-playlist/"]
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

function linkedCell(cell) {
  const value = String(cell);
  return value.startsWith("/") ? `<a href="${value}">${value}</a>` : escapeHtml(value);
}

function tableMarkup(table) {
  return `<table class="data-table">
      <thead><tr>${table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
      <tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${linkedCell(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`;
}

function tableBlock(table) {
  if (!table) return "";
  return `<div class="content-panel" id="table">
    <h2>Quick Reference</h2>
    ${tableMarkup(table)}
  </div>`;
}

function extraTablesBlock(extraTables) {
  if (!extraTables) return "";
  return `<div id="more-tables" class="content-stack">
    ${extraTables.map((table) => `<div class="content-panel">
      <h2>${escapeHtml(table.title)}</h2>
      ${tableMarkup(table)}
    </div>`).join("")}
  </div>`;
}

function adBlock() {
  return `<aside class="ad-slot" aria-label="Advertisement placeholder">
    <span>Advertisement</span>
    <strong>Future display ad space</strong>
  </aside>`;
}

function factsBlock(facts) {
  if (!facts) return "";
  return `<div class="content-panel" id="facts">
    <h2>Quick Facts</h2>
    <div class="badge-row">${facts.map((fact) => `<span class="badge">${escapeHtml(fact)}</span>`).join("")}</div>
  </div>`;
}

function flowchartBlock(flowchart) {
  if (!flowchart) return "";
  return `<div class="content-panel" id="flowchart">
    <p class="eyebrow">${escapeHtml(flowchart.eyebrow)}</p>
    <h2>${escapeHtml(flowchart.title)}</h2>
    <p>${escapeHtml(flowchart.intro)}</p>
    <div class="flowchart" aria-label="${escapeHtml(flowchart.title)}">
      ${flowchart.steps.map(([number, title, body]) => `<div class="flow-step">
        <span class="flow-number">${escapeHtml(number)}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(body)}</p>
      </div>`).join("")}
    </div>
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

function structuredDataBlock(page) {
  const pageUrl = `${siteUrl}/${page.slug}/`;
  const graph = [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      "url": pageUrl,
      "name": page.title,
      "description": page.description,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Forza Horizon 6 Wiki",
        "url": `${siteUrl}/`
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${siteUrl}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": page.h1,
          "item": pageUrl
        }
      ]
    }
  ];

  if (page.faqs) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": page.faqs.map(([question, answer]) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      }))
    });
  }

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

function pcToolsBlock(page) {
  if (!page.tools) return "";
  return `<div class="tool-stack" id="tools">
    <div class="content-panel settings-tool" data-settings-tool>
      <div class="tool-heading">
        <div>
          <p class="eyebrow">Interactive Tool</p>
          <h2>PC Settings Recommender</h2>
          <p>Choose your PC target and get a practical preset for Forza Horizon 6. The tool favors stable FPS first, then protects visual details that matter most while driving.</p>
        </div>
        <span class="tool-pill">No login required</span>
      </div>
      <form class="tool-form">
        <label>GPU VRAM
          <select name="vram">
            <option value="8">8GB or less</option>
            <option value="12">10-12GB</option>
            <option value="16">16GB+</option>
          </select>
        </label>
        <label>Resolution
          <select name="resolution">
            <option value="1080">1080p</option>
            <option value="1440">1440p</option>
            <option value="4k">4K</option>
          </select>
        </label>
        <label>Goal
          <select name="goal">
            <option value="balanced">Balanced</option>
            <option value="fps">High FPS</option>
            <option value="quality">Visual Quality</option>
          </select>
        </label>
        <label>Ray Tracing
          <select name="rt">
            <option value="off">Prefer Off</option>
            <option value="medium">Allow Medium</option>
          </select>
        </label>
      </form>
      <div class="preset-output" aria-live="polite">
        <div>
          <p class="panel-label">Recommended Preset</p>
          <h3 data-preset-title>Balanced 8GB Preset</h3>
          <p data-preset-note>Stable settings for most mid-range PCs.</p>
        </div>
        <button class="button subtle" type="button" data-copy-preset>Copy Preset</button>
      </div>
      <div class="settings-grid" data-settings-output></div>
    </div>

    <div class="content-panel">
      <p class="eyebrow">Troubleshooting Tool</p>
      <h2>Quick Fix Checklist</h2>
      <div class="checklist-grid">
        <label><input type="checkbox" /> DLSS/FSR/XeSS option checked on the same route</label>
        <label><input type="checkbox" /> GPU driver updated, especially Nvidia Game Ready Driver</label>
        <label><input type="checkbox" /> Raytraced Reflections disabled before lowering car detail</label>
        <label><input type="checkbox" /> Game installed on SSD, not an old HDD</label>
        <label><input type="checkbox" /> RTSS/RivaTuner and overlays tested off if crashing</label>
        <label><input type="checkbox" /> 8GB GPU avoids Extreme texture settings</label>
      </div>
    </div>
  </div>`;
}

function starterToolsBlock(page) {
  if (!page.starterTools) return "";
  return `<div class="tool-stack" id="starter-finder">
    <div class="content-panel settings-tool" data-starter-tool>
      <div class="tool-heading">
        <div>
          <p class="eyebrow">Interactive Tool</p>
          <h2>Starter Car Finder</h2>
          <p>Pick what you want to do first and get a starter direction. This is designed for the first two hours, before you have a deep garage or credits to waste.</p>
        </div>
        <span class="tool-pill">No spoilers</span>
      </div>
      <form class="tool-form starter-form">
        <label>First Goal
          <select name="goal">
            <option value="balanced">Balanced progress</option>
            <option value="road">Road and street races</option>
            <option value="dirt">Dirt and off-road</option>
            <option value="drift">Drift practice</option>
          </select>
        </label>
        <label>Driving Style
          <select name="style">
            <option value="safe">Safe handling</option>
            <option value="fast">Fast acceleration</option>
            <option value="slide">Sliding and control</option>
          </select>
        </label>
        <label>Credits Plan
          <select name="credits">
            <option value="save">Save credits</option>
            <option value="upgrade">Upgrade one main car</option>
          </select>
        </label>
      </form>
      <div class="preset-output" aria-live="polite">
        <div>
          <p class="panel-label">Recommended Starter Path</p>
          <h3 data-starter-title>Balanced Starter Path</h3>
          <p data-starter-note>Use a forgiving car first, then build a second car for the event type that gives you trouble.</p>
        </div>
        <button class="button subtle" type="button" data-copy-starter>Copy Path</button>
      </div>
      <div class="settings-grid" data-starter-output></div>
    </div>

    <div class="content-panel">
      <p class="eyebrow">Beginner Tool</p>
      <h2>First Two Hours Checklist</h2>
      <div class="checklist-grid">
        <label><input type="checkbox" /> Finish the opening route before clearing random map icons</label>
        <label><input type="checkbox" /> Keep one road/street car and one dirt/off-road option</label>
        <label><input type="checkbox" /> Upgrade tires and brakes before chasing horsepower</label>
        <label><input type="checkbox" /> Use a separate drift tune instead of reusing a road tune</label>
        <label><input type="checkbox" /> Save credits for event coverage, not only collection cars</label>
        <label><input type="checkbox" /> Check Festival Playlist only after core systems unlock</label>
      </div>
    </div>
  </div>`;
}

function fixToolsBlock(page) {
  if (!page.fixTools) return "";
  return `<div class="tool-stack" id="fix-tool">
    <div class="content-panel settings-tool" data-fix-tool>
      <div class="tool-heading">
        <div>
          <p class="eyebrow">Interactive Tool</p>
          <h2>Gaming Services Fix Finder</h2>
          <p>Select where the launch fails and get the next repair path. The tool keeps reinstalling the full game as a late step because service repair is usually faster.</p>
        </div>
        <span class="tool-pill">Launch fix</span>
      </div>
      <form class="tool-form fix-form">
        <label>Where It Fails
          <select name="stage">
            <option value="launch">Launch error or invalid Gaming Services</option>
            <option value="install">Install button loops or download fails</option>
            <option value="signin">Xbox sign-in or entitlement problem</option>
            <option value="crash">Splash screen then crash</option>
          </select>
        </label>
        <label>Store Version
          <select name="store">
            <option value="xbox">Xbox app / Game Pass</option>
            <option value="steam">Steam</option>
          </select>
        </label>
        <label>Overlays
          <select name="overlays">
            <option value="unknown">Not tested yet</option>
            <option value="off">Already tested off</option>
          </select>
        </label>
      </form>
      <div class="preset-output" aria-live="polite">
        <div>
          <p class="panel-label">Recommended Fix Path</p>
          <h3 data-fix-title>Service Repair First</h3>
          <p data-fix-note>Start with Gaming Services and Xbox app repair before reinstalling the full game.</p>
        </div>
        <button class="button subtle" type="button" data-copy-fix>Copy Steps</button>
      </div>
      <div class="settings-grid" data-fix-output></div>
    </div>

    <div class="content-panel">
      <p class="eyebrow">Do First</p>
      <h2>Safe Repair Checklist</h2>
      <div class="checklist-grid">
        <label><input type="checkbox" /> Restart Windows after updating Xbox app or Gaming Services</label>
        <label><input type="checkbox" /> Confirm Microsoft Store and Xbox app use the same account</label>
        <label><input type="checkbox" /> Update Windows before reinstalling the game</label>
        <label><input type="checkbox" /> Test overlays and performance injectors off</label>
        <label><input type="checkbox" /> Repair or reset Xbox app before deleting game files</label>
        <label><input type="checkbox" /> Reinstall the full game only after service fixes fail</label>
      </div>
    </div>
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
    page.flowchart && ["flowchart", "Flowchart"],
    page.table && ["table", "Quick Reference"],
    page.fixTools && ["fix-tool", "Fix Tool"],
    page.extraTables && ["more-tables", "More Tables"],
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
  const updated = page.updated || "August 23, 2026";
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
    ${structuredDataBlock(page)}
  </head>
  <body>
    ${header(page.slug)}
    <main>
      <section class="page-hero">
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1>${escapeHtml(page.h1)}</h1>
        <p class="hero-text">${escapeHtml(page.intro)}</p>
        <p class="updated-note">Last updated: ${escapeHtml(updated)} · Independent fan-made guide</p>
      </section>
      <div class="layout">
        ${toc(page)}
        <div class="content-stack">
          ${factsBlock(page.facts)}
          ${flowchartBlock(page.flowchart)}
          ${tableBlock(page.table)}
          ${pcToolsBlock(page)}
          ${starterToolsBlock(page)}
          ${fixToolsBlock(page)}
          ${extraTablesBlock(page.extraTables)}
          ${adBlock()}
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

const siteUrl = "https://forza-horizon-6-game-helper.vercel.app";

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), render(page));
}

fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}/</loc></url>
${pages.map((page) => `  <url><loc>${siteUrl}/${page.slug}/</loc></url>`).join("\n")}
</urlset>
`);

fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`);
