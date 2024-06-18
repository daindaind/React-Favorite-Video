import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { PAGE_URL } from "../../../constants/router";

const Navbar = () => {
  return (
    <div className={styles.Container}>
      <h1>LOGO</h1>
      <div className={styles.Menu}>
        <NavLink
          to={PAGE_URL.BASE}
          className={({ isActive }) => (isActive ? styles.View : styles.Link)}
        >
          <p>HOME</p>
        </NavLink>
        <NavLink
          to={PAGE_URL.MOVIES}
          className={({ isActive }) => (isActive ? styles.View : styles.Link)}
        >
          <p>MOVIES</p>
        </NavLink>
        <NavLink
          to={PAGE_URL.POST}
          className={({ isActive }) => (isActive ? styles.View : styles.Link)}
        >
          <p>POSTS</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
