import '../styles/productCard.css'

const ProductCard = ({ img,title, price, }) => {
  return (
    <div className='card'>
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div>
        <div className="product-info">
          <h4>{title}</h4>
          <p>{price}</p>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;