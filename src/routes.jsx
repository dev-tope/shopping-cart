import { Children } from "react";
import App from "./App";
import Homepage from "./components/Homepage";
import ShopPage from "./components/ShopPage";
import ErrorPage from "./components/ErrorPage";
import CartPage from "./components/CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: "/:name",
  //   element: <Homepage />
  // },
  {
    path: "/:name",
    element: <App />,
    children: [
      {
        path: "cart",
        element: <CartPage />
      }
    ]
  },
  
]

export default routes