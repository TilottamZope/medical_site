import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import logo from "../../Assets/Images/Logo.png";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import { Button } from "@mui/material";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBox from "./SearchBox/SearchBox";
import Navbar from "./NavBar/Navbar";
import { MyContext } from "../../App";

const Header = () => {

  const context = useContext(MyContext);

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

                {
                  context.countryList.length!=0 && <CountryDropdown />
                }
                

                {/*-----------------------Search bar start here--------------------------*/}
                <div className="headerSearch ms-3 me-3">
                  <SearchBox />
                </div>
                {/*-----------------------Search bar end here----------------------------*/}

                {/*----------------------- User start here--------------------------*/}
                <div className="d-flex align-items-center part3">
                  <Button className="circle">
                    <FiUser />
                  </Button>
                  <div className="cartTab d-flex align-items-center">
                    <span>Rs.100</span>
                    <div className="position-relative">
                      <Button className="circle">
                        <MdOutlineShoppingCart />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
                {/*-----------------------User end here----------------------------*/}
              </div>
            </div>
          </div>
        </header>

        {/* -------------------------Navbar---------------- */}
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
