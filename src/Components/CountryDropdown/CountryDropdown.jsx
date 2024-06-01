import React from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
const CountryDropdown = () => {
  return (
    <div>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">India</span>
        </div>
        <span className="ms-5"><FaAngleDown/></span>
      </Button>
    </div>
  );
};

export default CountryDropdown;
