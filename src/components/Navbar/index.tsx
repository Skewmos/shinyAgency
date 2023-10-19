import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
   <>
     <nav>
      <NavLink to={"/"}> Home</NavLink>
      <NavLink to={"/survey"}> Link</NavLink>
    </nav>
    <Outlet/>
   </>
)
};

export default Navbar;