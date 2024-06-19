import styles from "./Input.module.css";

const Input = ({ value, onChange, placeholder, type, register, id }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className={styles.Input}
      {...register(id)}
    />
  );
};

export default Input;
