import { Link } from "react-router-dom";
import CharacterHouses from "../Character/CharacterHouses";
import "../Gallery/GalleryHouses.css";

export default function GalleryHouses({ arrayH }) {
    return (
        <div className="gallery-houses">
            {arrayH.map((character) => (
                <Link to={`/houses/${character.id}`}>
                <CharacterHouses key={character.id} character={character} />
                </Link>
            ))}
        </div>
    );
}
