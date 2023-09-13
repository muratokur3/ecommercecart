import React from "react";

function Cart() {
  return (
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
          <tr>
            <td>4</td>
            <td>Süt</td>
            <td>34</td>
            <td>sil</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Süt</td>
            <td>34</td>
            <td>sil</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Süt</td>
            <td>34</td>
            <td>sil</td>
          </tr>
        </tbody>
        <tfoot>
          
        </tfoot>
      </table>
      <h3>total 500 ₺</h3>
    </div>
  );
}

export default Cart;
