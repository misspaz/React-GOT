import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../pages/TestPages/HouseDetails.css";
// import Menu from "../../components/Menu/Menu";
import Flags from "../../components/Flags/Flags";
import { useTranslation } from "react-i18next";

export default function HousesDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [houses, setHouses] = useState([]);
  const [houseFound, setHouseFound] = useState({});

  const getHousesId = (id) => {
    const houseId = houses.find((house) => house.id === id);
    if (houseId) {
      setHouseFound(houseId);
    } else {
      setHouseFound({});
    }
  };

  const getHouseDetails = async () => {
    const { data } = await axios.get(`http://localhost:3000/houses`);

    setHouses(data);
    // console.log(data);
  };
  useEffect(() => {
    if (houses.length && id) {
      getHousesId(parseInt(id));
    }
  }, [houses, id]);

  useEffect(() => {
    getHouseDetails();
  }, []);
  console.log(houseFound);
  return (
    <div className="houses-div">
   
   
      <Flags showHomeIcon={true} showArrowIcon={true} />
    

      {houseFound.id && (
        <div>
          <div className="div-img-name">
            <img
              className="house-image"
              src={`http://localhost:3000/${houseFound.image}`}
              alt={houseFound.name}
            />
            <h1>{houseFound.name}</h1>
          </div>

<div className="details-info">
          <div className="div-info">
            <h2>{t("alliances")}</h2>
            <p>{houseFound.alliances}</p>
          </div>

          <div className="div-info">
            <h2>{t("foundation")}</h2>
            <p>{houseFound.foundation}</p>
          </div>

          <div className="div-info">
            <h2>{t("region")}</h2>
            <p>{houseFound.region}</p>
          </div>

          <div className="div-info">
            <h2>{t("religions")}</h2>
            <p>{houseFound.religions}</p>
          </div>

          <div className="div-info">
            <h2>{t("settlement")}</h2>
            <p>{houseFound.settlement}</p>
          </div>
          </div>
        </div>
      )}
      {/* <Menu /> */}
    </div>
  );
}
