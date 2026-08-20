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
