const CartImg = ({ orderCount }) => {
  return (
    <div className="cart-img">
      <div className="order-count">Cart {orderCount}</div>
    </div>
  )
}

export default CartImg;