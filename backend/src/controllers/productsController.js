const products = require('../models/products');

const getAllProducts = (req, res) => {
  let filtered = [...products];

  // Filter by category
  if (req.query.category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === req.query.category.toLowerCase()
    );
  }

  // Filter by brand
  if (req.query.brand) {
    filtered = filtered.filter(
      (p) => p.brand.toLowerCase() === req.query.brand.toLowerCase()
    );
  }

  // Filter by min price
  if (req.query.minPrice) {
    filtered = filtered.filter((p) => p.price >= Number(req.query.minPrice));
  }

  // Filter by max price
  if (req.query.maxPrice) {
    filtered = filtered.filter((p) => p.price <= Number(req.query.maxPrice));
  }

  // Search by name, brand, category, description
  if (req.query.search) {
    const term = req.query.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
    );
  }

  // Sort
  const sort = req.query.sort || 'name';
  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'name':
    default:
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  // Pagination
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 12));
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedProducts = filtered.slice(startIndex, startIndex + limit);

  res.json({
    products: paginatedProducts,
    pagination: { page, limit, total, totalPages }
  });
};

const getProductById = (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, error: 'Product not found' });
  }
  res.json({ product });
};

module.exports = { getAllProducts, getProductById };
