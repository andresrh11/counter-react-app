import "../style.css";
import PropTypes from "prop-types";
function newValue(title, subtitle) {
  const object = {
    c1: title,
    c2: subtitle,
  };
  return (
    <>
      <h1>{object.c1}</h1>
      <h2>{object.c2}</h2>
    </>
  );
}

export const FirstApp = ({ title, subtitle }) => {
  const newMessage = "andres";

  return (
    <>
      <h1>Andres</h1>
      <h2>{newMessage}</h2>
      <div>{newValue(title, subtitle)}</div>
    </>
  );
};

// Especificaciones para que no se envie otro valor distinto al tipo de dato que se espera recibir
FirstApp.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

// Especificacion para establecer valores por defecto
FirstApp.defaultProps = {
  title: "Andrés",
  subtitle: "Romero",
};
