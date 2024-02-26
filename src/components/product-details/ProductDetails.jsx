import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { AppContext } from "../../App";

import "./ProductDetails.styles.scss";
import { fetchProduct } from "../../redux/actions/productActions";
import { ActionTypes } from "../../constants/action-types";

const ProductDetail = () => {
  const { selectedProductState, dispatch } = useContext(AppContext);
  const { product, loading, error } = selectedProductState;
  console.log("Selected Product State",selectedProductState);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id)(dispatch).catch((error) => {
      console.log("Error fetching product", error);
    });
    return () => {
      dispatch({ type: ActionTypes.CLEAR_SELECTED_PRODUCT });
    };
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ui grid container">
      <h2>{product && product.name}</h2>
      <div key={product.id} className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={product.images} />
            </div>
            <div className="column rp">
              <h1>{product.title}</h1>
              <h2>
                <a className="ui teal tag label">${product.price}</a>
              </h2>
              <h3 className="ui brown block header">{product.category}</h3>
              <p>{product.description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
