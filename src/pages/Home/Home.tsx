import styles from "./index.module.sass";
import home from "../../assets/home.svg";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context/themeContext";

const Home =  () => {
   const {theme} = useContext(ThemeContext);
   
  return (
    <>
      <div className={`${styles.jumbotron} ${theme === 'dark' ? styles.jumbotronDark : ''}`}>
        <section className={styles.text}>
          <h3 className={`${styles.subtitle} ${theme === 'dark' ? styles.subtitleLight : ''}`}>
          Repérez vos besoins,
          on s’occupe du reste, avec les meilleurs talents
          </h3>
         <button className={styles.button}>
          Faire le teste
         </button>
        </section>
        <section className={styles.image}>
          <img src={home} alt="home img"/>
        </section>
      </div>
    </>
  );
};

export default Home;