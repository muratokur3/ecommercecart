import React from "react";

function Cart(props) {
  return props.cartOpenClose ? (
    <div id="cart-card">
      <table id="cart-table">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Name</th>
            <th>Price</th>
            <th>total price</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => (
            <tr key={item.id}>
              <td>{item.productQuantity}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.price*item.productQuantity}</td>
              <i
                style={{ color: "black", right: 4 }}
                className="fa-regular fa-trash-can"
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
      
      <button onClick={props.cartDetailView}>View Cart Detail Page</button>
    </div>
  ) : (
    ""
  );
}

export default Cart;
