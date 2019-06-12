import { FETCH_PRODUCTS, COMPARE_PRODUCT } from "./types";

export const fetchProducts = () => async dispatch => {
  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

export const compare = product => ({
  type: COMPARE_PRODUCT,
  product
});
