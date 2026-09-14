const products = require('../models/products');
const {
  getActiveCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  calculateTotals,
} = require('../models/cart');

const getCartController = (req, res) => {
  const cart = getActiveCart();
  const totals = calculateTotals(cart);
  res.json({ cart: { ...cart, totals } });
};

const addToCartController = (req, res) => {
  const { productId, quantity = 1, variant = null } = req.body;

  if (!productId) {
    return res.status(400).json({ success: false, error: 'Product ID is required' });
  }

  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ success: false, error: 'Product not found' });
  }

  if (!product.inStock) {
    return res.status(400).json({ success: false, error: 'Product is out of stock' });
  }

  const qty = Math.max(1, Number(quantity) || 1);
  const cart = getActiveCart();
  const updatedCart = addToCart(cart.id, product, qty, variant);
  const totals = calculateTotals(updatedCart);

  res.json({ cart: { ...updatedCart, totals }, message: `${product.name} added to cart` });
};

const updateCartItemController = (req, res) => {
  const { quantity } = req.body;
  const { itemId } = req.params;

  if (quantity === undefined) {
    return res.status(400).json({ success: false, error: 'Quantity is required' });
  }

  const cart = getActiveCart();
  const updatedCart = updateCartItem(cart.id, itemId, Number(quantity));

  if (!updatedCart) {
    return res.status(404).json({ success: false, error: 'Cart item not found' });
  }

  const totals = calculateTotals(updatedCart);
  res.json({ cart: { ...updatedCart, totals } });
};

const removeFromCartItemController = (req, res) => {
  const { itemId } = req.params;
  const cart = getActiveCart();
  const updatedCart = removeFromCart(cart.id, itemId);

  if (!updatedCart) {
    return res.status(404).json({ success: false, error: 'Cart item not found' });
  }

  const totals = calculateTotals(updatedCart);
  res.json({ cart: { ...updatedCart, totals }, message: 'Item removed from cart' });
};

const clearCartController = (req, res) => {
  const cart = getActiveCart();
  const updatedCart = clearCart(cart.id);
  const totals = calculateTotals(updatedCart);
  res.json({ cart: { ...updatedCart, totals }, message: 'Cart cleared' });
};

module.exports = {
  getCart: getCartController,
  addToCart: addToCartController,
  updateCartItem: updateCartItemController,
  removeFromCartItem: removeFromCartItemController,
  clearCart: clearCartController,
};
