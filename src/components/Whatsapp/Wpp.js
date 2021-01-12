import React from "react";
import "./wpp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
class Wpp extends React.Component {
  render() {
    return (
      <a
        href="https://api.whatsapp.com/send?phone=5491169627665&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20."
        className="float"
        target="_blank"
      >
        <FontAwesomeIcon
          style={{ marginTop: 10 }}
          icon={faWhatsapp}
          size="lg"
        />
      </a>
    );
  }
}
export default Wpp;
