const CartCard = ( {title, price, quantity, decrease, increase, remove} ) => {

  return (
    <div className="cart-card">
      <div className="product-image">

      </div>
      <div className="product-info">
        <div>
          {title}
          {price}
        </div>
        <div className="product-quantity">
          <button onClick={decrease}> - </button> 
          <div>{ quantity }</div>
          <button onClick={increase}> + </button>
          <button onClick={remove}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartCard;