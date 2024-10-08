import { Children } from "react";
import App from "./App";
import ShopPage from "./components/ShopPage";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "shop",
    element: <ShopPage />,
  }
]

export default routes