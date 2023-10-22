export default function NewCharacterCard({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <img width="248px" src={character.image} alt={character.name} />
    </div>
  );
}
