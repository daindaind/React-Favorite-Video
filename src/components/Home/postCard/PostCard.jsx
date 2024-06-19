import styles from "./PostCard.module.css";

const PostCard = ({ image, creator, summary }) => {
  return (
    <div className={styles.Container}>
      <img src={image} className={styles.ImageBg} />
      <div className={styles.ContentBg} />
      <div className={styles.ContentsContainer}>
        <p>Create By.</p>
        <p className={styles.Creater}>{creator}</p>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default PostCard;
