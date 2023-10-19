import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Survey from "../pages/Survey";
import Nav from "../components/Navbar";


const router = createBrowserRouter([
 {
  path: "/",
  element: <Nav/>,
  children: [
    {
      path:"/",
      element: <Home/>,
      errorElement: <Error/>
    },
    {
      path:"/survey",
      element: <Survey/>,
      errorElement: <Error/>
    }
  ]
 }
]);

export default router;