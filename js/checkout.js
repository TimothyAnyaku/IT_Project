// checkout.js — render cart and handle clearing
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-list");
  const clearBtn = document.getElementById("clear");

  if (cart.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item) => {
      cartList.innerHTML += `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-info">
            <h4>${item.name}</h4>
            <p>${item.price}</p>
          </div>
        </div>
      `;
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      localStorage.removeItem("cart");
      alert("Cart cleared!");
      window.location.reload();
    });
  }
});
