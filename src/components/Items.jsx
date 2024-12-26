import {
  foodTypes,
  drinkTypes,
  cardData,
} from "../static/data/getCardData.jsx";
import ProductType from "./ProductType.jsx";

export default function Items({ type }) {
  const data = cardData.filter((product) => product.productType === type);

  let types = [];

  if (type === "COMIDAS") {
    types = foodTypes;
  } else if (type === "BEBIDAS") {
    types = drinkTypes;
  }

  return (
    <div>
      {types.map((type) => (
        <ProductType key={data} type={type} products={cardData}></ProductType>
      ))}
    </div>
  );
}
