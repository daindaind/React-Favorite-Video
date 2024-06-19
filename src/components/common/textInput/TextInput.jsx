import { useEffect, useRef } from "react";
import styles from "./TextInput.module.css";

const TextInput = ({ register, id, placeholder }) => {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", handleInput);
      return () => {
        textarea.removeEventListener("input", handleInput);
      };
    }
  }, []);
  return (
    <textarea
      className={styles.TextareaStyle}
      ref={textareaRef}
      placeholder={placeholder}
      {...register(id)}
    />
  );
};

export default TextInput;
