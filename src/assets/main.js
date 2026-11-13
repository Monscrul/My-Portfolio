// Progressive enhancement: without JavaScript, navigation remains visible.
document.documentElement.classList.add("js");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
if (toggle && nav) {
  toggle.hidden = false;
  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    toggle.querySelector("span").textContent = "+";
  };
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    toggle.querySelector("span").textContent = open ? "−" : "+";
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      close();
      toggle.focus();
    }
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) close();
  });
  window.matchMedia("(min-width: 641px)").addEventListener("change", close);
}

// Animate a few section-level elements once. Content is never hidden while
// waiting for JavaScript or for the observer, so reading and anchors stay fast.
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
if (
  "IntersectionObserver" in window &&
  "animate" in Element.prototype &&
  !motionPreference.matches
) {
  const activeAnimations = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (motionPreference.matches) continue;
        const animation = entry.target.animate(
          [
            { opacity: 0.65, transform: "translateY(12px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 480, easing: "cubic-bezier(.2,.65,.3,1)" },
        );
        activeAnimations.add(animation);
        animation.addEventListener(
          "finish",
          () => activeAnimations.delete(animation),
          { once: true },
        );
      }
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".project-row, .awards-section, .personal-section")
    .forEach((element) => observer.observe(element));
  motionPreference.addEventListener("change", (event) => {
    if (!event.matches) return;
    observer.disconnect();
    activeAnimations.forEach((animation) => animation.cancel());
    activeAnimations.clear();
  });
}
