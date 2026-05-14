/**
 * BREADCRUMBS MODULE
 * Dynamically generates the navigation path at the top of the page.
 */
export function initBreadcrumbs(items) {
  const breadCrumbsContainer = document.getElementById("breadcrumb");
  if (!breadCrumbsContainer) return;

  breadCrumbsContainer.innerHTML = "";

  items.forEach((item, index) => {
    // Add a separator icon between breadcrumb items
    if (index !== 0) {
      breadCrumbsContainer.innerHTML += `<span class="separator"><img src="./assets/icons/CaretRight.svg"/></span>`;
    }

    // Create links for items with URLs, or just text for the active page
    if (item.url) {
      breadCrumbsContainer.innerHTML += `<a href="${item.url}">${item.label}</a>`;
    } else {
      breadCrumbsContainer.innerHTML += `<span class="active">${item.label}</span>`;
    }
  });
}
