import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error";
import Survey from "../pages/Survey/Survey";
import Nav from "../components/Navbar";
import Freelance from "../pages/Freelance/Freelance";


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
      path:"/survey/:questionNumber",
      element: <Survey/>,
      errorElement: <Error/>
    }
    ,
    {
      path:"/freelance",
      element: <Freelance/>,
      errorElement: <Error/>
    }
  ]
 }
]);

export default router;