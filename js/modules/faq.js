/**
 * FAQ MODULE
 * Accordion-style Frequently Asked Questions.
 */
export function initFAQ(faqData) {
  const faqContainerWrapper = document.querySelector(".faq");
  if (!faqContainerWrapper) return;
  faqContainerWrapper.innerHTML = "";

  const faqSection = document.createElement("div");
  faqSection.className = "faq-section";

  const faqContainer = document.createElement("div");
  faqContainer.className = "faq-container container";

  const faqTitle = document.createElement("h2");
  faqTitle.className = "faq-title";
  const words = faqData.title.split(" ");
  faqTitle.innerHTML = `<span class="highlight">${words.shift()}</span> ${words.join(" ")}`;
  faqContainer.appendChild(faqTitle);

  faqData.data.forEach(item => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    const question = document.createElement("div");
    question.className = "faq-question";
    const questionText = document.createElement("span");
    questionText.textContent = item.label;

    const arrow = document.createElement("img");
    arrow.className = "faq-arrow";
    arrow.src = "./assets/icons/ChevronDown.svg";

    question.append(questionText, arrow);

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.textContent = item.value;

    question.addEventListener("click", () => {
      arrow.classList.toggle("active");
      answer.classList.toggle("active");
    });

    faqItem.append(question, answer);
    faqContainer.appendChild(faqItem);
  });

  const emailContainer = document.createElement("div");
  emailContainer.className = "email-container";
  emailContainer.innerHTML = `
    <div class="email-content">
      <h3>Want us to email the entire catalogue?</h3>
      <p>Enter your email and an expert will share the catalogue with you.</p>
    </div>
    <div class="email-form">
      <input type="email" placeholder="Email Address" />
      <button>Request Catalogue</button>
    </div>
  `;

  faqSection.append(faqContainer, emailContainer);
  faqContainerWrapper.appendChild(faqSection);
}
