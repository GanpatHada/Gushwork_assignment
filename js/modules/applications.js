/**
 * APPLICATIONS MODULE
 * Handles the horizontal slider for industry applications.
 */
export function initApplications(appData) {
  const appContainerWrapper = document.querySelector(".applications");
  if (!appContainerWrapper) return;
  appContainerWrapper.innerHTML = "";

  const appContainer = document.createElement("div");
  appContainer.className = "app-container";

  const appsHeader = document.createElement("div");
  appsHeader.className = "app-header-container";
  const appsContent = document.createElement("div");
  appsContent.className = "apps-content";
  const title = document.createElement("h3");
  title.textContent = appData.title;
  const content = document.createElement("p");
  content.textContent = appData.content;
  appsContent.append(title, content);

  const arrowContainer = document.createElement("div");
  arrowContainer.className = "arrow-container";
  const arrowPrevBtn = document.createElement("button");
  arrowPrevBtn.innerHTML = `<img src="./assets/icons/ArrowLeft.svg" width="24" height="24">`;
  const arrowNextBtn = document.createElement("button");
  arrowNextBtn.innerHTML = `<img src="./assets/icons/ArrowRight.svg" width="24" height="24">`;
  arrowContainer.append(arrowPrevBtn, arrowNextBtn);

  appsHeader.append(appsContent, arrowContainer);
  appContainer.appendChild(appsHeader);

  const appList = document.createElement("div");
  appList.className = "app-list";
  appData.data.forEach(item => {
    const appItem = document.createElement("div");
    appItem.className = "app-item";
    const img = document.createElement("img");
    img.src = item.img;
    img.loading = "lazy";
    img.className = "app-images";

    const contentBox = document.createElement("div");
    contentBox.className = "carousal-content";
    const itemTitle = document.createElement("h4");
    itemTitle.textContent = item.title;
    const itemText = document.createElement("p");
    itemText.textContent = item.content;

    contentBox.append(itemTitle, itemText);
    appItem.append(img, contentBox);
    appList.appendChild(appItem);
  });

  appContainer.appendChild(appList);
  appContainerWrapper.appendChild(appContainer);

  arrowNextBtn.addEventListener("click", () => {
    const cardWidth = appList.querySelector(".app-item").offsetWidth + 20;
    appList.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  arrowPrevBtn.addEventListener("click", () => {
    const cardWidth = appList.querySelector(".app-item").offsetWidth + 20;
    appList.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });
}
