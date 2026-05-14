# Gushwork Project - Premium HDPE Pipes & Coils

**[Live Demo](https://ganpathada.github.io/Gushwork_assignment/)** 

![Project Demo](./assets/images/demo.gif)



A modern, responsive, and modular landing page for a manufacturing company specializing in HDPE pipes, fittings, and industrial machinery. The project follows a component-based architecture with dynamic data management.

## 🚀 Key Features

- **Modular Architecture**: Built using ES6 JavaScript modules for clean, maintainable, and reusable code.
- **JSON-Driven Content**: All UI text and data are fetched from a central `data.json` file, making content updates seamless.
- **Interactive UI Components**:
  - **Dynamic Breadcrumbs**: Automatically generated navigation paths.
  - **Product Carousel**: Interactive image slider with a custom hover-zoom effect.
  - **Accordion FAQ**: Interactive frequently asked questions section.
  - **Manufacturing Process Tabs**: Tabbed interface to showcase production steps.
  - **Horizontal Applications Slider**: Smooth scrolling industry use-cases.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Sticky Navigation**: Smart navbar that adapts on scroll.
- **Surgical Modals**: Lightweight, reusable modal system for forms and brochures.

## 📁 File Structure

```text
Gushwork/
├── assets/                 # Static assets
│   ├── icons/              # SVG icons for features, social, and badges
│   └── images/             # Product and lifestyle images
├── js/
│   └── modules/            # UI Components (ES6 Modules)
│       ├── applications.js # Industry applications slider
│       ├── banner.js       # Partner logos logic
│       ├── breadcrumb.js   # Dynamic navigation path
│       ├── carousel.js     # Hero image zoom/slider
│       ├── contact.js      # Contact form rendering
│       ├── faq.js          # Accordion logic
│       ├── featureCards.js # Benefit cards grid
│       ├── footer.js       # Dynamic footer generation
│       ├── navbar.js       # Sticky scroll behavior
│       ├── portfolio.js    # Product category showcase
│       ├── process.js      # Manufacturing tabs
│       ├── productDetails.js# Pricing and feature logic
│       ├── resources.js    # Downloadable files logic
│       ├── specifications.js# Technical table logic
│       ├── testimonials.js # Customer reviews logic
│       └── utils.js        # Shared utilities (e.g., Modals)
├── index.html              # Main HTML entry point (Documented sections)
├── styles.css              # Global styling and component layout
├── script.js               # App entry point (Data fetching & initialization)
└── data.json               # Centralized data store for all content
```

## 🛠️ Technology Stack

- **HTML5**: Semantic structure for SEO and accessibility.
- **Vanilla CSS3**: Custom styles without heavy framework overhead.
- **Vanilla JavaScript (ES6+)**: Modular logic and asynchronous data fetching.
- **JSON**: Decoupled content management.

## ⚙️ Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GanpatHada/Gushwork_assignment.git
   ```

2. **Serve the project**:
   Because the project uses ES6 Modules and `fetch()` for `data.json`, it must be run on a local server (not via `file://` protocol).
   - Use VS Code **Live Server** extension.
   - Or use Python: `python -m http.server`
   - Or use Node: `npx serve`

3. **Navigate to the browser**:
   Open `http://localhost:<port>` to view the application.

## 📝 Maintenance

To update website content (text, prices, features, or images), modify the `Gushwork/data.json` file. The changes will automatically reflect across the UI upon refresh.
