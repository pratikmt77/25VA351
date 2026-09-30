const btn = document.getElementById("themeBtn");
const clicksText = document.getElementById("clicks");
let clicks = 0;

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  clicks++;
  clicksText.textContent = "Clicks: " + clicks;
});