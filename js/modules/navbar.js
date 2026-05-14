/**
 * NAVBAR MODULE
 * Handles the sticky behavior of the navigation bar.
 */
export function initNavbar() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const firstFold = window.innerHeight;

    if (scrollY > firstFold) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}
