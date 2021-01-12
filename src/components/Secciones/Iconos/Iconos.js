import React from "react";

const Iconos = (props) => {
  return (
    <div
      className="animate__animated animate__fadeInLeftBig"
      style={{ marginTop: 30 }}
    >
      <div>
        <img width="130px" src={`img/icon/${props.icon}.png`}></img>
      </div>
      <div className="text-center">
        <p className="textIcon">{props.text}</p>
      </div>
    </div>
  );
};
export default Iconos;
