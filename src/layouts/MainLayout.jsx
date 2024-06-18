import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
