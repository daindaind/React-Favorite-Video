import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.ContentLayout}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
