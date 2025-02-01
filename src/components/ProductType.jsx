import Product from "./Product.jsx";

export default function ProductType({ type, products, isOpen, onToggle }) {
  return (
    <div className={`product-type ${isOpen ? "open" : ""}`}>
      <h2 onClick={() => onToggle(type)}>{type}</h2>
      <div className="product-type-content">
        <div className="products-container">
          {isOpen &&
            products
              .filter((product) => product.type === type)
              .map((product) => (
                <Product product={product} key={product.name} />
              ))}
        </div>
      </div>
    </div>
  );
}
