// auth.js — simple login system
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("auth-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      localStorage.setItem("user", JSON.stringify(email));
      alert(`Welcome back, ${email.split("@")[0]}!`);
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials or account doesn’t exist. Please register.");
    }
  });
});
