import MoviePosterSlider from "../../components/Moives/moviePosterSlider/MoviePosterSlider";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  return (
    <div className={styles.Container}>
      <MoviePosterSlider />
    </div>
  );
};

export default MoviesPage;
