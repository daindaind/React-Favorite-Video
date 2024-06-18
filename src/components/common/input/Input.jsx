import styles from "./Input.module.css";

const Input = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className={styles.Input}
    />
  );
};

export default Input;
