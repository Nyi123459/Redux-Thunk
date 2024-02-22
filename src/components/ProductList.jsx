import React, { useContext } from "react";
import { AppContext } from "../App";

const ProductList = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      {state.loading && <p>Loading...</p>}
      {state.error && <p className="text-red-500">Error: {state.error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {state.products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md shadow-md">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <p className="text-green-600 font-semibold mb-2">
              ${product.price} - {product.discountPercentage}% OFF
            </p>
            <p className="text-gray-500 mb-2">Rating: {product.rating}</p>
            <p className="text-gray-500 mb-2">In Stock: {product.stock}</p>
            <p className="text-gray-500 mb-2">Brand: {product.brand}</p>
            <p className="text-gray-500 mb-2">Category: {product.category}</p>
            <div className="flex">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title}-image-${index}`}
                  className="w-8 h-8 object-cover rounded-full"
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
