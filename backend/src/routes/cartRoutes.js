const express = require('express');
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCartItem,
  clearCart
} = require('../controllers/cartController');

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/update/:itemId', updateCartItem);
router.delete('/remove/:itemId', removeFromCartItem);
router.delete('/clear', clearCart);

module.exports = router;
