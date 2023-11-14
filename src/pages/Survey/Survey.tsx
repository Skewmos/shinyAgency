import { apiUrl } from "../../utils/utils";
import {useFetch} from "../../utils/hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import styles from './index.module.sass';
import Loader from "../../components/Loader";

interface ErrorProps {
  error: string;
}

const Answers = () => {
  return (
    <>
        <section className={styles.answerContainer}>
          <button className={styles.answerButton}> Oui</button>
          <button className={styles.answerButton}> Non</button>
        </section>
    </>
  );
};

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <>
      <span>
        <p>{error}</p>
      </span>
    </>
  );
};

const Survey = () => {
  const { questionNumber } = useParams();
  const questionNumberInt: number  = questionNumber ? parseInt(questionNumber) : 0;
  const prevQuestionNumber: number = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber: number = questionNumberInt + 1;
  const url = apiUrl + '/survey';
  const { data, isLoading, error } = useFetch({url: url});
  const surveyData = data ? data.surveyData : null;

  return (
    <>
      <section className={styles.surveyContainer}>
        {isLoading ? (
          <div className={styles.surveyLoader}>
            <Loader />
          </div>
        ) : (
          <>
          <h3 className={styles.underline}>Question {questionNumber} </h3>
            <span className={styles.surveyContent}>
              { surveyData && questionNumber && surveyData[questionNumber]}
            </span>
            { error ? (<Error error={error} />) : (<Answers/>)}
            <div className={styles.paginationWrapper}>
              <Link to={`/survey/${prevQuestionNumber}`} className={styles.linkPagination}>Précédent</Link>
                { surveyData && surveyData[questionNumberInt + 1] ? (
                  <Link to={`/survey/${nextQuestionNumber}`} className={styles.linkPagination}>Suivant</Link>
                ) : (
                  <Link to="/results" className={styles.linkPagination}>Résultats</Link>
                )}
           </div>
          </>
        )}
      </section>
    </>
  );
};

export default Survey;