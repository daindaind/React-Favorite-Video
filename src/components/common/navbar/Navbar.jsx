import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { PAGE_URL } from "../../../constants/router";
import sceneVibeLogo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles.Container}>
      <Link to={"/"}>
        <img src={sceneVibeLogo} />
      </Link>
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
