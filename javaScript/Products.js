const products = [
  {
    name: "iPhone 15",
    price: "$1200",
    image:
      "https://istuffcr.com/wp-content/uploads/2023/11/15s-01-Artboard-1-scaled.jpg",
  },

  {
    name: "Laptop Gamer",
    price: "$1800",
    image:
      "https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-scaled-1.jpg",
  },

  {
    name: "Audífonos RGB",
    price: "$150",
    image:
      "https://www.cyberpuerta.mx/img/product/M/CP-4GAMERS-XP-RGB-HSB-4G-de7755.jpg",
  },

  {
    name: "MacBook Pro M3",
    price: "$1999",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQZ_PcmsDhN4emM1aZftV42wch2lSS0-hvw&s",
  },

  {
    name: "iPad Pro M4",
    price: "$999",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500",
  },

  {
    name: "Razer Blade 16",
    price: "$2899",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=500",
  },

  {
    name: "Dell XPS 15",
    price: "$1450",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=500",
  },

  {
    name: "Microsoft Surface 5",
    price: "$1100",
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=500",
  },

  {
    name: "Apple Watch Ultra",
    price: "$799",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKW3if4_FQ4l3EPnwd80bIKhqcCfXoXMUEw&s",
  },

  {
    name: "Google Pixel Watch",
    price: "$349",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
  },

  {
    name: "Sony WH-1000XM5",
    price: "$380",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500",
  },

  {
    name: "Logitech G Pro X",
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=500",
  },

  {
    name: "AirPods Pro 2",
    price: "$249",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500",
  },

  {
    name: "JBL Flip 6",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=500",
  },

  {
    name: 'LG UltraGear 27"',
    price: "$350",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAP00-Tw5N6JOOhDecGfQAudQRrk7J0KCmrg&s",
  },

  {
    name: "Logitech MX Master 3S",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500",
  },

  {
    name: "RTX 4080 Super",
    price: "$1100",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=500",
  },

  {
    name: "Samsung 980 Pro 1TB",
    price: "$110",
    image:
      "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=500",
  },

  {
    name: "Sony A7 IV",
    price: "$2499",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500",
  },

  {
    name: "DJI Mavic 3",
    price: "$2100",
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=500",
  },

  {
    name: "Meta Quest 3",
    price: "$499",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtc7yREA5fguhtCnTJ8DNhMyRfx1MXbtoZKQ&s",
  },

  {
    name: "PlayStation 5",
    price: "$499",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=500",
  },

  {
    name: "Xbox Series X",
    price: "$499",
    image:
      "https://cms-assets.xboxservices.com/assets/f0/8d/f08dfa50-f2ef-4873-bc8f-bcb6c34e48c0.png?n=642227_Hero-Gallery-0_C2_857x676.png",
  },
];

const container  = document.getElementById("products");

products.forEach((product) => {
  container.innerHTML += `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    </div>
  `;
});