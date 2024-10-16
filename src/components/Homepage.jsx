import { Link } from "react-router-dom";
import styles from "../styles/homepage.module.css"

const Homepage = () => {

  return (
    <div className={`${styles.homepage}`}>
      <div className={`${styles.left} ${"bg"}`}>
        <div className={`${styles.innerLeft}`}>
          <h2 className="fontXL bold hd">UrbanAura</h2>
          <p className={`${styles.p} ${"fontM"} ${"pg"}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Vero natus veniam repellat voluptates, vitae, aut eligendi 
            blanditiis labore dolorum, deleniti facere vel iste voluptatibus 
            accusantium quidem assumenda nam ad necessitatibus.
          </p>
          <Link to="shop"><button className={`${"btn"} ${"hd"} ${"fontM"} ${"bold"} ${styles.button}`}>Shop Now</button></Link>
        </div>
        
      </div>
      <div className={`${styles.right} ${"bg"}`}>
        <div className={styles.bgImg}>

        </div>
      </div>
     
    </div>
   
  )
}

export default Homepage