import Character from "../Character/Character";
import "../Gallery/Gallery.css";

export default function Gallery({ arrayChar }) {
  return (
    <div>
      {arrayChar.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}
