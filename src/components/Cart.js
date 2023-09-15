import React from "react";

function Cart(props) {
  return props.cartOpenClose ? (
    <div id="cart-card">
      <table id="cart-table">
        <thead>
          <tr>
            <th>Count</th>
            <th>Name</th>
            <th>Price</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => (
            <tr>
              <td>{props.cartCount}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <i
                style={{ color: "black", right: 4 }}
                class="fa-regular fa-trash-can"
                onClick={() => {
                  props.removeCart(item);
                }}
              ></i>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
      <h3>Toplam : {props.total} ₺</h3>
    </div>
  ) : (
    ""
  );
}

export default Cart;
