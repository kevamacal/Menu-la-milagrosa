export const allergens = [
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

export const foodTypes = [
  "ENSALADAS",
  "ENTRANTES",
  "CHACINAS",
  "GUISOS CASEROS",
  "CARNE A LA PLANCHA",
  "PESCADO A LA PLANCHA",
  "CARNE A LA BRASA",
  "PESCADO FRITO",
  "REVUELTOS",
  "MONTADITOS",
];

export const drinkTypes = [
  "BEBIDAS",
  "VINOS TINTOS",
  "VINOS BLANCOS",
  "COCKTELES",
];

const productTypes = ["COMIDAS", "BEBIDAS"];

export const cardData = [
  {
    name: "Simple",
    type: foodTypes[0],
    ration: 5.0,
    productType: productTypes[0],
  },
  {
    name: "Tomate Aliñado",
    type: foodTypes[0],
    ration: 5.5,
    allergens: [allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Tomate Aliñado con Caballa",
    type: foodTypes[0],
    ration: 6.5,
    allergens: [allergens[13], allergens[3]],
    productType: productTypes[0],
  },
  {
    name: "Mixta de la Casa",
    type: foodTypes[0],
    ration: 7,
    allergens: [allergens[13], allergens[3], allergens[12]],
    productType: productTypes[0],
  },
  {
    name: "Salmorejo Cordobés",
    type: foodTypes[1],
    ration: 4,
    allergens: [allergens[4], allergens[2]],
    productType: productTypes[0],
  },
  {
    name: "Papas Aliñadas",
    type: foodTypes[1],
    tapa: 3.7,
    ration: 7,
    allergens: [allergens[3], allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Ensaladilla de Gamba",
    type: foodTypes[1],
    tapa: 3.8,
    ration: 7.0,
    allergens: [allergens[1], allergens[2], allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Salpicón de Marisco",
    type: foodTypes[1],
    tapa: 3.8,
    ration: 7.5,
    allergens: [allergens[1], allergens[13], allergens[7]],
    productType: productTypes[0],
  },
  {
    name: "Aliño de Pulpo",
    type: foodTypes[1],
    tapa: 3.8,
    ration: 7.5,
    allergens: [allergens[13], allergens[1]],
    productType: productTypes[0],
  },
  {
    name: "Cóctel de Marisco",
    type: foodTypes[1],
    ration: 3.8,
    allergens: [allergens[1], allergens[2], allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Papas Bravas",
    type: foodTypes[1],
    tapa: 3.8,
    ration: 7,
    allergens: [allergens[13], allergens[2], allergens[4]],
    productType: productTypes[0],
  },
  {
    name: "Nuggets de Pollo",
    type: foodTypes[1],
    tapa: 3.7,
    ration: 7,
    allergens: [allergens[4], allergens[2]],
    productType: productTypes[0],
  },
  {
    name: "Lagrimitas de Pollo",
    type: foodTypes[1],
    tapa: 3.8,
    ration: 7.5,
    allergens: [allergens[4], allergens[2], allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Croquetas Caseras",
    type: foodTypes[1],
    tapa: 3.8,
    ration: 7.5,
    allergens: [allergens[4], allergens[6], allergens[2]],
    productType: productTypes[0],
  },
  {
    name: "Pollo Frito",
    type: foodTypes[1],
    tapa: 3.8,
    ration: 7.5,
    allergens: [allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Tortillitas de Camarones",
    type: foodTypes[1],
    tapa: 3.8,
    ration: 7.5,
    allergens: [
      allergens[1],
      allergens[2],
      allergens[3],
      allergens[4],
      allergens[6],
      allergens[8],
    ],
    productType: productTypes[0],
  },
  {
    name: "Queso Reserva",
    type: foodTypes[2],
    tapa: 3.8,
    ration: 8,
    allergens: [allergens[4], allergens[6]],
    productType: productTypes[0],
  },
  {
    name: "Chorizo Ibérico",
    type: foodTypes[2],
    tapa: 3.8,
    ration: 8,
    allergens: [allergens[6]],
    productType: productTypes[0],
  },
  {
    name: "Chicharrón de Cádiz",
    type: foodTypes[2],
    tapa: 3.8,
    ration: 8,
    productType: productTypes[0],
  },
  {
    name: "Salchichón Ibérico",
    type: foodTypes[2],
    tapa: 3.8,
    ration: 8,
    allergens: [allergens[6], allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Carne Mechada",
    type: foodTypes[2],
    tapa: 3.8,
    ration: 8,
    allergens: [allergens[6]],
    productType: productTypes[0],
  },
  {
    name: "Jamón Ibérico",
    type: foodTypes[2],
    tapa: 4,
    ration: 9,
    productType: productTypes[0],
  },
  {
    name: "Chacina Variada",
    type: foodTypes[2],
    ration: 20.0,
    allergens: [allergens[2], allergens[6], allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Carne con Tomate",
    type: foodTypes[3],
    tapa: 3.8,
    ration: 8,
    allergens: [allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Albóndigas de choco",
    type: foodTypes[3],
    tapa: 3.9,
    ration: 7.5,
    allergens: [
      allergens[0],
      allergens[1],
      allergens[2],
      allergens[3],
      allergens[4],
      allergens[13],
    ],
    productType: productTypes[0],
  },
  {
    name: "Carrillada Ibérica",
    type: foodTypes[3],
    tapa: 3.9,
    ration: 7.5,
    allergens: [allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Langostinos al Ajillo",
    type: foodTypes[3],
    ration: 8.5,
    allergens: [allergens[1]],
    productType: productTypes[0],
  },
  {
    name: "Cinta de Lomo",
    type: foodTypes[4],
    tapa: 3.7,
    ration: 7.5,
    productType: productTypes[0],
  },
  {
    name: "Pechuga de pollo",
    type: foodTypes[4],
    tapa: 3.7,
    ration: 8,
    productType: productTypes[0],
  },
  {
    name: "Churrasco de pollo",
    type: foodTypes[4],
    ration: 9,
    productType: productTypes[0],
  },
  {
    name: "Churrasco de Cerdo",
    type: foodTypes[4],
    ration: 9,
    productType: productTypes[0],
  },
  {
    name: "Solomillo",
    type: foodTypes[4],
    tapa: 4,
    ration: 9,
    productType: productTypes[0],
  },
  {
    name: "Lagartito Ibérico",
    type: foodTypes[4],
    ration: 12.5,
    productType: productTypes[0],
  },
  {
    name: "Presa Ibérica (50%)",
    type: foodTypes[4],
    ration: 14,
    productType: productTypes[0],
  },
  {
    name: "Sardinas (temporada)",
    type: foodTypes[5],
    tapa: 3,
    ration: 8,
    allergens: [allergens[3]],
    productType: productTypes[0],
  },
  {
    name: "Chipirón",
    type: foodTypes[5],
    tapa: 4,
    ration: 8.5,
    allergens: [allergens[1]],
    productType: productTypes[0],
  },
  {
    name: "Atún",
    type: foodTypes[5],
    ration: 11,
    allergens: [allergens[3]],
    productType: productTypes[0],
  },
  {
    name: "Dorada",
    type: foodTypes[5],
    ration: 12,
    allergens: [allergens[3]],
    productType: productTypes[0],
  },
  {
    name: "Lubina",
    type: foodTypes[5],
    ration: 12,
    allergens: [allergens[3]],
    productType: productTypes[0],
  },
  {
    name: "Pez Espada",
    type: foodTypes[5],
    ration: 14,
    allergens: [allergens[3]],
    productType: productTypes[0],
  },
  {
    name: "Choco Plancha",
    type: foodTypes[5],
    ration: 15,
    allergens: [allergens[1]],
    productType: productTypes[0],
  },
  {
    name: "Chorizo Criollo",
    ration: 9,
    type: foodTypes[6],
    allergens: [allergens[12]],
    productType: productTypes[0],
  },
  {
    name: "Churrasco Pollo",
    ration: 9.5,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Churrasco Cerdo",
    ration: 9.5,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Codorniz",
    ration: 9,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Costilla",
    ration: 12,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Lagartito Ibérico",
    ration: 13.5,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Secreto Ibérico",
    ration: 13.5,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Abánico Ibérico",
    ration: 14,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Presa Ibérica",
    ration: 15,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Brocheta de Solomillo",
    ration: 15,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Entrecot de Ternera",
    ration: 18,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Parrillada Ibérica",
    ration: 28,
    type: foodTypes[6],
    productType: productTypes[0],
  },
  {
    name: "Puntillitas",
    ration: 7,
    type: foodTypes[7],
    allergens: [allergens[3], allergens[4]],
    productType: productTypes[0],
  },
  {
    name: "Boquerones",
    ration: 8,
    type: foodTypes[7],
    allergens: [allergens[3], allergens[4]],
    productType: productTypes[0],
  },
  {
    name: "Cazón en Adobo",
    ration: 8,
    type: foodTypes[7],
    allergens: [allergens[3], allergens[4], allergens[13]],
    productType: productTypes[0],
  },
  {
    name: "Choco",
    ration: 9,
    type: foodTypes[7],
    allergens: [allergens[3], allergens[4], allergens[7]],
    productType: productTypes[0],
  },
  {
    name: "Taquito de Merluza al Limón",
    ration: 9.5,
    type: foodTypes[7],
    allergens: [allergens[3], allergens[4]],
    productType: productTypes[0],
  },
  {
    name: "Mero Empanado",
    ration: 9.5,
    type: foodTypes[7],
    allergens: [allergens[3], allergens[4]],
    productType: productTypes[0],
  },
  {
    name: "Frito Variado",
    ration: 22,
    type: foodTypes[7],
    allergens: [
      allergens[2],
      allergens[3],
      allergens[4],
      allergens[6],
      allergens[7],
      allergens[8],
      allergens[12],
      allergens[13],
    ],
    productType: productTypes[0],
  },
  {
    name: "Champiñones con Jamón",
    ration: 8,
    type: foodTypes[8],
    allergens: [allergens[2]],
    productType: productTypes[0],
  },
  {
    name: "Ajetes con Gambas",
    ration: 8.5,
    type: foodTypes[8],
    allergens: [allergens[2], allergens[1]],
    productType: productTypes[0],
  },
  {
    name: "Bacalao Dorado",
    ration: 9,
    type: foodTypes[8],
    allergens: [allergens[2], allergens[3]],
    productType: productTypes[0],
  },
  {
    name: "Pollo",
    ration: 3,
    type: foodTypes[9],
    allergens: [allergens[4]],
    productType: productTypes[0],
  },
  {
    name: "Lomo",
    ration: 3,
    type: foodTypes[9],
    allergens: [allergens[4]],
    productType: productTypes[0],
  },
  {
    name: "Chorizo Picante",
    ration: 3.5,
    type: foodTypes[9],
    allergens: [allergens[4]],
    productType: productTypes[0],
  },
  {
    name: "Langostinos Ali-Oli",
    ration: 3.5,
    type: foodTypes[9],
    allergens: [
      allergens[4],
      allergens[1],
      allergens[13],
      allergens[2],
      allergens[12],
    ],
    productType: productTypes[0],
  },
  {
    name: "Hamburguesa Simple (pollo o ternera)",
    ration: 3.5,
    type: foodTypes[9],
    allergens: [allergens[4], allergens[11]],
    productType: productTypes[0],
  },
  {
    name: "Chicharrón de Cadiz y Queso Viejo",
    ration: 3.9,
    type: foodTypes[9],
    allergens: [allergens[4], allergens[2], allergens[6]],
    productType: productTypes[0],
  },
  {
    name: "Carne Mechada y Queso Viejo",
    ration: 3.9,
    type: foodTypes[9],
    allergens: [allergens[4], allergens[2], allergens[6], allergens[12]],
    productType: productTypes[0],
  },
  {
    name: "Hamburguesa Completa (pollo o ternera)",
    ration: 4,
    type: foodTypes[9],
    allergens: [allergens[4], allergens[11]],
    productType: productTypes[0],
  },
  {
    name: "Serranito (pollo o lomo)",
    ration: 5,
    type: foodTypes[9],
    allergens: [allergens[4]],
    productType: productTypes[0],
  },
  // TODO: preguntar si ponerlo aqui o en otro lugar
  {
    name: "Suplemento adicional",
    price: 0.4,
    type: foodTypes[9],
    productType: productTypes[0],
  },
  {
    name: "Agua Pequeña",
    price: 1,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Agua Grande",
    price: 1.5,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Botellín Cruzcampo",
    price: 1.3,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Botellín Cruzcampo Sin",
    price: 1.3,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Zumos / Batidos",
    price: 1.5,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Refrescos",
    price: 1.8,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Caña Cortadita (Sidra)",
    price: 1.7,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Caña Cortadita Sin (Sidra) ",
    price: 1.7,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Bi-frutas",
    price: 1.8,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Aquarius",
    price: 1.9,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Nestea",
    price: 1.9,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Bebidas Energéticas",
    price: 1.9,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Heineken 0.0 25cl",
    price: 1.7,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Heineken 1/3",
    price: 2.2,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Cruzcampo Radler 1/3",
    price: 2.2,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Cruzcampo 1/3",
    price: 2.2,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Cruzcampo 1/3 Sin",
    price: 2.2,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Cruzcampo 1/3 Sin Gluten",
    price: 2.2,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Aguila 1/3",
    price: 2.2,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Aguila Sin Filtrar",
    price: 2.2,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Tinto Verano Sidra",
    price: 2,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Cerveza Grande Sidra",
    price: 3.2,
    type: drinkTypes[0],
    productType: productTypes[1],
  },
  {
    name: "Marques de Atrio (Rioja)",
    cup: 2.8,
    bottle: 13,
    type: drinkTypes[1],
    productType: productTypes[1],
  },
  {
    name: "Copavoca Roble (Ribera)",
    cup: 2.8,
    bottle: 13.5,
    type: drinkTypes[1],
    productType: productTypes[1],
  },
  {
    name: "Copavoca Crianza (Rioja)",
    cup: 2.8,
    bottle: 13.5,
    type: drinkTypes[1],
    productType: productTypes[1],
  },
  {
    name: "Meloso (Ribera)",
    cup: 2.8,
    bottle: 14,
    type: drinkTypes[1],
    productType: productTypes[1],
  },
  {
    name: "Cune Crianza (Rioja)",
    bottle: 14,
    type: drinkTypes[1],
    productType: productTypes[1],
  },
  {
    name: "Beronia Crianza (Rioja)",
    bottle: 14,
    type: drinkTypes[1],
    productType: productTypes[1],
  },
  {
    name: "Manzanilla",
    cup: 1.6,
    bottle: 11,
    type: drinkTypes[2],
    productType: productTypes[1],
  },
  {
    name: "Verdejo Rueda",
    cup: 2.7,
    bottle: 11,
    type: drinkTypes[2],
    productType: productTypes[1],
  },
  {
    name: "Frizzante",
    cup: 2.7,
    bottle: 11,
    type: drinkTypes[2],
    productType: productTypes[1],
  },
  {
    name: "El Maestrino (afrutado)",
    cup: 2.7,
    bottle: 12,
    type: drinkTypes[2],
    productType: productTypes[1],
  },
  {
    name: "Barbadillo",
    cup: 2.7,
    bottle: 12,
    type: drinkTypes[2],
    productType: productTypes[1],
  },
  {
    name: "Mojito",
    price: 6,
    type: drinkTypes[3],
    productType: productTypes[1],
  },
  {
    name: "Piña Colada",
    price: 6,
    type: drinkTypes[3],
    productType: productTypes[1],
  },
  {
    name: "Caipirinha",
    price: 6,
    type: drinkTypes[3],
    productType: productTypes[1],
  },
  {
    name: "Daiquiri",
    price: 6,
    type: drinkTypes[3],
    productType: productTypes[1],
  },
];
