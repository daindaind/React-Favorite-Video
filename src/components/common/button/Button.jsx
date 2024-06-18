import styles from "./Button.module.css";

const Button = ({ label, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      <p className={styles.Label}>{label}</p>
    </button>
  );
};

export default Button;
