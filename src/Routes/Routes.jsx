import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Shared/Footer/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";


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
        }
       
      ]
    },
  ]);

  export default router;