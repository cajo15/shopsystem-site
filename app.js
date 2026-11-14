
const resources = [
  {
    title: "Editorial Photo Collection",
    category: "ASSETS",
    description: "A visual collection of atmospheric editorial photography.",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900",
    number: "001",
    type: "IMAGE ARCHIVE"
  },
  {
    title: "Minimal Typography",
    category: "FONTS",
    description: "Typographic references, lettering and graphic compositions.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=900",
    number: "002",
    type: "TYPE STUDY"
  },
  {
    title: "Everyday Objects",
    category: "OBJECTS",
    description: "Objects, forms, materials and still-life references.",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=900",
    number: "003",
    type: "OBJECT STUDY"
  },
  {
    title: "Art Direction References",
    category: "INSPIRATION",
    description: "A collection of visual ideas and art direction references.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900",
    number: "004",
    type: "VISUAL RESEARCH"
  },
  {
    title: "Graphic Inspiration",
    category: "ASSETS",
    description: "Graphic design, color, composition and visual experiments.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900",
    number: "005",
    type: "DESIGN ARCHIVE"
  },
  {
    title: "Stationery Objects",
    category: "MOCKUPS",
    description: "Printed matter, paper goods and stationery references.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900",
    number: "006",
    type: "MOCKUP"
  },
  {
    title: "Material Studies",
    category: "INSPIRATION",
    description: "Textures, surfaces, tactile details and material research.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900",
    number: "007",
    type: "MATERIAL ARCHIVE"
  },
  {
    title: "Digital Workspace",
    category: "TOOLS",
    description: "Useful tools and resources for creative workflows.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    number: "008",
    type: "DIGITAL TOOLS"
  },
  {
    title: "Color & Composition",
    category: "ASSETS",
    description: "Color palettes and visual compositions for inspiration.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    number: "009",
    type: "VISUAL RESEARCH"
  },
  {
    title: "Independent Publishing",
    category: "MOCKUPS",
    description: "Books, magazines and printed editorial objects.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=900",
    number: "010",
    type: "PRINT REFERENCE"
  },
  {
    title: "Visual Experiments",
    category: "INSPIRATION",
    description: "Experimental forms, imagery and unexpected combinations.",
    image: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?w=900",
    number: "011",
    type: "EXPERIMENTAL"
  },
  {
    title: "Creative Studio",
    category: "TOOLS",
    description: "Spaces, processes and tools for creative practice.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900",
    number: "012",
    type: "STUDIO NOTES"
  }
];

const grid = document.getElementById("resource-grid");
const count = document.getElementById("resource-count");
const searchInput = document.getElementById("resource-search");
const emptyState = document.getElementById("empty-state");
const clearSearch = document.getElementById("clear-search");

const filterToggle = document.getElementById("filter-toggle");
const menuToggle = document.getElementById("menu-toggle");

const filterPanel = document.getElementById("filter-panel");
const menuPanel = document.getElementById("menu-panel");
const backdrop = document.getElementById("overlay-backdrop");

let activeCategory = "ALL";
let searchTerm = "";
let resizeFrame = null;

/* RESOURCE CARDS */

function createCard(resource) {
  const card = document.createElement("article");
  card.className = "resource-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "card-image-wrap";

  const image = document.createElement("img");
  image.className = "card-image";
  image.src = resource.image;
  image.alt = resource.title;
  image.loading = "lazy";
  image.decoding = "async";

  const number = document.createElement("span");
  number.className = "card-number";
  number.textContent = resource.number;

  imageWrap.append(image, number);

  const info = document.createElement("div");
  info.className = "card-info";

  const category = document.createElement("span");
  category.className = "card-category";
  category.textContent = resource.category;

  const title = document.createElement("h2");
  title.className = "card-title";
  title.textContent = resource.title;

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = resource.description;

  const bottom = document.createElement("div");
  bottom.className = "card-bottom";

  const type = document.createElement("span");
  type.textContent = resource.type;

  const arrow = document.createElement("span");
  arrow.className = "card-arrow";
  arrow.textContent = "↗";

  bottom.append(type, arrow);
  info.append(category, title, description, bottom);
  card.append(imageWrap, info);

  image.addEventListener("load", scheduleMasonry);
  image.addEventListener("error", scheduleMasonry);

  return card;
}

/* FILTERING */

function getFilteredResources() {
  return resources.filter(resource => {
    const matchesCategory =
      activeCategory === "ALL" ||
      resource.category === activeCategory;

    const searchableText = [
      resource.title,
      resource.category,
      resource.description,
      resource.type
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });
}

function renderResources() {
  const filtered = getFilteredResources();

  grid.replaceChildren();

  filtered.forEach(resource => {
    grid.appendChild(createCard(resource));
  });

  count.textContent =
    `${String(filtered.length).padStart(2, "0")} ITEMS`;

  emptyState.hidden = filtered.length !== 0;

  scheduleMasonry();
}

/* MASONRY LAYOUT */


function layoutMasonry() {
  const cards = Array.from(grid.querySelectorAll(".resource-card"));

  if (!cards.length) {
    grid.style.height = "0px";
    return;
  }

  const columns = getColumnCount();
  const gap = window.innerWidth <= 600
    ? 9
    : window.innerWidth <= 1000
      ? 12
      : window.innerWidth >= 1500
        ? 16
        : 13;

  // Use the actual inner content width, excluding horizontal padding.
  const styles = window.getComputedStyle(grid);
  const paddingLeft = parseFloat(styles.paddingLeft) || 0;
  const paddingRight = parseFloat(styles.paddingRight) || 0;

  const contentWidth =
    grid.clientWidth - paddingLeft - paddingRight;

  const columnWidth =
    (contentWidth - gap * (columns - 1)) / columns;

  const columnHeights = Array(columns).fill(0);

  cards.forEach(card => {
    card.style.width = `${columnWidth}px`;
    card.style.left = `${paddingLeft}px`;
    card.style.top = "0px";
  });

  cards.forEach(card => {
    const shortestColumn = columnHeights.indexOf(
      Math.min(...columnHeights)
    );

    const x = shortestColumn * (columnWidth + gap);
    const y = columnHeights[shortestColumn];

    card.style.transform = `translate(${x}px, ${y}px)`;
    card.classList.add("is-positioned");

    columnHeights[shortestColumn] =
      y + card.offsetHeight + gap;
  });

  grid.style.height =
    `${Math.max(...columnHeights) - gap}px`;
}

/* SEARCH */

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderResources();
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  activeCategory = "ALL";
  updateActiveFilter();
  renderResources();
});

/* CATEGORY FILTERS */

function updateActiveFilter() {
  document.querySelectorAll(".filter-option").forEach(button => {
    const isActive = button.dataset.category === activeCategory;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll(".filter-option").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    updateActiveFilter();
    renderResources();
    closePanels();
  });
});

/* PANELS */

function closePanels() {
  filterPanel.classList.remove("visible");
  menuPanel.classList.remove("visible");
  backdrop.classList.remove("visible");

  filterPanel.setAttribute("aria-hidden", "true");
  menuPanel.setAttribute("aria-hidden", "true");

  filterToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-expanded", "false");

  document.body.classList.remove("panel-open");
}

function openPanel(panel) {
  closePanels();

  panel.classList.add("visible");
  backdrop.classList.add("visible");

  panel.setAttribute("aria-hidden", "false");
  document.body.classList.add("panel-open");

  if (panel === filterPanel) {
    filterToggle.setAttribute("aria-expanded", "true");
  }

  if (panel === menuPanel) {
    menuToggle.setAttribute("aria-expanded", "true");
  }
}

filterToggle.addEventListener("click", () => {
  const isOpen = filterPanel.classList.contains("visible");

  if (isOpen) {
    closePanels();
  } else {
    openPanel(filterPanel);
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuPanel.classList.contains("visible");

  if (isOpen) {
    closePanels();
  } else {
    openPanel(menuPanel);
  }
});

backdrop.addEventListener("click", closePanels);

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", closePanels);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closePanels();
  }
});

/* MENU SHORTCUT */

document.getElementById("menu-all").addEventListener("click", event => {
  event.preventDefault();

  activeCategory = "ALL";
  searchTerm = "";
  searchInput.value = "";

  updateActiveFilter();
  renderResources();
  closePanels();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* RESPONSIVE REFRESH */

window.addEventListener("resize", scheduleMasonry);

window.addEventListener("load", scheduleMasonry);

/* INITIALIZE */

updateActiveFilter();
renderResources();
