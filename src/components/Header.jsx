import { useState } from "react";
import AppNav from "./AppNav";
import styles from "../styles/header.module.css"
import navStyles from "../styles/appNav.module.css"



const Header = ({ cartLength, iconClick }) => {
  return (
    <div className={`${styles.header} ${navStyles.header}`}>
      <div className={`${styles.title}`}>
        <h1>UrbanAura</h1>
      </div>
      <div>
        <AppNav/>
      </div>
      <div className={`${styles.cart}`}>
        <img src="./cart.png" alt="cat icon" className={`${styles.img}`} onClick={iconClick}/>
        {
          cartLength > 0 &&
          <div className={`${styles.cartItemCount}`} ><div>{cartLength}</div></div>
        }
      </div>
    </div>
  )
}

export default Header;