import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import CartPage from "./CartPage";
import '../styles/shopPage.css'
import Header from "./Header"

const ShopPage = () => {
  const { products, error, loading} = useProducts();

  const [categories, setCategories] = useState(null);

  const [cart, setCart] = useState([])

  const [cartView, setCartView] = useState(false)

  function changeCategory(name) {
    setCategories(name)
  }

  function openCart() {
    setCartView(prevState => !prevState)
  }

  function addItemToCart(newItem) {
    setCart((prevCart) => {
      const itemExists = prevCart.some((item) => item.id === newItem.id);
      if(itemExists) {
        return prevCart;
      }
      return [...prevCart, {...newItem, quantity: 1}]
    });
  }

  if(loading) return <p>Loading...</p>
  if(error) return <p>There was an error loading resources</p>

  // console.log(products)

  console.log(cart)
  return (
    <div className="shop-page">
      <div className="shop-div">
        <nav className="shop-nav">
          <button id="all" onClick={() => changeCategory(null)}>All Products </button>
          <button id="electronics" onClick={() => changeCategory('electronics')}>Electronics</button>
          <button id="jewelery" onClick={() => changeCategory('jewelery')}>Jewelery</button>
          <button id="men's clothing" onClick={() => changeCategory("men's clothing")}>Men's Clothing</button>
          <button id="women's clothing" onClick={() => changeCategory("women's clothing")}>Women's Clothing</button>
          <Link to="cart"><button>Cart <span> : {cart.length}</span></button></Link>
        </nav>
        <div className="shop-main">
          {products
            .filter(item => !categories || item.category === categories)
            .map((item, index) => {
              return <ProductCard 
                id={item.id}
                key={index}
                img={item.img}
                title={item.title} 
                price={item.price}
                onClick={() => addItemToCart(item)}
              />
          })}
        </div>
      </div>
      <div id="cart-div">
        <Outlet context={ [cart, setCart] }/>
      </div>
    </div>
  )
}



export default ShopPage