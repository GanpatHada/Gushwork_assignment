/**
 * RESOURCES MODULE
 * Renders downloadable technical documentation.
 */
export function initResources(resourcesData) {
  const resourcesContainer = document.querySelector(".resources");
  if (!resourcesContainer) return;
  resourcesContainer.innerHTML = "";

  const resourcesWrapper = document.createElement("div");
  resourcesWrapper.className = "resources-wrapper";

  const resourcesTitle = document.createElement("h2");
  resourcesTitle.textContent = resourcesData.title;
  const resourcesSubtitle = document.createElement("p");
  resourcesSubtitle.textContent = resourcesData.subtitle;

  const downloadBox = document.createElement("div");
  downloadBox.className = "download-box";

  resourcesData.files.forEach(file => {
    const row = document.createElement("div");
    row.className = "download-row";
    row.innerHTML = `
      <span class="file-name">${file.name}</span>
      <button class="download-btn">Download PDF <span class="icon"><img src="./assets/icons/DownloadPrimary.svg" width="20px" height="20px" loading="lazy" /></span></button>
    `;
    downloadBox.appendChild(row);
  });

  resourcesWrapper.append(resourcesTitle, resourcesSubtitle, downloadBox);
  resourcesContainer.appendChild(resourcesWrapper);
}
