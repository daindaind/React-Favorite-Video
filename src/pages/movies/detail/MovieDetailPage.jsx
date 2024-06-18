import { useLocation, useParams } from "react-router-dom";
import styles from "./MovieDetailPage.module.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { state } = useLocation();

  return (
    <div className={styles.Container}>
      <div className={styles.InfoLayout}>
        <img src={state.image} className={styles.Img} />
        <div className={styles.Content}>
          <p className={styles.Title}>{state.title}</p>
          <p className={styles.Contents}>{state.creator}</p>
          <p className={styles.Contents}>{state.summary}</p>
        </div>
      </div>
      <div className={styles.Instructions}>
        <p className={styles.InstructionsText}>{state.instructions}</p>
      </div>
    </div>
  );
};

export default MovieDetailPage;
