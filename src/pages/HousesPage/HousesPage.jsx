

import { useEffect, useState } from "react";
import axios from "axios";
import GalleryHouses from "../../components/Gallery/GalleryHouses";
import "../HousesPage/HousesPage.css"
import SimpleBar from "simplebar-react";
import "simplebar-react"
import Menu from "../../components/Menu/Menu";
import SearchBar from "../../components/SearchBar/SearchBar";
import Flags from "../../components/Flags/Flags";

export default function HousesPage() {
  const [houses, setHouses] = useState([]);
  const [HousesFiltered, setHousesFiltered] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const { data } = await axios.get("http://localhost:3000/houses");
      console.log(data);

      setHouses(data);
      setHousesFiltered(data);
    
    };

    getHouses();
  }, []);

  const searchHouses = (name) => {
    const filtered = houses.filter((house) =>
      house.name.toLowerCase().includes(name.toLowerCase())
    );
    setHousesFiltered(filtered);
  };


  return (
    <>
   <div className="div-houses">
        <div className="div-header-houses">
          <SearchBar 
          setSearch={searchHouses}
          className="white-background" 
          />
          <Flags />
        </div>

      <SimpleBar style={{ height: "68%", width: "95%" }}>
        <GalleryHouses arrayH={HousesFiltered} />
      </SimpleBar>
      <Menu />
    </div>
  </>


    // <div>
    //   <input 
    //     type="text"
    //     placeholder="Search Houses"
    //     value={searchHouses}
    //     onChange={(e) => setSearchHouses(e.target.value)}
        
    //   />
    //   <GalleryHouses arrayH={filteredHouses} />
    // </div>
  );
}







