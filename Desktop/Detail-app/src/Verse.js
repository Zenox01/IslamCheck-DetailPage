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

function Fatiha() {
  return (
    <UncontrolledDropdown>
      <DropdownToggle nav caret style={Style}>
     Verse
      </DropdownToggle>
      <DropdownMenu >
        <DropdownItem className="stripe">Al-Fatihah 1</DropdownItem>
        <DropdownItem className="stripe">Al-Fatihah 2</DropdownItem>
        <DropdownItem className="stripe">Al-Fatihah 3</DropdownItem>
        <DropdownItem className="stripe">Al-Fatihah 4</DropdownItem>
        <DropdownItem className="stripe">Al-Fatihah 5</DropdownItem>
        <DropdownItem className="stripe">Al-Fatihah 6</DropdownItem>
        <DropdownItem className="stripe">Al-Fatihah 7</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
export default Fatiha;
