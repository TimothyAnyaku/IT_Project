// main.js — global site script
document.addEventListener("DOMContentLoaded", () => {

  /* ==============================
     DARK MODE TOGGLE
     ============================== */
  const toggle = document.getElementById("dark-mode-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const icon = toggle.querySelector("i");
      icon.classList.toggle("fa-sun");
      icon.classList.toggle("fa-moon");
      localStorage.setItem("dark", document.body.classList.contains("dark"));
    });

    // Load dark-mode preference
    if (localStorage.getItem("dark") === "true") {
      document.body.classList.add("dark");
      toggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
    }
  }

  /* ==============================
     USER LOGIN STATE
     ============================== */
  const userEmail = localStorage.getItem("user");
  const loginLink = document.querySelector(".login");

  if (userEmail && loginLink) {
    const email = JSON.parse(userEmail);
    loginLink.textContent = "Logout";
    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("user");
      alert("You have logged out.");
      window.location.reload();
    });
  }
});
