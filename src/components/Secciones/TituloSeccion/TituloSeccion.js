import React from "react";
import "../seccion.css";
const TituloSeccion = (props) => {
  return (
    <h1
      className="tituloSeccion animate__animated animate__backInLeft
  "
    >
      {props.titulo}
    </h1>
  );
};
export default TituloSeccion;
