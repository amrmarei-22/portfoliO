// Theme toggle, persisted in localStorage, respects system preference on first visit.
const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);
else if (matchMedia("(prefers-color-scheme: light)").matches) root.setAttribute("data-theme", "light");

themeBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Mobile nav
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20), { passive: true });

// Scroll-reveal animations
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: validates, then opens the visitor's email app with the message filled in.
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target, msg = document.getElementById("fmsg");
  if (!f.checkValidity()) {
    msg.textContent = "Please fill in your name, a valid email and your project details.";
    return;
  }
  const d = new FormData(f);
  const body = `${d.get("msg")}\n\nFrom: ${d.get("name")} (${d.get("email")})`;
  location.href = `mailto:amrmarei111@gmail.com?subject=${encodeURIComponent("Project inquiry from " + d.get("name"))}&body=${encodeURIComponent(body)}`;
  msg.textContent = "Opening your email app. If nothing opens, email me directly at amrmarei111@gmail.com.";
});
