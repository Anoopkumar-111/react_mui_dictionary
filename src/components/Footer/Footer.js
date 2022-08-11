import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.linkedin.com/in/anoopkumar-shukla-48167818b/" target="__blank">
          Anoopkumar Shukla
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://github.com/Anoopkumar-111" target="__blank">
          <i className="fab fa-brands fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/anoopkumar-shukla-48167818b/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        
      </div>
    </div>
  );
};

export default Footer;
