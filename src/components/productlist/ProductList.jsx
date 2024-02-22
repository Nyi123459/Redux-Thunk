// ProductLists.jsx

import React, { useContext } from "react";
import { AppContext } from "../../App";
import "./ProductLists.styles.scss";

const ProductList = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {state.loading && <p className="loading-message">Loading...</p>}
      {state.error && <p className="loading-message">Error: {state.error}</p>}
      <div className="product-grid">
        {state.products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="description">{product.description}</p>

            <div className="image-list">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title}-image-${index}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
