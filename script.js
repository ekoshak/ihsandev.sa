const btn = document.getElementById("langToggle");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

let lang = document.documentElement.getAttribute("data-lang") || "en";

function applyLang() {
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  btn.textContent = (lang === "ar") ? "EN" : "AR";
}
btn.addEventListener("click", () => {
  lang = (lang === "ar") ? "en" : "ar";
  applyLang();
});
applyLang();
