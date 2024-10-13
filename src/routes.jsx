import { Children } from "react";
import App from "./App";
import ShopPage from "./components/ShopPage";
import ErrorPage from "./components/ErrorPage";
import CartPage from "./components/CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "shop",
    element: <ShopPage />,
    children: [
      {
        path: "cart",
        element: <CartPage />
      }
    ]
  },
  
]

export default routes