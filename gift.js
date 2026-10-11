// Cinématique d'ouverture du cadeau : chargement court, révélation séquencée et particules.
const layer = document.querySelector("#confetti-layer");
const giftLoader = document.querySelector("#gift-loading");
const giftShell = document.querySelector(".gift-shell");
const colors = ["#63f5ff", "#a18bff", "#ff73ce", "#6effc1", "#f2f5ff"];

// Les confettis sont générés avant la révélation pour que l'animation soit prête.
for (let i = 0; i < 72; i++) {
  const bit = document.createElement("span");
  bit.className = "confetti";
  bit.style.left = `${Math.random() * 100}%`;
  bit.style.background = colors[i % colors.length];
  bit.style.color = colors[i % colors.length];
  bit.style.animationDelay = `${0.7 + Math.random() * 3.1}s`;
  bit.style.animationDuration = `${4.2 + Math.random() * 4.2}s`;
  bit.style.transform = `rotate(${Math.random() * 180}deg)`;
  bit.style.width = `${3 + Math.random() * 4}px`;
  bit.style.height = `${6 + Math.random() * 9}px`;
  layer.appendChild(bit);
}
for (let i = 0; i < 13; i++) {
  const beam = document.createElement("span");
  beam.className = "confetti-glow";
  beam.style.left = `${Math.random() * 100}%`;
  beam.style.animationDelay = `${0.4 + Math.random() * 2}s`;
  beam.style.animationDuration = `${3 + Math.random() * 3}s`;
  layer.appendChild(beam);
}

window.addEventListener("load", () => {
  window.setTimeout(() => {
    if (giftLoader) giftLoader.classList.add("is-hidden");
    if (giftShell) giftShell.classList.add("reveal-ready");
  }, 850);
});

// Respecte le réglage d'accessibilité du système si les animations sont réduites.
