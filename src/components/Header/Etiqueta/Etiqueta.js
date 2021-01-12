import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./etiqueta.css";
const items = [
  {
    url: "inicio",
    name: "Inicio"
  },
  {
    url: "servicios",
    name: "Servicios"
  },
  {
    url: "nosotros",
    name: "Nosotros"
  }
];

const Etiqueta = () => {
  return (
    <Router>
      {items.map(item => {
        return (
          <Link
            style={{ color: "white" }}
            className="link hvr-grow"
            smooth={true}
            offset={-200}
            to={item.url}
          >
            {" "}
            {item.name}
          </Link>
        );
      })}
    </Router>
  );
};
export default Etiqueta;
