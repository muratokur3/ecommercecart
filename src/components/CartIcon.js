import React from 'react'

function CartIcon(props) {
  return (
    <button id='cart-icon' onClick={props.toggleCart}>
       <i className="fa-brands fa-opencart fa-xl" ><div className='cartCount'>{props.totalQuantity}</div></i>
    </button>
  )
}

export default CartIcon