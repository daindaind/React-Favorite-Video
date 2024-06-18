import styles from "./MovieGraditent.module.css";

const MovieGraditent = ({ movie }) => {
  const { image, title, slug } = movie;

  return (
    <div className={styles.Container}>
      <img src={image} alt={slug} />
      <h5>{title}</h5>
      <p>{slug}</p>
    </div>
  );
};

export default MovieGraditent;
