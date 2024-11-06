import { Link } from "react-router-dom";
import styles from "../styles/homepage.module.css"


const Homepage = () => {

  return (
    <div className={`${styles.homepage}`}>
      
      <div className={`${styles.left}`}>
        <div className={`${styles.inner}`}>
          <h2>UrbanAura</h2>
          <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Vero natus veniam repellat voluptates, vitae, aut eligendi 
            blanditiis labore dolorum, deleniti facere vel iste voluptatibus 
            accusantium quidem assumenda nam ad necessitatibus.
          </p>
          <Link to="shop"><button>Shop Now</button></Link>
        </div>
      </div> 
    
      <div className={`${styles.right}`}>
        <div className={`${styles.img}`}>
            img
        </div>
      </div>
     
    </div>
   
  )
}

export default Homepage