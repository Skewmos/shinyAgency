import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../../utils/utils";
import { Link, useParams } from "react-router-dom";
import styles from './index.module.sass';
import Loader from "../../components/Loader";

type SurveyData = {
  surveyData?: {
    [key: string | number]: string;
  };
};

const Answers = () => {
  return (
    <>
        <section className={styles.answerContainer}>
          <button className={styles.answerButton}> Oui</button>
          <button className={styles.answerButton}> Non</button>
        </section>
    </>
  )
}

const Survey = () => {
  const { questionNumber } = useParams();
  const questionNumberInt: number  = questionNumber ? parseInt(questionNumber) : 0;
  const prevQuestionNumber: number = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber: number = questionNumberInt + 1;
  const [surveyData, setSurveyData] = useState<SurveyData>({});
  const [isDataLoading, setDataLoading] = useState<Boolean>(false);

  useEffect(() => {
    setDataLoading(true);

    axios.get(apiUrl+'/survey')
    .then((response) => { 
        const { surveyData } = response.data;
        setSurveyData(surveyData);
        setDataLoading(false);
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des données :', error);
      setDataLoading(false);
    });
  }, [])
  
  return (
    <>
      <section className={styles.surveyContainer}>
        <h3 className={styles.underline}>Question {questionNumber} </h3>
        {isDataLoading ? (
          <div className={styles.surveyLoader}>
            <Loader />
          </div>
        ) : (
          <>
            <span className={styles.surveyContent}>
              { questionNumber && surveyData[questionNumber]}
            </span>
            <Answers/>
          </>
        )}

       
        <div className={styles.paginationWrapper}>
        <Link to={`/survey/${prevQuestionNumber}`} className={styles.linkPagination}>Précédent</Link>
          {surveyData[questionNumberInt + 1] ? (
            <Link to={`/survey/${nextQuestionNumber}`} className={styles.linkPagination}>Suivant</Link>
          ) : (
            <Link to="/results" className={styles.linkPagination}>Résultats</Link>
          )}
        </div>
      </section>
    </>
  );
};

export default Survey;