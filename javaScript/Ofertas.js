const offers = [
  {
    name: "iPhone 14",
    oldPrice: "$999",
    newPrice: "$749",
    image:
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=500",
  },

  {
    name: "Samsung Galaxy S23",
    oldPrice: "$899",
    newPrice: "$649",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=500",
  },

  {
    name: "MacBook Air M2",
    oldPrice: "$1299",
    newPrice: "$999",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=500",
  },
];

const offersProducts = document.getElementById("offers-products");

offers.forEach((offer) => {
  offersProducts.innerHTML += `
  
    <div class="card">
      <img src="${offer.image}" alt="${offer.name}">
      <h3>${offer.name}</h3>
      <p>
        <span class="old-price">${offer.oldPrice}</span>
        ${offer.newPrice}
      </p>
    </div>

  `;
});
