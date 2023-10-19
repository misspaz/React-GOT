import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";


export default function HousesPage() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const gethouses = async () => {
      const { data } = await axios("http://localhost:3000/houses");
      console.log(data);

      setHouses(data);
    };

    gethouses();
  }, []);

  return (
    <div>
    <Gallery arrayChar={houses}/>
     
    </div>
  );
}