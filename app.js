
const resources = [
  {
    title: "EDITORIAL PHOTO COLLECTION",
    category: "ASSETS",
    creator: "SHOP SYSTEM",
    description: "A curated collection of editorial photography.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900"
  },
  {
    title: "MINIMAL TYPOGRAPHY",
    category: "FONTS",
    creator: "SHOP SYSTEM",
    description: "Typography inspiration for contemporary design.",
    image: "https://images.unsplash.com/photo-1509223197845-458d87318791?w=900"
  },
  {
    title: "OBJECT MOCKUP",
    category: "MOCKUPS",
    creator: "SHOP SYSTEM",
    description: "A minimal product presentation mockup.",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=900"
  },
  {
    title: "ART DIRECTION REFERENCES",
    category: "ASSETS",
    creator: "SHOP SYSTEM",
    description: "Visual references for creative projects.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900"
  },
  {
    title: "GRAPHIC INSPIRATION",
    category: "ASSETS",
    creator: "SHOP SYSTEM",
    description: "A collection of graphic design references.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900"
  },
  {
    title: "STATIONERY MOCKUP",
    category: "MOCKUPS",
    creator: "SHOP SYSTEM",
    description: "A stationery presentation reference.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900"
  }
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="intro">
    <div>
      <h1>DESIGN RESOURCES</h1>
      <p>Independent resources for creative people.</p>
    </div>
    <div class="resource-count">${resources.length} RESOURCES</div>
  </div>

  <div class="toolbar">
    <input id="search" type="search" placeholder="SEARCH RESOURCES..." aria-label="Search resources">
    <div class="filters">
      <button class="filter active" data-category="ALL">ALL</button>
      <button class="filter" data-category="ASSETS">ASSETS</button>
      <button class="filter" data-category="FONTS">FONTS</button>
      <button class="filter" data-category="MOCKUPS">MOCKUPS</button>
    </div>
  </div>

  <section class="resource-grid" id="resource-grid"></section>
`;

const grid = document.querySelector("#resource-grid");
const search = document.querySelector("#search");
const filterButtons = document.querySelectorAll(".filter");

let activeCategory = "ALL";
let layoutFrame = null;

function getColumnCount() {
  if (window.innerWidth <= 600) return 2;
  if (window.innerWidth <= 1000) return 3;
  return 5;
}

function layoutMasonry() {
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".resource-card"));

  if (!cards.length) {
    grid.style.height = "0px";
    return;
  }

  const columns = getColumnCount();
  const gap = window.innerWidth <= 600 ? 10 :
              window.innerWidth <= 1000 ? 12 : 14;

  const gridWidth = grid.clientWidth;
  const cardWidth = (gridWidth - gap * (columns - 1)) / columns;
  const columnHeights = Array(columns).fill(0);

  cards.forEach(card => {
    card.style.width = `${cardWidth}px`;
  });

  cards.forEach(card => {
    let shortestColumn = 0;

    for (let i = 1; i < columns; i++) {
      if (columnHeights[i] < columnHeights[shortestColumn]) {
        shortestColumn = i;
      }
    }

    const left = shortestColumn * (cardWidth + gap);
    const top = columnHeights[shortestColumn];

    card.style.left = `${left}px`;
    card.style.top = `${top}px`;

    columnHeights[shortestColumn] += card.offsetHeight + gap;
  });

  grid.style.height = `${Math.max(...columnHeights)}px`;
}

function scheduleMasonry() {
  if (layoutFrame) cancelAnimationFrame(layoutFrame);

  layoutFrame = requestAnimationFrame(() => {
    layoutMasonry();
    layoutFrame = null;
  });
}

function renderResources() {
  const term = search.value.toLowerCase().trim();

  const filtered = resources.filter(resource => {
    const matchesCategory =
      activeCategory === "ALL" || resource.category === activeCategory;

    const searchableText = [
      resource.title,
      resource.category,
      resource.creator,
      resource.description
    ].join(" ").toLowerCase();

    return matchesCategory && searchableText.includes(term);
  });

  grid.innerHTML = filtered.length
    ? filtered.map(resource => `
      <article class="resource-card">
        <a href="#" class="resource-link" aria-label="View ${resource.title}">
          <div class="resource-image">
            <img src="${resource.image}" alt="${resource.title}" loading="lazy">
          </div>
          <div class="resource-meta">
            <span>${resource.title}</span>
            <span>${resource.category}</span>
          </div>
          <p>${resource.description}</p>
        </a>
      </article>
    `).join("")
    : `<p class="empty-state">NO RESOURCES FOUND.</p>`;

  grid.querySelectorAll("img").forEach(img => {
    img.addEventListener("load", scheduleMasonry);
    img.addEventListener("error", scheduleMasonry);
  });

  scheduleMasonry();
}

search.addEventListener("input", renderResources);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach(item => {
      item.classList.toggle("active", item === button);
    });

    renderResources();
  });
});

// FILTER AND MENU PANELS

const filterToggle = document.querySelector("#filter-toggle");
const menuToggle = document.querySelector("#menu-toggle");
const filterPanel = document.querySelector("#filter-panel");
const menuPanel = document.querySelector("#menu-panel");

function closePanels() {
  filterPanel.classList.remove("visible");
  menuPanel.classList.remove("visible");

  filterToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-expanded", "false");
}

filterToggle.addEventListener("click", () => {
  const shouldOpen = !filterPanel.classList.contains("visible");

  closePanels();

  if (shouldOpen) {
    filterPanel.classList.add("visible");
    filterToggle.setAttribute("aria-expanded", "true");
  }
});

menuToggle.addEventListener("click", () => {
  const shouldOpen = !menuPanel.classList.contains("visible");

  closePanels();

  if (shouldOpen) {
    menuPanel.classList.add("visible");
    menuToggle.setAttribute("aria-expanded", "true");
  }
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", closePanels);
});

// TAXONOMY FILTERS

document.querySelectorAll("[data-taxonomy]").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.taxonomy;

    filterButtons.forEach(item => {
      item.classList.toggle(
        "active",
        item.dataset.category === activeCategory
      );
    });

    closePanels();
    renderResources();
  });
});

// KEYBOARD AND RESIZE

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closePanels();
});

window.addEventListener("resize", scheduleMasonry);

renderResources();
