import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import CartPage from "./CartPage";
import Header from "./Header"

import styles from "../styles/shoppage.module.css"

const ShopPage = ({cart, setCart, onAddToCart, isCartOpened }) => {
  const { products, error, loading} = useProducts();

  const [categories, setCategories] = useState(null);

  // const [cart, setCart] = useState([])

  

  function changeCategory(name) {
    setCategories(name)
  }
  

  // function addItemToCart(newItem) {
  //   setCart((prevCart) => {
  //     const itemExists = prevCart.some((item) => item.id === newItem.id);
  //     if(itemExists) {
  //       return prevCart;
  //     }
  //     return [...prevCart, {...newItem, quantity: 1}]
  //   });
  // }

  if(loading) return <p>Loading...</p>
  if(error) return <p>There was an error loading resources</p>

  console.log(products)

  console.log("is cart opened", isCartOpened)

  // console.log(cart)
  return (
    <div className={`${styles.shopDiv}`}>
      <div className={`${styles.left}`}>
        <div className={`${styles.leftNavDiv}`}>
          <nav>
            <button id="all" onClick={() => changeCategory(null)}>All Products </button>
            <button id="electronics" onClick={() => changeCategory('electronics')}>Electronics</button>
            <button id="jewelery" onClick={() => changeCategory('jewelery')}>Jewelery</button>
            <button id="men's clothing" onClick={() => changeCategory("men's clothing")}>Men's Clothing</button>
            <button id="women's clothing" onClick={() => changeCategory("women's clothing")}>Women's Clothing</button>
          </nav>
          <nav>
            {/* <Link to="cart" onClick={() => toggleCartView()}><button>Cart <span> : {cart.length}</span></button></Link> */}
          </nav>
        </div>
        <div className={`${styles.productsDiv}`}>
          {products
            .filter(item => !categories || item.category === categories)
            .map((item, index) => {
              return <ProductCard 
                id={item.id}
                key={index}
                img={`${item.image}`}
                title={item.title} 
                price={item.price}
                onClick={() => onAddToCart(item)}
              />
          })}
        </div>
      </div>
      { isCartOpened &&
        <div id="cart-div">
          <CartPage cart={cart} setCart={setCart} />
        </div>
      }
    </div>
  )
}



export default ShopPage