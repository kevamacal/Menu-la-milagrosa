import ProductType from "./ProductType.jsx";
import "../static/css/Card.css";

export default function Card() {
  const types = [
    "ENSALADAS",
    "ENTRANTES",
    "CHACINAS",
    "GUISOS CASEROS",
    "POSTRES",
    "PLANCHA",
    "BRASA",
  ];

  const allergens = [
    "CeleryIcon",
    "CrustaceanIcon",
    "EggIcon",
    "FishIcon",
    "GlutenIcon",
    "LupinIcon",
    "MilkIcon",
    "MolluscIcon",
    "MustardIcon",
    "NutsIcon",
    "PeanutIcon",
    "SesameIcon",
    "SoyIcon",
    "SulphiteIcon",
  ];

  const cardData = [
    { name: "Simple", type: types[0], ration: 5.0 },
    {
      name: "Tomate Aliñado",
      type: types[0],
      ration: 5.5,
      allergens: [allergens[13]],
    },
    {
      name: "Tomate Aliñado con Caballa",
      type: types[0],
      ration: 6.5,
      allergens: [allergens[13], allergens[3]],
    },
    {
      name: "Mixta de laCasa",
      type: types[0],
      ration: 7,
      allergens: [allergens[13], allergens[3], allergens[12]],
    },
    {
      name: "Salmorejo Cordobés",
      type: types[1],
      ration: 4,
      allergens: [allergens[4]],
    },
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
