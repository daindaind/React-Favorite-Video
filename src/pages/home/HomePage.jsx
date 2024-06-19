import styles from "./HomePage.module.css";
import FirstUI from "../../components/Home/first/FirstUI";
import SecondUI from "../../components/Home/second/SecondUI";
import ThirdUI from "../../components/Home/third/ThirdUI";

const HomePage = () => {
  return (
    <div className={styles.Container}>
      <FirstUI />
      <SecondUI />
      <ThirdUI />
    </div>
  );
};

export default HomePage;
