import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/images/favicon.ico";
import styles from "./../assets/styles/Navbar.module.css";
import { useAppContext } from "./../context/Context";

const Navbar = () => {
  const {
    appData: {
      todo: { totalTodos, completedTodos },
      cart: { totalProducts },
    },
  } = useAppContext();
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">
        <img className={styles.navbar__image} src={logo} alt="logo" />
      </NavLink>
      <ul className={styles.navbar__items}>
        <li className={styles.navbar__items__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.navbar__items__item_active : ""
            }
            to="/todo"
          >
            Todo <sup>{completedTodos + "/" + totalTodos}</sup>
          </NavLink>
        </li>
        <li className={styles.navbar__items__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.navbar__items__item_active : ""
            }
            to="/cart"
          >
            Cart <sup>{totalProducts}</sup>
          </NavLink>
        </li>
        <li className={styles.navbar__items__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.navbar__items__item_active : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li className={styles.navbar__items__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.navbar__items__item_active : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
