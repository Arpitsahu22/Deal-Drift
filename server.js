const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const { cabData, groceryData } = require('./mock_data');

app.use(cors());
app.use(express.json());

// Root test route
app.get('/', (req, res) => {
  res.send('Smart Comparison App Backend Running 🚀');
});

// CAB Endpoint
app.get('/api/cabs', (req, res) => {
  const { pickup, drop } = req.query;
  console.log(`Cab request: ${pickup} → ${drop}`);
  res.json(cabData);
});

// Grocery Endpoint
app.get('/api/grocery', (req, res) => {
  const { product } = req.query;
  console.log(`Grocery request: ${product}`);
  res.json(groceryData(product));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
