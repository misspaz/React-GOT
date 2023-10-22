import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "../CharactersPage/CharactersPage.css";
import Menu from "../../components/Menu/Menu";
import SearchBar from "../../components/SearchBar/SearchBar";
import Flags from "../../components/Flags/Flags";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [charactersFiltered, setCharactersFiltered] = useState([]);

  useEffect(() => {
    const getcharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");
      console.log(data);

      setCharacters(data);
      setCharactersFiltered(data);
    };

    getcharacters();
  }, []);

  const searchCharacters = (name) => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );
    setCharactersFiltered(filtered);
  };

  return (
    <>
      <div className="div-characters">
        <div className="div-header">
          <SearchBar setSearch={searchCharacters} />
          <Flags showHomeIcon={true} />
        </div>

        <SimpleBar style={{ height: "68%", width: "95%" }}>
          <Gallery arrayChar={charactersFiltered} />
        </SimpleBar>
        <Menu />
      </div>
    </>
  );
}
