/**
 * PORTFOLIO MODULE
 * Displays product categories and expert consultation CTA.
 */
export function initPortfolio(portfolioData) {
  const portfolioContainer = document.querySelector(".portfolio");
  if (!portfolioContainer) return;
  portfolioContainer.innerHTML = "";

  const portfolioWrapper = document.createElement("div");
  portfolioWrapper.className = "portfolio-wrapper";

  const portfolioTitle = document.createElement("h2");
  portfolioTitle.textContent = portfolioData.title;
  const portfolioSubtitle = document.createElement("p");
  portfolioSubtitle.textContent = portfolioData.subtitle;

  const portfolioCardsContainer = document.createElement("div");
  portfolioCardsContainer.className = "cards";

  portfolioData.cards.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    cardEl.innerHTML = `
     <div class="portfolio-header">
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
      </div>
      <div>
      <img src="${card.img}" alt="${card.title}" loading="lazy" />
      <button>Learn More</button>
      </div>
    `;
    portfolioCardsContainer.appendChild(cardEl);
  });

  const portfolioCta = document.createElement("div");
  portfolioCta.className = "cta";
  portfolioCta.innerHTML = `
    <div class="expert-container">
      <h4>Didn't find what you're looking for?</h4>
      <p>Talk to our experts for custom solutions and tailored guidance.</p>
    </div>
    <button class="expert-btn"><img src="./assets/icons/PhoneCall.svg" width='20px' height='20px' /> Talk to an Expert</button>
  `;

  portfolioWrapper.append(portfolioTitle, portfolioSubtitle, portfolioCardsContainer, portfolioCta);
  portfolioContainer.appendChild(portfolioWrapper);
}
