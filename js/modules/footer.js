/**
 * FOOTER MODULE
 * Generates the full footer with brand info, links, and contact details.
 */
export function initFooter(footerData) {
  const footer = document.querySelector(".footer");
  if (!footer) return;
  footer.innerHTML = "";

  const footerWrapper = document.createElement("div");
  footerWrapper.className = "footer-wrapper";

  // Brand Card
  const brandCard = document.createElement("div");
  brandCard.className = "brand-card";
  const formattedTagline = footerData.brand.tagline.replace(/\{(.*?)\}/g, `<span class="highlight-text">$1</span>`);
  brandCard.innerHTML = `<img class="brand-name" src="${footerData.brand.logo}" /><div class="brand-tagline">${formattedTagline}</div>`;
  footerWrapper.appendChild(brandCard);

  // Footer Grid
  const footerGrid = document.createElement("div");
  footerGrid.className = "footer-grid";

  footerData.columns.forEach(col => {
    const column = document.createElement("div");
    column.className = "footer-column";
    const title = document.createElement("h4");
    title.textContent = col.title;
    column.appendChild(title);
    col.links.forEach(link => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = link;
      column.appendChild(a);
    });
    footerGrid.appendChild(column);
  });

  // Contact Column
  const contactCol = document.createElement("div");
  contactCol.className = "footer-column";
  contactCol.innerHTML = `
    <h4>Contact</h4>
    <p><img src="./assets/icons/MapPinLine.svg" /> ${footerData.contact.address}</p>
    <p><img src="./assets/icons/Phone.svg" />${footerData.contact.phone}</p>
    <p><img src="./assets/icons/EnvelopeSimple.svg" />${footerData.contact.email}</p>
    <p><img src="./assets/icons/Headset.svg" />${footerData.contact.support}</p>
    <div class="socials">
      <span><img src="./assets/icons/LinkedIn.svg" /></span>
      <span><img src="./assets/icons/Socialicons.svg" /></span>
      <span><img src="./assets/icons/Instagram.svg" /></span>
    </div>
  `;
  footerGrid.appendChild(contactCol);
  footerWrapper.appendChild(footerGrid);

  // Bottom Bar
  const bottomBar = document.createElement("div");
  bottomBar.className = "footer-bottom";
  bottomBar.innerHTML = `
    <div class="footer-content">
      <div>Copyright © 2025 Meera Industries Limited | All Rights Reserved</div>
      <div class="bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Sitemap</a>
      </div>
    </div> 
  `;
  footerWrapper.appendChild(bottomBar);
  footer.appendChild(footerWrapper);
}
