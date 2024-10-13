import '../styles/productCard.css'

const ProductCard = ({ onClick, id, img,title, price, }) => {
  return (
    <div className='card'>
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div>
        <div className="product-info">
          <h4>{title}</h4>
          <p>${price}</p>
        </div>
        <button onClick={onClick}>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;