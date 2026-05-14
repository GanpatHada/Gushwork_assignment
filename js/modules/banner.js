/**
 * BANNER MODULE
 * Renders partner/company logos.
 */
export function initBanner(logos) {
  const container = document.querySelector(".company-logos");
  if (!container) return;
  container.innerHTML = "";

  logos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Company Logo";
    img.loading = "lazy";
    container.appendChild(img);
  });
}
