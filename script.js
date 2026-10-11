/*
  CONFIGURATION RAPIDE :
  Remplacez la valeur de SECRET_CODE par le code de votre choix.
  Exemple : const SECRET_CODE = "Famille2026";
  Sur un site statique, le code peut être retrouvé dans le JavaScript.
*/
const SECRET_CODE = "CHANGE-MOI-2026";
const form = document.querySelector("#code-form");
const input = document.querySelector("#secret-code");
const error = document.querySelector("#error-message");
const wrap = document.querySelector(".input-wrap");
const toggle = document.querySelector("#toggle-code");

const loader = document.querySelector("#loading-screen");
const loaderPercent = document.querySelector("#loader-percent");
let percent = 0;
const loadStarted = performance.now();

function hideLoader() {
  if (!loader) return;
  const elapsed = performance.now() - loadStarted;
  const wait = Math.max(0, 720 - elapsed);
  window.setTimeout(() => loader.classList.add("is-hidden"), wait);
}
if (loader) {
  const tick = window.setInterval(() => {
    percent = Math.min(100, percent + Math.ceil(Math.random() * 19));
    if (loaderPercent) loaderPercent.textContent = `${String(percent).padStart(2, "0")}%`;
    if (percent >= 100) window.clearInterval(tick);
  }, 75);
  window.addEventListener("load", hideLoader, { once: true });
  window.setTimeout(hideLoader, 1400);
} 

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entered = input.value.trim();
  if (!entered) {
    showError("Veuillez saisir le code trouvé pendant la chasse au trésor.");
    input.focus();
    return;
  }
  if (entered.localeCompare(SECRET_CODE, undefined, { sensitivity: "accent" }) === 0) {
    error.textContent = "";
    wrap.classList.remove("invalid");
    sessionStorage.setItem("eclipse-access-granted", "yes");
    document.body.classList.add("transitioning");
    const flash = document.createElement("div");
    flash.className = "access-flash";
    flash.setAttribute("aria-hidden", "true");
    document.body.appendChild(flash);
    const button = form.querySelector("button[type='submit']");
    button.disabled = true;
    button.querySelector("span").textContent = "ACCÈS AUTORISÉ";
    window.setTimeout(() => { window.location.href = "cadeau.html"; }, 680);
    return;
  }
  showError("Code incorrect. Vérifiez les indices et réessayez.");
  input.value = "";
  input.focus();
});

function showError(message) {
  error.textContent = message;
  wrap.classList.remove("invalid");
  void wrap.offsetWidth;
  wrap.classList.add("invalid");
}

toggle.addEventListener("click", () => {
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  toggle.setAttribute("aria-label", show ? "Masquer le code" : "Afficher le code");
});
