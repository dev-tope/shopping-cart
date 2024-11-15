import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from './components/Header'
import Homepage from './components/Homepage'
import ShopPage from './components/ShopPage'
import Footer from './components/Footer'
import './App.css'



function App() {
  const [isCartOpened, setISCartOpened] = useState(false)

  const [cart, setCart] = useState([])
  
  const addItemToCart = (newItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.some((item) => item.id === newItem.id);
      if(itemExists) {
        return prevCart;
      }
      return [...prevCart, {...newItem, quantity: 1}]
    });
  }

  function toggleCartView() {
    setISCartOpened(prevState => !prevState)
  }

  const { name } = useParams()

  return (
    <div className="container">
      <Header cartLength={cart.length} iconClick={() => toggleCartView()}/>
      {name === "shop" ? (
        // <ShopPage isCartOpened={ isCartOpened } cart={ cart } onClick={() => addItemToCart(item)} />
        <ShopPage 
          cart={cart} 
          setCart={setCart}
          click = {() => toggleCartView()}
          onAddToCart={ addItemToCart } 
          isCartOpened={ isCartOpened }  
        />
      ) : (
        <Homepage />
      )}
      <Footer />
    </div>
  )
}

export default App
