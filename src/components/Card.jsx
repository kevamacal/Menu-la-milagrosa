import "../static/css/Card.css";
import logo from "../static/images/logo.png";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="card">
      <h1 className="fade-in">Carta Peña La Milagrosa</h1>
      <div className="logo-container">
        <img src={logo} alt="Carta Peña La Milagrosa" />
      </div>
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
