import React, { createContext, useReducer, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import ProductList from "./components/product-list/ProductList";

import ProductDetail from "./components/product-details/ProductDetails";

import { fetchProduct, fetchProducts } from "./redux/actions/productActions";

import {
  productsReducer,
  selectedProductReducer,
} from "./redux/reducers/productsReducer";

export const AppContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    products: [],
    loading: false,
    error: null,
  });

  const [selectedProductState, selectedProductDispatch] = useReducer(
    selectedProductReducer,
    {
      loading: false,
      product: null,
      error: null,
    }
  );

  const [localLoading, setLocalLoading] = useState(false);

  useEffect(() => {
    // Set local loading state to true
    setLocalLoading(true);

    // Fetch products when the component mounts
    fetchProducts()(dispatch)
      .then(() => {
        // Set local loading state to false when the request is completed (success)
        setLocalLoading(false);
      })
      .catch((error) => {
        // Set local loading state to false when the request encounters an error
        setLocalLoading(false);
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        selectedProductState,
        selectedProductDispatch,
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
