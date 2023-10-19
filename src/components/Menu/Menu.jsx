import { NavLink } from "react-router-dom";
import "../Menu/Menu.css";

export default function Menu() {
  return (
    <nav className="menu-style">
      <NavLink to="">Home</NavLink>
      <NavLink to="characters">Characters</NavLink>
      <NavLink to="houses">Houses</NavLink>
      <NavLink to="chronology">Chronology</NavLink>
    </nav>
  );
}
