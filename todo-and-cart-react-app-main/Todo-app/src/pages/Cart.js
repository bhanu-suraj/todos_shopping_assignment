import React from "react";
import styles from "./../assets/styles/Cart.module.css";
import CartSidebar from "../components/CartSidebar";
import { Outlet } from "react-router-dom";

const Cart = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <CartSidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Cart;
