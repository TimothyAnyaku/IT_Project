// checkout.js — render cart and handle clearing
// document.addEventListener("DOMContentLoaded", () => {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const cartList = document.getElementById("cart-list");
//   const clearBtn = document.getElementById("clear");

//   if (cart.length === 0) {
//     cartList.innerHTML = "<p>Your cart is empty.</p>";
//   } else {
//     cart.forEach((item) => {
//       cartList.innerHTML += `
//         <div class="cart-item">
//           <img src="${item.img}" alt="${item.name}">
//           <div class="cart-info">
//             <h4>${item.name}</h4>
//             <p>${item.price}</p>
//           </div>
//         </div>
//       `;
//     });
//   }

//   if (clearBtn) {
//     clearBtn.addEventListener("click", () => {
//       localStorage.removeItem("cart");
//       alert("Cart cleared!");
//       window.location.reload();
//     });
//   }
// });
// checkout.js — render cart, total, and handle clearing/checkout
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-list");
  const totalPriceEl = document.getElementById("total-price");
  const clearBtn = document.getElementById("clear");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (cart.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceEl.textContent = "$0";
    checkoutBtn.disabled = true;
  } else {
    let total = 0;
    cart.forEach((item) => {
      const priceNum = parseFloat(item.price.replace("$", "")) || 0;
      total += priceNum;

      cartList.innerHTML += `
        <div class="cart-item">
          <img src="${item.img ? item.img : './assets/default.png'}" alt="${item.name}">
          <div class="cart-info">
            <h4>${item.name}</h4>
            <p>${item.price}</p>
          </div>
        </div>
      `;
    });
    totalPriceEl.textContent = `$${total.toFixed(2)}`;
  }

  // Clear cart
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      localStorage.removeItem("cart");
      alert("Cart cleared!");
      window.location.reload();
    });
  }

  // Proceed to checkout (simulate)
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty.");
      } else {
        localStorage.removeItem("cart");
        window.location.href = "thankyou.html";
      }
    });
  }
});
