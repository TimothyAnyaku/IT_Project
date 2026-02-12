// wishlist.js — render and manage wishlist
document.addEventListener("DOMContentLoaded", () => {
  const wishlistGrid = document.getElementById("wishlist-grid");
  const emptyMsg = document.getElementById("empty-message");
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const renderWishlist = () => {
    wishlistGrid.innerHTML = "";
    if (wishlist.length === 0) {
      emptyMsg.textContent = "Your wishlist is empty.";
      return;
    } else {
      emptyMsg.textContent = "";
    }

    wishlist.forEach((name, index) => {
      wishlistGrid.innerHTML += `
        <div class="wishlist-item" data-index="${index}">
          <img src="./assets/default.png" alt="${name}" />
          <h3>${name}</h3>
          <div class="wishlist-actions">
            <button class="add-cart">Add to Cart</button>
            <button class="remove">Remove</button>
          </div>
        </div>
      `;
    });

    // Remove item
    document.querySelectorAll(".remove").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const i = e.target.closest(".wishlist-item").dataset.index;
        wishlist.splice(i, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
      });
    });

    // Add to Cart
    document.querySelectorAll(".add-cart").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const name = e.target.closest(".wishlist-item").querySelector("h3").textContent;
        const product = { id: Date.now(), name, price: "$—", img: "./assets/default.png" };
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${name} added to cart!`);
      });
    });
  };

  renderWishlist();
});
