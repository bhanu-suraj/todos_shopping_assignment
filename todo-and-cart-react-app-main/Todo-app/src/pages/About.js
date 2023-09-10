import React from "react";
import styles from "./../assets/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__heading}>About Us</h2>
      <p className={styles.container__services}>
        Welcome to our application! We are a dedicated team working on this
        project to bring you a convenient and efficient to-do list and shopping
        cart experience.
      </p>
      <p className={styles.container__services}>
        Our mission is to help you stay organized and manage your tasks and
        shopping needs effortlessly.
      </p>
    </div>
  );
};

export default About;
