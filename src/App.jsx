import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card.jsx";
import Items from "./components/Items.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/comidas" element={<Items type="COMIDAS" />} />
        <Route path="/bebidas" element={<Items type="BEBIDAS" />} />
      </Routes>
    </Router>
  );
}

export default App;
