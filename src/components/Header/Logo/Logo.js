import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
const Logo = (props) => {
  var size;
  if (props.width) {
    size = props.width;
  } else {
    size = "100%";
  }
  return (
    <BrowserRouter>
      <Link to="/">
        <img
          className="hvr-grow img"
          width={size}
          src={`/img/${props.img}.png`}
        ></img>
      </Link>
    </BrowserRouter>
  );
};
export default Logo;
