import { useContext } from "react";

import { AppContext } from "../../App";

import { selectedProductReducer } from "../../redux/reducers/productsReducer";

import "./ProductDetails.styles.scss";

const ProductDetail = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div>Hello Single Page</div>
    </>
  );
};

export default ProductDetail;
