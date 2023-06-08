import React from "react";
import "./Navinshorts.css";
import Hamburgerdrawer from "./Hamburgerdrawer.js";

const Navinshorts = ({ setcategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <Hamburgerdrawer setcategory={setcategory} />
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="inshorts-logo"
        style={{ cursor: "pointer" }}
        height="80%"
      />
    </div>
  );
};

export default Navinshorts;
