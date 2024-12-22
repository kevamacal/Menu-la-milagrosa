import { useState } from "react";
import Product from "./Product.jsx";

export default function ProductType({ type, products }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`product-type ${isOpen ? "open" : ""}`}>
      <h2 onClick={toggleSection}>{type}</h2>
      <div className="product-type-content">
        <div className="products-container">
          {products
            .filter((product) => product.type === type)
            .map((product) => (
              <Product product={product} key={product.name} />
            ))}
        </div>
      </div>
    </div>
  );
}
