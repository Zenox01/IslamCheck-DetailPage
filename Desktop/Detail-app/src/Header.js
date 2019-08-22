import React from "react";
import SideBar from "./menu.js";
import "./menu.css";
import logo from "./img/logo.png";
import Languages from "./LangDropdown";
import Fatiha from "./Fatiha";
import Verse from "./Verse";
import Search from "./Search";
import Settings from "./Settings";

const Head = {
  height: "70px"
};
const imgStyle = {
  padding: "15px",
  marginLeft: "60px",
  height: "65px",
  width: "156px"
};
const SettingStyle = {
  position: "absolute",
  right: "20px",
  top: "15px",
  bottom: "20px",
  fontSize: "14px",
  color:"#56c0d0"

};
const LangStyle = {
  position: "absolute",
  right: "120px",
  top: "15px",
  bottom: "20px",
  fontSize: "14px"
};
const FatihaStyle = {
  position: "absolute",
  left: "210px",
  top: "15px",
  bottom: "20px",
  fontSize: "14px",  
  };
  const VerseStyle = {
    position: "absolute",
    left: "320px",
    top: "15px",
    bottom: "20px",
    fontSize: "14px",  
    };
    const SearchStyle = {
      position: "absolute",
      left: "420px",
      top: "15px",
      bottom: "20px",
      fontSize: "14px",  
      };
    
function Header(){
return (
<header id="hd" className=" header indexheader" style={Head}>
        <div>
          <SideBar /> 
          <img src={logo} alt="logo" style={imgStyle} />
         <span style={FatihaStyle}> <Fatiha/></span>
         <span style={VerseStyle}>
            <Verse />
          </span>
          <span style={SearchStyle}>
            <Search />
          </span>

         <span style={LangStyle}>
            <Languages />
           
          </span>
          <span style={SettingStyle}>
           <Settings />
           
          </span>
           
           

        </div>
      
      </header>
);
}
export default Header;