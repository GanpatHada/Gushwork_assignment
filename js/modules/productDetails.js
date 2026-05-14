/**
 * PRODUCT DETAILS MODULE
 * Handles badges, features, pricing, and CTA buttons in the Hero section.
 */
export function initProductDetails(data) {
  renderBadges(data.badges);
  renderFeatures(data.features);
  renderPricing(data.pricing);
  renderCTAs(data.ctaButtons);
}

function renderBadges(badges) {
  const container = document.querySelector(".badges");
  if (!container) return;
  container.innerHTML = "";

  badges.forEach(badge => {
    const li = document.createElement("li");
    li.className = "badge";

    const img = document.createElement("img");
    img.src = badge.icon;
    img.alt = badge.title;
    img.loading = "lazy";
    const text = document.createTextNode(badge.title);

    li.appendChild(img);
    li.appendChild(text);

    container.appendChild(li);
  });
}

function renderFeatures(features) {
  const container = document.querySelector(".features");
  if (!container) return;
  container.innerHTML = "";

  features.forEach(feature => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="feature">${feature}</span>`;
    container.appendChild(li);
  });
}

function renderPricing(details) {
  const container = document.querySelector(".price-card");
  if (!container) return;
  container.innerHTML = "";

  const priceRange = details.find(d => d.label === "Price Range");
  const shipping = details.find(d => d.label === "Shipping");
  const returns = details.find(d => d.label === "Returns");
  const certifications = details.find(d => d.label === "Certifications");
  
  const priceDetails = document.createElement('div');
  priceDetails.className = "price-details";
  
  const title = document.createElement("p");
  title.className = "price-label";
  title.textContent = priceRange.label;

  const price = document.createElement("h2");
  price.className = "price-value";
  price.textContent = priceRange.value;
  priceDetails.append(title, price);

  const badgeRow = document.createElement("div");
  badgeRow.className = "badge-row";

  [shipping, returns].forEach(item => {
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = `${item.label}: ${item.value}`;
    badgeRow.appendChild(badge);
  });

  const cert = document.createElement("div");
  cert.className = "certifications";
  cert.textContent = `${certifications.label}: ${certifications.value}`;

  container.append(priceDetails, badgeRow, cert);
}

function renderCTAs(ctaButtons) {
  const container = document.querySelector(".cta-buttons");
  if (!container) return;
  container.innerHTML = "";

  ctaButtons.forEach(({ label, type, icon }) => {
    const btn = document.createElement("button");
    btn.className = `cta-button ${type}`;
    btn.textContent = label;

    if (icon) {
      const img = document.createElement("img");
      img.src = icon;
      img.alt = "";
      img.loading = "lazy";
      btn.appendChild(img);
    }

    container.appendChild(btn);
  });
}
