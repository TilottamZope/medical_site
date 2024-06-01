import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import { Button } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
const Header = () => {
  return (
    <div>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Now, Our store is online. Get the medicine <b>HOME DELIVERY</b>
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="Website Logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />

                {/*-----------------------Search bar start here--------------------------*/}
                <div className="headerSearch ms-3 me-3">
                  <input type="text" placeholder="Search The Products Here" />
                  <Button>
                    <IoMdSearch />
                  </Button>
                </div>
                {/*-----------------------Search bar end here----------------------------*/}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
