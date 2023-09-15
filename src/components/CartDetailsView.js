import React from "react";

function CartDetailsView() {
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
            <tr>
              <td>
              <i class="fa-solid fa-circle-minus"></i>
                {" "}
                <i
                  className="fa-solid fa-image fa-2xl"
                  style={{ color: "#fecb3e" }}
                ></i>
                sütlü filtre kahve
              </td>
              <td>50 ₺</td>
              <td>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="5"
                />{" "}
              </td>
              <td>50 ₺</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartDetailsView;
