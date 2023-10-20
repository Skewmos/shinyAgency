import CardFreelance from "../../components/CardFreelance";
import styles from "./index.module.sass";

const freelances =  [
  {
    "type": "fullstack",
    "firstName": "John",
    "lastName": "Doe",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "front-end",
    "firstName": "Jane",
    "lastName": "Smith",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "back-end",
    "firstName": "Michael",
    "lastName": "Johnson",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "cybersecurity",
    "firstName": "Emily",
    "lastName": "Brown",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "devops",
    "firstName": "David",
    "lastName": "Lee",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "fullstack",
    "firstName": "Sarah",
    "lastName": "Wilson",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "front-end",
    "firstName": "Robert",
    "lastName": "Martinez",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "back-end",
    "firstName": "Mia",
    "lastName": "Garcia",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "cybersecurity",
    "firstName": "Daniel",
    "lastName": "Clark",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "devops",
    "firstName": "Olivia",
    "lastName": "Lopez",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "fullstack",
    "firstName": "William",
    "lastName": "Taylor",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "front-end",
    "firstName": "Ava",
    "lastName": "Adams",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "back-end",
    "firstName": "Ethan",
    "lastName": "Harris",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "cybersecurity",
    "firstName": "Sophia",
    "lastName": "Turner",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  },
  {
    "type": "devops",
    "firstName": "Liam",
    "lastName": "Parker",
    "imgProfile": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  }
];

const Freelance = () => {
  return (
   <section className={styles.freelanceProfile}>
      <div className={styles.textBox}>
        <h3>Trouvez votre prestataire</h3>
        <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
      </div>
      <div className={styles.gridContainer}>
        { freelances.map(freelance => (
              <CardFreelance freelance={freelance} />
          ))}
      </div>
    </section>
  );
};

export default Freelance;