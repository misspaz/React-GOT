import CharacterHouses from "../Character/CharacterHouses";
import "../Gallery/GalleryHouses.css";

export default function GalleryHouses({ arrayH }) {
    return (
        <div className="gallery-houses">
            {arrayH.map((character) => (
                <CharacterHouses key={character.id} character={character} />
            ))}
        </div>
    );
}
