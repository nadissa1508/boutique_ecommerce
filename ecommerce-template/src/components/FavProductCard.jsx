import { useState } from "react";
import ProductCard from "./ProductCard";

function FavProductCard({ title, products }) {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="dropdown-card">
      <div className="dropdown-header">
        <h2>{title}</h2>
        <button className="dropdown-toggle">▼</button>
      </div>
      <div className="dropdown-content">
        <div className="card-container">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product_image={product.product_image}
              product_name={product.product_name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavProductCard;
