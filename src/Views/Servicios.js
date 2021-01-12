import React from "react";
import ImagenSeccion from "../components/Secciones/ImagenSeccion";
import TituloSeccion from "../components/Secciones/TituloSeccion";
import SubtituloSeccion from "../components/Secciones/SubtituloSeccion";
import DescripcionSeccion from "../components/Secciones/DescripcionSeccion";
import Card from "../components/Secciones/Card";
import Boton from "../components/Boton";
import "../components/Secciones/seccion.css";
const Servicios = () => {
  const ticksAds = [
    "Capta Leeds anunciandote en google.",
    "Aparece primero en los buscadores.",
    "Campaña de busqueda y display"
  ];
  const ticksFB = [
    "Creamos el contenido para tus redes sociales",
    "Creamos las piezas graficas",
    "Planificamos y publicamos los contenidos"
  ];
  const ticksweb = [
    "Moderna",
    "100% otimizada para celular",
    "Integracion con CRM",
    "Desarollo a medida"
  ];
  const ticksMarketing = [
    "Diseñamos y planificamos campañas",
    "Gran porcentajes de conversion"
  ];
  const parrafo = (
    <p>
      Partiendo de objetivos comerciales y necesidades del negocio, Creamos
      estrategias de marketing digital. Abarcamos todos los canales de
      comunicacion. 
      <b>¡Consigue Mas Leads a travez de la publicidad digital!</b>
    </p>
  );
  return (
    <div style={{ marginTop: "-30px" }} className="container">
      <div className="row">
        <div className="col-md-6">
          <TituloSeccion titulo="Nuestros Servicios" />
          <SubtituloSeccion subtitulo="Nos adaptamos a lo que el negocio necesite" />
          <DescripcionSeccion desc={parrafo} />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="col-md-6"
        >
          {" "}
          <ImagenSeccion img="servicios" />
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="cardPublicidad hvr-grow col-12 col-sm-6 col-md-6 col-lg-3">
              <Card ticks={ticksAds} image="icono" sub="Google Ads" />
            </div>
            <div className="cardPublicidad hvr-grow col-12 col-sm-6 col-md-6 col-lg-3">
              <Card
                ticks={ticksFB}
                sub="Gestion de Redes Sociales"
                image="fb"
                image2="ig"
              />
            </div>
            <div className="cardPublicidad hvr-grow col-12 col-sm-6 col-md-6 col-lg-3">
              <Card ticks={ticksweb} sub="Diseño Web" image="web" />
            </div>
            <div className="cardPublicidad hvr-grow col-12 col-sm-6 col-md-6 col-lg-3">
              <Card
                ticks={ticksMarketing}
                sub="Email Marketing"
                image="email"
              />
            </div>
          </div>
        </div>
      </div>
      <Boton background="var(--amarillo)" color="var(--azul)">
        Quiero Saber Mas
      </Boton>
    </div>
  );
};
export default Servicios;
