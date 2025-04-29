import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="product-details-container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="product-details-image">
            <img src={image} alt={title} />
          </div>
          <div className="product-details-info">
            <div className="product-details-title">{title}</div>
            <div className="product-details-price">${price}</div>
            <div className="product-details-category">{category}</div>
            <div className="product-details-description">{description}</div>
            <button className="product-details-btn">
              <span role="img" aria-label="cart" style={{marginRight: '8px'}}>🛒</span>
              Add to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
