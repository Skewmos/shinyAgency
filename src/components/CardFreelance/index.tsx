import CardFreelanceProps from '../../type/cardFreelancecomponent';
import styles from "./index.module.sass";

const CardFreelance: React.FC<CardFreelanceProps>  = (props) => {
  const { freelance } =  props;
  
  return (
    <>
      <div className={`${styles.cardFreelance} ${styles.cardProperties}`}>
        <span className={styles.textType}>{freelance.type}</span>
        <img
          alt={freelance.firstName + freelance.lastName + "image"}
          className={styles.image}
          src={freelance.imgProfile}
        />
        <h5 className={styles.identity}>
          {freelance.firstName} {freelance.lastName}
        </h5>
         
      </div>
    </>
  ); 
};

export default CardFreelance