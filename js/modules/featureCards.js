import { createModal } from './utils.js';

/**
 * FEATURE CARDS MODULE
 * Displays product benefits in a card-based grid.
 */
export function initFeatureCards(cardsData) {
  const cardsContainerWrapper = document.querySelector(".features-cards");
  if (!cardsContainerWrapper) return;
  cardsContainerWrapper.innerHTML = "";

  const cardsContainer = document.createElement("div");
  cardsContainer.className = "cards container";

  const cardDetails = document.createElement("div");
  cardDetails.className = 'card-details';
  const cardsTitle = document.createElement("h3");
  cardsTitle.textContent = cardsData.title;
  const cardsSubTitle = document.createElement("p");
  cardsSubTitle.textContent = cardsData.subTittle;
  cardDetails.append(cardsTitle, cardsSubTitle);
  cardsContainer.appendChild(cardDetails);

  const cardsList = document.createElement("div");
  cardsList.className = "card-container";
  cardsData.data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.icon}" alt="" loading="lazy">
      <p>${item.title}</p>
      <p>${item.content}</p>
    `;
    cardsList.appendChild(card);
  });
  cardsContainer.appendChild(cardsList);

  const ctaButton = document.createElement("button");
  ctaButton.className = `request-demo ${cardsData.cta.type}`;
  ctaButton.textContent = cardsData.cta.label;
  ctaButton.addEventListener("click", () => {
    createModal({
      title: "Request a call back",
      content: `
        <input placeholder="Full Name" style="width:100%;padding:10px;margin:10px 0;">
        <input placeholder="Company Name" style="width:100%;padding:10px;margin:10px 0;">
        <input type="email" placeholder="Email Address" style="width:100%;padding:10px;margin:10px 0;">
        <input type="number" placeholder="Contact Number" style="width:100%;padding:10px;margin:10px 0;">
      `,
      footer: `<button style="padding:10px 20px;">Submit Form</button>`
    });
  });
  cardsContainer.appendChild(ctaButton);
  cardsContainerWrapper.appendChild(cardsContainer);
}
