import React, { useState, useEffect } from "react";
import ShowProduct from "./ShowProduct";
import styles from "./../assets/styles/ExploreProducts.module.css";
import { useAppContext } from "./../context/Context";

const ExploreProducts = () => {
  const { appData, setAppData } = useAppContext();
  console.log(appData);
  const handleAdd = (element) => {
    console.log(element);
    setAppData((prev) => {
      return {
        ...prev,
        cart: {
          ...prev.cart,
          totalProducts: prev.cart.totalProducts + 1,
          products: [...prev.cart.products, element],
        },
      };
    });
    alert("Product Added Successfully");
  };
  const [products, setProducts] = useState([]);
  const getProductsData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    if (products.length === 0) getProductsData();
    localStorage.setItem("AppData", JSON.stringify(appData));
  }, [appData]);
  if (products.length === 0)
    return <h1 className={styles.loading}>Loading Products...</h1>;
  return (
    <div className={styles.container}>
      {products.map((el, index) => {
        return (
          <ShowProduct
            key={el.id}
            image={el.image}
            title={el.title}
            price={el.price}
            element={el}
            handleAdd={handleAdd}
          />
        );
      })}
    </div>
  );
};

export default ExploreProducts;
