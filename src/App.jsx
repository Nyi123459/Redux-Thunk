import React, { createContext, useReducer, useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { fetchProducts } from "./redux/actions/productActions";
import { productsReducer } from "./redux/reducers/productsReducer";

export const AppContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    products: [],
    loading: false,
    error: null,
  });
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
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <ProductList />
      </div>
    </AppContext.Provider>
  );
};

export default App;
