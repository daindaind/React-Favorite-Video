import dummyMovies from "../../../data/dummyMovies";
import MoviePoster from "../../Moives/moviePoster/MoviePoster";
import styles from "./SecondUI.module.css";

const SecondUI = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>나만 알고 싶은 작품을 소개하기.</h1>
      <h3 className={styles.SubTitle}>
        내가 좋아하는 영화/드라마를 다른 사람과 공유해보세요
      </h3>
      <div className={styles.Poster}>
        <MoviePoster movie={dummyMovies[4]} />

        <div className={styles.BubblePosition1}>
          <div className={styles.SpeechBubbleLeft}>
            <p className={styles.BubbleText}>
              이 영화에 대해 다른 사람과{"\n"}얘기하고 싶어
            </p>
          </div>
        </div>
        <div className={styles.BubblePosition2}>
          <div className={styles.SpeechBubbleRight}>
            <p className={styles.BubbleText}>내 취향을 공유하고 싶은데..</p>
          </div>
        </div>
      </div>

      <div className={`${styles.Circle} ${styles.Circle1}`}></div>
      <div className={`${styles.Circle} ${styles.Circle2}`}></div>
    </div>
  );
};

export default SecondUI;
