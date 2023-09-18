import React, { useEffect, useState } from "react";
import Navigate from "./Navigate";
import CartDetailsView from "./CartDetailsView";
import Cart from "./Cart";

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
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartOpenClose, setcartOpenClose] = useState(false);
  const [cartDetailOpened, setCartDetailOpened] = useState(true);
  const addCart = (product) => {
    const urunvarmi = cart.find((item) => item.id === product.id);
    if (urunvarmi) {
      const ubdateCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, productQuantity: item.productQuantity + 1 }
          : item
      );
      setCart(ubdateCart);
    } else {
      setCart([...cart, { ...product, productQuantity: 1 }]);
    }
    let cartSayi = cartCount + 1;
    setCartCount(cartSayi);
  };

  const removeCart = (product) => {
    setCart(cart.filter((cart) => cart.id !== product.id));
  };

  const decreaseCartItemQuantity = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        if(item.productQuantity>1)
        {
          return { ...item, productQuantity: item.productQuantity - 1 };
        }
          return false
      }
      return item;
    });

    setCart(updatedCart);
    console.log(cart);
  };

  const toggleCart = () => {
    setcartOpenClose(!cartOpenClose);
  };

  const cartDetailView = () => {
    setcartOpenClose(!cartOpenClose);

    setCartDetailOpened(!cartDetailOpened);
  };

  useEffect(() => {
    let toplamFiyat = 0;
    setCartCount(cart.length);
    cart.map((cart) => (toplamFiyat += cart.price * cart.productQuantity));
    setTotal(toplamFiyat);
  }, [cart]);

  return (
    <div>
      <Navigate
        cart={cart}
        total={total}
        cartCount={cartCount}
        removeCart={removeCart}
        toggleCart={toggleCart}
        cartOpenClose={cartOpenClose}
        cartDetailView={cartDetailView}
      />
      <div id="product">
        {products.map((product) => (
          <div key={products.id} className="product-cart">
            <i
              className="fa-solid fa-image fa-2xl"
              style={{ color: "#fecb3e" }}
            ></i>
            <p>{product.name}</p>
            <h3>{product.price}.00 ₺</h3>
            <button onClick={() => addCart(product)} className="add-cart">
              Add Cart
            </button>
          </div>
        ))}
      </div>

      <CartDetailsView
        cart={cart}
        total={total}
        cartCount={cartCount}
        decreaseCartItemQuantity={decreaseCartItemQuantity}
      />
    </div>
  );
}

export default ProductList;
