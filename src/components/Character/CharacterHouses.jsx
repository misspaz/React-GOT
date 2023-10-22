import React from "react";

export default function CharacterHouses({ character }) {
    return (
        <div className="characterH-div">
            <img
                className="characterH-img"
                src={`http://localhost:3000/${character.image}`}
                alt="Images"
            />

            <div> <h1 className="characterH-name">{character.name}</h1></div>
        </div>
    );
}
