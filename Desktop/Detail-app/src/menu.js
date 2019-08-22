import React from "react";
import { slide as Menu } from "react-burger-menu";
import logo from "./img/logo.png";
import "./menu.css";
const menuStyle = {
  textDecoration: "none",
  fontSize: "16px",
  paddingLeft:"20px",
  
};
const DevStyle = {
  textDecoration: "none",
  fontSize: "16px",
  paddingLeft:"13px",
  
};
const marg = {
  marginTop: "2vw",
  textDecoration: "none",
  fontSize: "16px",
  paddingLeft:"20px"
  
};

export default props => {
  return (
    <Menu {...props}>
      <img src={logo} alt="Islam Check" />
      <a href="#" className="Banner" style={marg}>
        <i className="fas fa-home" /> &nbsp;&nbsp;&nbsp;Islam
      </a>
      <div className="dropdown-divider" />

      <a href="" className="Banner" style={menuStyle}>
        <i className="fas fa-question-circle" />
        &nbsp;&nbsp;&nbsp; Help &amp; Feedback
      </a>

      <a href="" className="Banner" style={menuStyle}>
        <i className="fas fa-mobile-alt" /> &nbsp;&nbsp;&nbsp;&nbsp;Mobile Apps
      </a>

      <a href="" className="Banner" style={menuStyle}>
        <i className="fas fa-dollar-sign" />
        &nbsp;&nbsp;&nbsp; &nbsp;Contribute
      </a>
      <a href="" className="Banner" style={DevStyle}>
        <i className="fas fa-laptop" />
        &nbsp;&nbsp; &nbsp;Developers
      </a>
    </Menu>
  );
};
