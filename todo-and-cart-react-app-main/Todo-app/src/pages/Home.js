import React from "react";
import styles from "../assets/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__welcome}>Welcome to My App!</h1>
      <p className={styles.container__description}>
        This is a simple to-do list and shopping cart application.
      </p>
    </div>
  );
};

export default Home;
