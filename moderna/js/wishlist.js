// wishlist.js — render and manage wishlist with image + price
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
    } else emptyMsg.textContent = "";

    wishlist.forEach((product, index) => {
      const imgSrc = product.img && product.img !== "" ? product.img : "./assets/default.png";
      const price = product.price ? product.price : "$—";

      wishlistGrid.innerHTML += `
        <div class="wishlist-item" data-index="${index}">
          <img src="${imgSrc}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p class="wishlist-price">${price}</p>
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

    // Add to cart
    document.querySelectorAll(".add-cart").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const i = e.target.closest(".wishlist-item").dataset.index;
        const product = wishlist[i];
        const newItem = {
          id: Date.now(),
          name: product.name,
          img: product.img ? product.img : "./assets/default.png",
          price: product.price ? product.price : "$0"
        };
        cart.push(newItem);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
      });
    });
  };

  renderWishlist();
});
