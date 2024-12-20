import ProductType from "./ProductType.jsx";
import "../static/css/Card.css";

export default function Card() {
  const types = ["ENTRANTES", "POSTRES", "PLANCHA", "BRASA"];

  const cardData = [
    { name: "patata", price: 100, type: types[0] },
    { name: "salchicha", price: 201, type: types[1] },
  ];

  return (
    <div className="card">
      <h1>Menu peña la milagrosa</h1>
      {types.map((type) => (
        <ProductType key={type} type={type} products={cardData}></ProductType>
      ))}
    </div>
  );
}
