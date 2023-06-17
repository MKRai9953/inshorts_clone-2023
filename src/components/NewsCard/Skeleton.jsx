import React from "react";
import "./NewsCard.css";

const Skeleton = () => {
  return (
    <div className="newsCard">
      <img className="newImage" />
      <div className="newText">
        <div>
          <span className="title"></span>
          <br />
          <span className="author">
            <a target="blank">
              <strong> </strong>
            </a>
            <span className="muted">by</span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description"></div>

          <span className="readmore">
            <a target="blank">
              <strong> </strong>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
