import { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import Gallery from "../../components/Gallery/Gallery";
import axios from "axios";
import NewCharacterCard from "../../components/NewCharacterCard/NewCharacterCard";
import "../AddCharacterForm/AddCharacterForm.css";

export default function AddCharacterForm({ addNewCharacter }) {
  const [characters, setCharacters] = useState([]);
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    image: "",
  });
  const [postCharacter, setPostCharacter] = useState(null);

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");
      setCharacters(data);
    };

    getCharacters();
  }, []);

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setNewCharacter({ ...newCharacter, [name]: value });
  };

  const onSubmit = async () => {
    try {
      const postChar = await axios.post(
        "http://localhost:3000/characters",
        newCharacter
      );

      console.log("Personaje agregado:", postChar.data);
      setPostCharacter(postChar.data);

      setNewCharacter({ name: "", image: "" });

      const { data } = await axios("http://localhost:3000/characters");
      setCharacters(data);
    } catch (error) {
      console.error("Error al agregar el personaje:", error);
    }
  };

  return (
    <div className="bg-page">
      <form className="form-style">
        <h2 className="title-question">Add Character's  name</h2>
        <input className="input-style"
          type="text"
          name="name"
          value={newCharacter.name}
          onChange={handleInput}
        />
        <h2 className="title-question">Add character's  image</h2>
        <input className="input-style"
          type="text"
          name="image"
          value={newCharacter.image}
          onChange={handleInput}
        />
        <button className="button-style" type="button" onClick={onSubmit}>
          Add character
        </button>
      </form>
      <SimpleBar style={{ height: "68%", width: "95%" }}>
        <Gallery className="gallery-style" arrayChar={characters} />
      </SimpleBar>
      {postCharacter && <NewCharacterCard character={postCharacter} />}
    </div>
  );
}
