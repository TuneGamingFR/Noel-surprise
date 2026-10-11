// Petit effet de célébration, sans dépendance externe.
const layer = document.querySelector("#confetti-layer");
const colors = ["#63f5ff", "#a18bff", "#ff73ce", "#6effc1", "#f2f5ff"];
for (let i = 0; i < 48; i++) {
  const bit = document.createElement("span");
  bit.className = "confetti";
  bit.style.left = `${Math.random() * 100}%`;
  bit.style.background = colors[i % colors.length];
  bit.style.animationDelay = `${Math.random() * 2.8}s`;
  bit.style.animationDuration = `${3.5 + Math.random() * 3.5}s`;
  bit.style.transform = `rotate(${Math.random() * 180}deg)`;
  layer.appendChild(bit);
}
