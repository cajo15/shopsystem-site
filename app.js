
/* ==========================================
   SHOP SYSTEM™
   RESOURCE ARCHIVE
========================================== */

const resources = [
  {
    number: "001",
    title: "Editorial Photography",
    category: "ASSETS",
    description: "A collection of visual references and imagery.",
    type: "IMAGE COLLECTION",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1000"
  },
  {
    number: "002",
    title: "Typography Studies",
    category: "FONTS",
    description: "Letterforms, typography and graphic compositions.",
    type: "TYPE REFERENCE",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1000"
  },
  {
    number: "003",
    title: "Everyday Objects",
    category: "OBJECTS",
    description: "Objects, materials and still-life references.",
    type: "OBJECT ARCHIVE",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=1000"
  },
  {
    number: "004",
    title: "Art Direction",
    category: "INSPIRATION",
    description: "Visual research and creative direction.",
    type: "VISUAL RESEARCH",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1000"
  },
  {
    number: "005",
    title: "Graphic Inspiration",
    category: "ASSETS",
    description: "Graphic design and visual experimentation.",
    type: "DESIGN REFERENCES",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000"
  },
  {
    number: "006",
    title: "Stationery Mockups",
    category: "MOCKUPS",
    description: "Printed matter and stationery references.",
    type: "MOCKUP COLLECTION",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000"
  },
  {
    number: "007",
    title: "Material Research",
    category: "INSPIRATION",
    description: "Textures, surfaces and material studies.",
    type: "MATERIAL STUDY",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000"
  },
  {
    number: "008",
    title: "Creative Workspaces",
    category: "TOOLS",
    description: "Creative studios, workspaces and tools.",
    type: "STUDIO REFERENCES",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000"
  },
  {
    number: "009",
    title: "Color & Composition",
    category: "ASSETS",
    description: "Color palettes and visual compositions.",
    type: "VISUAL ARCHIVE",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000"
  },
  {
    number: "010",
    title: "Independent Publishing",
    category: "MOCKUPS",
    description: "Books, magazines and printed objects.",
    type: "PRINT REFERENCES",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1000"
  },
  {
    number: "011",
    title: "Visual Experiments",
    category: "INSPIRATION",
    description: "Experimental imagery and unexpected forms.",
    type: "EXPERIMENTAL",
    image: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?w=1000"
  },
  {
    number: "012",
    title: "Digital Resources",
    category: "TOOLS",
    description: "Tools and resources for creative workflows.",
    type: "DIGITAL TOOLS",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000"
  }
];


/* ==========================================
   ELEMENTS
========================================== */

const grid = document.getElementById("resource-grid");
const count = document.getElementById("resource-count");
const searchInput = document.getElementById("resource-search");

const emptyState = document.getElementById("empty-state");
const clearSearch = document.getElementById("clear-search");

const filterToggle = document.getElementById("filter-toggle");
const menuToggle = document.getElementById("menu-toggle");

const filterPanel = document.getElementById("filter-panel");
const menuPanel = document.getElementById("menu-panel");

const backdrop = document.getElementById("panel-backdrop");


/* ==========================================
   STATE
========================================== */

let activeCategory = "ALL";
let searchTerm = "";

let layoutFrame = null;


/* ==========================================
   CREATE RESOURCE CARD
========================================== */

function createCard(resource) {
  const card = document.createElement("article");
  card.className = "resource-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "card-image-wrap";

  const image = document.createElement("img");

  image.className = "card-image";
  image.src = resource.image;
  image.alt = resource.title;

  // Load images immediately so masonry can measure
  // every card before calculating its position.
  image.loading = "eager";
  image.decoding = "async";

  image.addEventListener("load", scheduleMasonry);
  image.addEventListener("error", scheduleMasonry);

  imageWrap.appendChild(image);

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

  return card;
}


/* ==========================================
   WAIT FOR ALL IMAGES
========================================== */

async function waitForImages() {
  const images = Array.from(grid.querySelectorAll(".card-image"));

  await Promise.all(
    images.map(image => {
      return new Promise(resolve => {
        if (image.complete) {
          resolve();
          return;
        }

        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
      });
    })
  );

  // Allow the browser to finish decoding image dimensions.
  await Promise.all(
    images.map(image => {
      if (typeof image.decode !== "function") {
        return Promise.resolve();
      }

      return image.decode().catch(() => {});
    })
  );
}


/* ==========================================
   FILTER RESOURCES
========================================== */

function getFilteredResources() {
  return resources.filter(resource => {
    const matchesCategory =
      activeCategory === "ALL" ||
      resource.category === activeCategory;

    const searchableContent = [
      resource.title,
      resource.category,
      resource.description,
      resource.type
    ].join(" ").toLowerCase();

    const matchesSearch =
      searchableContent.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });
}


/* ==========================================
   RENDER GRID
========================================== */

async function renderResources() {
  const filtered = getFilteredResources();

  grid.replaceChildren();
  grid.style.height = "0px";

  filtered.forEach(resource => {
    grid.appendChild(createCard(resource));
  });

  count.textContent =
    `${String(filtered.length).padStart(2, "0")} RESOURCES`;

  emptyState.hidden = filtered.length > 0;

  await waitForImages();

  scheduleMasonry();
}


/* ==========================================
   MASONRY LAYOUT
========================================== */

function getColumnCount() {
  if (window.innerWidth <= 600) return 2;
  if (window.innerWidth <= 1000) return 3;
  return 5;
}


function getGridGap() {
  if (window.innerWidth <= 600) return 9;
  if (window.innerWidth <= 1000) return 11;
  return 12;
}


function layoutMasonry() {
  const cards = Array.from(
    grid.querySelectorAll(".resource-card")
  );

  if (!cards.length) {
    grid.style.height = "0px";
    return;
  }

  const columns = getColumnCount();
  const gap = getGridGap();

  const gutter =
    parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--gutter")
    ) || 14;

  const gridWidth = grid.clientWidth;

  if (!gridWidth) return;

  const availableWidth = gridWidth - gutter * 2;

  const columnWidth =
    (availableWidth - gap * (columns - 1)) / columns;

  const columnHeights = Array(columns).fill(0);

  // Set all card widths before measuring their heights.
  cards.forEach(card => {
    card.style.position = "absolute";
    card.style.width = `${columnWidth}px`;
    card.style.left = `${gutter}px`;
    card.style.top = "0px";
    card.style.transform = "none";
  });

  // Force the browser to calculate the new dimensions.
  grid.getBoundingClientRect();

  // Place each card in the currently shortest column.
  cards.forEach(card => {
    const shortestColumn = columnHeights.indexOf(
      Math.min(...columnHeights)
    );

    const x = shortestColumn * (columnWidth + gap);
    const y = columnHeights[shortestColumn];

    card.style.transform = `translate(${x}px, ${y}px)`;

    card.classList.add("is-positioned");

    columnHeights[shortestColumn] =
      y + card.getBoundingClientRect().height + gap;
  });

  const tallestColumn = Math.max(...columnHeights);

  grid.style.height = `${Math.max(0, tallestColumn - gap)}px`;
}


function scheduleMasonry() {
  if (layoutFrame) {
    cancelAnimationFrame(layoutFrame);
  }

  layoutFrame = requestAnimationFrame(() => {
    layoutMasonry();
    layoutFrame = null;
  });
}


/* ==========================================
   SEARCH
========================================== */

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderResources();
});


clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  activeCategory = "ALL";

  updateActiveFilters();
  renderResources();
});


/* ==========================================
   CATEGORY FILTERS
========================================== */

function updateActiveFilters() {
  document.querySelectorAll(".filter-option").forEach(button => {
    const active =
      button.dataset.category === activeCategory;

    button.classList.toggle("active", active);

    button.setAttribute(
      "aria-pressed",
      String(active)
    );
  });
}


document.querySelectorAll(".filter-option").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    updateActiveFilters();
    renderResources();
    closePanels();
  });
});


/* ==========================================
   PANELS
========================================== */

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
  if (filterPanel.classList.contains("visible")) {
    closePanels();
  } else {
    openPanel(filterPanel);
  }
});


menuToggle.addEventListener("click", () => {
  if (menuPanel.classList.contains("visible")) {
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


/* ==========================================
   MENU HOME
========================================== */

document.getElementById("menu-home").addEventListener("click", event => {
  event.preventDefault();

  activeCategory = "ALL";
  searchTerm = "";

  searchInput.value = "";

  updateActiveFilters();
  renderResources();
  closePanels();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* ==========================================
   RESPONSIVE LAYOUT
========================================== */

window.addEventListener("resize", scheduleMasonry);

window.addEventListener("load", scheduleMasonry);


/* ==========================================
   INITIALIZE
========================================== */

updateActiveFilters();
renderResources();
