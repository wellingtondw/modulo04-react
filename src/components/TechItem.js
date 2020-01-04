import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech, handleDelete }) => {
  return (
    <li>
      {tech}
      <button onClick={handleDelete}>Remover</button>
    </li>
  );
};

TechItem.defaultProps = {
  tech: "Você não possui nenhuma tecnologia cadastrada"
};

TechItem.propTypes = {
  tech: PropTypes.string,
  handleDelete: PropTypes.func.isRequired
};

export default TechItem;
