import { useState } from "react";
import CartImg from "./Cart";
import AppNav from "./AppNav"

const Header = () => {
  return (
    <div>
      <div>
        <h1>Store Name</h1>
      </div>
      <div>
        <AppNav />
      </div>
      <div>
        <CartImg />
      </div>
    </div>
  )
}

export default Header;