import React, { useState } from "react";
import "./boton.css";
import Contacto from "../Secciones/Contacto";

const Boton = props => {
  const [open, setOpen] = useState(false);
  const abrirModal = () => {
    setOpen(!open);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{ backgroundColor: props.background, color: props.color }}
        onClick={abrirModal}
        className="boton  animate__animated animate__fadeInLeftBig"
      >
        {props.children}
      </button>
      <Contacto open={open} close={abrirModal} info={props.info} />
    </div>
  );
};
export default Boton;
