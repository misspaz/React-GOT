import { Link } from "react-router-dom";
import Character from "../Character/Character";
import "../Gallery/Gallery.css";

export default function Gallery({ arrayChar }) {
  return (
    <div>
      {arrayChar.map((character) => (
        <Link to={`/characters/${character.id}`}>
          <Character key={character.id} character={character} />
        </Link>
      ))}
    </div>
  );
}
