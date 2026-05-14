/**
 * CAROUSEL MODULE
 * Handles the image carousel with zoom effect in the hero section.
 */
export function initCarousel(images) {
  const carousalContainer = document.querySelector(".carousal");
  if (!carousalContainer) return;

  let currentCarouselIndex = 0;

  const carousel = document.createElement("div");
  carousel.className = "carousel";
  
  const zoomLens = document.createElement("div");
  zoomLens.className = "zoom-lens";

  const mainImageWrapper = document.createElement("div");
  mainImageWrapper.className = "main-image";
  mainImageWrapper.appendChild(zoomLens);

  const mainImage = document.createElement("img");
  mainImage.src = images[0];
  mainImage.id = "currentImage";

  const zoomPreview = document.createElement("div");
  zoomPreview.className = "zoom-preview";

  const carouselPrevBtn = document.createElement("button");
  carouselPrevBtn.className = "nav prev";
  carouselPrevBtn.innerHTML = `<img src="./assets/icons/ArrowLeft.svg" />`;
  const carouselNextBtn = document.createElement("button");
  carouselNextBtn.className = "nav next";
  carouselNextBtn.innerHTML = `<img src="./assets/icons/ArrowRight.svg" />`;

  // Zoom Logic
  mainImage.addEventListener("mouseenter", () => {
    zoomPreview.style.display = "block";
    zoomLens.style.display = "block";
    zoomPreview.style.backgroundImage = `url(${mainImage.src})`;
  });
  mainImage.addEventListener("mouseleave", () => {
    zoomPreview.style.display = "none";
    zoomLens.style.display = "none";
  });

  mainImage.addEventListener("mousemove", (e) => {
    const rect = mainImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const lensWidth = zoomLens.offsetWidth;
    const lensHeight = zoomLens.offsetHeight;

    let lensX = x - lensWidth / 2;
    let lensY = y - lensHeight / 2;

    if (lensX < 0) lensX = 0;
    if (lensY < 0) lensY = 0;
    if (lensX > rect.width - lensWidth) lensX = rect.width - lensWidth;
    if (lensY > rect.height - lensHeight) lensY = rect.height - lensHeight;

    zoomLens.style.left = lensX + "px";
    zoomLens.style.top = lensY + "px";

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    zoomPreview.style.backgroundPosition = `${percentX}% ${percentY}%`;
  });

  mainImageWrapper.append(mainImage, zoomPreview, carouselPrevBtn, carouselNextBtn);

  const thumbnailsWrapper = document.createElement("div");
  thumbnailsWrapper.className = "thumbnails";
  images.forEach((src, index) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.className = "thumb";
    if (index === 0) thumb.classList.add("active");
    thumb.addEventListener("click", () => setCarouselImage(index));
    thumbnailsWrapper.appendChild(thumb);
  });

  carousel.append(mainImageWrapper, thumbnailsWrapper);
  carousalContainer.innerHTML = "";
  carousalContainer.appendChild(carousel);

  function setCarouselImage(index) {
    currentCarouselIndex = index;
    mainImage.src = images[index];
    document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".thumb")[index].classList.add("active");
  }

  carouselNextBtn.addEventListener("click", () => {
    currentCarouselIndex = (currentCarouselIndex + 1) % images.length;
    setCarouselImage(currentCarouselIndex);
  });
  carouselPrevBtn.addEventListener("click", () => {
    currentCarouselIndex = (currentCarouselIndex - 1 + images.length) % images.length;
    setCarouselImage(currentCarouselIndex);
  });
}
