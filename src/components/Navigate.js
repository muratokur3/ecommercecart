import React from "react";
import CartIcon from "./CartIcon";
import Cart from "./Cart";

function Navigate(props) {

  return (
    <div id="navigate">
      <CartIcon
        cart={props.cart}
        toggleCart={props.toggleCart}
        cartCount={props.cartCount}
      />
      <Cart
        cart={props.cart}
        total={props.total}
        cartCount={props.cartCount}
        removeCart={props.removeCart}
        cartOpenClose={props.cartOpenClose}
      />
    </div>
  );
}

export default Navigate;
