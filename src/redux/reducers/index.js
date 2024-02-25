// index.js
import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: selectedProductReducer,
  // Add other reducers if needed
});

export default rootReducer;
