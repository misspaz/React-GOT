import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";


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
    <div>
    <Gallery arrayChar={characters}/>
     
    </div>
  );
}