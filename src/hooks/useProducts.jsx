import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if(res.status >= 400) {
          throw new Error("server error")
        } 
        return res.json()
      })
      .then(res => setProducts(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { products, error, loading }
}

export default useProducts;