// ============ CAB COMPARISON ============
async function getCabPrices() {
  const pickup = document.getElementById("pickup").value.trim();
  const drop = document.getElementById("drop").value.trim();

  if (!pickup || !drop) {
    alert("Please enter both pickup and drop locations!");
    return;
  }

  const response = await fetch(`http://localhost:3000/api/cabs?pickup=${pickup}&drop=${drop}`);
  const data = await response.json();

  const container = document.getElementById("cab-results");
  container.innerHTML = "";

  data.forEach(cab => {
    container.innerHTML += `
      <div class="card">
        <h3>${cab.platform}</h3>
        <p>Estimated Fare: ₹${cab.price}</p>
        <button onclick="bookCab('${cab.platform}')">Book on ${cab.platform}</button>
      </div>`;
  });
}

function bookCab(platform) {
  alert(`Redirecting to ${platform} booking page...`);
}

// ============ GROCERY COMPARISON ============
async function getGroceryPrices() {
  const product = document.getElementById("product").value.trim();
  if (!product) {
    alert("Please enter a product name!");
    return;
  }

  const response = await fetch(`http://localhost:3000/api/grocery?product=${product}`);
  const data = await response.json();

  const container = document.getElementById("grocery-results");
  container.innerHTML = "";

  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.platform}</h3>
        <p>${product}</p>
        <p>Price: ₹${item.price}</p>
        <p>Status: ${item.stock ? '✅ Available' : '❌ Out of Stock'}</p>
        <button ${item.stock ? "" : "disabled"} onclick="orderItem('${item.platform}')">
          Order from ${item.platform}
        </button>
      </div>`;
  });
}

function orderItem(platform) {
  alert(`Redirecting to ${platform} grocery store...`);
}
