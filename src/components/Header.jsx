import { useState } from "react";
import CartImg from "./Cart";
import AppNav from "./AppNav"

import styles from "../styles/header.module.css"
import navStyles from "../styles/appNav.module.css"

const Header = () => {
  return (
    <div className={`${styles.headerDiv} ${navStyles.header} ${"bg"}`} >
      <div>
        <h1 className="fontXL bold hd">UrbanAura</h1>
      </div>
      <div className={`${styles.headerNav}`}>
        <AppNav/>
      </div>
      <div>
        <CartImg />
      </div>
    </div>
  )
}

export default Header;