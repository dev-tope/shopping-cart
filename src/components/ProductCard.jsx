import styles from "../styles/productcard.module.css"

const ProductCard = ({ onClick, id, img, title, price, description }) => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.prodImg}`}>
        <img src={img} alt={description}/>
      </div>
      <div className={`${styles.lowerCard}`}>
        <div className={`${styles.prodDetails}`}>
          <h4>{title}</h4>
          <p>${price}</p>
        </div>
        <button onClick={onClick} className={styles.addToCartBtn}>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;