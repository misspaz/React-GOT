import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "../CharactersPage/CharactersPage.css";
import Menu from "../../components/Menu/Menu";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getcharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");
      console.log(data);

      setCharacters(data);
    };

    getcharacters();
  }, []);

  return (
    <div className="div-characters">
      <SimpleBar style={{ height: "68%" }}>
        <Gallery arrayChar={characters} />
      </SimpleBar>
      <Menu />
    </div>
  );
}
