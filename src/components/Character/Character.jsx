export default function Character({ character }) {
  return (
    <div className="character-div">
      <div className="overlay">
        <h1 className="hover-text">{character.name}</h1>
      </div>

      <img
        className="character-img"
        src={character.image.substring(0, 4) === 'http' ? character.image : `http://localhost:3000/${character.image}`}
        alt={character.image}
      />
    </div>
  );
}
