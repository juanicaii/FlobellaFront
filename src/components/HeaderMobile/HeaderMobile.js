import React, { useState, useEffect } from "react";
import Logo from "../Header/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Boton from "../Boton/Boton";
import Etiqueta from "../Header/Etiqueta";
import { Dropdown, Card, Button, Col } from "reactstrap";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Collapse } from "reactstrap";
const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const abrirNav = () => {
    setIsOpen(!isOpen);
  };
  const onScroll = () => {
    window.addEventListener("scroll", () => {
      var header = document.getElementById("headerMobile");

      if (window.scrollY > header.offsetTop) {
        document.getElementById("root").style.paddingTop =
          header.offsetHeight + "px";
        header.classList.add("stiky");
      } else {
        document.getElementById("root").style.paddingTop = 0;
        header.classList.remove("stiky");
      }
    });
  };

  useEffect(() => {
    onScroll();
  }, []);

  return (
    <div id="headerMobile">
      <div className="container-fluid headerMobile">
        <div className="row text-center justify-content-between align-items-start">
          <div style={{ marginTop: 10 }} className="col-5">
            <Logo w img="logo" />
          </div>

          <div style={{ marginTop: 4 }} className="col-5 buton hvr-grow">
            <Boton color="var(--verde)" background="var(--azul)">
              Contacto
            </Boton>
          </div>
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className="hvr-grow"
            onClick={abrirNav}
            icon={faBars}
          />
          <Collapse isOpen={isOpen}>
            <div className="nav">
              <Etiqueta />
            </div>
          </Collapse>
        </div>
      </div>
      <br />
    </div>
  );
};
export default HeaderMobile;
