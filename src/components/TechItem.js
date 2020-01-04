import React from "react";

const TechItem = ({ tech, handleDelete }) => {
  return (
    <li>
      {tech}
      <button onClick={handleDelete}>Remover</button>
    </li>
  );
};

export default TechItem;
