// --- sample product list ---
const products = [
  { id: 1, name: "T-shirt", price: 299 },
  { id: 2, name: "Jeans",   price: 799 },
  { id: 3, name: "Sneakers",price: 2499 }
];

// --- shopping cart state ---
let cart = [];

/**
 * Add product to cart.
 * If product exists, increase quantity by 1.
 * Otherwise, add it with quantity 1.
 * Uses spread (...) to keep cart immutable.
 */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const idx = cart.findIndex(item => item.id === productId);

  if (idx >= 0) {
    // update existing item quantity
    const existing = cart[idx];
    const updated = { ...existing, quantity: existing.quantity + 1 };
    cart = [
      ...cart.slice(0, idx),
      updated,
      ...cart.slice(idx + 1)
    ];
  } else {
    // add new item
    const newItem = { ...product, quantity: 1 };
    cart = [...cart, newItem];
  }
}

/**
 * Remove one quantity of a product.
 * If quantity goes to 0, remove the item entirely.
 */
function removeFromCart(productId) {
  const idx = cart.findIndex(item => item.id === productId);
  if (idx < 0) return;

  const existing = cart[idx];
  if (existing.quantity > 1) {
    const updated = { ...existing, quantity: existing.quantity - 1 };
    cart = [
      ...cart.slice(0, idx),
      updated,
      ...cart.slice(idx + 1)
    ];
  } else {
    // remove the item
    cart = [
      ...cart.slice(0, idx),
      ...cart.slice(idx + 1)
    ];
  }
}

/**
 * Clear the entire cart.
 */
function clearCart() {
  cart = [];
}

/**
 * Get total price of items in cart.
 */
function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/**
 * Display cart contents in console.
 */
function showCart() {
  console.log("Cart:", cart);
  console.log("Total:", getCartTotal());
}

// --- usage demo ---
addToCart(1); // add T-shirt
addToCart(2); // add Jeans
addToCart(1); // add another T-shirt
showCart();

removeFromCart(1); // remove one T-shirt
showCart();

clearCart();
showCart();
