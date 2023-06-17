import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a
          href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"
          target="blank"
        ></a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/" target="blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.netlify.com/">
          <i className="fa-solid fa-link"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
