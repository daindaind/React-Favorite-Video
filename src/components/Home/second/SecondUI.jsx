import { useRef } from "react";
import dummyMovies from "../../../data/dummyMovies";
import useIntersectionObsever from "../../../hooks/useIntersectionObsever";
import MoviePoster from "../../Moives/moviePoster/MoviePoster";
import styles from "./SecondUI.module.css";

const SecondUI = () => {
  const ref = useRef(null);
  const isInViewport = useIntersectionObsever(ref);
  return (
    <div className={styles.Container} ref={ref}>
      <h1 className={isInViewport ? styles.Title : undefined}>
        나만 알고 싶은 작품을 소개하기.
      </h1>
      <h3 className={isInViewport ? styles.SubTitle : undefined}>
        내가 좋아하는 영화/드라마를 다른 사람과 공유해보세요
      </h3>
      <div className={isInViewport ? styles.Poster : undefined}>
        <MoviePoster movie={dummyMovies[4]} />

        <div className={isInViewport ? styles.BubblePosition1 : undefined}>
          <div className={styles.SpeechBubbleLeft}>
            <p className={styles.BubbleText}>
              이 영화에 대해 다른 사람과{"\n"}얘기하고 싶어 🤔
            </p>
          </div>
        </div>
        <div className={isInViewport ? styles.BubblePosition2 : undefined}>
          <div className={styles.SpeechBubbleRight}>
            <p className={styles.BubbleText}>내 취향을 공유하고 싶은데..</p>
          </div>
        </div>
      </div>

      <div
        className={
          isInViewport ? `${styles.Circle} ${styles.Circle1}` : undefined
        }
      />
      <div className={`${styles.Circle} ${styles.Circle2}`} />
    </div>
  );
};

export default SecondUI;
