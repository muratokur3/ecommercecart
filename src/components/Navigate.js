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
        totalQuantity={props.totalQuantity}
      />
      <Cart
        cart={props.cart}
        total={props.total}
        removeCart={props.removeCart}
        cartOpenClose={props.cartOpenClose}
        cartDetailView={props.cartDetailView}
      />
    </div>
  );
}

export default Navigate;
