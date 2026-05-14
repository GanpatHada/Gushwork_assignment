/**
 * TESTIMONIALS MODULE
 * Renders customer reviews.
 */
export function initTestimonials(testimonialData) {
  const testimonialsWrapper = document.querySelector(".testimonials");
  if (!testimonialsWrapper) return;
  testimonialsWrapper.innerHTML = "";

  const testimonialSection = document.createElement("section");
  testimonialSection.className = "testimonial-section";

  const testimonialHeader = document.createElement("div");
  testimonialHeader.className = "testimonial-header";
  testimonialHeader.innerHTML = `<h2>${testimonialData.title}</h2><p>${testimonialData.description}</p>`;
  testimonialSection.appendChild(testimonialHeader);

  const testimonialCardContainer = document.createElement("div");
  testimonialCardContainer.className = "testimonial-cards";

  testimonialData.reviews.forEach(item => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <div>
        <div class="quote"><img src="./assets/icons/Quote.svg" alt="quote" loading="lazy" width="32px" height="24px" /></div>
        <div class="testimonial-details">
          <h4>${item.text}</h4>
          <p>${item.content}</p>
        </div>
      </div>
      <div class="author">
        <div class="avatar"></div>
        <div class="author-content">
          <strong>${item.name}</strong>
          <span class="author-role">${item.role}</span>
        </div>
      </div>
    `;
    testimonialCardContainer.appendChild(card);
  });

  testimonialSection.appendChild(testimonialCardContainer);
  testimonialsWrapper.appendChild(testimonialSection);
}
