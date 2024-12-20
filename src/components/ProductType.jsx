import Product from "./Product.jsx";

export default function ProductType({ type, products }) {
  return (
    <div className="product-type">
      <h2>{type}</h2>
      <div className="products-container">
        {products
          .filter((product) => product.type == type)
          .map((product) => (
            <Product product={product} key={product.name}></Product>
          ))}
      </div>
    </div>
  );
}
