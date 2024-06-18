import MovieGraditent from "../movieGradient/MovieGraditent";
import styles from "./MoviePosterSlider.module.css";
import useHover from "../../../hooks/useHover";

const MoviePosterSlider = ({ movieData }) => {
  const { ref, handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  return (
    <div className={styles.Container}>
      <div
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${styles.MovieContainer} ${
          isHovered ? styles.hovered : ""
        }`}
      >
        {movieData.map((movie, _) => (
          <div
            key={movie.id}
            style={{ margin: "10px 10px 10px 0", paddingLeft: "25px" }}
          >
            <MovieGraditent movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePosterSlider;
