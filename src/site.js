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
