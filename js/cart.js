// cart.js — add-to-cart and wishlist logic
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Add to Cart
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const item = e.target.closest(".product-item");
      if (!item) return;

      const product = {
        id: item.dataset.id,
        name: item.querySelector("h3").textContent,
        price: item.querySelector("p").textContent,
        img: item.querySelector("img").src
      };

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart.`);
    });
  });

  // Add to Wishlist
  document.querySelectorAll(".add-to-wishlist").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const item = e.target.closest(".product-item");
      const name = item.querySelector("h3").textContent;
      if (!wishlist.find((p) => p === name)) {
        wishlist.push(name);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(`${name} added to wishlist.`);
      } else {
        alert(`${name} is already in your wishlist.`);
      }
    });
  });
});
