import React from "react";
import ImagenSeccion from "../components/Secciones/ImagenSeccion";
import TituloSeccion from "../components/Secciones/TituloSeccion";
import SubtituloSeccion from "../components/Secciones/SubtituloSeccion";
import DescripcionSeccion from "../components/Secciones/DescripcionSeccion";
import Boton from "../components/Boton";
import "../components/Secciones/seccion.css";
const Nosotros = () => {
  const parrafo = (
    <p>
      Hoy en fundamental Digitalizar tu negocio y
      <b>planificar una estrategia publicitaria</b> en las redes sociales, Ya
      que tu cliente potencial pasa gran parte de su dia en estas plataformas.
      La competencia en el negocio inmobiliario es cada vez mayor y se tornó un
      negocio sin sorpresas e invocacion. <b>Flobella</b> Nació para hacer ese
      cambio que los negocios inmobiliarios necesitan y{" "}
      <b>tu negocio puede ser parte de este cambio</b>.
    </p>
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <TituloSeccion titulo="Nosotros" />
          <SubtituloSeccion subtitulo="Suma un aliado estrategico, suma a flobella" />
          <DescripcionSeccion desc={parrafo} />
        </div>
        <div
          style={{ justifyContent: "center", display: "flex" }}
          className="col-md-6"
        >
          <ImagenSeccion img="nosotros" />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
