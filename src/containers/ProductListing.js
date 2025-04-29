import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const loading = useSelector((state) => state.allProducts.loading);
  const error = useSelector((state) => state.allProducts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div className="ui container">Loading...</div>;
  }

  if (error) {
    return <div className="ui container error">{error}</div>;
  }

  return (
    <div className="product-grid">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
