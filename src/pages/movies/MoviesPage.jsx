import { useNavigate } from "react-router-dom";
import MoviePosterSlider from "../../components/Moives/moviePosterSlider/MoviePosterSlider";
import Button from "../../components/common/button/Button";
import styles from "./MoviesPage.module.css";
import { PAGE_URL } from "../../constants/router";
import { useEffect, useState } from "react";
import dummyMovies from "../../data/dummyMovies";

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/${PAGE_URL.POST}`);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.Container}>
        <p>로딩 중입니다..</p>
      </div>
    );
  }

  return (
    <div className={styles.Container}>
      <h3 className={styles.Title}>내가 가장 좋아하는 작품들</h3>
      <h5 className={styles.Description}>당신의 작품을 공유해주세요.</h5>
      <div className={styles.Button}>
        <Button label="create your post" onClick={handleButtonClick} />
      </div>
      <MoviePosterSlider movieData={dummyMovies} />
    </div>
  );
};

export default MoviesPage;
