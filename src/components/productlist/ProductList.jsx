import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { AppContext } from "../../App";

import "./ProductLists.styles.scss";

const ProductList = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      {state.loading && <p>Loading...</p>}
      {state.error && <p className="text-red-500">Error: {state.error}</p>}
      <div className="product-grid">
        {state.products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              {/* <p className="product-description">{product.description}</p>
            <p className="product-price">
              ${product.price} - {product.discountPercentage}% OFF
            </p>
            <p className="product-rating">Rating: {product.rating}</p>
            <p className="product-stock">In Stock: {product.stock}</p>
            <p className="product-brand">Brand: {product.brand}</p>
            <p className="product-category">Category: {product.category}</p>
            <div className="product-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title}-image-${index}`}
                  className="image-thumbnail"
                />
              ))}
            </div> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
