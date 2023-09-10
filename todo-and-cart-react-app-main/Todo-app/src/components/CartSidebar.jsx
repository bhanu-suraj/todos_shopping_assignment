import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../assets/styles/CartSidebar.module.css";

const CartSidebar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__items}>
        <li className={styles.navbar__item}>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? styles.navbar__items__item_active : ""
            }
          >
            Cart Products
          </NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink
            to="explore"
            className={({ isActive }) =>
              isActive ? styles.navbar__items__item_active : ""
            }
          >
            Explore Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default CartSidebar;
