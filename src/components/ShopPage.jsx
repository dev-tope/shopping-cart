import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import '../styles/shopPage.css'


const ShopPage = () => {
  const { products, error, loading} = useProducts()

  if(loading) return <p>Loading...</p>
  if(error) return <p>There was an error loading resources</p>

  console.log(products)
  return (
    <div className="shop-page">
      <nav className="shop-nav">
        <button>All Products</button>
        <button>Electronics</button>
        <button>Jewelery</button>
        <button>Men's Clothing</button>
        <button>Women's Clothing</button>
      </nav>
      <div className="shop-main">
        {products.map((item, index) => {
          return <ProductCard 
            key={index}
            img={item.img}
            title={item.title} 
            price={item.price} />
        })}
      </div>
    </div>
  )
}

export default ShopPage