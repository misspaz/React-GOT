import axios from "axios";
import "../CharactersDetails/CharactersDetails.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import "../../pages/TestPages/HouseDetails.css";
// import Menu from "../../components/Menu/Menu";
import Flags from "../../components/Flags/Flags";
import Menu from "../../components/Menu/Menu";
import SimpleBar from "simplebar-react";
// import CharacterHouses from "../../components/Character/CharacterHouses";
// import { useTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

export default function TestCharDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [characterFound, setCharacterFound] = useState({});
  const [housesImages, setHousesImages] = useState([]);

  const getCharacterId = (id) => {
    const charId = characters.find((character) => character.id === id);
    if (charId) {
      setCharacterFound(charId);
    } else {
      setCharacterFound({});
    }
  };

  const getCharacterDetails = async () => {
    const { data } = await axios.get(`http://localhost:3000/characters`);
    setCharacters(data);
    console.log(data);
  };

  useEffect(() => {
    if (characters.length && id) {
      getCharacterId(parseInt(id));
    }
  }, [characters, id]);

  useEffect(() => {
    getCharacterDetails();
  }, []);

  useEffect(() => {
    const getHouses = async () => {
      const { data } = await axios.get("http://localhost:3000/houses");
      console.log(data);

      setHousesImages(data);
    };

    getHouses();
  }, []);

  return (
    <>
      <div className="all-details">
        <div className="houses-div">
          <Flags showHomeIcon={true} showArrowIcon={false} />

          <div className="results">
            {characterFound.id && (
              <div key={characterFound.id}>
                <div className="vox">
                  <img
                    className="imagen"
                    src={`http://localhost:3000/${characterFound.image}`}
                    alt={`Imagen de ${characterFound.name}`}
                  />
                  <h1>{characterFound.name}</h1>
                </div>

                <div className="container">
                  <div className="vox">
                    <h2>{t("house")}</h2>

                    {housesImages.map((houseImage) => {
                      if (houseImage.name === characterFound.house) {
                        return (
                          <div className="div-house-char" key={houseImage.name}>
                            <img
                              className="house-img-char"
                              src={`http://localhost:3000/${houseImage.image}`}
                              alt={`Casa de ${characterFound.house}`}
                            />
                            <h3>{characterFound.house}</h3>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                  <div className="vox">
                    <h2>{t("alliances")}</h2>
                    <SimpleBar style={{ maxHeight: "100px" }}>
                      <ul>
                        {characterFound.alliances.map((alliance, index) => (
                          <li key={index}>{alliance}</li>
                        ))}
                      </ul>
                    </SimpleBar>
                  </div>
                  <div className="vox">
                    <h2>{t("apariences")}</h2>
                    <SimpleBar style={{ maxHeight: "100px" }}>
                      <ul>
                        {characterFound.episodes.map((episode, index) => (
                          <li key={index}>{episode}</li>
                        ))}
                      </ul>
                    </SimpleBar>
                  </div>
                  <div className="vox">
                    <h2>{t("father")}</h2>
                    <SimpleBar style={{ maxHeight: "100px" }}>
                      <ul>
                        {characterFound.parents.map((parent, index) => (
                          <li key={index}>{parent}</li>
                        ))}
                      </ul>
                    </SimpleBar>
                  </div>
                  <div className="vox">
                    <h2>{t("descendants")}</h2>
                    <SimpleBar style={{ maxHeight: "100px" }}>
                      <ul>
                        {characterFound.siblings.map((sibling, index) => (
                          <li key={index}>{sibling}</li>
                        ))}
                      </ul>
                    </SimpleBar>
                  </div>
                  <div className="vox">
                    <h2>{t("titles")}</h2>
                    <SimpleBar style={{ maxHeight: "100px" }}>
                      <ul>
                        {characterFound.titles.map((title, index) => (
                          <li key={index}>{title}</li>
                        ))}
                      </ul>
                    </SimpleBar>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
}
