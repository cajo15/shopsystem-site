/* SHOP SYSTEM™ — posts are grouped archive items */

const posts = [

  {
    id: "001",
    category: ["MOCKUPS"],
    title: "PLY / SUPPLY.FAMILY / SIGN / MOCKUP / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400",
        alt: "Minimal architectural sign mockup"
      }
    ],
    action: "DOWNLOAD",
    url: "#"
  },

  {
    id: "002",
    category: ["MOCKUPS"],
    title: "MOCKUP LAB / SUPPLY.FAMILY / SCREEN / MOCKUP / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000",
        alt: "Architectural screen mockup"
      }
    ],
    action: "DOWNLOAD",
    url: "#"
  },

  {
    id: "003",
    category: ["MOCKUPS"],
    title: "MOCKUP LAB / SUPPLY.FAMILY / OUTFIT / MOCKUP / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000",
        alt: "Fashion mockup"
      }
    ],
    action: "DOWNLOAD",
    url: "#"
  },

  {
    id: "004",
    category: ["MOCKUPS"],
    title: "MOCKUP LAB / SUPPLY.FAMILY / IPHONE / MOCKUP / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1000",
        alt: "Phone mockup"
      }
    ],
    action: "DOWNLOAD",
    url: "#"
  },

  {
    id: "005",
    category: ["ASSETS"],
    title: "BACK / SUPPLY.FAMILY / AIRPLANE / MOCKUP / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400",
        alt: "Airplane in the sky"
      }
    ],
    action: "DOWNLOAD",
    url: "#"
  },

  {
    id: "006",
    category: ["MOCKUPS"],
    title: "SHOWCASE MOCKUPS / SUPPLY.FAMILY / BRANDING MOCKUP / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=900",
        alt: "Printed branding mockup"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=900",
        alt: "Book mockup"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=900",
        alt: "Stationery mockup"
      }
    ],
    action: "DOWNLOAD",
    url: "#"
  },

  {
    id: "007",
    category: ["ASSETS"],
    title: "EDITORIAL / IMAGE COLLECTION / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1100",
        alt: "Architecture detail"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1100",
        alt: "Architecture detail"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1100&sat=-30",
        alt: "Architectural material detail"
      }
    ],
    action: "VISIT",
    url: "#"
  },

  {
    id: "008",
    category: ["FONTS"],
    title: "TYPE STUDIES / LETTERFORMS / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200",
        alt: "Typography reference"
      }
    ],
    action: "VISIT",
    url: "#"
  },

  {
    id: "009",
    category: ["ASSETS"],
    title: "OBJECTS / MATERIAL RESEARCH / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=1000",
        alt: "Object still life"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1000",
        alt: "Material still life"
      }
    ],
    action: "DOWNLOAD",
    url: "#"
  },

  {
    id: "010",
    category: ["MOCKUPS"],
    title: "PRINT / INDEPENDENT PUBLISHING / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1000",
        alt: "Book cover mockup"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000",
        alt: "Writing desk"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1000",
        alt: "Printed stationery"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1000",
        alt: "Books"
      }
    ],
    action: "DOWNLOAD",
    url: "#"
  },

  {
    id: "011",
    category: ["ASSETS"],
    title: "VISUAL EXPERIMENTS / 2026",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?w=1100",
        alt: "Visual experiment"
      }
    ],
    action: "VISIT",
    url: "#"
  },

  {
    id: "012",
    category: ["MOCKUPS"],
    title: "MOTION STUDY / VIDEO / 2026",
    media: [
      {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1000",
        alt: "Flower video study"
      }
    ],
    action: "VISIT",
    url: "#"
  }

];


/* ELEMENTS */

const grid = document.querySelector("#resource-grid");
const searchInput = document.querySelector("#resource-search");
const count = document.querySelector("#resource-count");
const emptyState = document.querySelector("#empty-state");

const themeToggle = document.querySelector("#theme-toggle");
const themeMeta = document.querySelector("#theme-color");

const lightbox = document.querySelector("#lightbox");
const stage = lightbox.querySelector(".lightbox-stage");
const counter = lightbox.querySelector(".lightbox-counter");


/* STATE */

let activeCategory = "ALL";

let currentMedia = [];
let currentMediaIndex = 0;

let layoutFrame = 0;
let resizeObserver;


/* THEME */

function setTheme(theme) {

  document.documentElement.dataset.theme = theme;

  try {
    localStorage.setItem("shopsystem-theme", theme);
  } catch (_) {}

  themeToggle.setAttribute(
    "aria-pressed",
    String(theme === "light")
  );

  themeToggle.setAttribute(
    "aria-label",
    theme === "light"
      ? "Switch to dark theme"
      : "Switch to light theme"
  );

  themeMeta.content =
    theme === "light" ? "#ffffff" : "#080808";

}

setTheme(
  document.documentElement.dataset.theme || "dark"
);

themeToggle.addEventListener("click", () => {

  const nextTheme =
    document.documentElement.dataset.theme === "dark"
      ? "light"
      : "dark";

  setTheme(nextTheme);

});


/* CREATE MEDIA */

function createMediaItem(media, post, index) {

  const button = document.createElement("button");

  button.className = "media-item";
  button.type = "button";

  button.setAttribute(
    "aria-label",
    `Open media ${index + 1} from ${post.title}`
  );

  if (media.type === "video") {

    const video = document.createElement("video");

    video.src = media.src;
    video.poster = media.poster || "";
    video.muted = true;
    video.preload = "metadata";
    video.playsInline = true;

    video.setAttribute(
      "aria-label",
      media.alt || post.title
    );

    button.append(video);

    const play = document.createElement("span");

    play.className = "play-mark";
    play.textContent = "▶";

    button.append(play);

  } else {

    const img = document.createElement("img");

    img.src = media.src;
    img.alt = media.alt || post.title;

    img.loading = "lazy";
    img.decoding = "async";

    img.className = "is-pixelated";

    img.addEventListener("load", () => {

      requestAnimationFrame(() => {

        img.classList.remove("is-pixelated");
        img.classList.add("is-loaded");

      });

      scheduleMasonry();

    }, { once: true });

    img.addEventListener(
      "error",
      scheduleMasonry,
      { once: true }
    );

    button.append(img);

  }

  button.addEventListener("click", () => {

    openLightbox(post, index);

  });

  return button;

}


/* CREATE POST */

function createPost(post) {

  const card = document.createElement("article");

  card.className = "resource-card";
  card.dataset.postId = post.id;

  const media = document.createElement("div");

  media.className = "post-media";

  media.dataset.count = String(
    Math.min(post.media.length, 6)
  );

  post.media.forEach((item, i) => {

    media.append(
      createMediaItem(item, post, i)
    );

  });

  const info = document.createElement("div");

  info.className = "card-info";

  const title = document.createElement("h2");

  title.className = "card-meta";

  title.textContent =
    `${post.category.join(" / ")} / ${post.title}`;

  const action = document.createElement("a");

  action.className = "card-action";
  action.textContent = post.action || "VISIT";
  action.href = post.url || "#";

  if (action.href === location.href + "#") {

    action.addEventListener("click", e => {
      e.preventDefault();
    });

  }

  if (/^https?:/.test(action.href)) {

    action.target = "_blank";
    action.rel = "noopener noreferrer";

  }

  info.append(title, action);

  card.append(media, info);

  return card;

}


/* CATEGORY AND SEARCH */

function getVisiblePosts() {

  const term = searchInput.value.trim().toLowerCase();

  return posts.filter(post => {

    const categoryMatch =
      activeCategory === "ALL" ||
      post.category.includes(activeCategory);

    const text =
      `${post.title} ${post.category.join(" ")}`.toLowerCase();

    return categoryMatch && (!term || text.includes(term));

  });

}


/* RENDER */

function render() {

  const visible = getVisiblePosts();

  grid.replaceChildren(
    ...visible.map(createPost)
  );

  count.textContent =
    `${String(visible.length).padStart(2, "0")} POSTS`;

  document.querySelector(
    "#active-category-label"
  ).textContent = activeCategory;

  emptyState.hidden = visible.length > 0;

  scheduleMasonry();

  observeImages();

}


/* MASONRY LAYOUT */

function scheduleMasonry() {

  cancelAnimationFrame(layoutFrame);

  layoutFrame = requestAnimationFrame(
    layoutMasonry
  );

}

function layoutMasonry() {

  const cards = [
    ...grid.querySelectorAll(".resource-card")
  ];

  if (!cards.length) {

    grid.style.height = "0px";
    return;

  }

  const width = grid.clientWidth;

  const mobile =
    matchMedia("(max-width: 520px)").matches;

  const columns = mobile
    ? 2
    : matchMedia("(max-width: 760px)").matches
      ? 3
      : 5;

  const gap = 9;

  const columnWidth =
    (width - gap * (columns - 1)) / columns;

  const heights = Array(columns).fill(0);

  cards.forEach(card => {

    card.style.width = `${columnWidth}px`;

    const shortest =
      heights.indexOf(Math.min(...heights));

    card.style.left =
      `${shortest * (columnWidth + gap)}px`;

    card.style.top =
      `${heights[shortest]}px`;

    heights[shortest] +=
      card.offsetHeight + gap;

  });

  grid.style.height =
    `${Math.max(...heights)}px`;

}


/* IMAGE SIZE OBSERVER */

function observeImages() {

  if (resizeObserver) {
    resizeObserver.disconnect();
  }

  if (!("ResizeObserver" in window)) {
    return;
  }

  resizeObserver = new ResizeObserver(
    scheduleMasonry
  );

  grid.querySelectorAll(".resource-card").forEach(card => {

    resizeObserver.observe(card);

  });

}


/* LIGHTBOX */

function openLightbox(post, index) {

  currentMedia = post.media;
  currentMediaIndex = index;

  lightbox.classList.add("is-open");

  lightbox.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("lightbox-open");

  showLightboxMedia();

}

function showLightboxMedia() {

  const item = currentMedia[currentMediaIndex];

  stage.replaceChildren();

  let element;

  if (item.type === "video") {

    element = document.createElement("video");

    element.src = item.src;
    element.poster = item.poster || "";
    element.controls = true;
    element.autoplay = true;
    element.playsInline = true;

  } else {

    element = document.createElement("img");

    element.src = item.src;
    element.alt = item.alt || "";

  }

  stage.append(element);

  counter.textContent =
    `${String(currentMediaIndex + 1).padStart(2, "0")} / ${String(currentMedia.length).padStart(2, "0")}`;

  lightbox.querySelector(
    ".lightbox-prev"
  ).hidden = currentMedia.length < 2;

  lightbox.querySelector(
    ".lightbox-next"
  ).hidden = currentMedia.length < 2;

}

function closeLightbox() {

  const video = stage.querySelector("video");

  if (video) {
    video.pause();
  }

  lightbox.classList.remove("is-open");

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove("lightbox-open");

  stage.replaceChildren();

}

function stepLightbox(direction) {

  if (!currentMedia.length) {
    return;
  }

  currentMediaIndex =
    (currentMediaIndex + direction + currentMedia.length)
    % currentMedia.length;

  showLightboxMedia();

}


/* LIGHTBOX CONTROLS */

lightbox.querySelector(
  ".lightbox-close"
).addEventListener("click", closeLightbox);

lightbox.querySelector(
  ".lightbox-prev"
).addEventListener("click", () => {
  stepLightbox(-1);
});

lightbox.querySelector(
  ".lightbox-next"
).addEventListener("click", () => {
  stepLightbox(1);
});

lightbox.addEventListener("click", e => {

  if (e.target === lightbox) {
    closeLightbox();
  }

});


/* KEYBOARD CONTROLS */

document.addEventListener("keydown", e => {

  if (!lightbox.classList.contains("is-open")) {
    return;
  }

  if (e.key === "Escape") {
    closeLightbox();
  }

  if (e.key === "ArrowLeft") {
    stepLightbox(-1);
  }

  if (e.key === "ArrowRight") {
    stepLightbox(1);
  }

});


/* CATEGORY BUTTONS */

document.querySelectorAll(
  "[data-category]"
).forEach(button => {

  button.addEventListener("click", () => {

    activeCategory = button.dataset.category;

    document.querySelectorAll(
      ".category-link[data-category]"
    ).forEach(link => {

      link.classList.toggle(
        "is-active",
        link === button
      );

    });

    render();

  });

});


/* SEARCH */

searchInput.addEventListener(
  "input",
  render
);


/* RESIZE */

window.addEventListener(
  "resize",
  scheduleMasonry
);

window.addEventListener(
  "load",
  scheduleMasonry
);


/* INITIALIZE */

render();
