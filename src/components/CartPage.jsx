import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";

import styles from "../styles/cartpage.module.css"

const CartPage = () => {
  const [cart, setCart] = useOutletContext();

  const [totalPrice, setTotalPrice] = useState(0);

  function increaseQuantity(item) {
    setCart((prevCart) => 
      prevCart.map(cartItem => 
      cartItem.id === item.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
        : cartItem
      )
    );
  }

  function decreaseQuantity(item) {
    setCart((prevCart) =>
      prevCart.map(cartItem =>
        cartItem.id === item.id && cartItem.quantity > 1 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  }

  function clearCart() {
    setCart([])
  }

  useEffect(() => {
    const total = cart.reduce((accum, item) => {
      return (accum + (item.price * item.quantity))
    }, 0)
    
    setTotalPrice(total.toFixed(2))
  }, [cart])

  // function getTotalPrice(cart) {
    
  // }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }
  return (
    <div className={`${styles.cartpage}`}>
      {cart.length === 0 ? 
        <div> 
          <h2>There are no items in your cart</h2> 
          <Link to=".."><button>Close Cart</button></Link>
        </div>  
        :
        <div>
          <div className={`${styles.title}`}>
            <h1>Items in your cart</h1>
            <Link to=".."><button>Close Cart</button></Link>
          </div>
          <div className={`${styles.cardsDiv}`}>
            {cart.map((item, index) => {
              console.log(item)
              if(!item) {
                console.log("no item in cart array")
                return null
              }
              return <CartCard 
                key={index}
                img={`${item.image}`}
                title={item.title} 
                price={item.price} 
                quantity={item.quantity}
                decrease={() => decreaseQuantity(item)}
                increase={() => increaseQuantity(item)}
                remove={() => removeFromCart(item.id)}
              />
            })
            }
          </div>
          <div className={`${styles.lower}`}>
            <br />
            <button onClick={() => clearCart()}>Clear Cart</button>
            <h3>Total: ${totalPrice}</h3>
            <button>Checkout</button>
          </div>
        </div>
    }
    </div>
  )
}

export default CartPage;