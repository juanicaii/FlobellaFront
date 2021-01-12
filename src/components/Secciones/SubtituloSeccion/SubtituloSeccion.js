import React from "react";
import "./SubtituloSeccion";
const SubtituloSeccion = props => {
  return (
    <h4 className="subtituloSeccion animate__animated animate__fadeInLeftBig">
      {props.subtitulo}
    </h4>
  );
};
export default SubtituloSeccion;
