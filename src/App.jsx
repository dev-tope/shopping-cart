import { useParams } from 'react-router-dom'

import Header from './components/Header'
import Homepage from './components/Homepage'
import ShopPage from './components/ShopPage'
import Footer from './components/Footer'
import './App.css'



function App() {
  const { name } = useParams()

  return (
    <div className='app'>
      <Header />
      {name === "shop" ? (
        <ShopPage />
      ) : (
        <Homepage />
      )}
      <Footer />
    </div>
  )
}

export default App
