import styles from "./index.module.sass";
import home from "../../assets/home.svg";

const Home =  () => {
  return (
    <>
      <div className={styles.jumbotron}>
        <section className={styles.text}>
          <h3 className={styles.subtitle}>
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