import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const CardPubli = props => {
  var size;
  var font;
  if (props.image2) {
    size = "22%";
    font = "8px";
  } else {
    size = "25%";
  }
  return (
    <div className="cardf">
      <Card className="card3                                               animate__animated animate__fadeInLeftBig ">
        <div style={{ margin: "10px" }}>
          <CardImg
            style={{ width: size, margin: "20px auto", padding: 4 }}
            src={`/img/${props.image}.png`}
          ></CardImg>

          {props.image2 ? (
            <CardImg
              style={{ width: size, margin: "0 auto", padding: 4 }}
              src={`/img/${props.image2}.png`}
            ></CardImg>
          ) : (
            ""
          )}
        </div>

        <p className="subtitulo" style={{ marginTop: font }}>
          {props.sub}
        </p>

        <CardBody className="text-left justify-content-center">
          {props.ticks.map(tick => (
            <div className="col-12 ticks">
              <img src="/img/ticka.png" width="15%" />
              {tick}
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};
export default CardPubli;
