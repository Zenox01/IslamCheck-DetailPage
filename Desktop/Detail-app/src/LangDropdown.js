import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./Dropdown.css";

const Style = {
  textDecoration: "none",
  fontSize: "14px",
  color: "#56c0d0"
};

function Drop() {
  return (
    <UncontrolledDropdown>
      <DropdownToggle nav caret style={Style}>
       Languages
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem className="stripe">English</DropdownItem>
        <DropdownItem className="stripe">German</DropdownItem>
        <DropdownItem className="stripe">Indonesian</DropdownItem>
        <DropdownItem className="stripe">Arabic</DropdownItem>
        <DropdownItem className="stripe">Turkish</DropdownItem>
        <DropdownItem className="stripe">French</DropdownItem>
        <DropdownItem className="stripe">Urdu</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
export default Drop;
