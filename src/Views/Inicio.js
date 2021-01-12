import React from "react";
import ImagenSeccion from "../components/Secciones/ImagenSeccion";
import TituloSeccion from "../components/Secciones/TituloSeccion";
import SubtituloSeccion from "../components/Secciones/SubtituloSeccion";
import DescripcionSeccion from "../components/Secciones/DescripcionSeccion";
import Boton from "../components/Boton";
import "../components/Secciones/seccion.css";
const Inicio = () => {
  const parrafo = (
    <p>
      Todos los negocios inmobiliarios, realizan las mismas acciones y trabajan
      de la misma manera. <b>Te proponemos algo diferente</b>.
    </p>
  );

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6 "
          style={{ justifyContent: "center", display: "flex" }}
        >
          <ImagenSeccion img="inicio" />
        </div>
        <div className="col-md-6">
          <SubtituloSeccion subtitulo="Transforma tu Negocio, Se diferente" />
          <TituloSeccion titulo="Marketing digital para bienes Raices" />
          <DescripcionSeccion desc={parrafo} />
          <Boton background="var(--amarillo)" color="var(--azul)">
            Quiero Saber Mas
          </Boton>
        </div>
      </div>
    </div>
  );
};
export default Inicio;
