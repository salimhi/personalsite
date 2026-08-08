(function () {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function updateLabel() {
    const dark = currentTheme() === "dark";
    const label = dark ? "Switch to light mode" : "Switch to dark mode";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  }

  button.addEventListener("click", function () {
    const next = currentTheme() === "dark" ? "light" : "dark";
    if (next === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", next);
    updateLabel();
  });

  updateLabel();
})();
