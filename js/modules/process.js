/**
 * MANUFACTURING PROCESS MODULE
 * Handles interactive tabs for the production process steps.
 */
export function initProcess(processData) {
  const processWrapper = document.querySelector(".process");
  if (!processWrapper) return;
  processWrapper.innerHTML = "";

  const processSection = document.createElement("section");
  processSection.className = "process-section";

  const processHeader = document.createElement("div");
  processHeader.className = "process-header";
  processHeader.innerHTML = `
    <h2>${processData.title}</h2>
    <p>${processData.description}</p>
  `;
  processSection.appendChild(processHeader);

  const processCard = document.createElement("div");
  processCard.className = "process-card";

  const tabsContainer = document.createElement("div");
  tabsContainer.className = "process-tabs";

  const contentContainer = document.createElement("div");
  contentContainer.className = "process-content";

  processData.steps.forEach((step, index) => {
    const tab = document.createElement("button");
    tab.className = "tab";
    tab.textContent = step.name;
    if (index === 0) tab.classList.add("active");
    tabsContainer.appendChild(tab);

    const contentBlock = document.createElement("div");
    contentBlock.className = "process-block";
    if (index !== 0) contentBlock.style.display = "none";
    contentBlock.innerHTML = `
      <div class="content-left">
        <h3>${step.heading}</h3>
        <p>${step.content}</p>
        <ul>${step.features.map(f => `<li>${f}</li>`).join("")}</ul>
      </div>
      <div class="content-right"><img src="${step.image}" alt="${step.name}" loading="lazy"/></div>
    `;
    contentContainer.appendChild(contentBlock);

    tab.addEventListener("click", () => {
      tabsContainer.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      contentContainer.querySelectorAll(".process-block").forEach(block => block.style.display = "none");
      contentBlock.style.display = "grid";
    });
  });

  processCard.append(tabsContainer, contentContainer);
  processSection.appendChild(processCard);
  processWrapper.appendChild(processSection);
}
