import React from "react";
import classes from "./Product.css";

const Product = ({ product, compare }) => {
  const productClasses = [classes.product];
  if (product.compare) {
    productClasses.push(classes.compare);
  }

  return (
    <div key={product.id} className={[classes.col3, classes.col6].join(" ")}>
      <div className={productClasses.join(" ")}>
        <img src={`/products/${product.sku}.jpg`} alt={product.title} />
        <div className={classes.image_overlay} />
        <div className={classes.view_details} onClick={() => compare(product)}>
          {product.compare ? "Remove" : "Compare"}
        </div>
        <div>
          <div className={classes.productInfo}>
            <span className={classes.price}>${product.price}</span>
            <span className="product_name">{product.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
