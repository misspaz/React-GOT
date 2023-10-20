import { useState } from "react";


export default function AddCharacterForm({ onSubmit }) {
  const [text, setText] = useState({ name: "", image: "" });

  return (
    <div>
      <h2>Add Character's Name</h2>
      <input
        onChange={(ev) => setText({ ...text, name: ev.target.value })}
        type="text"
      />
      <h2>Add character's image</h2>
      <input
        onChange={(ev) => setText({ ...text, name: ev.target.value })}
        type="text"
      />
      <button onClick={() => onSubmit(text)}>Añadir personaje</button>
    </div>
  );
}