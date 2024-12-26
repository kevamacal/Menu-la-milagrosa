import "../static/css/Card.css";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="card">
      <h1>Carta peña la milagrosa</h1>
      <div className="buttons">
        <Link to="/comidas">
          <button>Comidas</button>
        </Link>
        <Link to="/bebidas">
          <button>Bebidas</button>
        </Link>
      </div>
    </div>
  );
}
