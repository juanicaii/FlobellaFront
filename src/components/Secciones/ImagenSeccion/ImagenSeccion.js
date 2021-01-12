import React from "react";

const ImagenSeccion = props => {
  return (
    <img
      className="imagenSeccion animate__animated animate__fadeInLeftBig"
      src={`/img/${props.img}.png`}
    ></img>
  );
};
export default ImagenSeccion;
