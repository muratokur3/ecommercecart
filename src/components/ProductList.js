import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([
    { id: 0, name: "Süt", price: 25 },
    { id: 2, name: "Kahve", price: 50 },
    { id: 3, name: "Çay", price: 15 },
    { id: 4, name: "Şeker", price: 35 },
    { id: 5, name: "Filtre", price: 85 },
    { id: 6, name: "Çiçek", price: 200 },
    { id: 7, name: "Krema", price: 300 },
    { id: 8, name: "Parfüm", price: 400 },
    { id: 9, name: "Çikolata", price: 20 },
  ]);
//   const [cartCount, setCartCount] = useState(0);

//   const [cart, setCart] = useState([]);
  
  
  return (
    <div id="product">
      {products.map((product) => (
        <div className="product-cart">
          <i
            className="fa-solid fa-image fa-2xl"
            style={{ color: "#fecb3e" }}
          ></i>
          <p>{product.name}</p>
          <h3>{product.price}.00 ₺</h3>
          <button className="add-cart">
            Add Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
