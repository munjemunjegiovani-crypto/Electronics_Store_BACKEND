const { v4: uuidv4 } = require('uuid');

// In-memory cart storage keyed by cartId
const carts = new Map();

const TAX_RATE = 0.085;
const SHIPPING_THRESHOLD = 499;
const SHIPPING_FEE = 29;
const DISCOUNT_THRESHOLD_1 = 500;
const DISCOUNT_RATE_1 = 0.05;
const DISCOUNT_THRESHOLD_2 = 1000;
const DISCOUNT_RATE_2 = 0.10;

// Simplified session: a single active cart shared across controllers
let activeCartId = null;

function getActiveCartId() {
  return activeCartId;
}

function setActiveCartId(id) {
  activeCartId = id;
}

function createCart() {
  const cartId = uuidv4();
  const cart = { id: cartId, items: [], createdAt: new Date().toISOString() };
  carts.set(cartId, cart);
  return cart;
}

function getActiveCart() {
  let cart = activeCartId && carts.get(activeCartId);
  if (!cart) {
    cart = createCart();
    activeCartId = cart.id;
  }
  return cart;
}

function buildVariantLabel(variant) {
  if (!variant || !variant.label) return null;
  return variant.label;
}

function addToCart(cartId, product, quantity = 1, variant = null) {
  let cart = carts.get(cartId);
  if (!cart) {
    cart = createCart();
  }

  const variantLabel = buildVariantLabel(variant);

  // Merge items that share the same product and variant
  const existingItemIndex = cart.items.findIndex(
    (item) => item.productId === product.id && (item.variantLabel || null) === variantLabel
  );

  if (existingItemIndex > -1) {
    cart.items[existingItemIndex].quantity += quantity;
    cart.items[existingItemIndex].lineTotal = Number(
      (cart.items[existingItemIndex].price * cart.items[existingItemIndex].quantity).toFixed(2)
    );
  } else {
    cart.items.push({
      cartItemId: uuidv4(),
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      variant: variant || null,
      variantLabel,
      lineTotal: Number((product.price * quantity).toFixed(2)),
    });
  }

  carts.set(cartId, cart);
  return cart;
}

function updateCartItem(cartId, itemId, quantity) {
  const cart = carts.get(cartId);
  if (!cart) return null;

  const itemIndex = cart.items.findIndex((item) => item.cartItemId === itemId);
  if (itemIndex === -1) return null;

  if (quantity <= 0) {
    cart.items.splice(itemIndex, 1);
  } else {
    cart.items[itemIndex].quantity = quantity;
    cart.items[itemIndex].lineTotal = Number((cart.items[itemIndex].price * quantity).toFixed(2));
  }

  carts.set(cartId, cart);
  return cart;
}

function removeFromCart(cartId, itemId) {
  const cart = carts.get(cartId);
  if (!cart) return null;

  cart.items = cart.items.filter((item) => item.cartItemId !== itemId);
  carts.set(cartId, cart);
  return cart;
}

function clearCart(cartId) {
  const cart = carts.get(cartId);
  if (!cart) return null;

  cart.items = [];
  carts.set(cartId, cart);
  return cart;
}

function calculateTotals(cart) {
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Tiered percentage discount
  let discountRate = 0;
  if (subtotal > DISCOUNT_THRESHOLD_2) {
    discountRate = DISCOUNT_RATE_2;
  } else if (subtotal > DISCOUNT_THRESHOLD_1) {
    discountRate = DISCOUNT_RATE_1;
  }

  const discountAmount = subtotal * discountRate;
  const discountedSubtotal = subtotal - discountAmount;
  const tax = discountedSubtotal * TAX_RATE;
  const shipping = subtotal > SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
  const total = discountedSubtotal + tax + shipping;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    discount: Number(discountAmount.toFixed(2)),
    tax: Number(tax.toFixed(2)),
    shipping: Number(shipping.toFixed(2)),
    total: Number(total.toFixed(2)),
    itemCount: cart.items.reduce((sum, item) => sum + item.quantity, 0),
  };
}

module.exports = {
  carts,
  createCart,
  getActiveCartId,
  setActiveCartId,
  getActiveCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  calculateTotals,
};
