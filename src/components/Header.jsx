import { useState } from "react";
import Cart from "./Cart";
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
        <Cart />
      </div>
    </div>
  )
}

export default Header;