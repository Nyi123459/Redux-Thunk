// actions/productActions.js
import { ActionTypes } from "../../constants/action-types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.FETCH_PRODUCTS_REQUEST });

      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      dispatch({
        type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: data.products,
      });

      return data.products; // Return the products as a resolved value
    } catch (error) {
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS_FAILURE,
        payload: error.message,
      });

      throw error; // Throw the error to be caught in the component
    }
  };
};
