import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="product-card" key={id}>
        <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
          <img src={image} alt={title} />
          <div className="product-title">{title}</div>
          <div className="product-price">$ {price}</div>
          <div className="product-category">{category}</div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
