// import axios from "axios";
// import { useParams, useEffect, useState } from "react-router-dom";

// export default function CharactersDetails() {
//   const { id } = useParams();
//   const [character, setCharacter] = useState({});
//   const getCharacters = async() => {
//     const { data } = await axios(`http://localhost:3000/characters/${id}`);
//     setCharacter(data);
//   };

//   useEffect(() => {
//     getCharacters();
//   }, []);


//   return <div>
//   {character.name}
//   </div>;
// }
