import {
  foodTypes,
  drinkTypes,
  cardData,
} from "../static/data/getCardData.jsx";
import ProductType from "./ProductType.jsx";

export default function Items({ type }) {
  const data = cardData.filter((product) => product.productType === type);
  let types = [];
  console.log(data);

  if (type === "COMIDAS") {
    types = foodTypes;
  } else if (type === "BEBIDAS") {
    types = drinkTypes;
  }

  return (
    <div className="product-types">
      {types.map((type) => (
        <ProductType key={type} type={type} products={data}></ProductType>
      ))}
    </div>
  );
}
