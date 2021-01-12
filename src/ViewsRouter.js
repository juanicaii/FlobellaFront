import React from "react";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import Inicio from "./Views/Inicio";
import Servicios from "./Views/Servicios";
import Nosotros from "./Views/Nosotros";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import Wpp from "./components/Whatsapp/Wpp";
const ViewsRouter = () => {
  return (
    <div>
      {/* Inicio */}

      <div id="inicio" className="headerBackground">
        <Header />

        <div>
          <HeaderMobile />
        </div>
        <Element name="inicio">
          <Inicio />
        </Element>
      </div>

      {/* Servicios */}
      <div id="servicios">
        <Element name="servicios">
          <Servicios />
        </Element>
      </div>
      {/* Nosotros */}
      <div>
        <div style={{ marginTop: 20 }}></div>
        <Element name="nosotros">
          {" "}
          <Nosotros />
        </Element>
      </div>
      <Wpp />
      <Footer />
    </div>
  );
};

export default ViewsRouter;
