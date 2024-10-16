import { Link } from "react-router-dom";
import styles from "../styles/appNav.module.css";

const AppNav = () => {
  return (
  <nav className={`${styles.appNav}`}>
    <ul>
      <li><Link to=".." className={`${"noTd"} ${styles.link}`}>Home</Link></li>
      <li><Link to="" className={`${"noTd"} ${styles.link}`}>Shop</Link></li>
      <li><Link to="" className={`${"noTd"} ${styles.link}`}>Products</Link></li>
      <li><Link to="" className={`${"noTd"} ${styles.link}`}>About</Link></li>
    </ul>
  </nav>
  )
}

export default AppNav;