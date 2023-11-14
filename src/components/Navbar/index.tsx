import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./index.module.sass";
import ColorTheme from '../ColorTheme/index';
import { useContext } from "react";
import { ThemeContext } from "../../utils/context/themeContext";

const Navbar = () => {
  const location = useLocation();
  const { theme, logo } = useContext(ThemeContext);


  const isActive = (route: string) => {
    return location.pathname === route;
  };
  
  return (
    <>
    <nav className={`${styles.navbar} ${theme === 'dark' ? styles.navbarDark : ''}`}>
        <img src={logo} className={styles.logo} alt="Shiny Agency logo" />
        <ul className={styles.navItems}>
            <NavLink to={"/"} className={`${styles.navItem} ${theme === 'dark' ? styles.navItemDark : ''}`}>
                <li className={`${styles.navItem} ${theme === 'dark' ? styles.navItemDark : ''}`}>
                Accueil
                </li>
            </NavLink>     
          
            <NavLink to={"/freelance"} className={`${styles.navItem} ${theme === 'dark' ? styles.navItemDark : ''}`}>
              <li className={`${styles.navItem} ${theme === 'dark' ? styles.navItemDark : ''}`}>
                Profils
              </li> 
            </NavLink>  
         
          <li className={`${styles.navItem} ${theme === 'dark' ? styles.navItemDark : ''}`}>
            <NavLink to={"/survey/1"}>
                <button className={styles.button}>
                  Faire le test
                </button>
            </NavLink>
          </li>
          <li>
           <ColorTheme/>
          </li>
        </ul>
    </nav>
    <div className={styles.container} style={{ backgroundColor: theme === "dark" ? "#2F2E41" : "#FFF" }}>
      <Outlet/>
    </div>
    </>

  );
};

export default Navbar;