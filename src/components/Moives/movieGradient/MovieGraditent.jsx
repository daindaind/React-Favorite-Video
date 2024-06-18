import { useNavigate } from "react-router-dom";
import styles from "./MovieGraditent.module.css";
import { PAGE_URL } from "../../../constants/router";

const MovieGraditent = ({ movie }) => {
  const { image, title, slug, id } = movie;
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/${PAGE_URL.MOVIE_DETAIL}/${id}`, {
      state: movie,
    });
  };

  return (
    <div className={styles.Container} onClick={handleButtonClick}>
      <img src={image} alt={slug} />
      <h5>{title}</h5>
      <p>{slug}</p>
    </div>
  );
};

export default MovieGraditent;
