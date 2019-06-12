import { FETCH_PRODUCTS, COMPARE_PRODUCT } from "../actions/types";

const initialState = {
  products: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.map(product => ({
          ...product,
          compare: false
        }))
      };
    case COMPARE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.product.id
            ? { ...product, compare: !product.compare }
            : product
        )
      };
    default:
      return state;
  }
}
