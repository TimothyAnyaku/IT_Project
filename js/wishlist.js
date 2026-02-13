// wishlist.js — render and manage wishlist with images
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

    wishlist.forEach((product, index) => {
      wishlistGrid.innerHTML += `
        <div class="wishlist-item" data-index="${index}">
          <img src="${product.img}" alt="${product.name}" />
          <h3>${product.name}</h3>
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
        const i = e.target.closest(".wishlist-item").dataset.index;
        const product = wishlist[i];
        cart.push({
          id: Date.now(),
          name: product.name,
          img: product.img,
          price: "$—"
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
      });
    });
  };

  renderWishlist();
});
