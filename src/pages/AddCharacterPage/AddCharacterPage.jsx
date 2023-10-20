import axios from "axios";
import { useEffect, useState } from "react";
import AddCharacterForm from "../AddCharacterForm/AddCharacterForm";
import AddCharacterCard from "../AddCharacterForm/AddCharacterCard";
import SimpleBar from "simplebar-react";
import Gallery from "../../components/Gallery/Gallery";

export default function AddCharacterPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getcharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");
      console.log(data);

      setCharacters(data);
    };

    getcharacters();
  }, []);

  const addNewCharacter = (newCharacter) => {
    const copyCharacters = [...characters];
    copyCharacters.push(newCharacter);
    setCharacters(copyCharacters);
  };

  return (
    <>
      <div>
        <AddCharacterForm onSubmit={addNewCharacter} />
        {characters.map((item, index) => (
          <div key={index}>
            <AddCharacterCard name={item.name} image={item.image} />
          </div>
        ))}

        {/* {characters.map((item, index) => (
          <AddCharacterCard name={item.name} image={item.image} />
        ))} */}
      </div>

      <SimpleBar style={{ height: "68%", width: "95%" }}>
        <Gallery arrayChar={characters} />
      </SimpleBar>
    </>
  );
}
