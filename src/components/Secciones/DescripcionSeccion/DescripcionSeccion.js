import React from "react";

const DescripcionSeccion = props => {
  return (
    <div
      style={{ width: "90%" }}
      className="descripcionSeccion animate__animated animate__fadeInLeft"
    >
      {props.desc}
      {props.parrafo1}
    </div>
  );
};
export default DescripcionSeccion;
