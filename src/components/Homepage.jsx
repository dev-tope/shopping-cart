import { Link } from "react-router-dom"

const Homepage = () => {

  const navToShop = () => {

  }

  return (
    <div>
      <h2>Store Name</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Vero natus veniam repellat voluptates, vitae, aut eligendi 
        blanditiis labore dolorum, deleniti facere vel iste voluptatibus 
        accusantium quidem assumenda nam ad necessitatibus.
      </p>
      <button><Link to="shop">Shop Now</Link></button>
    </div>
   
  )
}

export default Homepage