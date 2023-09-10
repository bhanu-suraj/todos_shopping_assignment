import React, { useEffect } from "react";
import { useAppContext } from "../context/Context";
import styles from "./../assets/styles/CartProducts.module.css";

const CartProducts = () => {
  const { appData, setAppData } = useAppContext();
  const {
    cart: { totalProducts, products },
  } = appData;
  const handleDelete = (index) => {
    setAppData((prev) => {
      const updatedProducts = prev.cart.products.filter((todo, i) => {
        if (i !== index) return todo;
      });
      return {
        ...prev,
        cart: {
          ...prev.cart,
          totalProducts: prev.cart.totalProducts - 1,
          products: updatedProducts,
        },
      };
    });
  };
  useEffect(() => {
    localStorage.setItem("AppData", JSON.stringify(appData));
  }, [products]);
  if (products && products.length === 0) return <h1>No Products in Cart</h1>;
  return (
    <div className={styles.container}>
      {products &&
        products.map((el, index) => {
          return (
            <div key={index} className={styles.container__product}>
              <div className={styles.container__product__img}>
                <img src={el.image} alt="product_image" />
              </div>
              <div className={styles.container__product__description}>
                <h2>{el.title}</h2>
                <p>{el.price}</p>
              </div>
              <button
                className={styles.container__product__btn}
                onClick={() => handleDelete(index)}
              >
                Remove
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default CartProducts;
