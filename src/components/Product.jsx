export default function Product({ product }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
}
