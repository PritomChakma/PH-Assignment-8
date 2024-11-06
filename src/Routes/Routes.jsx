import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./../Layout/MainLayout";

import Dashboard from "./../Pages/Dashboard";
import Details from "./../Pages/Details";
import Home from "./../Pages/Home";
import Statistics from "./../Pages/Statistics";
import Cart from "./../components/Cart";
import Wishlist from "./../components/Wishlist";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: () => fetch("/categories.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/categories.json"),
      },

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
]);
export default routes;
