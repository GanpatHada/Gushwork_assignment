/**
 * GENERIC MODAL CREATOR
 * Utility function to create and display a modal with custom content.
 */
export function createModal({ title = "", content = "", footer = "" }) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = "modal";

  const closeBtn = document.createElement("span");
  closeBtn.className = "modal-close";
  closeBtn.innerHTML = "&times;";

  const heading = document.createElement("h2");
  heading.textContent = title;
  heading.className = "modal-header";

  const body = document.createElement("div");
  body.innerHTML = content;
  body.className = "modal-content";

  const modalfooter = document.createElement("div");
  modalfooter.innerHTML = footer;
  modalfooter.className = "modal-footer";

  modal.append(closeBtn, heading, body, modalfooter);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  setTimeout(() => overlay.classList.add("active"), 10);

  function closeModal() {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 300);
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  return overlay;
}
