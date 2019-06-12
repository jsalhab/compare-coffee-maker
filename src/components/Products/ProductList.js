import React from "react";
import Product from "./Product";
import classes from "./ProductList.css";

const ProductList = ({ products, compare }) => {
  return (
    <div className={classes.rowMt3}>
      {products.map(product => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  );
};

export default ProductList;
