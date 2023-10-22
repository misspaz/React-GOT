import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";
import axios from "axios";
import "./CharactersDetails.css";
import { useTranslation } from "react-i18next";

export default function CharacterDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [houses, setHouses] = useState({});

  useEffect(() => {
    const getCharacterDetails = async () => {
      try {
        const response = await axios(`http://localhost:3000/characters`);
        if (response.status === 200) {
          const data = response.data;
          setCharacter(data[0]);
        } else {
          console.error("Error al obtener los detalles del personaje");
        }
      } catch (error) {
        console.error("Error");
      }
    };

    getCharacterDetails();
  }, [id]);

  const addHousesImages = async () => {
    try {
      const response = await axios(`http://localhost:3000/houses`);
      if (response.status === 200) {
        const housesData = response.data.reduce((housesObj, house) => {
          housesObj[house.id] = house.image;
          return housesObj;
        }, {});
        setHouses(housesData);
      } else {
        console.error("Error al obtener las imágenes de las casas");
      }
    } catch (error) {
      console.error("Error");
    }
  };

  useEffect(() => {
    addHousesImages();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className="var-header">
        <button className="back" onClick={goBack}>
          <img
            className="flecha"
            src="https://cdn.pixabay.com/photo/2012/04/05/01/56/arrow-25834_1280.png"
            alt="logo flecha"
          />
          Volver
        </button>
        <div className="logos">
          <img
            onClick={goBack}
            className="logo-var"
            src="https://png.pngtree.com/png-vector/20190420/ourlarge/pngtree-home-vector-icon-png-image_963304.jpg"
            alt="logo home"
          />
          <img
            className="logo-var"
            src="https://cdn-icons-png.flaticon.com/512/197/197593.png"
            alt="logo ESP"
          />
          <img
            className="logo-var"
            src="https://cdn.freebiesupply.com/logos/large/2x/united-kingdom-logo-png-transparent.png"
            alt="logo UK"
          />
        </div>
      </div>

      <div className="results">
        <div key={character.id}>
          <div className="vox">
            <img
              className="imagen"
              src={`http://localhost:3000/${character.image}`}
              alt={`Imagen de ${character.name}`}
            />
            <h1>{character.name}</h1>
          </div>

          <div className="container">
            <div className="vox">
              <h2>{t("house")}</h2>
              <SimpleBar style={{ maxHeight: "100px" }}>
                <img
                  src={houses[character.image]}
                  alt={`Casa de ${character.house}`}
                />
              </SimpleBar>
            </div>
            <div className="vox">
              <h2>{t("alliances")}</h2>
              <SimpleBar style={{ maxHeight: "100px" }}>
                <ul>
                  {character.alliances.map((alliance, index) => (
                    <li key={index}>{alliance}</li>
                  ))}
                </ul>
              </SimpleBar>
            </div>
            <div className="vox">
              <h2>{t("apariences")}</h2>
              <SimpleBar style={{ maxHeight: "100px" }}>
                <ul>
                  {character.episodes.map((episode, index) => (
                    <li key={index}>{episode}</li>
                  ))}
                </ul>
              </SimpleBar>
            </div>
            <div className="vox">
              <h2>{t("father")}</h2>
              <SimpleBar style={{ maxHeight: "100px" }}>
                <ul>
                  {character.parents.map((parent, index) => (
                    <li key={index}>{parent}</li>
                  ))}
                </ul>
              </SimpleBar>
            </div>
            <div className="vox">
              <h2>{t("descendants")}</h2>
              <SimpleBar style={{ maxHeight: "100px" }}>
                <ul>
                  {character.siblings.map((sibling, index) => (
                    <li key={index}>{sibling}</li>
                  ))}
                </ul>
              </SimpleBar>
            </div>
            <div className="vox">
              <h2>{t("titles")}</h2>
              <SimpleBar style={{ maxHeight: "100px" }}>
                <ul>
                  {character.titles.map((title, index) => (
                    <li key={index}>{title}</li>
                  ))}
                </ul>
              </SimpleBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
