import { Link } from "react-router-dom";
import styles from "../styles/appNav.module.css"


const AppNav = () => {
  return (
  <nav className={`${styles.appNav}`}>
    <ul>
      <li><Link to="..">Home</Link></li>
      <li><Link to="shop" >Shop</Link></li>
      <li><Link to="" >Products</Link></li>
      <li><Link to="" >About</Link></li>
    </ul>
  </nav>
  )
}

export default AppNav;