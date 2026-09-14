# VoltEdge Backend

The REST API backend for **VoltEdge**, a premium electronics e-commerce store. Built with Node.js and Express.

## Tech Stack
- **Node.js + Express** — lightweight REST API
- **UUID** — unique identifiers for products, cart items, and orders
- In-memory data store (no external DB required)

## Folder Structure
```
backend/
├── src/
│   ├── controllers/    # products, cart, checkout request handlers
│   ├── models/         # products.js (mock catalog), cart.js (in-memory cart + pricing)
│   ├── routes/         # productRoutes, cartRoutes, checkoutRoutes
│   ├── middleware/     # errorHandler, requestLogger
│   └── config/         # env.js (port, nodeEnv)
├── server.js           # Express app entry
├── .env
└── package.json
```

## API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | List all products. Supports `category`, `brand`, `minPrice`, `maxPrice`, `search`, `sort` (`price-asc`, `price-desc`, `rating`, `name`), `page`, `limit`. |
| `GET` | `/api/products/:id` | Fetch a single product with full specs, gallery, and variants. |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/cart` | Fetch current cart with calculated totals. |
| `POST` | `/api/cart/add` | Add item `{ productId, quantity, variant }`. |
| `PUT` | `/api/cart/update/:itemId` | Update item quantity. |
| `DELETE` | `/api/cart/remove/:itemId` | Remove an item. |
| `DELETE` | `/api/cart/clear` | Empty the cart. |

### Checkout
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/checkout` | `{ customer, paymentMethod, cardLast4 }` → validates, generates an invoice, returns a structured receipt, and clears the cart. |

## Pricing Logic
- **Cart totals** computed server-side: subtotal, tiered discount (5% over $500, 10% over $1000), 8.5% tax, and free shipping over $499 (otherwise $29).

## Getting Started
```bash
npm install
npm run dev      # nodemon with auto-reload
# or
npm start        # plain node
```
The server runs on `http://localhost:5000` (configurable via `PORT` in `.env`). CORS is configured for the frontend at `http://localhost:5173`.
