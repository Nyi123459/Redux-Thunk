// reducers/productsReducer.js
import { ActionTypes } from "../../constants/action-types";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: payload };
    case ActionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, products: payload };
    case ActionTypes.FETCH_PRODUCT_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
