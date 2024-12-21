import Allergens from "./Allergens.jsx";
export default function Product({ product }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      {product.tapa && <p>{product.tapa.toFixed(2)}€</p>}
      <p>{product.ration.toFixed(2)}€</p>
      {product.allergens && (
        <Allergens allergens={product.allergens}></Allergens>
      )}
    </div>
  );
}
