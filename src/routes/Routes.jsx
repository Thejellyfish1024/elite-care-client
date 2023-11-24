import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/Home/Home";
import Main from "../layouts/MainLayout/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);