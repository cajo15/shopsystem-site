
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
    ? filtered.map((resource, index) => `
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
}

search.addEventListener("input", renderResources);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    renderResources();
  });
});

renderResources();




// OPEN AND CLOSE PANELS

const filterToggle = document.querySelector("#filter-toggle");
const menuToggle = document.querySelector("#menu-toggle");
const filterPanel = document.querySelector("#filter-panel");
const menuPanel = document.querySelector("#menu-panel");

function closePanels() {
  filterPanel.classList.remove("visible");
  menuPanel.classList.remove("visible");
}

filterToggle.addEventListener("click", () => {
  menuPanel.classList.remove("visible");
  filterPanel.classList.toggle("visible");
});

menuToggle.addEventListener("click", () => {
  filterPanel.classList.remove("visible");
  menuPanel.classList.toggle("visible");
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

// ESCAPE KEY CLOSES PANELS

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closePanels();
});

