import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./index.module.sass";

const Navbar = () => {
  const location = useLocation();

  const isActive = (route: string) => {
    return location.pathname === route;
  };
  
  return (
    <>
    <nav className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="Shiny Agency logo" />
        <ul className={styles.navItems}>
            <NavLink to={"/"} className={styles.navItem}>
                <li className={styles.navItem}>
                Accueil
                </li>
            </NavLink>     
          
            <NavLink to={"/freelance"} className={styles.navItem}>
              <li className={styles.navItem}>
                Profils
              </li> 
            </NavLink>  
         
          <li className={styles.navItem}>
            <NavLink to={"/survey"}>
                <button className={styles.button}>
                  Faire le test
                </button>
            </NavLink>
          </li>
        </ul>
    </nav>
    <div className={styles.container}>
      <Outlet/>
    </div>
    </>

  );
};

export default Navbar;