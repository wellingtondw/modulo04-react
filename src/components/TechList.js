import React, { useState } from "react";
import TechItem from "./TechItem";
const TechList = () => {
  const [techs, setTechs] = useState(["Node.js", "ReactJS", "React Native"]);
  const [newTech, setNewTech] = useState("");

  const handleInputChange = event => {
    setNewTech(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    setTechs([...techs, newTech]);
    setNewTech("");
  };

  const handleDelete = index => {
    setTechs(techs.filter((tech, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {techs.map((tech, index) => (
          <TechItem
            key={index}
            tech={tech}
            handleDelete={() => handleDelete(index)}
          />
        ))}
        <input type="text" onChange={handleInputChange} value={newTech} />
      </ul>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default TechList;
