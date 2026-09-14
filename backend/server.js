require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { port, nodeEnv } = require('./src/config/env');
const requestLogger = require('./src/middleware/requestLogger');
const errorHandler = require('./src/middleware/errorHandler');
const productRoutes = require('./src/routes/productRoutes');
const cartRoutes = require('./src/routes/cartRoutes');
const checkoutRoutes = require('./src/routes/checkoutRoutes');

const app = express();

// CORS
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Body parsing
app.use(express.json());

// Request logger
app.use(requestLogger);

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: nodeEnv, timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: `Route ${req.method} ${req.originalUrl} not found` });
});

// Global error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} in ${nodeEnv} mode`);
});
