import React, { useState } from "react";

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

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
        <input type="text" onChange={handleInputChange} value={newTech} />
      </ul>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default TechList;
