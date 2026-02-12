// search.js — live product search
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("product-search");
  if (!input) return;

  input.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".product-item").forEach((prod) => {
      const name = prod.querySelector("h3").textContent.toLowerCase();
      prod.style.display = name.includes(query) ? "block" : "none";
    });
  });
});
