import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Shared/Footer/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[

        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/ourMenu",
          element:<OurMenu></OurMenu>
        },
        {
          path:"/order",
          element:<Order></Order>
        }
       
      ]
    },
  ]);

  export default router;