import Allergens from "./Allergens.jsx";

export default function Product({ product }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      {product.tapa && <p className="tapa">Tapa: {product.tapa.toFixed(2)}€</p>}
      {product.ration && (
        <p className="ration">Plato: {product.ration.toFixed(2)}€</p>
      )}
      {product.price && (
        <p className="price">Precio: {product.price.toFixed(2)}€</p>
      )}
      {product.cup && <p className="price">Copa: {product.cup.toFixed(2)}€</p>}
      {product.bottle && (
        <p className="price">Botella: {product.bottle.toFixed(2)}€</p>
      )}
      {product.allergens && (
        <Allergens allergens={product.allergens}></Allergens>
      )}
    </div>
  );
}
