import styles from "../styles/cartcard.module.css"

const CartCard = ( {title, img, price, description,  quantity, decrease, increase, remove} ) => {

  return (
    <div className={`${styles.cartCard}`}>
      <div className={`${styles.prodImg}`}>
        <img src={img} alt={description} className={`${styles.img}`} />
      </div>
      <div className={`${styles.prodInfo}`}>
        <div className={`${styles.prodDetails}`}>
          <div>{title}</div>
          <div>${price}</div>
        </div>
        <div className={`${styles.lower}`}>
          <div className={`${styles.remove}`}>
            <button onClick={remove}>Remove</button>
          </div>
          <div className={`${styles.prodQuantity}`}>
            <button onClick={decrease}> - </button> 
            <div className={`${styles.num}`}>{ quantity }</div>
            <button onClick={increase}> + </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard;