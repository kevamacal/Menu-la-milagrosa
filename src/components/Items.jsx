import { useState } from "react";
import {
  foodTypes,
  drinkTypes,
  cardData,
} from "../static/data/getCardData.jsx";
import ProductType from "./ProductType.jsx";

export default function Items({ type }) {
  const [openType, setOpenType] = useState(null); // Estado global para los tipos abiertos

  const handleToggle = (productTypeName) => {
    setOpenType((prev) => (prev === productTypeName ? null : productTypeName));
  };

  const data = cardData.filter((product) => product.productType === type);
  const types = type === "COMIDAS" ? foodTypes : drinkTypes;

  return (
    <div className="product-types">
      {types.map((type) => (
        <ProductType
          key={type}
          type={type}
          products={data}
          isOpen={openType === type}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
