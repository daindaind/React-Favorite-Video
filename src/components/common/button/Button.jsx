import styles from "./Button.module.css";

const Button = ({ label, onClick, type }) => {
  return (
    <button className={styles.Button} onClick={onClick} type={type}>
      <p className={styles.Label}>{label}</p>
    </button>
  );
};

export default Button;
