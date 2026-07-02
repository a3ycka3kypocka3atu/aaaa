const state = {
  tone: "clear",
  projectFilter: "all",
  futureFilter: "all",
  language: "all",
  stream: "all",
  platform: "all",
  search: "",
};

const bioCopy = {
  clear: {
    label: "Clear lens",
    title: "The system-seeing creator",
    body:
      "Andrij is a Ukrainian-born, Czech-rooted creator based in Prague, building a multilingual ecosystem around conscious people, conscious cooperation, conscious finance, and a personal behind-the-scenes blog. His main professional edge is seeing the whole structure: SEO, marketing funnels, teams, weak links, content systems, automation, and the human reasons why projects either move or freeze.",
  },
  personal: {
    label: "Personal lens",
    title: "A bridge between survival, sensitivity, and building",
    body:
      "My story is not a straight career line. It moves through Ukraine, Czech life, early work, village roots, family loss, sport, photography, construction, volunteering, community, anxiety, sobriety, and a long search for a cleaner way to live. I am trying to turn all of that into something useful: projects that help people become stronger without becoming colder.",
  },
  funny: {
    label: "Funny lens",
    title: "An entrepreneur for the soul, with spreadsheets nearby",
    body:
      "I am the kind of person who can talk about SEO funnels, family values, AI automation, childhood in a village, healthy communities, and why your project has no money flow in the same coffee. Is it too much? Maybe. Is it useful? Also maybe. The goal is simple: make things work, make people feel seen, and please let the dashboard have nice colors.",
  },
  dramatic: {
    label: "Dramatic lens",
    title: "From chaos into architecture",
    body:
      "There were years of pressure, displacement, conflict with systems, inner storms, and a feeling that the world had too many broken structures and too little tenderness. The answer became not escape, but architecture: build media, build platforms, build communities, build businesses, build a home in nature, and turn the wound into a working instrument.",
  },
  motivation: {
    label: "Motivation lens",
    title: "Believe, build, repeat",
    body:
      "Andrij's direction is built on discipline and faith in the process. Learn what is needed. Build what is missing. Help people organize their lives, brands, companies, and dreams. Stay sober, stay honest, keep improving, and create enough success to support family, nature, meaningful travel, and projects that make human life better.",
  },
  romantic: {
    label: "Romantic lens",
    title: "A house in nature, a desk full of projects, and people worth helping",
    body:
      "At the heart of everything is a quiet wish: to live close to nature with family, create useful work, travel to projects when help is needed, and come back to a home that feels like peace. The business is not only for money. It is a road toward dignity, love, land, craft, and a life where ambition still has a human face.",
  },
};

const services = [
  {
    tag: "Visibility",
    title: "SEO and attention architecture",
    body:
      "Search logic, content strategy, platform structure, positioning, and discoverability for people, projects, and business ecosystems.",
    bullets: ["SEO map", "Content systems", "Audience routes", "Trust signals"],
  },
  {
    tag: "Systems",
    title: "Project diagnosis and repair",
    body:
      "A deep look at how a project actually works: people, funnels, operations, money flow, weak points, and the invisible friction slowing everything down.",
    bullets: ["Internal audit", "Marketing funnels", "Process clarity", "Team coordination"],
  },
  {
    tag: "Automation",
    title: "AI-native digital infrastructure",
    body:
      "Websites, dashboards, CRM logic, AI assistants, content workflows, knowledge hubs, and automation that reduce noise instead of adding more buttons.",
    bullets: ["AI workflows", "Vibe coding", "Dashboards", "Automation"],
  },
  {
    tag: "Human",
    title: "Personal growth and creator systems",
    body:
      "A practical growth system where personal identity, public presence, business strategy, habits, goals, and digital tools support one direction.",
    bullets: ["Positioning", "Brand story", "Life roadmap", "Execution workspace"],
  },
];

const timeline = [
  {
    time: "2026 - Present",
    title: "Founder and project lead",
    body:
      "Launching an ethical automation and marketing agency with a social entrepreneurship model, fair team compensation, and community reinvestment.",
  },
  {
    time: "2025 - 2026",
    title: "AI-native development",
    body:
      "Building proprietary platforms with rapid prototyping, AI coding, automation thinking, video content, and public communication practice.",
  },
  {
    time: "2024 - 2025",
    title: "International project coordination",
    body:
      "Educational and cultural project work at Krzyzowa Foundation in Poland, with facilitation, media, translation, and intercultural groups.",
  },
  {
    time: "2023 - 2024",
    title: "Communities and ecology",
    body:
      "ESC volunteering in Sweden and Hungary, GEN Europe connection, permaculture, community living, and sustainable lifestyle projects.",
  },
  {
    time: "2020 - 2022",
    title: "Village community space",
    body:
      "Founded a multifunctional community space in the Lviv region with events, workshops, fundraising, social media, and local initiatives.",
  },
  {
    time: "2015 - 2024",
    title: "Many practical worlds",
    body:
      "Photography, construction and design, HR, film production catering, hospitality, events, sport, logistics, and hands-on technical work.",
  },
];

const projects = [
  {
    title: "Multilingual Media Ecosystem",
    category: "media",
    status: "Building",
    scale: "4 languages x 4 streams x 5 platforms",
    tags: ["media", "SEO", "content", "international"],
    body:
      "An international content ecosystem in Ukrainian, Czech, English, and Russian, built around conscious human life, conscious cooperation, conscious finance, and a founder's personal blog.",
    bullets: ["Trust-building media", "Audience routes into products", "Language-specific accounts", "Future sites and communities"],
    links: [],
  },
  {
    title: "34ForFree7 Ecosystem",
    category: "agency",
    status: "Building",
    scale: "Agency plus network plus platform",
    tags: ["business", "network", "platform", "social entrepreneurship"],
    body:
      "A central hub connecting people, companies, specialists, products, projects, and communities into one development system where the agency is only one mechanism.",
    bullets: ["Specialized agencies", "Professional network", "Community", "Internal projects"],
    links: [],
  },
  {
    title: "Human Systems",
    category: "agency",
    status: "Live seed",
    scale: "Personal growth agency",
    tags: ["founders", "creators", "branding", "AI productivity"],
    body:
      "A human-focused branch for founders, creators, experts, artists, professionals, and people in transition who need identity, strategy, brand, tools, and execution.",
    bullets: ["Personal growth", "Founder branding", "Career strategy", "Knowledge systems"],
    links: [{ label: "Live prototype", url: "https://ma-3-rose.vercel.app/" }],
  },
  {
    title: "Business Systems",
    category: "agency",
    status: "Concept",
    scale: "Organizations and operations",
    tags: ["marketing", "automation", "CRM", "analytics"],
    body:
      "A service branch for business strategy, marketing systems, AI, CRM, websites, analytics, automation, and operational process design.",
    bullets: ["Strategy", "Automation", "Websites", "Process design"],
    links: [],
  },
  {
    title: "Product Systems",
    category: "platform",
    status: "Concept",
    scale: "Digital products",
    tags: ["SaaS", "MVP", "AI products", "marketplaces"],
    body:
      "A product branch for SaaS, AI products, MVPs, platforms, mobile apps, marketplaces, and the technical structures needed to test ideas quickly.",
    bullets: ["MVPs", "AI products", "Platforms", "Marketplaces"],
    links: [],
  },
  {
    title: "Impact Systems",
    category: "impact",
    status: "Concept",
    scale: "Social impact projects",
    tags: ["NGO", "education", "ecology", "public programs"],
    body:
      "A branch for projects with public value: NGOs, foundations, educational work, ecological initiatives, and institutions that need better systems.",
    bullets: ["Grant logic", "Impact communication", "Education", "Ecology"],
    links: [],
  },
  {
    title: "Physical Community",
    category: "community",
    status: "Future",
    scale: "Offline trust engine",
    tags: ["events", "networking", "workshops", "clubs"],
    body:
      "A real-world community where online connections become meetings, collaborations, friends, partners, workshops, club formats, and new joint initiatives.",
    bullets: ["Meetups", "Workshops", "Ticketing", "Membership"],
    links: [],
  },
  {
    title: "Personal Growth Platform",
    category: "platform",
    status: "Long-term",
    scale: "Life operating system",
    tags: ["goals", "AI guidance", "progress", "community"],
    body:
      "A lifelong growth space where people define dreams, turn dreams into projects, create measurable goals, follow milestones, collect achievements, and find aligned people.",
    bullets: ["Dreams to projects", "Milestones", "AI recommendations", "Opportunity matching"],
    links: [],
  },
  {
    title: "Not Only Andrew",
    category: "media",
    status: "Building",
    scale: "Founder behind the scenes",
    tags: ["personal blog", "travel", "learning", "projects"],
    body:
      "The founder blog that shows life, thoughts, travel, projects, experiments, public learning, AI coding, marketing, video, automation, and the backstage of the full ecosystem.",
    bullets: ["Founder story", "Behind the scenes", "Learning in public", "Trust bridge"],
    links: [],
  },
  {
    title: "Mutual Support Network",
    category: "community",
    status: "Seed",
    scale: "People and initiatives",
    tags: ["support", "resources", "fund", "cooperation"],
    body:
      "A network for sharing experience, resources, contacts, practical help, and eventually a support fund for people and initiatives that need a stronger environment.",
    bullets: ["Shared resources", "Partner matching", "Support fund", "Joint projects"],
    links: [],
  },
];

const accounts = [
  {
    language: "UA",
    languageName: "Ukrainian",
    fbProfileEmail: "andrijhsavcin@gmail.com",
    stream: "human",
    streamName: "Conscious Human",
    email: "andrij.savcin.em@gmail.com",
    username: "@svidoma.ludyna",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "UA",
    languageName: "Ukrainian",
    fbProfileEmail: "andrijhsavcin@gmail.com",
    stream: "cooperation",
    streamName: "Conscious Cooperation",
    email: "a3ycka3kypocka3atu@gmail.com",
    username: "@svidoma.spivpratsia",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "UA",
    languageName: "Ukrainian",
    fbProfileEmail: "andrijhsavcin@gmail.com",
    stream: "finance",
    streamName: "Conscious Finance",
    email: "andresavchenkoua@gmail.com",
    username: "@svidomi.finansy",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "UA",
    languageName: "Ukrainian",
    fbProfileEmail: "andrijhsavcin@gmail.com",
    stream: "personal",
    streamName: "Personal Blog",
    email: "andreipershii@gmail.com",
    username: "@ne.tilky.andrii",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "CZ",
    languageName: "Czech",
    fbProfileEmail: "pychaandrij@gmail.com",
    stream: "human",
    streamName: "Conscious Human",
    email: "pychaandrij@gmail.com",
    username: "@vedomy.clovek",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "CZ",
    languageName: "Czech",
    fbProfileEmail: "pychaandrij@gmail.com",
    stream: "cooperation",
    streamName: "Conscious Cooperation",
    email: "3kakomunita@gmail.com",
    username: "@vedoma.spoluprace",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "CZ",
    languageName: "Czech",
    fbProfileEmail: "pychaandrij@gmail.com",
    stream: "finance",
    streamName: "Conscious Finance",
    email: "andrejvtraid@gmail.com",
    username: "@vedome.finance",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "CZ",
    languageName: "Czech",
    fbProfileEmail: "pychaandrij@gmail.com",
    stream: "personal",
    streamName: "Personal Blog",
    email: "andrejousavchyn@gmail.com",
    username: "@nejen.andrij",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "EN",
    languageName: "English",
    fbProfileEmail: "andrewsavcin@gmail.com",
    stream: "human",
    streamName: "Conscious Human",
    email: "andrewsavcin@gmail.com",
    username: "@conscious.human",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "EN",
    languageName: "English",
    fbProfileEmail: "andrewsavcin@gmail.com",
    stream: "cooperation",
    streamName: "Conscious Co-Creation",
    email: "community3ka@gmail.com",
    username: "@conscious.cocreation",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "EN",
    languageName: "English",
    fbProfileEmail: "andrewsavcin@gmail.com",
    stream: "finance",
    streamName: "Conscious Finance",
    email: "andrefortraid@gmail.com",
    username: "@conscious.finance",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "EN",
    languageName: "English",
    fbProfileEmail: "andrewsavcin@gmail.com",
    stream: "personal",
    streamName: "Personal Blog",
    email: "maybeweknowsomething@gmail.com",
    username: "@not.only.andrew",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "RU",
    languageName: "Russian",
    fbProfileEmail: "andresavche@gmail.com",
    stream: "human",
    streamName: "Conscious Human",
    email: "andresavche@gmail.com",
    username: "@osoznannyi.chelovek",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "RU",
    languageName: "Russian",
    fbProfileEmail: "andresavche@gmail.com",
    stream: "cooperation",
    streamName: "Conscious Cooperation",
    email: "a3ycka3kypocka3at@gmail.com",
    username: "@osoznannoe.sotrudnichestvo",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "RU",
    languageName: "Russian",
    fbProfileEmail: "andresavche@gmail.com",
    stream: "finance",
    streamName: "Conscious Finance",
    email: "andrejsavcun@gmail.com",
    username: "@osoznannye.finansy",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
  {
    language: "RU",
    languageName: "Russian",
    fbProfileEmail: "andresavche@gmail.com",
    stream: "personal",
    streamName: "Personal Blog",
    email: "prabratt@gmail.com",
    username: "@ne.tolko.andrey",
    platforms: ["Instagram", "TikTok", "YouTube", "Telegram", "Facebook"],
  },
];

const ideas = [
  {
    kind: "platform",
    title: "Personal growth platform",
    body:
      "A lifelong workspace where dreams become projects, projects become goals, goals become milestones, and AI recommends people, tools, and next steps.",
  },
  {
    kind: "community",
    title: "Physical community format",
    body:
      "Regular meetings, thematic evenings, networking, workshops, lectures, creative events, and real cooperation between people who first met online.",
  },
  {
    kind: "work",
    title: "Secret agent project audit",
    body:
      "Enter a business from the inside, observe how it truly works, find the stuck points, rebuild the marketing and operations, then hand the system back stronger.",
  },
  {
    kind: "impact",
    title: "Healthy services platform",
    body:
      "A curated ecosystem for health, psychology, natural practices, education, events, specialists, products, and practical recommendations.",
  },
  {
    kind: "community",
    title: "Mutual support fund",
    body:
      "A future structure where the network can help people and initiatives with resources, introductions, skills, and financial support when possible.",
  },
  {
    kind: "tools",
    title: "AI recommendation engine",
    body:
      "A matching layer for clients, specialists, projects, audiences, personal goals, learning paths, and collaboration opportunities.",
  },
];

const wishes = [
  {
    kind: "life",
    title: "House in nature",
    body:
      "A calm home close to land, family, craft, work, children, food, trees, silence, and the kind of internet connection that still respects the soul.",
  },
  {
    kind: "work",
    title: "Recognized professional mastery",
    body:
      "Not empty fame. A clear reputation for solving systems, making projects better, and helping businesses and people move with more structure.",
  },
  {
    kind: "life",
    title: "Family and meaningful travel",
    body:
      "A life where travel serves projects, learning, service, and meetings with good people, while home remains the center of gravity.",
  },
  {
    kind: "tools",
    title: "Creative studio and workshop",
    body:
      "Photo, video, sound, editing, product experiments, wood, tools, prototypes, clothes, design, and a table where chaos becomes something practical.",
  },
  {
    kind: "community",
    title: "Land-based project environment",
    body:
      "A living place where technology, craft, education, ecology, community, and entrepreneurship can exist without pretending they are separate worlds.",
  },
  {
    kind: "tools",
    title: "Better media production kit",
    body:
      "Camera, audio, light, editing power, storage, and a workflow that makes multilingual content creation smoother and less heroic every week.",
  },
];

const selectors = {
  bioToneLabel: document.querySelector("#bioToneLabel"),
  bioTitle: document.querySelector("#bioTitle"),
  bioBody: document.querySelector("#bioBody"),
  serviceRail: document.querySelector("#serviceRail"),
  timeline: document.querySelector("#timeline"),
  projectGrid: document.querySelector("#projectGrid"),
  accountMatrix: document.querySelector("#accountMatrix"),
  ideaList: document.querySelector("#ideaList"),
  wishList: document.querySelector("#wishList"),
  globalSearch: document.querySelector("#globalSearch"),
  languageFilter: document.querySelector("#languageFilter"),
  streamFilter: document.querySelector("#streamFilter"),
  platformFilter: document.querySelector("#platformFilter"),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function searchableText(item) {
  return JSON.stringify(item).toLowerCase();
}

function matchesSearch(item) {
  if (!state.search) return true;
  return searchableText(item).includes(state.search.toLowerCase());
}

function renderBio() {
  const copy = bioCopy[state.tone] || bioCopy.clear;
  selectors.bioToneLabel.textContent = copy.label;
  selectors.bioTitle.textContent = copy.title;
  selectors.bioBody.textContent = copy.body;
}

function renderServices() {
  selectors.serviceRail.innerHTML = services
    .map(
      (service) => `
        <article class="service-card">
          <span class="service-tag">${escapeHtml(service.tag)}</span>
          <h3>${escapeHtml(service.title)}</h3>
          <p>${escapeHtml(service.body)}</p>
          <ul>${service.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderTimeline() {
  selectors.timeline.innerHTML = timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <time>${escapeHtml(item.time)}</time>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  const filtered = projects.filter((project) => {
    const categoryMatch =
      state.projectFilter === "all" || project.category === state.projectFilter;
    return categoryMatch && matchesSearch(project);
  });

  selectors.projectGrid.innerHTML =
    filtered.length > 0
      ? filtered
          .map(
            (project) => `
            <article class="project-card">
              <div class="project-meta">
                <span class="chip">${escapeHtml(project.status)}</span>
                <span class="chip">${escapeHtml(project.scale)}</span>
                ${project.tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}
              </div>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.body)}</p>
              <ul>${project.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
              <div class="project-links">
                ${
                  project.links.length
                    ? project.links
                        .map(
                          (link) =>
                            `<a class="mini-link" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`
                        )
                        .join("")
                    : `<span class="mini-link" aria-label="Links will be added later">Links later</span>`
                }
              </div>
            </article>
          `
          )
          .join("")
      : `<p class="empty-state">No projects match this view.</p>`;
}

function renderAccounts() {
  const filtered = accounts.filter((account) => {
    const languageMatch = state.language === "all" || account.language === state.language;
    const streamMatch = state.stream === "all" || account.stream === state.stream;
    const platformMatch =
      state.platform === "all" || account.platforms.includes(state.platform);
    return languageMatch && streamMatch && platformMatch && matchesSearch(account);
  });

  selectors.accountMatrix.innerHTML =
    filtered.length > 0
      ? filtered
          .map(
            (account) => `
            <article class="account-row">
              <div class="account-field account-language">
                <span class="account-label">Language</span>
                <strong>${escapeHtml(account.languageName)}</strong>
                <small>${escapeHtml(account.language)} system</small>
              </div>
              <div class="account-field">
                <span class="account-label">Stream</span>
                <strong>${escapeHtml(account.streamName)}</strong>
                <small>FB manager: ${escapeHtml(account.fbProfileEmail)}</small>
              </div>
              <div class="account-field">
                <span class="account-label">Handle</span>
                <strong>${escapeHtml(account.username)}</strong>
                <small>${escapeHtml(account.email)}</small>
              </div>
              <div class="platforms" aria-label="Platforms">
                ${account.platforms.map((platform) => `<span>${escapeHtml(platform)}</span>`).join("")}
              </div>
              <button class="copy-btn" type="button" data-copy="${escapeHtml(account.username)}">Copy handle</button>
            </article>
          `
          )
          .join("")
      : `<p class="empty-state">No accounts match this view.</p>`;
}

function futureAllowed(item) {
  if (state.futureFilter === "all") return true;
  if (state.futureFilter === item.kind) return true;
  if (state.futureFilter === "work" && ["platform", "impact"].includes(item.kind)) return true;
  return false;
}

function renderStack(target, items, emptyText) {
  const filtered = items.filter((item) => futureAllowed(item) && matchesSearch(item));
  target.innerHTML =
    filtered.length > 0
      ? filtered
          .map(
            (item) => `
            <article class="stack-item" data-kind="${escapeHtml(item.kind)}">
              <div class="stack-top">
                <strong>${escapeHtml(item.title)}</strong>
                <span class="chip">${escapeHtml(item.kind)}</span>
              </div>
              <p>${escapeHtml(item.body)}</p>
            </article>
          `
          )
          .join("")
      : `<p class="empty-state">${escapeHtml(emptyText)}</p>`;
}

function renderFuture() {
  renderStack(selectors.ideaList, ideas, "No ideas match this view.");
  renderStack(selectors.wishList, wishes, "No wishes match this view.");
}

function renderAll() {
  renderBio();
  renderProjects();
  renderAccounts();
  renderFuture();
}

function setActiveButton(buttons, activeButton) {
  buttons.forEach((button) => {
    const active = button === activeButton;
    button.classList.toggle("active", active);
    if (button.getAttribute("role") === "tab") {
      button.setAttribute("aria-selected", String(active));
    }
  });
}

document.querySelectorAll("[data-tone]").forEach((button) => {
  button.addEventListener("click", () => {
    state.tone = button.dataset.tone;
    setActiveButton(document.querySelectorAll("[data-tone]"), button);
    renderBio();
  });
});

document.querySelectorAll("[data-project-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state.projectFilter = button.dataset.projectFilter;
    setActiveButton(document.querySelectorAll("[data-project-filter]"), button);
    renderProjects();
  });
});

document.querySelectorAll("[data-future-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state.futureFilter = button.dataset.futureFilter;
    setActiveButton(document.querySelectorAll("[data-future-filter]"), button);
    renderFuture();
  });
});

selectors.globalSearch.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  renderProjects();
  renderAccounts();
  renderFuture();
});

selectors.languageFilter.addEventListener("change", (event) => {
  state.language = event.target.value;
  renderAccounts();
});

selectors.streamFilter.addEventListener("change", (event) => {
  state.stream = event.target.value;
  renderAccounts();
});

selectors.platformFilter.addEventListener("change", (event) => {
  state.platform = event.target.value;
  renderAccounts();
});

document.addEventListener("click", async (event) => {
  const copyButton = event.target.closest("[data-copy]");
  if (copyButton) {
    const text = copyButton.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      const previous = copyButton.textContent;
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = previous;
      }, 1200);
    } catch {
      copyButton.textContent = "Copy failed";
    }
  }
});

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  items.forEach((item) => observer.observe(item));
}

function initSignalField() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.querySelector("#signalField");
  const ctx = canvas.getContext("2d");
  const nodes = [];
  let width = 0;
  let height = 0;
  let frame = 0;

  function reset() {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    nodes.length = 0;
    const count = Math.min(72, Math.max(34, Math.floor(window.innerWidth / 18)));
    for (let i = 0; i < count; i += 1) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18 * window.devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.18 * window.devicePixelRatio,
      });
    }
  }

  function draw() {
    frame += 1;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = window.devicePixelRatio;

    nodes.forEach((node) => {
      if (!reduceMotion) {
        node.x += node.vx;
        node.y += node.vy;
      }
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150 * window.devicePixelRatio;
        if (distance < maxDistance) {
          const alpha = (1 - distance / maxDistance) * 0.22;
          ctx.strokeStyle = `rgba(24, 57, 45, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((node, index) => {
      const pulse = reduceMotion ? 1 : 1 + Math.sin((frame + index * 8) / 80) * 0.25;
      ctx.fillStyle = "rgba(200, 100, 79, 0.28)";
      ctx.beginPath();
      ctx.arc(node.x, node.y, 1.3 * window.devicePixelRatio * pulse, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!reduceMotion) requestAnimationFrame(draw);
  }

  reset();
  draw();
  window.addEventListener("resize", reset);
}

renderServices();
renderTimeline();
renderAll();
initReveal();
initSignalField();
