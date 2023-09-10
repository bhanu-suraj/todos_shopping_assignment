import React from "react";
import styles from "./../assets/styles/ShowProduct.module.css";

const ShowProduct = ({ image, title, price, element, handleAdd }) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__avatar}>
        <img src={image} alt="product Image" />
      </div>
      <h2 className={styles.product__title}>Name: {title.split(" ")[0]}</h2>
      <h4 className={styles.product__price}>Price: {price}</h4>
      <button
        className={styles.product__button}
        onClick={() => handleAdd(element)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ShowProduct;
