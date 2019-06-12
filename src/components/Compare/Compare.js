import React from "react";
import classes from "./Compare.css";

const Compare = ({ products }) => {
  console.log(products);
  return (
    <div className={classes.compare}>
      <div className={classes.col12}>
        <table className={classes.table}>
          <thead className="thead-default">
            <tr>
              <th />
              {products.map(product => (
                <th key={product.id}>{product.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={classes.key}>Price</th>
              {products.map(product => (
                <td key={product.id} className="text-center">
                  ${product.price}
                </td>
              ))}
            </tr>
            <tr>
              <th className={classes.key}>Colors</th>
              {products.map(product => (
                <td key={product.id}>
                  {product.color.map((color, index) => (
                    <span key={index}>{color} </span>
                  ))}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare;
