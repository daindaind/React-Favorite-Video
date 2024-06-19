import dummyMovies from "../../../data/dummyMovies";
import MoviePoster from "../../Moives/moviePoster/MoviePoster";
import styles from "./FirstUI.module.css";

const FirstUI = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>
        모두의 <span>인생작</span> 전부 여기에서.
      </h1>
      <h3 className={styles.SubTitle}>나만의 모든 Movie, Drama, Animation</h3>
      <div className={styles.MovieCardContainer} />
      <div className={`${styles.Card} ${styles.Card1}`}>
        <MoviePoster movie={dummyMovies[0]} />
      </div>
      <div className={`${styles.Card} ${styles.Card2}`}>
        <MoviePoster movie={dummyMovies[6]} />
      </div>
      <div className={`${styles.Card} ${styles.Card3}`}>
        <MoviePoster movie={dummyMovies[2]} />
      </div>
    </div>
  );
};

export default FirstUI;
