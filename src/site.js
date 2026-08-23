const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

document.querySelectorAll(".main-nav a").forEach((link) => {
  const linkPath = new URL(link.href).pathname.replace(/\/$/, "") || "/";
  if (linkPath === currentPath) link.classList.add("active");
});

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

const settingsTool = document.querySelector("[data-settings-tool]");
if (settingsTool) {
  const form = settingsTool.querySelector(".tool-form");
  const output = settingsTool.querySelector("[data-settings-output]");
  const title = settingsTool.querySelector("[data-preset-title]");
  const note = settingsTool.querySelector("[data-preset-note]");
  const copyButton = settingsTool.querySelector("[data-copy-preset]");

  const rows = [
    ["Environment Texture Quality", "texture"],
    ["Environment Geometry Quality", "geometry"],
    ["Screen Space GI Quality", "ssgi"],
    ["Raytraced GI Quality", "rtgi"],
    ["Screen Space Reflections", "ssr"],
    ["Raytraced Reflections", "rtr"],
    ["Shader Quality", "shader"],
    ["Particle Effects Quality", "particles"],
    ["Volumetric Fog Quality", "fog"],
    ["Upscaling", "upscaling"]
  ];

  function getPreset() {
    const data = Object.fromEntries(new FormData(form).entries());
    const lowVram = data.vram === "8";
    const highVram = data.vram === "16";
    const fps = data.goal === "fps";
    const quality = data.goal === "quality";
    const is4k = data.resolution === "4k";
    const allowRt = data.rt === "medium" && !fps && !lowVram;

    const preset = {
      texture: lowVram ? "High" : quality && highVram ? "Extreme" : "High",
      geometry: fps || lowVram ? "High" : "Ultra",
      ssgi: fps ? "Medium" : "High",
      rtgi: allowRt ? "Medium" : "Off",
      ssr: quality ? "Extreme" : "High",
      rtr: allowRt && quality ? "Medium" : "Off",
      shader: "High",
      particles: fps || lowVram ? "Low" : "High",
      fog: fps ? "Medium" : "High",
      upscaling: is4k ? "DLSS/FSR/XeSS Quality or Balanced" : "DLSS/FSR/XeSS Quality"
    };

    let name = "Balanced Preset";
    if (fps) name = "High FPS Preset";
    if (quality) name = "Visual Quality Preset";
    if (lowVram) name += " for 8GB GPUs";
    if (is4k) name += " at 4K";

    const warning = lowVram
      ? "Prioritizes VRAM safety: ray tracing stays off and texture quality avoids Extreme."
      : allowRt
        ? "Keeps ray tracing at Medium only where it is worth testing against FPS stability."
        : "Uses screen-space lighting and reflections first for a stable, low-risk setup.";

    return { name, warning, preset };
  }

  function renderPreset() {
    const { name, warning, preset } = getPreset();
    title.textContent = name;
    note.textContent = warning;
    output.innerHTML = rows.map(([label, key]) => `
      <div class="setting-chip">
        <span>${label}</span>
        <strong>${preset[key]}</strong>
      </div>
    `).join("");
  }

  form.addEventListener("change", renderPreset);
  copyButton.addEventListener("click", async () => {
    const { name, preset } = getPreset();
    const text = `${name}\n${rows.map(([label, key]) => `${label}: ${preset[key]}`).join("\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied";
      window.setTimeout(() => { copyButton.textContent = "Copy Preset"; }, 1500);
    } catch {
      copyButton.textContent = "Copy Failed";
      window.setTimeout(() => { copyButton.textContent = "Copy Preset"; }, 1500);
    }
  });

  renderPreset();
}

const starterTool = document.querySelector("[data-starter-tool]");
if (starterTool) {
  const form = starterTool.querySelector(".starter-form");
  const output = starterTool.querySelector("[data-starter-output]");
  const title = starterTool.querySelector("[data-starter-title]");
  const note = starterTool.querySelector("[data-starter-note]");
  const copyButton = starterTool.querySelector("[data-copy-starter]");

  function getStarterPath() {
    const data = Object.fromEntries(new FormData(form).entries());
    const paths = {
      balanced: {
        name: "Toyota Celica GT-Four Balanced Path",
        car: "1994 Toyota Celica GT-Four ST205",
        role: "Balanced road, dirt and early progression",
        upgrades: "Tires, brakes, suspension, then modest power",
        tune: "Grip-first rally-style tune",
        next: "Add a street or drift car after the first wristband"
      },
      road: {
        name: "Nissan Silvia Street Path",
        car: "1989 Nissan Silvia K's",
        role: "Street racing, handling practice and drift learning",
        upgrades: "Tires, brakes, weight, then acceleration",
        tune: "Road grip tune first; separate drift tune later",
        next: "Buy or unlock a dirt-capable car before mixed-surface events"
      },
      dirt: {
        name: "GMC Jimmy Dirt Path",
        car: "1970 GMC Jimmy",
        role: "Dirt, off-road, exploration and rough surfaces",
        upgrades: "Off-road tires, suspension travel, brakes, then torque",
        tune: "Control-first off-road tune",
        next: "Keep a lighter road car for street and circuit events"
      },
      drift: {
        name: "Silvia Drift Learning Path",
        car: "1989 Nissan Silvia K's",
        role: "Learning angle, throttle control and low-cost drift setup",
        upgrades: "Drift tires or sport tires, differential, suspension, steering angle",
        tune: "Dedicated drift tune only",
        next: "Do not use the drift build for normal road races"
      }
    };

    const path = { ...paths[data.goal] };
    if (data.style === "safe") path.note = "Safe handling is the priority: keep PI modest and avoid huge power jumps.";
    if (data.style === "fast") path.note = "Add acceleration only after the car already brakes and turns cleanly.";
    if (data.style === "slide") path.note = "Sliding is easier with a dedicated tune; do not mix drift and race setups.";
    if (data.credits === "save") path.credits = "Save credits by upgrading one main car lightly and using rewards for your second role.";
    if (data.credits === "upgrade") path.credits = "Upgrade one main car, but keep enough credits for a second event type.";
    return path;
  }

  function renderStarterPath() {
    const path = getStarterPath();
    title.textContent = path.name;
    note.textContent = path.note;
    output.innerHTML = [
      ["Starter Car", path.car],
      ["Best For", path.role],
      ["Upgrade Order", path.upgrades],
      ["Tune Direction", path.tune],
      ["Credits Rule", path.credits],
      ["Next Step", path.next]
    ].map(([label, value]) => `
      <div class="setting-chip">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `).join("");
  }

  form.addEventListener("change", renderStarterPath);
  copyButton.addEventListener("click", async () => {
    const path = getStarterPath();
    const text = `${path.name}\nStarter Car: ${path.car}\nBest For: ${path.role}\nUpgrade Order: ${path.upgrades}\nTune Direction: ${path.tune}\nCredits Rule: ${path.credits}\nNext Step: ${path.next}`;
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied";
      window.setTimeout(() => { copyButton.textContent = "Copy Path"; }, 1500);
    } catch {
      copyButton.textContent = "Copy Failed";
      window.setTimeout(() => { copyButton.textContent = "Copy Path"; }, 1500);
    }
  });

  renderStarterPath();
}

const fixTool = document.querySelector("[data-fix-tool]");
if (fixTool) {
  const form = fixTool.querySelector(".fix-form");
  const output = fixTool.querySelector("[data-fix-output]");
  const title = fixTool.querySelector("[data-fix-title]");
  const note = fixTool.querySelector("[data-fix-note]");
  const copyButton = fixTool.querySelector("[data-copy-fix]");

  function getFixPath() {
    const data = Object.fromEntries(new FormData(form).entries());
    const paths = {
      launch: {
        name: "Gaming Services Repair First",
        note: "Best for invalid Gaming Services detected or launch blocked before the game window appears.",
        steps: [
          "Restart Windows once before changing files",
          "Update the Xbox app and Microsoft Store apps",
          "Run the Gaming Services Repair Tool from the Xbox app if available",
          "Repair or reset Xbox app and Gaming Services in Windows settings",
          "Test launch again before reinstalling Forza Horizon 6"
        ]
      },
      install: {
        name: "Store and Install Loop Fix",
        note: "Best for install buttons that loop, pause, or fail before the game is fully installed.",
        steps: [
          "Confirm Microsoft Store and Xbox app use the same Microsoft account",
          "Update Windows, Microsoft Store and Xbox app",
          "Check available SSD space and install location",
          "Repair Microsoft Store and Xbox app",
          "Retry install before deleting existing game folders"
        ]
      },
      signin: {
        name: "Xbox Identity and Entitlement Check",
        note: "Best when the game opens sign-in, then fails or says you do not own access.",
        steps: [
          "Sign out and back into Xbox app",
          "Check Microsoft Store account matches the owning account",
          "Confirm Game Pass or purchase entitlement is active",
          "Update Xbox Identity Provider and Gaming Services",
          "Restart Windows and test launch again"
        ]
      },
      crash: {
        name: "Splash Screen Crash Check",
        note: "Best when the game starts but closes before menus or after a short black screen.",
        steps: [
          "Update GPU driver and Windows",
          "Disable overlays, RTSS, capture tools and performance injectors",
          "Repair Xbox app or verify Steam files",
          "Move install to SSD if it is on old storage",
          "Test with conservative PC settings after launch succeeds"
        ]
      }
    };

    const path = { ...paths[data.stage] };
    if (data.store === "steam") {
      path.steps = path.steps.map((step) =>
        step.includes("Xbox app or verify Steam files") ? step : step
      );
      path.steps.splice(2, 0, "For Steam, verify game files after Xbox identity and Gaming Services checks");
    }
    if (data.overlays === "unknown") {
      path.steps.splice(1, 0, "Disable overlays temporarily so you know they are not part of the problem");
    }

    return path;
  }

  function renderFixPath() {
    const path = getFixPath();
    title.textContent = path.name;
    note.textContent = path.note;
    output.innerHTML = path.steps.map((step, index) => `
      <div class="setting-chip">
        <span>Step ${index + 1}</span>
        <strong>${step}</strong>
      </div>
    `).join("");
  }

  form.addEventListener("change", renderFixPath);
  copyButton.addEventListener("click", async () => {
    const path = getFixPath();
    const text = `${path.name}\n${path.steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied";
      window.setTimeout(() => { copyButton.textContent = "Copy Steps"; }, 1500);
    } catch {
      copyButton.textContent = "Copy Failed";
      window.setTimeout(() => { copyButton.textContent = "Copy Steps"; }, 1500);
    }
  });

  renderFixPath();
}
