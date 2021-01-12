import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "./collapse.css";
const Collpase = (props) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  var valor = 0;
  if (props.valor == true) {
    valor = 13;
  } else {
    valor = 15;
  }
  return (
    <div>
      <div className="divcollapse animate__animated animate__fadeInLeftBig">
        <div className="divBoton hvr-grow">
          <button className="botonCollapse" onClick={toggle}>
            <span className="mas">{">>"}</span> {props.boton}{" "}
            {isOpen ? (
              <span className="mas">-</span>
            ) : (
              <span className="mas">+</span>
            )}
          </button>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <p className="text ">{props.desc}</p>
      </Collapse>
    </div>
  );
};
export default Collpase;
