// Simple language toggle (shows one language at a time)
const btn = document.getElementById("langToggle");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

let showArabic = false;

function applyLang() {
  document.querySelectorAll(".en").forEach(el => el.style.display = showArabic ? "none" : "block");
  document.querySelectorAll(".ar").forEach(el => el.style.display = showArabic ? "block" : "none");
  // Update button label
  btn.textContent = showArabic ? "EN" : "AR";
  // Set page direction for nicer experience
  document.documentElement.lang = showArabic ? "ar" : "en";
  document.documentElement.dir = showArabic ? "rtl" : "ltr";
}
applyLang();

btn.addEventListener("click", () => {
  showArabic = !showArabic;
  applyLang();
});
