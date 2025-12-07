const cabData = [
  { platform: 'Ola', price: 220 },
  { platform: 'Uber', price: 240 },
  { platform: 'Rapido', price: 180 },
  { platform: 'InDrive', price: 200 }
];

function groceryData(product) {
  return [
    { platform: 'Zepto', price: Math.floor(Math.random() * 100) + 50, stock: Math.random() > 0.2 },
    { platform: 'Blinkit', price: Math.floor(Math.random() * 100) + 60, stock: Math.random() > 0.3 },
    { platform: 'BigBasket', price: Math.floor(Math.random() * 100) + 70, stock: Math.random() > 0.4 }
  ];
}

module.exports = { cabData, groceryData };
