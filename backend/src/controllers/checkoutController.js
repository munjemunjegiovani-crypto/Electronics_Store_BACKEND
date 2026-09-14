const { v4: uuidv4 } = require('uuid');
const { getActiveCart, carts, calculateTotals } = require('../models/cart');

const processCheckout = (req, res) => {
  const { customer, paymentMethod, cardLast4 } = req.body;

  // Validate customer fields
  if (!customer || !customer.name || !customer.email || !customer.address || !customer.city || !customer.zip) {
    return res.status(400).json({
      success: false,
      error: 'Customer information is required (name, email, address, city, zip)',
    });
  }

  if (!paymentMethod || !['card', 'paypal'].includes(paymentMethod)) {
    return res.status(400).json({
      success: false,
      error: 'Valid payment method is required (card or paypal)',
    });
  }

  // Get the active cart shared with the cart flow
  const cart = getActiveCart();
  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ success: false, error: 'Cart is empty' });
  }

  const totals = calculateTotals(cart);

  // Generate structured invoice receipt
  const order = {
    orderId: uuidv4(),
    items: cart.items.map((item) => ({
      cartItemId: item.cartItemId,
      productId: item.productId,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      variantLabel: item.variantLabel || null,
      lineTotal: item.lineTotal,
    })),
    totals,
    customer: {
      name: customer.name,
      email: customer.email,
      address: customer.address,
      city: customer.city,
      zip: customer.zip,
    },
    payment: {
      method: paymentMethod,
      last4: paymentMethod === 'card' ? cardLast4 || '****' : null,
    },
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };

  // Clear the cart after a successful checkout
  cart.items = [];

  res.status(201).json({
    success: true,
    message: 'Order placed successfully',
    order,
  });
};

module.exports = { processCheckout };
