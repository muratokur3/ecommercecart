import React from "react";

function CartDetailsView({ cart, total,decreaseCartItemQuantity,totalQuantity}) {
  
  return (
    <div>
      <div id="cart-detail">
        <table>
          <thead>
            <tr>
              <th>Ürün</th>
              <th>Fiyat</th>
              <th>Miktar</th>
              <th>Ara Toplam</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => 
              <tr key={item.id}>
                <td>
                  <i onClick={()=>decreaseCartItemQuantity(item)} className="fa-solid fa-circle-minus"></i>{" "}
                  <i
                    className="fa-solid fa-image fa-2xl"
                    style={{ color: "#fecb3e" }}
                  ></i>
                  {item.name}
                </td>
                <td>{item.price}</td>
                <td>
                 {item.productQuantity}
                </td>
                <td>{item.productQuantity*item.price}</td>
              </tr>
            )}
          </tbody>
          <thead>
            <tr
              style={{ color: "red", textAlign: "center", fontWeight: "800" }}
            >
              <td></td>
              <td></td>
              <td>Total Product Quantity : {totalQuantity}</td>
              <td>Cart Total Price : {total}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default CartDetailsView;
