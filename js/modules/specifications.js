import { createModal } from './utils.js';

/**
 * SPECIFICATIONS MODULE
 * Renders the technical specifications table.
 */
export function initSpecifications(specifications) {
  const specsContainerWrapper = document.querySelector(".specifications-container");
  if (!specsContainerWrapper) return;
  specsContainerWrapper.innerHTML = "";

  const specsContainer = document.createElement("div");
  specsContainer.className = "specifications container";

  const specsTitle = document.createElement("h2");
  specsTitle.textContent = specifications.title;
  const specsSubTitle = document.createElement("p");
  specsSubTitle.textContent = specifications.subTitle;
  specsContainer.appendChild(specsTitle);
  specsContainer.appendChild(specsSubTitle);

  const specsList = document.createElement("table");
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Parameter</th>
      <th>Specification</th>
    </tr>
  `;

  const tbody = document.createElement("tbody");
  specifications.data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="label">${item.label}</td>
      <td class="value">${item.value}</td>
    `;
    tbody.appendChild(row);
  });

  const cta = document.createElement("button");
  cta.className = "download-cta";
  cta.textContent = specifications.cta.label;
  cta.addEventListener("click", () => {
    createModal({
      title: "Let us email the entire catalogue to you",
      content: `
        <input type="email" placeholder="Your Email" style="width:100%;padding:10px;margin:10px 0;">
        <input type="number" placeholder="Your Contact Number (Optional)" style="width:100%;padding:10px;margin:10px 0;">
      `,
      footer: `<button style="padding:10px 20px;">Download Brochure</button>`
    });
  });

  const ctaIcon = document.createElement("img");
  ctaIcon.src = specifications.cta.icon;
  ctaIcon.alt = "";
  ctaIcon.loading = "lazy";
  cta.prepend(ctaIcon);

  specsList.appendChild(thead);
  specsList.appendChild(tbody);
  specsContainer.appendChild(specsList);
  specsContainer.appendChild(cta);
  specsContainerWrapper.appendChild(specsContainer);
}
