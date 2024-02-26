import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../App";
import { fetchProduct } from "../../redux/actions/productActions";

export const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const { selectedProductState } = useContext(AppContext);
  //   const { products } = state;
  const dispatch = useDispatch();
  const { loading, error } = selectedProductState;
  const { id } = useParams();

  const singleProd = useSelector((state) => state.product.product);

  console.log("singleProd", singleProd);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dispatch the action to fetch the product
        await dispatch(fetchProduct(id));
        // setSingleProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [dispatch, id]); // Include id as a dependency so useEffect is triggered when id changes

  // console.log("Single Product", singleProduct);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={singleProd?.images[0]} alt="" />
      </div>
      <div className="detail-container">
        <div>
          <span>{singleProd?.title}</span>
          <span>{singleProd?.price}</span>
        </div>
        <div>
          <span>{singleProd?.description}</span>
          <span>{singleProd?.discountPercentage}% OFF</span>
          <span>{singleProd?.rating}</span>
          <span>{singleProd?.brand}</span>
          <span>{singleProd?.category}</span>
        </div>
        <div>
          {singleProd?.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${singleProd?.title}-image-${index}`}
              className="image-thumbnail"
            />
          ))}
        </div>
        <button/>Add To Cart
      </div>
    </div>
  );
};

export default ProductDetail;
