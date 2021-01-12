import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Etiqueta from "./Etiqueta";
import Boton from "../Boton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const onScroll = () => {
  window.addEventListener("scroll", () => {
    var header = document.getElementById("headerDesktop");

    if (window.scrollY > header.offsetTop) {
      document.querySelector(
        ".headerBackground"
      ).style.paddingTop = `${header.offsetHeight}px`;

      header.classList.add("stiky");
    } else {
      document.querySelector(".headerBackground").style.paddingTop = 0;
      header.classList.remove("stiky");
    }
  });
};
const Header = () => {
  useEffect(() => {
    onScroll();
  }, []);

  return (
    <div id="headerDesktop">
      <div className="header container animate__animated animate__fadeInLeftBig">
        <div className="row align-items-center">
          {/* LOGO */}
          <div className="col-md-3 col-sm-2">
            <Logo img="logo" />
          </div>
          {/* NAV */}
          <div
            style={{ marginTop: 30 }}
            className="col-sm-8 col-md-6 text-center "
          >
            <Etiqueta />
          </div>
          <div className="col-sm-2 col-md-3 hvr-grow">
            <Boton info="general" color="var(--verde)" background="var(--azul)">
              Charlemos
            </Boton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
