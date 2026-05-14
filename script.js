/**
 * MAIN ENTRY POINT
 * Fetches data from data.json and initializes all page components.
 */
import { initNavbar } from './js/modules/navbar.js';
import { initBreadcrumbs } from './js/modules/breadcrumb.js';
import { initCarousel } from './js/modules/carousel.js';
import { initProductDetails } from './js/modules/productDetails.js';
import { initBanner } from './js/modules/banner.js';
import { initSpecifications } from './js/modules/specifications.js';
import { initFeatureCards } from './js/modules/featureCards.js';
import { initFAQ } from './js/modules/faq.js';
import { initApplications } from './js/modules/applications.js';
import { initProcess } from './js/modules/process.js';
import { initTestimonials } from './js/modules/testimonials.js';
import { initPortfolio } from './js/modules/portfolio.js';
import { initResources } from './js/modules/resources.js';
import { initContact } from './js/modules/contact.js';
import { initFooter } from './js/modules/footer.js';

async function initApp() {
  try {
    // 1. Fetch external JSON data
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Failed to load data.json');
    const data = await response.json();

    // 2. Initialize UI Components with fetched data
    initNavbar();
    initBreadcrumbs(data.breadcrumbs);
    initCarousel(data.product.carouselImages);
    initProductDetails(data.product);
    initBanner(data.banner.companyLogos);
    initSpecifications(data.specifications);
    initFeatureCards(data.featureCards);
    initFAQ(data.faq);
    initApplications(data.applications);
    initProcess(data.process);
    initTestimonials(data.testimonials);
    initPortfolio(data.portfolio);
    initResources(data.resources);
    initContact(data.contact);
    initFooter(data.footer);

    console.log('App initialized successfully');
  } catch (error) {
    console.error('Initialization error:', error);
  }
}

// Start the application
document.addEventListener('DOMContentLoaded', initApp);
