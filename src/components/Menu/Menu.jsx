import { Link } from "react-router-dom";
import "../Menu/Menu.css";

export default function Menu() {
  return (
    <header className="menu-style">
      <Link to="">Home</Link>
      <Link to="characters">Characters</Link>
      <Link to="houses">Houses</Link>
      <Link to="chronology">Chronology</Link>
    </header>
  );
}
