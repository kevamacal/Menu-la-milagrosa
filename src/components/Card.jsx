import ProductType from "./ProductType.jsx";
import "../static/css/Card.css";
import { cardData, types } from "../static/data/getCardData.jsx";

export default function Card() {
  return (
    <div className="card">
      <h1>Menu peña la milagrosa</h1>
      {types.map((type) => (
        <ProductType key={type} type={type} products={cardData}></ProductType>
      ))}
    </div>
  );
}
