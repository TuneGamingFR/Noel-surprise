/*
  CONFIGURATION RAPIDE :
  Remplacez la valeur de SECRET_CODE par le code de votre choix.
  Exemple : const SECRET_CODE = "Famille2026";
  Attention : sur un site statique, le code peut être retrouvé dans le JavaScript.
  Pour une vraie protection, utilisez un serveur avec vérification côté serveur.
*/
const SECRET_CODE = "CHANGE-MOI-2026";
const form = document.querySelector("#code-form");
const input = document.querySelector("#secret-code");
const error = document.querySelector("#error-message");
const wrap = document.querySelector(".input-wrap");
const toggle = document.querySelector("#toggle-code");

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
    window.location.href = "cadeau.html";
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
