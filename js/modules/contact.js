/**
 * CONTACT MODULE
 * Renders the contact form and direct contact info.
 */
export function initContact(contactData) {
  const contactSectionContainer = document.querySelector(".contact-us");
  if (!contactSectionContainer) return;
  contactSectionContainer.innerHTML = "";

  const contactWrapper = document.createElement("div");
  contactWrapper.className = "cta-wrapper";

  const contactLeft = document.createElement("div");
  contactLeft.className = "cta-left";
  contactLeft.innerHTML = `
    <h2>${contactData.title}</h2>
    <p class="cta-desc">${contactData.description}</p>
    <hr />
    <p class="cta-contact">
      For immediate assistance, feel free to give us a direct call us at <strong>${contactData.phone}</strong><br/>. You can also send us a quick email at <a href="mailto:${contactData.email}">${contactData.email}</a>
    </p>
  `;

  const contactRight = document.createElement("div");
  contactRight.className = "cta-form";
  contactRight.innerHTML = `
    <h3>Contact Us Today</h3>
    <input type="text" placeholder="Full Name" />
    <input type="text" placeholder="Company Name" />
    <input type="email" placeholder="Email Address" />
    <div class="phone-group">
      <select><option>+91</option><option>+1</option><option>+44</option></select>
      <input type="tel" placeholder="Phone Number" />
    </div>
    <button>Request Custom Quote</button>
  `;

  contactWrapper.append(contactLeft, contactRight);
  contactSectionContainer.appendChild(contactWrapper);
}
