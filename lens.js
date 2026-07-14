const lensProfiles = window.LENS_PROFILES;
const lensKeys = Object.keys(lensProfiles);
const queryLens = new URLSearchParams(window.location.search).get("lens");

const lensState = {
  active: lensProfiles[queryLens] ? queryLens : "clear",
  openFacet: null,
};

const lensElements = {
  body: document.body,
  portraitStage: document.querySelector("#portraitStage"),
  portraitNumber: document.querySelector("#portraitNumber"),
  portraitLabel: document.querySelector("#portraitLabel"),
  portraitTitle: document.querySelector("#portraitTitle"),
  portraitBody: document.querySelector("#portraitBody"),
  portraitClosing: document.querySelector("#portraitClosing"),
  portraitNotes: document.querySelector("#portraitNotes"),
  facetGrid: document.querySelector("#facetGrid"),
  lensProgress: document.querySelector("#lensProgress"),
  exitLine: document.querySelector("#exitLine"),
  surpriseLens: document.querySelector("#surpriseLens"),
};

let lensRenderTimer;

function safe(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function updateFacetState() {
  document.querySelectorAll("[data-facet-index]").forEach((card) => {
    const isOpen = Number(card.dataset.facetIndex) === lensState.openFacet;
    card.classList.toggle("is-open", isOpen);
    card.setAttribute("aria-expanded", String(isOpen));
  });
}

function applyLens() {
  const profile = lensProfiles[lensState.active];
  const index = lensKeys.indexOf(lensState.active);
  const number = String(index + 1).padStart(2, "0");

  document.documentElement.style.setProperty("--active-lens", profile.color);
  document.documentElement.style.setProperty("--active-soft", profile.soft);
  lensElements.body.dataset.activeLens = lensState.active;
  lensElements.portraitNumber.textContent = number;
  lensElements.lensProgress.textContent = number;
  lensElements.portraitLabel.textContent = profile.label;
  lensElements.portraitTitle.textContent = profile.title;
  lensElements.portraitBody.textContent = profile.body;
  lensElements.portraitClosing.textContent = profile.closing;
  lensElements.exitLine.textContent = profile.closing;

  lensElements.portraitNotes.innerHTML = profile.notes
    .map((note) => `<span>${safe(note)}</span>`)
    .join("");

  lensElements.facetGrid.innerHTML = profile.facets
    .map(
      (facet, facetIndex) => `
        <button class="facet-card" type="button" data-facet-index="${facetIndex}" aria-expanded="false">
          <span class="facet-index">${String(facetIndex + 1).padStart(2, "0")}</span>
          <span class="facet-name">${safe(facet.name)}</span>
          <strong>${safe(facet.value)}</strong>
          <p>${safe(facet.detail)}</p>
          <span class="facet-plus" aria-hidden="true">+</span>
        </button>
      `
    )
    .join("");

  document.querySelectorAll("[data-lens]").forEach((button) => {
    const active = button.dataset.lens === lensState.active;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  profile.meters.forEach((value, meterIndex) => {
    const meterValue = document.querySelector(`#meterValue${meterIndex}`);
    const meterBar = document.querySelector(`#meterBar${meterIndex}`);
    meterValue.textContent = value;
    window.requestAnimationFrame(() => {
      meterBar.style.width = `${value}%`;
    });
  });

  updateFacetState();
  window.history.replaceState({}, "", `lens.html?lens=${encodeURIComponent(lensState.active)}`);
  lensElements.portraitStage.classList.remove("is-changing");
  lensElements.facetGrid.classList.remove("is-changing");
  window.setTimeout(() => lensElements.body.classList.remove("is-shifting"), 450);
}

function chooseLens(nextLens, immediate = false) {
  if (!lensProfiles[nextLens]) return;
  lensState.active = nextLens;
  window.clearTimeout(lensRenderTimer);

  if (immediate) {
    applyLens();
    return;
  }

  lensElements.body.classList.add("is-shifting");
  lensElements.portraitStage.classList.add("is-changing");
  lensElements.facetGrid.classList.add("is-changing");
  lensRenderTimer = window.setTimeout(applyLens, 150);
}

document.querySelectorAll("[data-lens]").forEach((button) => {
  button.addEventListener("click", () => chooseLens(button.dataset.lens));
});

lensElements.facetGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-facet-index]");
  if (!card) return;
  const nextIndex = Number(card.dataset.facetIndex);
  lensState.openFacet = lensState.openFacet === nextIndex ? null : nextIndex;
  updateFacetState();
});

lensElements.surpriseLens.addEventListener("click", () => {
  const otherLenses = lensKeys.filter((key) => key !== lensState.active);
  const randomLens = otherLenses[Math.floor(Math.random() * otherLenses.length)];
  chooseLens(randomLens);
});

document.addEventListener("keydown", (event) => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  if (event.target.matches("input, textarea, select")) return;
  const direction = event.key === "ArrowRight" ? 1 : -1;
  const currentIndex = lensKeys.indexOf(lensState.active);
  const nextIndex = (currentIndex + direction + lensKeys.length) % lensKeys.length;
  chooseLens(lensKeys[nextIndex]);
  document.querySelector(`[data-lens="${lensKeys[nextIndex]}"]`).focus();
});

chooseLens(lensState.active, true);
