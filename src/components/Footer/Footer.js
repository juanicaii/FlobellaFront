import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import Logo from "../Header/Logo";
const Footer = () => {
  return (
    <div className="footer container-fluid animate__animated animate__fadeInLeftBig">
      <div className="row">
        <div className="col-md-4 logoFooter text-center">
          <Logo width="70%" img="Flobella" />
          {/* <div className="icon">
            <FontAwesomeIcon
              style={{ margin: "0px 5px" }}
              color="#fff"
              size="lg"
              className="hvr-grow iconFooter"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="hvr-grow iconFooter"
              size="lg"
              color="#fff"
              icon={faLinkedinIn}
            />
          </div> */}
        </div>

        <div className="col-md-6">
          <div className="frase">
            <h1>"Suma un Aliado Estratégico,</h1>
            <h1>Suma a Flobella"</h1>
            <p>Hello@flobellamedia.site</p>
          </div>
        </div>
      </div>
      <div className="copy">
        <span className="logoWeb">JS</span>
        <FontAwesomeIcon icon={faCopyright} size="sm" /> Todos los derechos
        reservados{" "}
      </div>
    </div>
  );
};
export default Footer;
